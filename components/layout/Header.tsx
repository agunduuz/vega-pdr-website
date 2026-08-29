// components/layout/Header.tsx
"use client";

import { useState, useEffect, memo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Camera, Menu, Phone, X } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const PHONE_DIGITS = SITE_CONFIG.phone.replace(/[^\d]/g, "");

const Header = memo(function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion() ?? false;

  const whatsappLink = `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage,
  )}`;

  /** Sayfalar koyu hero ile açılıyor: üstteyken başlık şeffaf, kaydırınca beyaz. */
  const isTransparent = !isScrolled;

  const isActiveLink = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent py-4"
            : "border-b border-primary-500/10 bg-white/95 py-2.5 shadow-sm backdrop-blur-md"
        }`}
        role="banner"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-10">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Vega Boyasız Göçük Düzeltme ana sayfa"
          >
            <Image
              src="/vega-logo.svg"
              alt="Vega Logo"
              width={80}
              height={40}
              className={`h-10 w-auto transition-transform duration-300 hover:scale-105 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Masaüstü navigasyon */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Ana navigasyon"
          >
            {NAV_LINKS.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-accent"
                      : isTransparent
                        ? "text-white/80 hover:text-white"
                        : "text-slate-custom hover:text-primary-500"
                  }`}
                >
                  {link.label}

                  {isActive ? (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                        isTransparent ? "bg-white/60" : "bg-primary-500"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Eylemler */}
          <div className="flex items-center gap-2">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-black text-primary-500 shadow-md shadow-accent/20 transition-all hover:scale-105 hover:bg-accent-light md:flex"
              aria-label="WhatsApp ile fiyat teklifi alın"
            >
              <Camera className="h-4 w-4" strokeWidth={2.5} />
              <span className="whitespace-nowrap">Fotoğraf gönder</span>
            </Link>

            {/* Mobilde tek dokunuşla arama */}
            <a
              href={`tel:${PHONE_DIGITS}`}
              aria-label="Hemen ara"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
                isTransparent
                  ? "bg-white/10 text-white"
                  : "bg-background-light text-primary-500"
              }`}
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
            </a>

            <button
              id="menu-button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
                isTransparent
                  ? "bg-white/10 text-white"
                  : "bg-background-light text-primary-500"
              }`}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={reduceMotion ? {} : { rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={reduceMotion ? {} : { rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" strokeWidth={2.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={reduceMotion ? {} : { rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={reduceMotion ? {} : { rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-primary-900/60 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            <motion.nav
              id="mobile-menu"
              initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={{ x: 0, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col overflow-y-auto bg-primary-800 shadow-2xl md:hidden"
              aria-label="Mobil navigasyon"
            >
              <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />

              <div className="relative flex items-center justify-between p-6">
                <Image
                  src="/vega-logo.svg"
                  alt="Vega Logo"
                  width={78}
                  height={40}
                  className="h-9 w-auto brightness-0 invert"
                />
                <button
                  onClick={closeMobileMenu}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
                  aria-label="Menüyü kapat"
                >
                  <X className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>

              <div className="relative flex flex-1 flex-col gap-1 px-4">
                {NAV_LINKS.map((link, index) => {
                  const isActive = isActiveLink(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={reduceMotion ? {} : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: reduceMotion ? 0 : index * 0.06,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-bold transition-all ${
                          isActive
                            ? "bg-white/10 text-accent"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <span className="h-5 w-1 rounded-full bg-accent" />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="relative border-t border-white/10 p-6">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-black text-primary-500"
                >
                  <Camera className="h-5 w-5" strokeWidth={2.5} />
                  Fotoğraf gönder, fiyat al
                </Link>

                <a
                  href={`tel:${PHONE_DIGITS}`}
                  className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 text-sm font-bold text-white"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} />
                  {SITE_CONFIG.phone}
                </a>

                <p className="mt-4 text-center text-xs text-white/40">
                  {SITE_CONFIG.workingHours}
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default Header;
