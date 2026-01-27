"use client";

import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const ServicesHero = memo(function ServicesHero() {
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  // ✅ useMemo: WhatsApp link sadece 1 kez hesaplanır
  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${SITE_CONFIG.phone.replace(
        /\s/g,
        "",
      )}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`,
    [], // Dependencies boş - SITE_CONFIG constant
  );

  // ✅ useMemo: Animation variants sadece reduced motion değiştiğinde hesaplanır
  const fadeInUp = useMemo(
    () =>
      shouldReduceMotion
        ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
        : {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          },
    [shouldReduceMotion],
  );

  return (
    <section
      className="relative bg-primary-500 overflow-hidden"
      aria-labelledby="services-hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/services/hero-bg.webp"
          alt="" // ✅ Decorative image - empty alt
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary-500 via-primary-500/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 layout-container flex justify-center">
        <div className="w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              {...fadeInUp}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent mb-6 border border-accent/20 backdrop-blur-sm"
            >
              <CheckCircle
                className="w-4 h-4"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span>40 Yıllık Ustalık</span>
            </motion.div>

            {/* Heading - SEO optimized */}
            <motion.h1
              id="services-hero-heading"
              {...fadeInUp}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl tracking-tight"
            >
              Aracınız İçin
              <br />
              <span className="text-accent">Kusursuz Çözümler</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeInUp}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className="mb-8 text-lg font-normal leading-relaxed text-gray-300 sm:text-xl"
            >
              En son teknoloji ve geleneksel el işçiliğini birleştirerek,
              aracınızın değerini koruyan profesyonel onarım hizmetleri
              sunuyoruz.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              {/* Primary Button */}
              <Link
                href="#hizmetler"
                className="group flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-primary-500 hover:bg-white hover:text-primary-500 transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105"
                aria-label="Hizmetlerimizi inceleyin"
              >
                Hizmetleri İncele
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </Link>

              {/* Secondary Button */}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
                aria-label="WhatsApp ile bize ulaşın"
              >
                <Phone
                  className="w-5 h-5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                Bizi Arayın
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vega Boyasız Göçük Düzeltme Hizmetleri",
            description:
              "En son teknoloji ve geleneksel el işçiliğini birleştirerek, aracınızın değerini koruyan profesyonel onarım hizmetleri sunuyoruz.",
            provider: {
              "@type": "LocalBusiness",
              name: SITE_CONFIG.fullName,
              telephone: SITE_CONFIG.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_CONFIG.address,
                addressLocality: "Samsun",
                addressCountry: "TR",
              },
            },
            areaServed: "Samsun",
            serviceType: [
              "Boyasız Göçük Düzeltme",
              "Kaporta Onarımı",
              "Lokal Boya",
            ],
          }),
        }}
      />
    </section>
  );
});

export default ServicesHero;
