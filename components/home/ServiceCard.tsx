"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  icon: LucideIcon;
  index: number;
  shouldReduceMotion: boolean | null;
}

const MotionLink = motion.create(Link);

const ServiceCard = memo(function ServiceCard({
  id,
  title,
  description,
  image,
  slug,
  icon: Icon,
  index,
  shouldReduceMotion,
}: ServiceCardProps) {
  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <MotionLink
      href={`/hizmetler/${slug}`}
      {...fadeInUp}
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
      className="group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-2xl bg-primary-800 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-900/20"
      aria-labelledby={`service-${id}`}
    >
      <Image
        src={image}
        alt={`${title} - Vega PDR Samsun`}
        fill
        className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-85"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={72}
        priority={index === 0}
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-3 p-6">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary-500 shadow-lg shadow-accent/20"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={2.5} />
        </span>

        <h3 id={`service-${id}`} className="text-xl font-black text-white">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-white/70">{description}</p>

        <span className="mt-2 flex items-center gap-1.5 text-sm font-bold text-accent">
          Detayları gör
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </span>
      </div>

      <span className="card-line absolute bottom-0 left-0 z-10 h-[3px] w-full bg-accent" />
    </MotionLink>
  );
});

export default ServiceCard;
