// lib/blog-render.ts
// Yazı gövdesini build sırasında HTML'e derler.
//
// Neden özel bir boru hattı? Proje React 18 ile çalışırken Next 16 sunucu
// tarafında React 19 çalıştırıyor; bu yüzden next-mdx-remote yazıyı sunucuda
// render edemiyor (hizmet sayfalarında ssr:false ile bu sorun aşılmış).
// Blogda içeriğin HTML çıktısında yer alması SEO için şart olduğundan
// markdown'ı doğrudan HTML'e çeviriyor, <Callout> bloklarını ise kendi React
// bileşenimizle sarmalıyoruz.
import { unified } from "unified";
import type { Plugin } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root, Element, Text } from "hast";
import { slugify } from "./slugify";

export type CalloutVariant = "info" | "warning" | "success" | "error";

export type PostBlock =
  | { kind: "html"; html: string }
  | { kind: "callout"; variant: CalloutVariant; html: string };

const CALLOUT_PATTERN =
  /<Callout\s+type=["'](info|warning|success|error)["']\s*>([\s\S]*?)<\/Callout>/g;

/** Başlıklara içindekiler listesiyle eşleşen id verir. */
const rehypeHeadingIds: Plugin<[{ seen: Map<string, number> }], Root> =
  ({ seen }) =>
  (tree) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "h2" && node.tagName !== "h3") return;

      const text = collectText(node);
      const base = slugify(text);
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      node.properties = {
        ...node.properties,
        id: count === 0 ? base : `${base}-${count}`,
      };
    });
  };

function collectText(node: Element): string {
  let text = "";
  visit(node, "text", (child: Text) => {
    text += child.value;
  });
  return text;
}

/** Dış bağlantılar yeni sekmede ve rel korumasıyla açılsın. */
const rehypeExternalLinks: Plugin<[], Root> = () => (tree) => {
  visit(tree, "element", (node: Element) => {
    if (node.tagName !== "a") return;
    const href = String(node.properties?.href ?? "");
    if (href.startsWith("http")) {
      node.properties = {
        ...node.properties,
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
  });
};

async function markdownToHtml(
  markdown: string,
  seen: Map<string, number>,
): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHeadingIds, { seen })
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

/**
 * Markdown gövdesini sırayla HTML ve Callout bloklarına ayırır.
 * Başlık id sayacı bloklar arasında paylaşılır; böylece yinelenen başlıklar
 * içindekiler listesindeki id'lerle aynı şekilde numaralanır.
 */
export async function renderPostBody(content: string): Promise<PostBlock[]> {
  const blocks: PostBlock[] = [];
  const seen = new Map<string, number>();

  let lastIndex = 0;
  const matches = [...content.matchAll(CALLOUT_PATTERN)];

  for (const match of matches) {
    const [full, variant, inner] = match;
    const start = match.index ?? 0;

    const before = content.slice(lastIndex, start).trim();
    if (before) {
      blocks.push({ kind: "html", html: await markdownToHtml(before, seen) });
    }

    blocks.push({
      kind: "callout",
      variant: variant as CalloutVariant,
      html: await markdownToHtml(dedent(inner), seen),
    });

    lastIndex = start + full.length;
  }

  const rest = content.slice(lastIndex).trim();
  if (rest) {
    blocks.push({ kind: "html", html: await markdownToHtml(rest, seen) });
  }

  return blocks;
}

function dedent(text: string): string {
  return text
    .split("\n")
    .map((line) => line.replace(/^ {1,3}(?=\S)/, ""))
    .join("\n")
    .trim();
}
