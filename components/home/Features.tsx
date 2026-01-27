"use client";

import { useReducedMotion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { Award, ShieldCheck, ThumbsUp, LucideIcon } from "lucide-react";
import FeatureCard from "./FeatureCard";

// Icon mapping - Component DIŞINDA (her render'da yeniden oluşturulmaz)
const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "shield-check": ShieldCheck,
  "thumbs-up": ThumbsUp,
};

export default function Features() {
  // Reduced motion preference kontrol et
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  return (
    <section
      className="w-full bg-white border-y border-gray-100"
      aria-labelledby="features-heading"
    >
      <div className="layout-container flex justify-center">
        <div className="w-full max-w-7xl px-4 py-12 md:px-10">
          {/* Screen reader için gizli başlık */}
          <h2 id="features-heading" className="sr-only">
            Özelliklerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                icon={iconMap[feature.icon]}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
