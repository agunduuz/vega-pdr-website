"use client";

import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Camera, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const ServicesCTA = memo(function ServicesCTA() {
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  // ✅ useMemo: WhatsApp link
  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${SITE_CONFIG.phone.replace(
        /\s/g,
        ""
      )}?text=${encodeURIComponent(
        "Merhaba, aracımın fotoğraflarını göndererek fiyat teklifi almak istiyorum."
      )}`,
    []
  );

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

  return (
    <section className="bg-primary-500/80 py-16" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          id="cta-heading"
          {...fadeInUp}
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="text-3xl font-black text-white sm:text-4xl"
        >
          Aracınız En İyisini Hak Ediyor
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeInUp}
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="mx-auto mt-4 max-w-2xl text-lg text-gray-300"
        >
          Fotoğraf gönderin, ustamız hasarı inceleyip size özel fiyat teklifini
          ve onarım süresini hemen iletsin.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeInUp}
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* WhatsApp Photo CTA */}
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-50 items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-primary-500 shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
            aria-label="WhatsApp ile fotoğraf göndererek fiyat teklifi alın"
          >
            <Camera
              className="w-5 h-5 transition-transform group-hover:scale-110"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            Fotoğraf ile Teklif Al
          </Link>

          {/* Phone Call CTA */}
          <Link
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
            className="group flex min-w-50 items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-500 shadow-lg transition-all hover:bg-gray-100 hover:scale-105 active:scale-95"
            aria-label="Randevu için hemen arayın"
          >
            <Calendar
              className="w-5 h-5 transition-transform group-hover:scale-110"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            Randevu Oluştur
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

export default ServicesCTA;
