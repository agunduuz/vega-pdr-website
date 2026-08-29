"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  slug: string;
  index: number;
  shouldReduceMotion: boolean;
}

const ServiceCard = memo(function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  slug,
  index,
  shouldReduceMotion,
}: ServiceCardProps) {
  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      {...fadeInUp}
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
      className="h-full"
    >
      <Link
        href={`/hizmetler/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary-500/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/20 hover:shadow-xl hover:shadow-primary-500/10"
        aria-label={`${title} hizmetimiz hakkında detaylı bilgi`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-800">
          <Image
            src={image}
            alt={`${title} - Vega Boyasız Göçük Düzeltme`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={72}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent" />

          <span
            className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary-500 shadow-lg shadow-primary-900/20"
            aria-hidden="true"
          >
            <Icon className="h-5 w-5" strokeWidth={2.5} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-black leading-snug text-primary-500">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-custom">
            {description}
          </p>

          <span className="mt-6 flex items-center gap-1.5 text-sm font-bold text-primary-500">
            Detayları gör
            <ArrowUpRight
              className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </span>
        </div>

        <span className="card-line absolute bottom-0 left-0 h-[3px] w-full bg-accent" />
      </Link>
    </motion.div>
  );
});

export default ServiceCard;
