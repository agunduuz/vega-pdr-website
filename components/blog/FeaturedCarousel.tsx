"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Clock, Sparkles } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog-utils";
import { formatBlogDate } from "@/lib/blog-utils";

import "swiper/css";
import "swiper/css/pagination";

interface FeaturedCarouselProps {
  posts: BlogPostMeta[];
}

export default function FeaturedCarousel({ posts }: FeaturedCarouselProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(posts.length <= 1);

  if (posts.length === 0) return null;

  const syncEdges = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      className="bg-white py-14 sm:py-20"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
              Öne çıkanlar
            </span>
            <h2
              id="featured-heading"
              className="mt-3 text-2xl font-black text-primary-500 sm:text-3xl"
            >
              En çok sorulan konular
            </h2>
          </div>

          {/* Carousel kontrolleri */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              aria-label="Önceki yazı"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-500/15 text-primary-500 transition-all hover:border-accent hover:bg-accent hover:text-primary-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-primary-500/15 disabled:hover:bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              aria-label="Sonraki yazı"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-500/15 text-primary-500 transition-all hover:border-accent hover:bg-accent hover:text-primary-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-primary-500/15 disabled:hover:bg-transparent"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <Swiper
          className="blog-swiper"
          modules={[Autoplay, Pagination, Keyboard, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncEdges(swiper);
          }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.35, spaceBetween: 24 },
            1024: { slidesPerView: 1.6, spaceBetween: 28 },
          }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          a11y={{
            prevSlideMessage: "Önceki yazı",
            nextSlideMessage: "Sonraki yazı",
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-primary-800 sm:h-[420px]"
              >
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  priority={index === 0}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/70 to-primary-900/10" />

                <div className="relative p-6 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-black uppercase tracking-wider text-primary-500">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-white/70">
                      <Clock className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                      {post.readingTime} dakika
                    </span>
                    <span className="text-xs font-medium text-white/50">
                      {formatBlogDate(post.date)}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-xl text-2xl font-black leading-tight text-white text-balance sm:text-3xl">
                    {post.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 line-clamp-2 sm:text-base">
                    {post.excerpt}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    Yazıyı oku
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
