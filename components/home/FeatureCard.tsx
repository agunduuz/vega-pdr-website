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
  // Animation variant
  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.article
      {...fadeInUp}
      whileInView="animate"
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      }}
      className="flex flex-col items-center text-center gap-3 p-4 group cursor-pointer will-change-transform"
      aria-labelledby={`feature-${id}`}
    >
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/5 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-lg"
        aria-hidden="true"
      >
        <Icon className="w-8 h-8" strokeWidth={2} />
      </motion.div>

      <h3
        id={`feature-${id}`}
        className="text-primary-500 text-xl font-bold group-hover:text-primary-600 transition-colors"
      >
        {title}
      </h3>

      <p className="text-slate-custom leading-relaxed">{description}</p>
    </motion.article>
  );
});

export default FeatureCard;
