// components/gallery/GalleryGrid.tsx
"use client";

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
    <section className="mx-auto max-w-7xl px-4 pb-20 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group flex flex-col gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-primary-900 shadow-lg transition-all duration-300 group-hover:border-accent/40">
              <span className="absolute left-3 top-3 z-20 rounded-full bg-primary-900/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
                {item.categoryName}
              </span>
              <span className="absolute bottom-3 right-3 z-20 rounded-full bg-accent px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-primary-500">
                Kaydırın
              </span>

              {/* ✅ Dynamic CompareSlider */}
              <CompareSlider
                beforeImage={item.before}
                afterImage={item.after}
                alt={item.alt}
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-black uppercase tracking-wide text-white">
                {item.id.split("-")[0]}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                {item.alt}
              </p>
              <span className="mt-3 h-[2px] w-10 bg-accent/40 transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
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
