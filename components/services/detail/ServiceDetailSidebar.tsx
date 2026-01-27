"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { Camera, CheckCircle, ArrowRight } from "lucide-react";
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
  // WhatsApp link
  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${SITE_CONFIG.phone.replace(
        /\s/g,
        ""
      )}?text=${encodeURIComponent(
        "Merhaba, aracımın fotoğraflarını göndererek fiyat teklifi almak istiyorum."
      )}`,
    []
  );

  // Get other services
  const otherServices = useMemo(() => {
    const allSlugs = getAllServiceSlugs();
    return allSlugs
      .filter((slug) => slug !== currentSlug)
      .map((slug) => SERVICES_DETAILS[slug])
      .slice(0, 3);
  }, [currentSlug]);

  return (
    <div className="lg:sticky lg:top-28 space-y-6 lg:space-y-8">
      {/* Quick Quote Card */}
      <div className="rounded-xl lg:rounded-2xl bg-white p-6 lg:p-8 shadow-lg lg:shadow-xl border border-gray-100">
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <div className="bg-accent/10 p-2 rounded-lg text-accent">
            <Camera className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-primary-500">
            Hızlı Teklif Al
          </h3>
        </div>
        <p className="text-sm text-slate-custom mb-4 lg:mb-6 leading-relaxed">
          Hasarlı bölgenin fotoğrafını WhatsApp üzerinden gönderin, 15 dakika
          içinde fiyat ve süre bilgisi iletelim.
        </p>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 lg:px-6 py-3 lg:py-4 text-sm lg:text-base text-primary-500 font-bold shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-95"
        >
          <Camera className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={2.5} />
          <span className="whitespace-nowrap">
            WhatsApp ile Fotoğraf Gönder
          </span>
        </Link>
      </div>

      {/* Service Benefits Card */}
      <div className="rounded-xl lg:rounded-2xl bg-primary-500 p-6 lg:p-8 text-white shadow-lg">
        <h4 className="text-base lg:text-lg font-bold mb-4 lg:mb-6 flex items-center gap-2">
          <CheckCircle
            className="w-5 h-5 lg:w-6 lg:h-6 text-accent"
            strokeWidth={2.5}
          />
          Hizmet Avantajları
        </h4>
        <ul className="space-y-3 lg:space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                <CheckCircle
                  className="w-3 h-3 lg:w-4 lg:h-4 text-accent"
                  strokeWidth={2.5}
                />
              </div>
              <p className="text-sm lg:text-base font-medium leading-relaxed">
                {benefit}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Other Services Card */}
      {otherServices.length > 0 && (
        <div className="rounded-xl lg:rounded-2xl bg-gray-50 p-6 lg:p-8 border border-gray-200">
          <h4 className="text-base lg:text-lg font-bold text-primary-500 mb-4 lg:mb-6">
            Diğer Hizmetlerimiz
          </h4>
          <div className="space-y-2 lg:space-y-3">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100 hover:border-accent transition-all shadow-sm"
              >
                <span className="text-sm font-medium text-slate-custom group-hover:text-primary-500 truncate pr-2">
                  {service.title}
                </span>
                <ArrowRight
                  className="shrink-0 w-4 h-4 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all"
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
