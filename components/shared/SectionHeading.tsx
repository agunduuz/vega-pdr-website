"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Koyu zeminde kullanıldığında metin renkleri açılır. */
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
  id?: string;
}

/**
 * Site genelindeki bölüm başlığı: kehribar ışık hattı + üst etiket + başlık.
 * Tekrar eden başlık bloklarını tek bir ritimde tutar.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  action,
  id,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const isDark = tone === "dark";
  const isCenter = align === "center";

  const enter = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row sm:items-end ${
        action ? "sm:justify-between" : ""
      } ${isCenter ? "text-center" : ""}`}
    >
      <div className={isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        <motion.div
          {...enter(0)}
          className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
        >
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h2
          {...enter(0.08)}
          id={id}
          className={`mt-4 text-3xl font-black leading-[1.15] text-balance sm:text-4xl ${
            isDark ? "text-white" : "text-primary-500"
          }`}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            {...enter(0.14)}
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              isDark ? "text-white/70" : "text-slate-custom"
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>

      {action && (
        <motion.div {...enter(0.2)} className="shrink-0">
          {action}
        </motion.div>
      )}
    </div>
  );
}
