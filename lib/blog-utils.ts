// lib/blog-utils.ts
// İstemci bileşenlerinin de kullanabilmesi için tipler ve saf yardımcılar
// dosya sistemine dokunan lib/blog.ts'ten ayrı tutulur.

export interface BlogHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  updated?: string;
  cover: string;
  coverAlt: string;
  author: string;
  featured: boolean;
  keyTakeaways: string[];
  readingTime: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  headings: BlogHeading[];
}

export interface BlogCategory {
  name: string;
  count: number;
}

export function formatBlogDate(date: string): string {
  if (!date) return "";
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
