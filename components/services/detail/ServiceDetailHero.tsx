"use client";

import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, Home } from "lucide-react";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  image: string;
}

const ServiceDetailHero = memo(function ServiceDetailHero({
  title,
  subtitle,
  description,
  badge = "En Çok Tercih Edilen Hizmet",
  image,
}: ServiceDetailHeroProps) {
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
    [shouldReduceMotion],
  );

  return (
    <section className="relative flex min-h-[58vh] items-center overflow-hidden bg-primary-800 pt-28 pb-16 sm:min-h-[64vh] sm:pt-32 sm:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-25"
          quality={75}
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-800/40" />
      </div>

      {/* Panel dokusu + imza ışık hattı */}
      <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />
      <div className="light-sweep" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          {...fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="no-scrollbar mb-6 flex items-center gap-1.5 overflow-x-auto pb-2 text-xs font-medium text-white/50"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1 transition-colors hover:text-accent"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            <span className="hidden sm:inline">Anasayfa</span>
          </Link>
          <ChevronRight
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
            strokeWidth={2}
            aria-hidden="true"
          />
          <Link
            href="/hizmetler"
            className="shrink-0 transition-colors hover:text-accent"
          >
            Hizmetler
          </Link>
          <ChevronRight
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="truncate text-white/80" aria-current="page">
            {title}
          </span>
        </motion.nav>

        {/* Main Content */}
        <div className="max-w-3xl">
          {/* Badge */}
          {badge && (
            <motion.div
              {...fadeInUp}
              initial="initial"
              animate="animate"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-primary-500"
            >
              <CheckCircle className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
              <span>{badge}</span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            {...fadeInUp}
            initial="initial"
            animate="animate"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="text-3xl font-black leading-[1.1] text-white text-balance sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            {title}{" "}
            {subtitle && <span className="text-accent">{subtitle}</span>}
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeInUp}
            initial="initial"
            animate="animate"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
});

export default ServiceDetailHero;
