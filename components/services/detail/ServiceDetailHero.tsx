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
    <section className="relative bg-primary-500 py-8 sm:py-12 lg:py-24 overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-40 mix-blend-multiply"
          quality={75}
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary-500 via-primary-500/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          {...fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="flex mb-4 sm:mb-6 lg:mb-8 items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-white/70 overflow-x-auto pb-2 scrollbar-hide"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-accent transition-colors flex items-center gap-1 shrink-0"
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
            className="hover:text-accent transition-colors shrink-0"
          >
            Hizmetler
          </Link>
          <ChevronRight
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="text-white truncate" aria-current="page">
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
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-accent/20 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-accent mb-4 sm:mb-6 border border-accent/30 backdrop-blur-md"
            >
              <CheckCircle
                className="w-3 h-3 sm:w-4 sm:h-4"
                strokeWidth={2.5}
                aria-hidden="true"
              />
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight"
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
            className="mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl font-light leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
});

export default ServiceDetailHero;
