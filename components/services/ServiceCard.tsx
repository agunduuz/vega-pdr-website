"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

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
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      {...fadeInUp}
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      }}
    >
      <Link
        href={`/hizmetler/${slug}`}
        className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100 h-full"
        aria-label={`${title} hizmetimiz hakkında detaylı bilgi`}
      >
        {/* Image */}
        <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={`${title} - Vega Boyasız Göçük Düzeltme`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 343px"
            quality={75}
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Icon */}
          <div
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-accent"
            aria-hidden="true"
          >
            <Icon className="w-6 h-6" strokeWidth={2} />
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-primary-500">{title}</h3>

          {/* Description */}
          <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-custom">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm font-bold text-primary-500 group-hover:text-accent transition-colors">
              Detaylı Bilgi
            </span>
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-primary-500 group-hover:bg-accent group-hover:text-primary-500 transition-colors"
              aria-hidden="true"
            >
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

export default ServiceCard;
