import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, MapPin, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const STATS = [
  { value: "40", label: "yıllık atölye tecrübesi" },
  { value: "10.000+", label: "onarılan araç" },
  { value: "1 yıl", label: "işçilik garantisi" },
];

const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.phone.replace(
  /[^\d]/g,
  "",
)}?text=${encodeURIComponent(
  "Merhaba, aracımdaki göçüğün fotoğrafını gönderiyorum. Fiyat ve süre bilgisi alabilir miyim?",
)}`;

/**
 * Ana sayfa hero'su. Giriş animasyonu CSS ile yapılır: içerik JavaScript
 * yüklenmeden de görünür olur (bkz. globals.css → .reveal).
 */
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-primary-800 pt-28 pb-14 sm:pt-36 sm:pb-20"
      aria-label="Giriş bölümü"
    >
      {/* Atölye görseli, panel dokusu ve imza ışık hattı */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={70}
          sizes="100vw"
          className="object-cover opacity-25"
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
        <div className="reveal flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
            <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            Atakum · Samsun
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-white/60">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            1984&apos;ten beri aynı atölye, aynı ustalık
          </span>
        </div>

        <h1 className="reveal reveal-1 mt-7 max-w-4xl text-4xl font-black leading-[1.06] text-white text-balance sm:text-5xl lg:text-[4rem]">
          Göçüğü boyamadan,{" "}
          <span className="relative inline-block text-accent">
            değer kaybettirmeden
            <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/30" />
          </span>{" "}
          düzeltiyoruz.
        </h1>

        <p className="reveal reveal-2 mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Dolu hasarı, park vuruğu ve kapı eziği… Aracınızın fabrika boyasına
          dokunmadan, macun ve boya kullanmadan onarıyoruz. Ekspertiz ücretsiz,
          fiyat hasarı gördükten sonra.
        </p>

        <div className="reveal reveal-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-black text-primary-500 shadow-lg shadow-accent/25 transition-all hover:scale-[1.02] hover:bg-accent-light active:scale-95 sm:text-base"
          >
            <Camera className="h-5 w-5" strokeWidth={2.5} />
            Fotoğraf gönder, 15 dk&apos;da fiyat al
          </Link>

          <Link
            href="/hizmetler"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent sm:text-base"
          >
            Hizmetleri incele
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>

        <p className="reveal reveal-4 mt-4 text-xs text-white/50">
          Ekspertiz ve fiyat teklifi ücretsizdir; karar tamamen sizindir.
        </p>

        <dl className="reveal reveal-5 mt-11 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-black text-accent sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-white/60">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
