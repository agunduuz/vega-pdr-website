// components/gallery/GalleryGrid.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic"; // ✅ EKLE
import { GALLERY_ITEMS } from "@/lib/constants";

// ✅ CompareSlider'ı dynamic import et (SSR kapalı)
const CompareSlider = dynamic(() => import("./CompareSlider"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-800 animate-pulse" />,
});

interface GalleryGridProps {
  activeFilter: string;
}

const GalleryGrid = ({ activeFilter }: GalleryGridProps) => {
  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-800 border border-white/5">
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white border border-white/10 uppercase">
                {item.category.replace("-", " ")}
              </div>

              {/* ✅ Dynamic CompareSlider */}
              <CompareSlider
                beforeImage={item.before}
                afterImage={item.after}
                alt={item.alt}
              />
            </div>

            {/* Title & Description */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white">
                {item.id.split("-")[0].toUpperCase()}
              </h3>
              <p className="text-white/75 text-sm mt-1">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/75 text-lg">
            Bu kategoride henüz proje bulunmamaktadır.
          </p>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
