"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import GallerySlideCard from "./GallerySlideCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";

// ✅ Swiper CSS import (SSR-safe)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  // ✅ useMemo: Animation variants
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

  // ✅ useMemo: Featured gallery
  const featuredGallery = useMemo(() => GALLERY_ITEMS.slice(0, 4), []);

  return (
    <section
      className="w-full bg-white py-16"
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      <div className="layout-container flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-10 flex flex-col gap-10">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Öncesi & sonrası"
            title="Işık altında bakın: göçüğün olduğu yerde iz yok"
            description="Boyasız onarımın sonucu, panele yandan vuran ışıkta belli olur. Aşağıdaki kareler atölyemizde tamamlanan işlerden."
            action={
              <Link
                href="/galeri"
                className="group inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-white px-5 py-3 text-sm font-bold text-primary-500 transition-all hover:border-accent hover:bg-accent"
              >
                Tüm galeri
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
            }
          />

          {/* Swiper Carousel */}
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="relative"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={800}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="gallery-swiper"
            >
              {featuredGallery.map((item) => (
                <SwiperSlide key={item.id}>
                  <GallerySlideCard
                    before={item.before}
                    after={item.after}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
            className="flex justify-center mt-4"
          >
            <Link
              href="/galeri"
              className="flex items-center justify-center rounded-lg h-12 px-6 border-2 border-gray-300 bg-transparent text-slate-custom font-medium hover:border-primary-500 hover:text-primary-500 transition-all hover:scale-105"
              aria-label="Tüm galeriyi görüntüle"
            >
              Tüm Galeriye Git
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
