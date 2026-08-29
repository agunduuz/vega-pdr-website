// components/layout/InteractiveMap.tsx
"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";

interface InteractiveMapProps {
  shouldReduceMotion: boolean;
  fadeInUp: {
    initial: { opacity: number; y?: number };
    animate: { opacity: number; y?: number };
  };
}

const InteractiveMap = memo(function InteractiveMap({
  shouldReduceMotion,
  fadeInUp,
}: InteractiveMapProps) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleLoadMap = () => {
    setIsMapLoaded(true);
  };

  return (
    <motion.div
      {...fadeInUp}
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : 0.2,
      }}
      className="group relative h-80 w-full overflow-hidden bg-slate-800 sm:h-96"
    >
      {!isMapLoaded ? (
        <>
          {/* Static Map Preview Image */}
          <Image
            src="/images/map-preview.webp"
            alt="Vega Boyasız Göçük Düzeltme harita önizlemesi"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

          {/* Click to Load Button */}
          <button
            onClick={handleLoadMap}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 backdrop-blur-[2px] hover:backdrop-blur-sm transition-all duration-300 group cursor-pointer"
            aria-label="Haritayı yükle"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/90 text-primary-500 shadow-xl group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-white font-bold text-lg">
                  Haritayı Yükle
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  Google Maps
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          </button>
        </>
      ) : (
        /* Real Google Maps iFrame */
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.681868173577!2d36.35919799094849!3d41.272262197352006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088778e3177bb79%3A0x8cac9494a70a9f7c!2zVmVnYSBCb3lhc8SxeiBHw7bDp8O8ayBEw7x6ZWx0bWU!5e0!3m2!1str!2str!4v1768132076373!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vega Boyasız Göçük Düzeltme - Samsun Konumu"
          className="absolute inset-0"
        />
      )}
    </motion.div>
  );
});

export default InteractiveMap;
