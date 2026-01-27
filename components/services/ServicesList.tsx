"use client";

import { memo, useState, useMemo, useCallback } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, Wrench, Droplet, Cloud, Car } from "lucide-react";
import { SERVICES_PAGE_DATA, FAQ_DATA, SITE_CONFIG } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

// Icon mapping
const ICON_MAP = {
  Wrench,
  Droplet,
  Cloud,
  Car,
} as const;

const ServicesList = memo(function ServicesList() {
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = shouldReduceMotionRaw ?? false;

  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // ✅ useMemo: Animation variant
  const fadeInUp = useMemo(
    () =>
      shouldReduceMotion
        ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
        : {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          },
    [shouldReduceMotion]
  );

  // ✅ useCallback: FAQ toggle
  const toggleFaq = useCallback((faqId: string) => {
    setOpenFaq((prev) => (prev === faqId ? null : faqId));
  }, []);

  // ✅ useMemo: Services with icons
  const servicesWithIcons = useMemo(
    () =>
      SERVICES_PAGE_DATA.map((service) => ({
        ...service,
        iconComponent: ICON_MAP[service.icon as keyof typeof ICON_MAP],
      })),
    []
  );

  return (
    <main
      className="grow bg-gray-50 py-16 sm:py-24"
      id="hizmetler"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="mb-12 md:flex md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <h2
              id="services-heading"
              className="text-3xl font-black tracking-tight text-primary-500 sm:text-4xl"
            >
              Hizmetlerimiz
            </h2>
            <p className="mt-4 text-lg text-slate-custom">
              İhtiyacınıza uygun, hızlı ve güvenilir çözümler.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Hizmet listesi"
        >
          {servicesWithIcons.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.iconComponent}
              image={service.image}
              slug={service.slug}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          {...fadeInUp}
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.6,
          }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h3
            className="text-2xl font-bold text-primary-500 mb-8 text-center"
            id="faq-heading"
          >
            Sıkça Sorulan Sorular
          </h3>

          <div className="space-y-4" role="list" aria-labelledby="faq-heading">
            {FAQ_DATA.map((faq) => (
              <div
                key={faq.id}
                className="rounded-lg border border-gray-200 bg-white transition-all"
                role="listitem"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between p-4 text-left font-bold text-primary-500 hover:text-accent transition-colors"
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={
                        shouldReduceMotion ? {} : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <p className="text-sm leading-relaxed text-slate-custom">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ✅ Schema.org - FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* ✅ Schema.org - Service List */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: servicesWithIcons.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "LocalBusiness",
                  name: SITE_CONFIG.fullName,
                },
              },
            })),
          }),
        }}
      />
    </main>
  );
});

export default ServicesList;
