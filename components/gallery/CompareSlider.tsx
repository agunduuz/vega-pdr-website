// components/gallery/CompareSlider.tsx
"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface CompareSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export default function CompareSlider({
  beforeImage,
  afterImage,
  alt,
}: CompareSliderProps) {
  return (
    <div className="relative w-full h-full">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={beforeImage}
            alt={`${alt} - Öncesi`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterImage}
            alt={`${alt} - Sonrası`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        }
        // ✅ position yerine changePositionOnHover kullan
        changePositionOnHover={true}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
      />

      {/* Labels */}
      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none z-10">
        ÖNCESİ
      </div>
      <div className="absolute bottom-3 right-3 bg-accent text-primary-500 text-xs font-bold px-2 py-1 rounded pointer-events-none z-10">
        SONRASI
      </div>
    </div>
  );
}
