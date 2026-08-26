"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Sayfanın üstünde ilerleyen ışık hattı: ne kadar okuduğunuzu gösterir. */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-accent"
      aria-hidden="true"
    />
  );
}
