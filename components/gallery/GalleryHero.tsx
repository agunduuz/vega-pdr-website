"use client";

import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const GalleryHero = memo(function GalleryHero() {
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  const fadeInUp = useMemo(
    () =>
      shouldReduceMotion
        ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
        : {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          },
    [shouldReduceMotion]
  );

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Heading */}
          <motion.h1
            {...fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6"
          >
            GALERİ
          </motion.h1>

          {/* Accent Line */}
          <motion.div
            {...fadeInUp}
            initial="initial"
            animate="animate"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="h-1 w-20 bg-accent mb-6"
          />

          {/* Description */}
          <motion.p
            {...fadeInUp}
            initial="initial"
            animate="animate"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light"
          >
            40 Yıllık Ustalık, Kusursuz Sonuçlar.{" "}
            <span className="text-accent font-medium">
              Mükemmellik detaylarda gizlidir.
            </span>
            <br className="hidden md:block" />
            Binlerce başarılı onarım, sayısız mutlu müşteri.
          </motion.p>
        </div>
      </div>
    </section>
  );
});

export default GalleryHero;
