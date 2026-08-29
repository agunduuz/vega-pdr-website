import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, Clock, PenLine } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

interface PostHeroProps {
  post: BlogPost;
}

export default function PostHero({ post }: PostHeroProps) {
  return (
    <header className="relative">
      {/* Koyu üst blok */}
      <div className="relative overflow-hidden bg-primary-800 pt-28 pb-40 sm:pt-32 sm:pb-48">
        <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />
        <div className="light-sweep" aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl px-4 md:px-10">
          {/* Kırıntı navigasyonu */}
          <nav className="reveal" aria-label="Sayfa yolu">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/50">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Ana Sayfa
                </Link>
              </li>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <li>
                <Link href="/blog" className="transition-colors hover:text-accent">
                  Blog
                </Link>
              </li>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <li className="text-white/80" aria-current="page">
                {post.category}
              </li>
            </ol>
          </nav>

          <span className="reveal reveal-1 mt-6 inline-block rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-primary-500">
            {post.category}
          </span>

          <h1 className="reveal reveal-2 mt-5 text-3xl font-black leading-[1.12] text-white text-balance sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="reveal reveal-3 mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {post.excerpt}
          </p>

          <div className="reveal reveal-4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <PenLine className="h-4 w-4 text-accent" strokeWidth={2.5} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-accent" strokeWidth={2.5} />
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" strokeWidth={2.5} />
              {post.readingTime} dakikalık okuma
            </span>
          </div>
        </div>
      </div>

      {/* Kapak görseli: koyu bloğun üzerine taşar */}
      <div className="mx-auto -mt-28 max-w-5xl px-4 md:px-10 sm:-mt-32">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-primary-900/30 sm:rounded-3xl">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority
            quality={80}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
