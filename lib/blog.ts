// lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { slugify } from "./slugify";
import type {
  BlogCategory,
  BlogHeading,
  BlogPost,
  BlogPostMeta,
} from "./blog-utils";

export type { BlogCategory, BlogHeading, BlogPost, BlogPostMeta };
export { formatBlogDate } from "./blog-utils";

const blogDirectory = path.join(process.cwd(), "content/blog");

const WORDS_PER_MINUTE = 200;

function estimateReadingTime(content: string): number {
  const plain = content
    .replace(/<[^>]+>/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_>[\]()`-]/g, " ");
  const words = plain.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function extractHeadings(content: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const seen = new Map<string, number>();

  for (const line of content.split("\n")) {
    const match = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (!match) continue;

    const level = match[1].length === 2 ? 2 : 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    const base = slugify(text);
    const seenCount = seen.get(base) ?? 0;
    seen.set(base, seenCount + 1);

    headings.push({
      id: seenCount === 0 ? base : `${base}-${seenCount}`,
      text,
      level: level as 2 | 3,
    });
  }

  return headings;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description ?? "",
      excerpt: data.excerpt ?? data.description ?? "",
      category: data.category ?? "Rehber",
      tags: Array.isArray(data.tags) ? data.tags : [],
      date: data.date ?? "",
      updated: data.updated ?? undefined,
      cover: data.cover ?? "/images/services/boyasiz-gocuk-duzeltme.webp",
      coverAlt: data.coverAlt ?? data.title ?? "",
      author: data.author ?? "Vega PDR Ekibi",
      featured: Boolean(data.featured),
      keyTakeaways: Array.isArray(data.keyTakeaways) ? data.keyTakeaways : [],
      readingTime: data.readingTime ?? estimateReadingTime(content),
      content,
      headings: extractHeadings(content),
    };
  } catch (error) {
    console.error(`Blog yazısı okunamadı: ${slug}`, error);
    return null;
  }
}

function toMeta(post: BlogPost): BlogPostMeta {
  const { content: _content, headings: _headings, ...meta } = post;
  void _content;
  void _headings;
  return meta;
}

/** Tüm yazılar, en yeniden en eskiye sıralı (yalnızca meta verisi). */
export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .map(toMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedPosts(limit = 3): BlogPostMeta[] {
  const posts = getAllPosts();
  const featured = posts.filter((post) => post.featured);
  return (featured.length > 0 ? featured : posts).slice(0, limit);
}

export function getCategories(): BlogCategory[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "tr"));
}

/** Aynı kategoriden, yoksa ortak etiketli yazılar. */
export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const posts = getAllPosts();
  const current = posts.find((post) => post.slug === slug);
  if (!current) return posts.slice(0, limit);

  const others = posts.filter((post) => post.slug !== slug);
  const scored = others
    .map((post) => {
      const sameCategory = post.category === current.category ? 3 : 0;
      const sharedTags = post.tags.filter((tag) =>
        current.tags.includes(tag),
      ).length;
      return { post, score: sameCategory + sharedTags };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.post);
}

/** Yayın sırasına göre önceki / sonraki yazı. */
export function getAdjacentPosts(slug: string): {
  previous: BlogPostMeta | null;
  next: BlogPostMeta | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}
