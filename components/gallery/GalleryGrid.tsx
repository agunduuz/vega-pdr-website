"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";

interface GalleryGridProps {
  activeFilter: string;
}

const GalleryGrid = ({ activeFilter }: GalleryGridProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group flex flex-col gap-4">
            <div
              className="relative w-full aspect-3/4 rounded-xl overflow-hidden cursor-pointer shadow-lg bg-surface-dark border border-white/5"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Label Badge */}
              <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white border border-white/10 uppercase">
                {item.categoryName}
              </div>

              {/* After Image */}
              <div
                className={`absolute inset-0 z-10 transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.after}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-accent text-primary-500 text-xs font-bold px-2 py-1 rounded">
                  SONRASI
                </div>
              </div>

              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.before}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                  ÖNCESİ
                </div>
              </div>

              {/* Hover Instruction */}
              <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-sm rounded-full p-3 border border-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>

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
          <p className="text-slate-custom text-lg">
            Bu kategoride henüz proje bulunmamaktadır.
          </p>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
