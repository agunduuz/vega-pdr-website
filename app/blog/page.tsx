// app/blog/page.tsx
import { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedCarousel from "@/components/blog/FeaturedCarousel";
import BlogExplorer from "@/components/blog/BlogExplorer";
import BlogCta from "@/components/blog/BlogCta";
import { getAllPosts, getCategories, getFeaturedPosts } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://samsunboyasizgocukduzeltme.com";

export const metadata: Metadata = {
  title: `Blog — Göçük, Boya ve Değer Kaybı Rehberi | ${SITE_CONFIG.fullName}`,
  description:
    "Boyasız göçük düzeltme ücreti, dolu hasarı, değer kaybı ve PDR yöntemi üzerine atölyeden yazılar. 40 yıllık tecrübeyle hazırlanan pratik rehberler.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: `Vega PDR Blog — Atölyeden Notlar`,
    description:
      "Göçük, boya ve değer kaybı üzerine sık sorulan soruların atölyeden cevapları.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const featured = getFeaturedPosts(3);

  const averageReadingTime = posts.length
    ? Math.round(
        posts.reduce((total, post) => total + post.readingTime, 0) /
          posts.length,
      )
    : 0;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_CONFIG.fullName} Blog`,
    description:
      "Boyasız göçük düzeltme, dolu hasarı ve araç değer kaybı üzerine rehber yazılar.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/vega-logo.svg`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      image: `${SITE_URL}${post.cover}`,
      author: { "@type": "Organization", name: post.author },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BlogHero
        postCount={posts.length}
        categories={categories}
        averageReadingTime={averageReadingTime}
      />
      <FeaturedCarousel posts={featured} />
      <BlogExplorer posts={posts} categories={categories} />
      <BlogCta />
    </>
  );
}
