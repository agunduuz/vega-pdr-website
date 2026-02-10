"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
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
  // Animation variant
  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <MotionLink
      href={`/hizmetler/${slug}`} // ✅ slug prop'u ekle
      {...fadeInUp}
      whileInView="animate"
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      }}
      className="group relative flex flex-col justify-end overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-100 cursor-pointer will-change-transform"
      aria-labelledby={`service-${id}`}
    >
      {/* Background Image with Blur Placeholder */}
      <div className="absolute inset-0 bg-primary-500/10">
        <Image
          src={image}
          alt={`${title} - Profesyonel araç onarım hizmeti`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          priority={index === 0}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-t from-primary-500/90 via-primary-500/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-2 transform transition-transform duration-300 group-hover:-translate-y-2">
        <motion.div
          whileHover={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-2 text-primary-500 shadow-lg"
          aria-hidden="true"
        >
          <Icon className="w-5 h-5" strokeWidth={2.5} />
        </motion.div>

        <h3 id={`service-${id}`} className="text-white text-xl font-bold">
          {title}
        </h3>

        <p className="text-gray-200 text-sm font-medium leading-relaxed">
          {description}
        </p>

        {/* Hover indicator */}
        <div
          className="flex items-center gap-2 text-accent font-bold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <span>Detaylı Bilgi</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </MotionLink>
  );
});

export default ServiceCard;
