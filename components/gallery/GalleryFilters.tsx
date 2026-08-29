"use client";

import { memo, useCallback } from "react";
import { SlidersHorizontal } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/constants";

const FILTER_CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "boyasiz-gocuk", label: "Boyasız Göçük" },
] as const;

interface GalleryFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const GalleryFilters = memo(function GalleryFilters({
  activeFilter,
  onFilterChange,
}: GalleryFiltersProps) {
  const handleFilterClick = useCallback(
    (filterId: string) => onFilterChange(filterId),
    [onFilterChange],
  );

  const countFor = (id: string) =>
    id === "all"
      ? GALLERY_ITEMS.length
      : GALLERY_ITEMS.filter((item) => item.category === id).length;

  return (
    <section className="sticky top-[72px] z-30 border-y border-white/10 bg-primary-800/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 md:px-10">
        <SlidersHorizontal
          className="hidden h-4 w-4 shrink-0 text-white/40 sm:block"
          strokeWidth={2.5}
          aria-hidden="true"
        />
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category.id;

            return (
              <button
                key={category.id}
                onClick={() => handleFilterClick(category.id)}
                className={`flex-none rounded-full border px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "border-accent bg-accent text-primary-500 shadow-md shadow-accent/20"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-accent/50 hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {category.label}
                <span
                  className={`ml-2 text-xs font-bold ${
                    isActive ? "text-primary-500/70" : "text-white/40"
                  }`}
                >
                  {countFor(category.id)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default GalleryFilters;
