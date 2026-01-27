"use client";

import { useState, useEffect, memo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const Header = memo(function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Reduced motion
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  const isGalleryPage = pathname === "/galeri";

  // WhatsApp link
  const whatsappLink = `https://wa.me/${SITE_CONFIG.phone.replace(
    /\s/g,
    "",
  )}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  // Check if link is active
  const isActiveLink = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      if (href.startsWith("#")) {
        return (
          pathname === "/" &&
          typeof window !== "undefined" &&
          window.location.hash === href
        );
      }
      return pathname === href;
    },
    [pathname],
  );

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
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

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isGalleryPage
            ? "bg-primary-700 shadow-lg py-3"
            : isScrolled
              ? "bg-white shadow-lg py-2"
              : "bg-white/95 backdrop-blur-md py-3"
        }`}
        role="banner"
      >
        <div className="layout-container flex justify-center">
          <div className="flex w-full max-w-7xl items-center justify-between px-4 md:px-10">
            {/* Logo - Fixed */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Vega Boyasız Göçük Düzeltme Ana Sayfa"
            >
              <div className="relative h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/vega-logo.svg"
                  alt="Vega Logo"
                  width={80}
                  height={40}
                  className={`h-10 w-auto ${
                    isGalleryPage ? "brightness-0 invert" : ""
                  }`}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Ana navigasyon"
            >
              {NAV_LINKS.map((link) => {
                const isActive = isActiveLink(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors group ${
                      isActive
                        ? "text-accent font-bold"
                        : isGalleryPage
                          ? "text-white hover:text-accent"
                          : "text-slate-custom hover:text-primary-500"
                    }`}
                  >
                    {link.label}

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover underline */}
                    {!isActive && (
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                          isGalleryPage ? "bg-white" : "bg-primary-700"
                        }`}
                      ></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center gap-2 rounded-full h-10 px-5 bg-accent hover:bg-accent/90 text-primary-500 transition-all duration-300 text-sm font-bold shadow-md hover:shadow-lg hover:scale-105"
              aria-label="WhatsApp ile fiyat teklifi al"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span className="whitespace-nowrap">WhatsApp ile Fiyat Al</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              id="menu-button"
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isGalleryPage ? "hover:bg-white/10" : "hover:bg-gray-100"
              }`}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={
                      shouldReduceMotion ? {} : { rotate: -90, opacity: 0 }
                    }
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? {} : { rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X
                      className={`w-6 h-6 ${
                        isGalleryPage ? "text-white" : "text-primary-500"
                      }`}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={
                      shouldReduceMotion ? {} : { rotate: 90, opacity: 0 }
                    }
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? {} : { rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu
                      className={`w-6 h-6 ${
                        isGalleryPage ? "text-white" : "text-slate-custom"
                      }`}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <motion.nav
              id="mobile-menu"
              initial={shouldReduceMotion ? {} : { x: "100%" }}
              animate={{ x: 0 }}
              exit={shouldReduceMotion ? {} : { x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-70 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              aria-label="Mobil navigasyon menüsü"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 pb-0">
                  <div className="relative h-10 flex items-center justify-center">
                    <Image
                      src="/vega-logo.svg"
                      alt="Vega Logo"
                      width={78}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Menüyü kapat"
                  >
                    <X
                      className="w-5 h-5 text-slate-custom"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col gap-1 p-4 flex-1">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = isActiveLink(link.href);

                    return (
                      <motion.div
                        key={link.href}
                        initial={
                          shouldReduceMotion ? {} : { opacity: 0, x: 20 }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : index * 0.1,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                            isActive
                              ? "bg-accent/10 text-accent font-bold"
                              : "text-slate-custom hover:bg-primary-700/5 hover:text-primary-500"
                          }`}
                        >
                          {isActive && (
                            <span className="w-1 h-6 bg-accent rounded-full"></span>
                          )}
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Menu CTA */}
                <div className="p-6 border-t border-gray-100">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 w-full rounded-lg h-12 bg-accent hover:bg-accent/90 text-primary-500 transition-all duration-300 font-bold shadow-md hover:shadow-lg"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2.5} />
                    <span>WhatsApp ile Fiyat Al</span>
                  </Link>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center mb-2">
                      Hemen Ara
                    </p>
                    <Link
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                      className="text-primary-500 font-bold text-lg text-center block hover:text-primary-600 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default Header;
