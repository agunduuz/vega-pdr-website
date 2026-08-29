"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Camera, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const PHONE_DIGITS = SITE_CONFIG.phone.replace(/[^\d]/g, "");
const WHATSAPP_LINK = `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
  SITE_CONFIG.whatsappMessage,
)}`;

/**
 * Mobilde ekranın altına sabitlenen eylem çubuğu.
 * Kullanıcı sayfayı okumaya başladıktan sonra (600px) belirir; masaüstünde
 * yerini sağ alttaki WhatsApp düğmesine bırakır.
 */
export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-primary-800/95 px-3 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] pt-3 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3.5 text-sm font-black text-primary-500 active:scale-95"
            >
              <Camera className="h-4 w-4" strokeWidth={2.5} />
              Fotoğraf gönder, fiyat al
            </a>
            <a
              href={`tel:${PHONE_DIGITS}`}
              aria-label="Hemen ara"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white active:scale-95"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
