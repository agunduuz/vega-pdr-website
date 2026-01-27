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

// Icon mapping - Component DIŞINDA
const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  hammer: Hammer,
  paintbrush: Paintbrush,
};

export default function Services() {
  // Reduced motion preference kontrol et
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const fadeInLeft = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
      };

  const fadeInRight = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
      };

  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      className="relative w-full flex flex-col items-center py-16 bg-background-light"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="w-full max-w-7xl px-4 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div className="flex flex-col gap-2">
            <motion.span
              {...fadeInLeft}
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="text-accent font-bold tracking-wider text-xs md:text-sm uppercase [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]"
              aria-label="Hizmet kategorisi"
            >
              Uzmanlık Alanlarımız
            </motion.span>
            <motion.h2
              id="services-heading"
              {...fadeInLeft}
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="text-primary-500 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            >
              Profesyonel Onarım Hizmetleri
            </motion.h2>
          </div>

          {/* Desktop Only Link */}
          <motion.div
            {...fadeInRight}
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="hidden md:flex"
          >
            <Link
              href="/hizmetler"
              className="text-primary-500 font-bold hover:text-accent flex items-center gap-1 transition-colors group"
              aria-label="Tüm hizmetleri görüntüle"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid - Now using ServiceCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
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
            className="text-primary-500 font-bold hover:text-accent flex items-center gap-2 transition-colors group px-6 py-3 rounded-lg border-2 border-primary-500 hover:bg-primary-500 hover:text-white"
            aria-label="Tüm hizmetleri görüntüle"
          >
            Tüm Hizmetleri Gör
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
