"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog-utils";
import { formatBlogDate } from "@/lib/blog-utils";

interface BlogCardProps {
  post: BlogPostMeta;
  /** "wide": ızgarada iki sütun kaplayan yatay kart. "slide": carousel içi. */
  variant?: "default" | "wide" | "slide";
  priority?: boolean;
}

const BlogCard = memo(function BlogCard({
  post,
  variant = "default",
  priority = false,
}: BlogCardProps) {
  const isWide = variant === "wide";

  return (
    <article
      className={`group relative flex h-full overflow-hidden rounded-2xl border border-primary-500/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/20 hover:shadow-xl hover:shadow-primary-500/10 ${
        isWide ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      {/* Kapak */}
      <div
        className={`relative shrink-0 overflow-hidden bg-primary-800 ${
          isWide ? "sm:w-[46%] aspect-[16/10] sm:aspect-auto" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority={priority}
          quality={70}
          sizes={
            isWide
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 46vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-500 backdrop-blur">
          {post.category}
        </span>

        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-primary-900/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          <Clock className="h-3 w-3 text-accent" strokeWidth={2.5} />
          {post.readingTime} dk
        </span>
      </div>

      {/* Gövde */}
      <div
        className={`flex flex-1 flex-col p-5 sm:p-6${
          isWide ? " sm:justify-center" : ""
        }`}
      >
        <time
          dateTime={post.date}
          className="text-xs font-medium uppercase tracking-wider text-slate-custom/70"
        >
          {formatBlogDate(post.date)}
        </time>

        <h3
          className={`mt-2 font-black leading-snug text-primary-500 transition-colors group-hover:text-primary-700 ${
            isWide ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
            {post.title}
          </Link>
        </h3>

        <p
          className={`mt-3 text-sm leading-relaxed text-slate-custom ${
            isWide ? "line-clamp-3" : "line-clamp-2"
          }`}
        >
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="flex items-center gap-1.5 text-sm font-bold text-primary-500">
            Yazıyı oku
            <ArrowUpRight
              className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </span>

          {post.tags[0] && (
            <span className="hidden rounded-md bg-background-light px-2 py-1 text-[11px] font-medium text-slate-custom sm:inline">
              #{post.tags[0]}
            </span>
          )}
        </div>
      </div>

      {/* İmza: kart altında çizilen ışık hattı */}
      <span className="card-line absolute bottom-0 left-0 h-[3px] w-full bg-accent" />
    </article>
  );
});

export default BlogCard;
