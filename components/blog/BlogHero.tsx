import { ArrowDown, BookOpen, Layers, PenLine } from "lucide-react";
import type { BlogCategory } from "@/lib/blog-utils";

interface BlogHeroProps {
  postCount: number;
  categories: BlogCategory[];
  averageReadingTime: number;
}

export default function BlogHero({
  postCount,
  categories,
  averageReadingTime,
}: BlogHeroProps) {
  const stats = [
    { icon: PenLine, label: `${postCount} yazı` },
    { icon: Layers, label: `${categories.length} konu başlığı` },
    { icon: BookOpen, label: `ortalama ${averageReadingTime} dk okuma` },
  ];

  return (
    <section
      className="relative overflow-hidden bg-primary-800 pt-28 pb-16 sm:pt-36 sm:pb-24"
      aria-labelledby="blog-hero-heading"
    >
      {/* Zemin dokusu + imza ışık hattı */}
      <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />
      <div className="light-sweep" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col px-4 md:px-10">
        <div className="reveal flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
            Vega Rehber
          </span>
        </div>

        <h1
          id="blog-hero-heading"
          className="reveal reveal-1 mt-6 max-w-4xl text-4xl font-black leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl"
        >
          Göçük, boya ve değer kaybı üzerine{" "}
          <span className="relative inline-block text-accent">
            atölyeden notlar
            <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/30" />
          </span>
        </h1>

        <p className="reveal reveal-2 mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          40 yıldır aynı soruları duyuyoruz: bu göçük boyasız çıkar mı, ücreti
          neye göre değişir, dolu hasarında ilk ne yapılmalı? Cevapları
          pazarlama diliyle değil, atölyede gördüğümüz haliyle yazıyoruz.
        </p>

        <div className="reveal reveal-3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          {stats.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-white/60"
            >
              <Icon className="h-4 w-4 text-accent" strokeWidth={2.5} />
              {label}
            </span>
          ))}
        </div>

        <a
          href="#yazilar"
          className="reveal reveal-4 mt-12 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all hover:border-accent/50 hover:bg-accent hover:text-primary-500"
        >
          Tüm yazılara göz at
          <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
