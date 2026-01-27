"use client";

import { memo, useCallback } from "react";

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
    (filterId: string) => {
      onFilterChange(filterId);
    },
    [onFilterChange]
  );

  return (
    <section className="bg-primary-700 ">
      <div className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-4">
        <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category.id;

            return (
              <button
                key={category.id}
                onClick={() => handleFilterClick(category.id)}
                className={`flex-none px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-accent text-primary-500 shadow-md border border-accent"
                    : "bg-primary-400/50 border border-primary-300 text-white hover:border-accent hover:text-accent hover:shadow-sm"
                }`}
                aria-pressed={isActive}
                aria-label={`${category.label} kategorisini filtrele`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default GalleryFilters;
