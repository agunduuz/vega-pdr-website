// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/blog/ReadingProgress";
import BlogArticle from "@/components/blog/BlogArticle";
import PostHero from "@/components/blog/PostHero";
import PostSidebar from "@/components/blog/PostSidebar";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import TableOfContents from "@/components/blog/TableOfContents";
import PostNav from "@/components/blog/PostNav";
import RelatedPosts from "@/components/blog/RelatedPosts";
import CtaBand from "@/components/shared/CtaBand";
import {
  getAdjacentPosts,
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { renderPostBody } from "@/lib/blog-render";
import { SITE_CONFIG } from "@/lib/constants";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://samsunboyasizgocukduzeltme.com";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Yazı bulunamadı" };
  }

  return {
    title: `${post.title} | ${SITE_CONFIG.name} Blog`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = getAdjacentPosts(slug);
  const related = getRelatedPosts(slug, 3);
  const blocks = await renderPostBody(post.content);
  const url = `${SITE_URL}/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/vega-logo.svg`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ReadingProgress />
      <PostHero post={post} />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-10 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <article className="min-w-0">
            <KeyTakeaways items={post.keyTakeaways} />
            <TableOfContents headings={post.headings} variant="mobile" />

            <BlogArticle blocks={blocks} />

            {/* Etiketler */}
            {post.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-primary-500/10 pt-8">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-custom">
                  Etiketler
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-custom shadow-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <PostNav previous={previous} next={next} />
          </article>

          <aside className="lg:min-w-0">
            <PostSidebar
              headings={post.headings}
              title={post.title}
              url={url}
            />
          </aside>
        </div>
      </div>

      <RelatedPosts posts={related} />
      <CtaBand
        eyebrow="Ücretsiz ekspertiz"
        title="Okumak iyidir; aracınızı görmek daha iyi."
        whatsappMessage="Merhaba, blogdaki yazınızı okudum. Aracımdaki hasar için bilgi almak istiyorum."
      />
    </>
  );
}
