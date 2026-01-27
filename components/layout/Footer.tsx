"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Clock, ExternalLink, Code } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import InteractiveMap from "./InteractiveMap";

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  // Reduced motion
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  // WhatsApp link
  const whatsappLink = `https://wa.me/${SITE_CONFIG.phone.replace(
    /\s/g,
    "",
  )}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  // Animation variants
  const fadeInUp = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <footer
      className="w-full bg-primary-500 text-white"
      id="contact"
      role="contentinfo"
    >
      <div className="layout-container flex justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-7xl">
          {/* Contact Info */}
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center gap-8">
            {/* Header */}
            <motion.div
              {...fadeInUp}
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Hemen Fiyat Alın
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Hasarlı bölgenin fotoğrafını WhatsApp üzerinden gönderin, 10
                dakika içinde ön fiyat bilgisi verelim.
              </p>
            </motion.div>

            {/* Contact Items */}
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <motion.div
                {...fadeInUp}
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.1,
                }}
              >
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="WhatsApp ile iletişime geç"
                >
                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }
                    }
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 flex h-12 rounded-full bg-accent text-primary-500 items-center justify-center shadow-lg"
                  >
                    <Phone className="w-6 h-6" strokeWidth={2.5} />
                  </motion.div>
                  <div>
                    <p className="text-xs text-accent font-bold uppercase tracking-wider">
                      Telefon
                    </p>
                    <p className="text-xl font-bold group-hover:text-accent transition-colors">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Address */}
              <motion.div
                {...fadeInUp}
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.2,
                }}
              >
                <Link
                  href={SITE_CONFIG.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="Google Maps'te konumu görüntüle"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MapPin className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      Adres
                    </p>
                    <p className="text-lg leading-snug group-hover:text-accent transition-colors">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                {...fadeInUp}
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.3,
                }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <Clock className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Çalışma Saatleri
                  </p>
                  <p className="text-lg">{SITE_CONFIG.workingHours}</p>
                  <p className="text-sm text-gray-400">
                    {SITE_CONFIG.workingHoursFull}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
              {...fadeInUp}
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.4,
              }}
              className="pt-8 border-t border-white/10"
            >
              <div className="flex flex-col justify-between gap-4">
                <div className="text-sm text-gray-400">
                  © {currentYear} {SITE_CONFIG.fullName}. Tüm hakları saklıdır.
                </div>

                {/* Developer Credit */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Web Designer:</span>
                  <Link
                    href="https://www.linkedin.com/in/anilgunduuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/30 transition-all"
                  >
                    <span className="text-gray-300 group-hover:text-accent font-medium transition-colors">
                      Anıl Gündüz
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent transition-colors" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Maps iFrame */}
          <InteractiveMap
            shouldReduceMotion={shouldReduceMotion}
            fadeInUp={fadeInUp}
          />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
