"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownWideNarrow, Search, SlidersHorizontal, X } from "lucide-react";
import type { BlogCategory, BlogPostMeta } from "@/lib/blog-utils";
import BlogCard from "./BlogCard";

type SortKey = "yeni" | "eski" | "kisa" | "alfabetik";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "yeni", label: "Önce en yeni" },
  { value: "eski", label: "Önce en eski" },
  { value: "kisa", label: "En kısa okuma" },
  { value: "alfabetik", label: "Başlığa göre (A-Z)" },
];

const PAGE_SIZE = 6;

interface BlogExplorerProps {
  posts: BlogPostMeta[];
  categories: BlogCategory[];
}

export default function BlogExplorer({ posts, categories }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");
  const [sort, setSort] = useState<SortKey>("yeni");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const reduceMotion = useReducedMotion() ?? false;
  const isFiltered = query.trim() !== "" || activeCategory !== "Tümü";

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("tr");

    const result = posts.filter((post) => {
      const matchesCategory =
        activeCategory === "Tümü" || post.category === activeCategory;
      if (!matchesCategory) return false;
      if (!needle) return true;

      const haystack = [post.title, post.excerpt, post.category, ...post.tags]
        .join(" ")
        .toLocaleLowerCase("tr");
      return haystack.includes(needle);
    });

    const sorted = [...result];
    switch (sort) {
      case "eski":
        sorted.sort((a, b) => (a.date > b.date ? 1 : -1));
        break;
      case "kisa":
        sorted.sort((a, b) => a.readingTime - b.readingTime);
        break;
      case "alfabetik":
        sorted.sort((a, b) => a.title.localeCompare(b.title, "tr"));
        break;
      default:
        sorted.sort((a, b) => (a.date < b.date ? 1 : -1));
    }
    return sorted;
  }, [posts, query, activeCategory, sort]);

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("Tümü");
    setVisible(PAGE_SIZE);
  };

  const chips = [
    { name: "Tümü", count: posts.length },
    ...categories.map((category) => ({
      name: category.name,
      count: category.count,
    })),
  ];

  return (
    <section
      id="yazilar"
      className="bg-background-light py-14 sm:py-20"
      aria-labelledby="all-posts-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <h2
          id="all-posts-heading"
          className="text-2xl font-black text-primary-500 sm:text-3xl"
        >
          Tüm yazılar
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-custom sm:text-base">
          Konuya göre süzün, sıralamayı değiştirin ya da aklınızdaki kelimeyi
          aratın.
        </p>

        {/* Araç çubuğu */}
        <div className="sticky top-[72px] z-30 -mx-4 mt-8 border-y border-primary-500/10 bg-background-light/92 px-4 py-4 backdrop-blur-md md:-mx-10 md:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Arama */}
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-custom/60"
                strokeWidth={2.5}
              />
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Yazılarda ara: dolu, ücret, ekspertiz…"
                aria-label="Blog yazılarında ara"
                className="w-full rounded-full border border-primary-500/15 bg-white py-3 pl-11 pr-10 text-sm text-primary-700 shadow-sm transition-colors placeholder:text-slate-custom/60 focus:border-accent focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Aramayı temizle"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-custom transition-colors hover:bg-background-light hover:text-primary-500"
                >
                  <X className="h-4 w-4" strokeWidth={2.5} />
                </button>
              )}
            </div>

            {/* Sıralama */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="blog-sort"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-custom"
              >
                <ArrowDownWideNarrow className="h-4 w-4" strokeWidth={2.5} />
                Sırala
              </label>
              <select
                id="blog-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="rounded-full border border-primary-500/15 bg-white px-4 py-2.5 text-sm font-medium text-primary-700 shadow-sm transition-colors focus:border-accent focus:outline-none"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Kategori etiketleri */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <SlidersHorizontal
              className="mr-1 hidden h-4 w-4 text-slate-custom sm:block"
              strokeWidth={2.5}
            />
            {chips.map((chip) => {
              const isActive = activeCategory === chip.name;
              return (
                <button
                  key={chip.name}
                  type="button"
                  onClick={() => {
                    setActiveCategory(chip.name);
                    setVisible(PAGE_SIZE);
                  }}
                  aria-pressed={isActive}
                  className={`relative rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-primary-500 bg-primary-500 text-white shadow-md shadow-primary-500/20"
                      : "border-primary-500/15 bg-white text-slate-custom hover:border-primary-500/40 hover:text-primary-500"
                  }`}
                >
                  {chip.name}
                  <span
                    className={`ml-2 text-xs font-bold ${
                      isActive ? "text-accent" : "text-slate-custom/60"
                    }`}
                  >
                    {chip.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sonuç sayacı */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p aria-live="polite" className="text-sm text-slate-custom">
            <strong className="font-bold text-primary-500">
              {filtered.length}
            </strong>{" "}
            yazı listeleniyor
            {activeCategory !== "Tümü" && (
              <>
                {" "}
                · <span className="font-semibold">{activeCategory}</span>
              </>
            )}
          </p>

          {isFiltered && (
            <button
              type="button"
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-sm font-bold text-primary-500 underline-offset-4 hover:underline"
            >
              <X className="h-3.5 w-3.5" strokeWidth={2.5} />
              Filtreleri temizle
            </button>
          )}
        </div>

        {/* Izgara */}
        {shown.length > 0 ? (
          <motion.div
            layout={!reduceMotion}
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {shown.map((post, index) => {
                const isWide = index === 0 && shown.length > 2;
                return (
                  <motion.div
                    key={post.slug}
                    layout={!reduceMotion}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.04 }}
                    className={isWide ? "sm:col-span-2" : ""}
                  >
                    <BlogCard
                      post={post}
                      variant={isWide ? "wide" : "default"}
                      priority={index === 0}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Boş durum: yön gösteren, eyleme çağıran */
          <div className="mt-8 rounded-2xl border border-dashed border-primary-500/20 bg-white px-6 py-14 text-center">
            <Search
              className="mx-auto h-8 w-8 text-slate-custom/40"
              strokeWidth={2}
            />
            <p className="mt-4 text-lg font-bold text-primary-500">
              Bu aramaya uyan yazı bulunamadı
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-custom">
              Farklı bir kelime deneyebilir ya da filtreleri temizleyip tüm
              yazıları görebilirsiniz. Aradığınız konu burada yoksa doğrudan
              bize sorun; cevabını biz yazalım.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-600"
              >
                Filtreleri temizle
              </button>
              <a
                href="https://wa.me/905322672337"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-500/20 px-5 py-3 text-sm font-bold text-primary-500 transition-colors hover:border-accent hover:bg-accent"
              >
                WhatsApp&apos;tan sor
              </a>
            </div>
          </div>
        )}

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((current) => current + PAGE_SIZE)}
              className="group flex items-center gap-2 rounded-full border border-primary-500/20 bg-white px-6 py-3.5 text-sm font-bold text-primary-500 shadow-sm transition-all hover:border-accent hover:bg-accent"
            >
              Daha fazla yazı göster
              <span className="text-xs font-medium text-slate-custom group-hover:text-primary-500">
                ({filtered.length - visible})
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
