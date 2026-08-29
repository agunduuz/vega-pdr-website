import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { getAllPosts } from "@/lib/blog";

/** Ana sayfadan rehbere köprü: en güncel üç yazı. */
export default function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section
      className="bg-white py-16 sm:py-20"
      aria-labelledby="home-blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <SectionHeading
          id="home-blog-heading"
          eyebrow="Vega rehber"
          title="Karar vermeden önce okuyun"
          description="Ücret neye göre değişir, dolu hasarında ilk ne yapılmalı, hangi göçük boyasız çıkar? Atölyede en çok duyduğumuz soruları yazdık."
          action={
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-white px-5 py-3 text-sm font-bold text-primary-500 transition-all hover:border-accent hover:bg-accent"
            >
              Tüm yazılar
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
