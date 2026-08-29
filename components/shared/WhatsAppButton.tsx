"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Masaüstünde sağ altta duran hızlı erişim düğmesi.
 * Mobilde yerini alttaki sabit eylem çubuğuna bırakır (StickyCta).
 */
export default function WhatsAppButton() {
  const reduceMotion = useReducedMotion() ?? false;

  const whatsappLink = `https://wa.me/${SITE_CONFIG.phone.replace(
    /[^\d]/g,
    "",
  )}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile fotoğraf gönderip fiyat alın"
      className="group fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-full bg-primary-500 py-3 pl-3 pr-4 text-white shadow-2xl shadow-primary-900/30 transition-colors hover:bg-primary-600 md:flex"
      initial={reduceMotion ? { opacity: 0 } : { scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary-500">
        <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="pr-1 text-left leading-tight">
        <span className="block text-[11px] font-medium text-white/60">
          Ücretsiz ekspertiz
        </span>
        <span className="block text-sm font-bold">Fotoğraf gönder</span>
      </span>
    </motion.a>
  );
}
