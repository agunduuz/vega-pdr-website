"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  Wrench,
  Hammer,
  Paintbrush,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import SectionHeading from "@/components/shared/SectionHeading";

// Icon mapping - Component DIŞINDA
const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  hammer: Hammer,
  paintbrush: Paintbrush,
};

export default function Services() {
  // Reduced motion preference kontrol et
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      className="relative w-full bg-background-light py-16 sm:py-20"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
        <SectionHeading
          id="services-heading"
          eyebrow="Uzmanlık alanlarımız"
          title="Hasarın türü değişir, yaklaşımımız değişmez"
          description="Her hasar aynı yöntemi kabul etmez. Aracınıza hangisinin uyduğunu ücretsiz ekspertizde birlikte belirliyoruz."
          action={
            <Link
              href="/hizmetler"
              className="group inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-white px-5 py-3 text-sm font-bold text-primary-500 transition-all hover:border-accent hover:bg-accent"
            >
              Tüm hizmetler
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          }
        />

        {/* Kartlar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              slug={service.slug}
              icon={iconMap[service.icon]}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Mobile Only Link - Centered Below Grid */}
        <motion.div
          {...fadeInUp}
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
          className="flex md:hidden justify-center mt-8"
        >
          <Link
            href="/hizmetler"
            className="group flex items-center gap-2 rounded-full border border-primary-500/20 bg-white px-6 py-3.5 text-sm font-bold text-primary-500 transition-all hover:border-accent hover:bg-accent"
            aria-label="Tüm hizmetleri görüntüle"
          >
            Tüm hizmetleri gör
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
