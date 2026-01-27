"use client";

import { memo } from "react";
import Image from "next/image";

interface GallerySlideCardProps {
  before: string;
  after: string;
  alt: string;
}

const GallerySlideCard = memo(function GallerySlideCard({
  before,
  after,
  alt,
}: GallerySlideCardProps) {
  return (
    <div className="relative group">
      {/* Container with modern styling */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-1">
        <div className="grid grid-cols-2 gap-1 bg-white rounded-xl overflow-hidden">
          {/* Before Image */}
          <article
            className="relative overflow-hidden aspect-3/4 group/item"
            aria-label={`${alt} - Öncesi`}
          >
            <Image
              src={before}
              alt={`${alt} - Onarım öncesi`}
              fill
              className="object-cover transition-all duration-700 group-hover/item:scale-110 group-hover/item:brightness-110"
              sizes="(max-width: 768px) 50vw, 40vw"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/item:opacity-40 transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* Before Badge - Modern */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 backdrop-blur-md bg-red-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl border border-white/20 group-hover/item:scale-110 transition-transform duration-300">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              ÖNCESİ
            </div>
          </article>

          {/* After Image */}
          <article
            className="relative overflow-hidden aspect-3/4 group/item"
            aria-label={`${alt} - Sonrası`}
          >
            <Image
              src={after}
              alt={`${alt} - Onarım sonrası`}
              fill
              className="object-cover transition-all duration-700 group-hover/item:scale-110 group-hover/item:brightness-110"
              sizes="(max-width: 768px) 50vw, 40vw"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/item:opacity-40 transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* After Badge - Modern */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 backdrop-blur-md bg-green-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl border border-white/20 group-hover/item:scale-110 transition-transform duration-300">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              SONRASI
            </div>
          </article>
        </div>
      </div>

      {/* Hover Effect - Glow */}
      <div className="absolute -inset-1 bg-linear-to-r from-primary-500 via-accent to-primary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
    </div>
  );
});

export default GallerySlideCard;
