"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import GallerySlideCard from "./GallerySlideCard";

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
          {/* Section Header */}
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2
              id="gallery-heading"
              className="text-primary-500 text-3xl font-bold mb-4"
            >
              Öncesi ve Sonrası
            </h2>
            <p className="text-slate-custom">
              Yaptığımız işlerin kalitesi, tecrübemizin kanıtıdır.
              Samsun&apos;da binlerce aracı ilk günkü haline döndürdük.
            </p>
          </motion.div>

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
