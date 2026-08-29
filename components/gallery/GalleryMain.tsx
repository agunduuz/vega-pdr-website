// components/gallery/GalleryMain.tsx
"use client";

import { useState } from "react";
import GalleryHero from "./GalleryHero";
import GalleryFilters from "./GalleryFilters";
import GalleryGrid from "./GalleryGrid";
import CtaBand from "@/components/shared/CtaBand";

const GalleryMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: string) => setActiveFilter(filter);
  return (
    <>
      <GalleryHero />
      <GalleryFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <div className="bg-primary-800 pt-12">
        <GalleryGrid activeFilter={activeFilter} />
      </div>
      <CtaBand
        title="Sıradaki 'öncesi' fotoğrafı sizin aracınız olsun."
        whatsappMessage="Merhaba, galerideki işleri gördüm. Aracımdaki göçük için fotoğraf gönderiyorum."
      />
    </>
  );
};

export default GalleryMain;
