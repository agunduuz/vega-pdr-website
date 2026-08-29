"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Code,
  ExternalLink,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import InteractiveMap from "./InteractiveMap";

const PHONE_DIGITS = SITE_CONFIG.phone.replace(/[^\d]/g, "");

const SERVICE_LINKS = [
  { href: "/hizmetler/boyasiz-gocuk-duzeltme", label: "Boyasız Göçük Düzeltme" },
  { href: "/hizmetler/dolu-hasari", label: "Dolu Hasarı Onarımı" },
  { href: "/hizmetler/lokal-boya", label: "Lokal Boya" },
  { href: "/hizmetler/kaporta-boya-onarim", label: "Kaporta & Boya" },
];

const SITE_LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion() ?? false;

  const whatsappLink = `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage,
  )}`;

  const fadeInUp = reduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <footer
      className="relative overflow-hidden bg-primary-900 text-white"
      id="contact"
      role="contentinfo"
    >
      <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr]">
          {/* Marka + hızlı iletişim */}
          <div>
            <Image
              src="/vega-logo.svg"
              alt="Vega Boyasız Göçük Düzeltme"
              width={96}
              height={44}
              className="h-11 w-auto brightness-0 invert"
            />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Samsun Atakum&apos;da 40 yıldır boyasız göçük düzeltme yapıyoruz.
              Fabrika boyasına dokunmadan, değer kaybettirmeden.
            </p>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 flex w-fit items-center gap-4"
              aria-label="WhatsApp ile iletişime geç"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-500 shadow-lg shadow-accent/20 transition-transform group-hover:scale-105">
                <Phone className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Telefon & WhatsApp
                </span>
                <span className="block text-lg font-black transition-colors group-hover:text-accent">
                  {SITE_CONFIG.phone}
                </span>
              </span>
            </Link>

            <Link
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="h-4 w-4" strokeWidth={2.2} />
              Instagram&apos;da takip edin
            </Link>
          </div>

          {/* Bağlantılar */}
          <motion.nav
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="grid grid-cols-2 gap-8"
            aria-label="Alt bilgi navigasyonu"
          >
            <div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                Hizmetler
              </h2>
              <ul className="mt-4 space-y-2.5">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                Kurumsal
              </h2>
              <ul className="mt-4 space-y-2.5">
                {SITE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>

          {/* Adres & saatler */}
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}
            className="space-y-6"
          >
            <Link
              href={SITE_CONFIG.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                  Adres
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-white/70 transition-colors group-hover:text-accent">
                  {SITE_CONFIG.address}
                </span>
              </span>
            </Link>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                <Clock className="h-5 w-5" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                  Çalışma saatleri
                </span>
                <span className="mt-1 block text-sm text-white/70">
                  {SITE_CONFIG.workingHours}
                </span>
                <span className="block text-sm text-white/40">
                  {SITE_CONFIG.workingHoursFull}
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Harita */}
      <div className="relative mt-14 flex">
        <InteractiveMap shouldReduceMotion={reduceMotion} fadeInUp={fadeInUp} />
      </div>

      {/* Alt şerit */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {currentYear} {SITE_CONFIG.fullName}. Tüm hakları saklıdır.
          </p>

          <Link
            href="https://www.linkedin.com/in/anilgunduuz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition-all hover:border-accent/40"
          >
            <Code className="h-3.5 w-3.5 text-white/40 transition-colors group-hover:text-accent" />
            <span className="text-white/60 transition-colors group-hover:text-accent">
              Anıl Gündüz
            </span>
            <ExternalLink className="h-3 w-3 text-white/30 transition-colors group-hover:text-accent" />
          </Link>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
