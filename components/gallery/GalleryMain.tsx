// components/gallery/GalleryMain.tsx
"use client";

import { useState } from "react";
import GalleryHero from "./GalleryHero";
import GalleryFilters from "./GalleryFilters";
import GalleryGrid from "./GalleryGrid";
import ServicesCTA from "../services/ServicesCTA";

const GalleryMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    // TODO: Galeri filtreleme logic'i buraya gelecek
    console.log("Selected filter:", filter);
  };
  return (
    <>
      <GalleryHero />
      <GalleryFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      {/* Gallery Grid buraya gelecek */}
      <div className="min-h-screen bg-primary-700">
        <div className="max-w-7xl mx-auto py-12">
          <GalleryGrid activeFilter={activeFilter} />
          {/* Buraya gallery items component'i gelecek */}
        </div>
      </div>
      <ServicesCTA />
    </>
  );
};

export default GalleryMain;
