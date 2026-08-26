import Callout from "@/components/mdx/Callout";
import type { PostBlock } from "@/lib/blog-render";

interface BlogArticleProps {
  blocks: PostBlock[];
}

/**
 * Yazı gövdesi: build sırasında HTML'e derlenmiş bloklar sunucuda basılır.
 * Böylece metin ve başlık id'leri kaynak kodda yer alır (SEO + içindekiler).
 */
export default function BlogArticle({ blocks }: BlogArticleProps) {
  return (
    <div className="blog-article">
      {blocks.map((block, index) =>
        block.kind === "html" ? (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        ) : (
          <Callout key={index} type={block.variant}>
            <div
              className="callout-body"
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          </Callout>
        ),
      )}
    </div>
  );
}
