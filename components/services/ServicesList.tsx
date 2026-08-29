// components/services/ServicesList.tsx
"use client";

import { memo, useState, useMemo, useCallback } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, Wrench, Droplet, Cloud, Car } from "lucide-react";
import { SERVICES_PAGE_DATA, FAQ_DATA, SITE_CONFIG } from "@/lib/constants";
import ServiceCard from "./ServiceCard";
import SectionHeading from "@/components/shared/SectionHeading";

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
    [shouldReduceMotion],
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
    [],
  );

  return (
    <main
      className="grow bg-background-light py-16 sm:py-24"
      id="hizmetler"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Hizmetlerimiz"
          title="İhtiyacınıza göre dört farklı çözüm"
          description="Hangisinin aracınıza uyduğundan emin değilseniz fotoğraf gönderin; doğru yöntemi biz söyleyelim."
        />

        {/* Services Grid */}
        <div
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Sıkça sorulanlar
            </span>
            <h3
              className="mt-3 text-2xl font-black text-primary-500 sm:text-3xl"
              id="faq-heading"
            >
              Aklınıza takılanlar
            </h3>
          </div>

          <div className="space-y-4" role="list" aria-labelledby="faq-heading">
            {FAQ_DATA.map((faq) => (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-primary-500/10 bg-white transition-all hover:border-primary-500/20"
                role="listitem"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-bold text-primary-500 transition-colors hover:text-primary-700"
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      openFaq === faq.id
                        ? "bg-accent text-primary-500"
                        : "bg-background-light text-primary-500"
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                      strokeWidth={2.5}
                    />
                  </span>
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
                      <div className="px-5 pb-5">
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
