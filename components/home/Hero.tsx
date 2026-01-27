"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Hero() {
  // 1. useMemo ile WhatsApp link cache'le
  const whatsappLink = useMemo(() => {
    return `https://wa.me/${SITE_CONFIG.phone.replace(
      /\s/g,
      "",
    )}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
  }, []);

  // 2. Reduced motion preference kontrol et
  const shouldReduceMotion = useReducedMotion();

  // 3. Media query - Desktop mi Mobile mi?
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // 4. Animation variants (reduced motion için)
  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  // 5. Content variants (mobile/desktop için)
  const headingText = isDesktop
    ? "40 Yıllık Tecrübe ile"
    : "40 Yıllık Tecrübe ile";

  const descriptionText = isDesktop
    ? "Aracınızın orijinal değerini koruyun. Dolu hasarı, park göçüğü ve kaporta onarımında uzman dokunuşlar. Orijinal boyayı bozmadan %100 müşteri memnuniyeti."
    : "Aracınızın orijinal değerini koruyun. Orijinal boyayı bozmadan profesyonel onarım.";

  return (
    <section
      className="relative w-full flex justify-center"
      aria-label="Hero bölümü"
    >
      <div className="w-full max-w-7xl p-4 md:px-10 md:py-8">
        <div className="relative overflow-hidden rounded-xl bg-primary-500 text-white shadow-2xl min-h-125 md:min-h-150 flex flex-col justify-end">
          {/* Background Image with Next.js Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.webp"
              alt="Profesyonel araç boyasız göçük düzeltme ve kaporta onarım hizmeti"
              fill
              priority
              fetchPriority="high"
              quality={75}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t from-primary-500/95 via-primary-500/60 to-primary-500/40"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 w-full max-w-180 p-6 md:p-12 lg:p-16 flex flex-col gap-4 md:gap-6 items-start">
            {/* Badge */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1.5 text-xs md:text-sm font-bold text-accent backdrop-blur-sm border border-accent/20"
              role="status"
              aria-label="Samsun'un en iyi boyasız göçük düzeltme hizmeti"
            >
              <BadgeCheck
                className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5"
                aria-hidden="true"
              />
              <span>Samsun&apos;un En İyisi</span>
            </motion.div>

            {/* Main Heading - Single Render */}
            <motion.h1
              {...fadeInUp}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.15] md:leading-[1.1] tracking-tight text-white"
            >
              {headingText}
              <br />
              <span className="text-accent">Boyasız Göçük Düzeltme</span>
            </motion.h1>

            {/* Description - Single Render */}
            <motion.p
              {...fadeInUp}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className="text-base md:text-lg lg:text-xl font-normal text-gray-200 leading-relaxed max-w-150"
            >
              {descriptionText}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
              className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 md:gap-4 mt-2"
              role="group"
              aria-label="Ana eylem butonları"
            >
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-lg bg-accent px-6 md:px-8 text-primary-500 font-bold text-sm md:text-base hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
                aria-label="WhatsApp üzerinden fiyat teklifi alın"
              >
                WhatsApp ile Fiyat Al
              </Link>
              <Link
                href="#services"
                className="flex h-12 items-center justify-center rounded-lg bg-white/10 px-6 md:px-8 text-white font-semibold text-sm md:text-base backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Hizmetlerimiz bölümüne git"
              >
                Hizmetlerimiz
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
