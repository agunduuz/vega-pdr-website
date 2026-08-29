"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  shouldReduceMotion: boolean;
}

const FeatureCard = memo(function FeatureCard({
  id,
  title,
  description,
  icon: Icon,
  index,
  shouldReduceMotion,
}: FeatureCardProps) {
  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.article
      {...fadeInUp}
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
      className="group relative overflow-hidden rounded-2xl border border-primary-500/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/20 hover:shadow-xl hover:shadow-primary-500/10"
      aria-labelledby={`feature-${id}`}
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-accent transition-colors group-hover:bg-accent group-hover:text-primary-500"
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </span>

      <h3
        id={`feature-${id}`}
        className="mt-5 text-lg font-black text-primary-500"
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-custom">
        {description}
      </p>

      <span className="card-line absolute bottom-0 left-0 h-[3px] w-full bg-accent" />
    </motion.article>
  );
});

export default FeatureCard;
