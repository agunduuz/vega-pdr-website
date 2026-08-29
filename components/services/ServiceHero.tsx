import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const HIGHLIGHTS = [
  "Boyasız göçük düzeltme",
  "Dolu hasarı",
  "Lokal boya",
  "Kaporta onarımı",
];

const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.phone.replace(
  /[^\d]/g,
  "",
)}?text=${encodeURIComponent(
  "Merhaba, hangi hizmetin aracıma uygun olduğunu öğrenmek istiyorum.",
)}`;

/** Giriş animasyonu CSS ile (bkz. globals.css → .reveal). */
export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-primary-800 pt-28 pb-16 sm:pt-36 sm:pb-24"
      aria-labelledby="services-hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/services/hero-bg.webp"
          alt=""
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-800/40" />
      </div>
      <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />
      <div className="light-sweep" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-10">
        <nav className="reveal" aria-label="Sayfa yolu">
          <ol className="flex items-center gap-1.5 text-xs font-medium text-white/50">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Ana Sayfa
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <li className="text-white/80" aria-current="page">
              Hizmetler
            </li>
          </ol>
        </nav>

        <div className="reveal reveal-1 mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            40 yıllık ustalık
          </span>
        </div>

        <h1
          id="services-hero-heading"
          className="reveal reveal-2 mt-6 max-w-3xl text-4xl font-black leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl"
        >
          Her hasarın{" "}
          <span className="relative inline-block text-accent">
            kendi yöntemi
            <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/30" />
          </span>{" "}
          vardır.
        </h1>

        <p className="reveal reveal-3 mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Aynı göçüğe iki farklı yöntem uygulanabilir; doğrusu, aracınıza en az
          müdahale edeni ve değerini koruyanıdır. Hangisinin uygun olduğunu
          ücretsiz ekspertizde birlikte belirliyoruz.
        </p>

        <ul
          className="reveal reveal-4 mt-8 flex flex-wrap gap-2"
          aria-label="Hizmet başlıkları"
        >
          {HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="reveal reveal-5 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-black text-primary-500 shadow-lg shadow-accent/25 transition-all hover:scale-[1.02] hover:bg-accent-light active:scale-95"
          >
            <Camera className="h-5 w-5" strokeWidth={2.5} />
            Fotoğraf gönder, yöntemi öğren
          </Link>

          <Link
            href="#hizmetler"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
          >
            Hizmetleri incele
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vega Boyasız Göçük Düzeltme Hizmetleri",
            description:
              "Boyasız göçük düzeltme, dolu hasarı onarımı, lokal boya ve kaporta onarımı hizmetleri.",
            provider: {
              "@type": "LocalBusiness",
              name: SITE_CONFIG.fullName,
              telephone: SITE_CONFIG.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_CONFIG.address,
                addressLocality: "Samsun",
                addressCountry: "TR",
              },
            },
            areaServed: "Samsun",
            serviceType: [
              "Boyasız Göçük Düzeltme",
              "Dolu Hasarı Onarımı",
              "Kaporta Onarımı",
              "Lokal Boya",
            ],
          }),
        }}
      />
    </section>
  );
}
