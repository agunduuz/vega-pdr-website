"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SERVICES_DETAILS, getAllServiceSlugs } from "@/lib/services-data";

interface ServiceDetailSidebarProps {
  currentSlug: string;
  benefits: string[];
}

const ServiceDetailSidebar = memo(function ServiceDetailSidebar({
  currentSlug,
  benefits,
}: ServiceDetailSidebarProps) {
  const phoneDigits = SITE_CONFIG.phone.replace(/[^\d]/g, "");

  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
        "Merhaba, aracımın fotoğraflarını göndererek fiyat teklifi almak istiyorum.",
      )}`,
    [phoneDigits],
  );

  const otherServices = useMemo(() => {
    return getAllServiceSlugs()
      .filter((slug) => slug !== currentSlug)
      .map((slug) => SERVICES_DETAILS[slug])
      .slice(0, 3);
  }, [currentSlug]);

  return (
    <div className="space-y-6 lg:sticky lg:top-28 lg:space-y-8">
      {/* Dönüşüm kartı */}
      <div className="overflow-hidden rounded-2xl bg-primary-500 p-6 text-white shadow-lg lg:p-7">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">
          Ücretsiz ekspertiz
        </span>
        <p className="mt-3 text-lg font-bold leading-snug">
          15 dakikada ön fiyat alın
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Hasarlı bölgenin yandan çekilmiş fotoğrafını gönderin; yöntemi, süreyi
          ve fiyat aralığını iletelim.
        </p>

        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-sm font-black text-primary-500 transition-all hover:bg-accent-light active:scale-95"
        >
          <Camera className="h-4 w-4" strokeWidth={2.5} />
          WhatsApp&apos;tan fotoğraf gönder
        </Link>

        <a
          href={`tel:${phoneDigits}`}
          className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          {SITE_CONFIG.phone}
        </a>

        <Link
          href="/iletisim"
          className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-accent"
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
          Atakum / Samsun — yol tarifi
        </Link>
      </div>

      {/* Hizmet avantajları */}
      <div className="rounded-2xl border border-primary-500/10 bg-white p-6 lg:p-7">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-custom">
          Bu hizmette
        </h2>
        <ul className="mt-4 space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                <CheckCircle className="h-3 w-3 text-accent-dark" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-primary-700">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Diğer hizmetler */}
      {otherServices.length > 0 && (
        <div className="rounded-2xl border border-primary-500/10 bg-white p-6 lg:p-7">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-custom">
            Diğer hizmetler
          </h2>
          <div className="mt-4 space-y-2">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-primary-500/10 px-4 py-3 transition-all hover:border-accent hover:bg-background-light"
              >
                <span className="truncate text-sm font-semibold text-slate-custom transition-colors group-hover:text-primary-500">
                  {service.title}
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-accent"
                  strokeWidth={2.5}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default ServiceDetailSidebar;
