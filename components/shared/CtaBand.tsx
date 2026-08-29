import Link from "next/link";
import { ArrowRight, Camera, Phone, ShieldCheck, Timer } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const PHONE_DIGITS = SITE_CONFIG.phone.replace(/[^\d]/g, "");

const DEFAULT_POINTS = [
  { icon: Camera, text: "Fotoğrafla 15 dakikada ön değerlendirme" },
  { icon: ShieldCheck, text: "1 yıl işçilik garantisi" },
  { icon: Timer, text: "Tekil göçüklerde çoğunlukla aynı gün teslim" },
];

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** WhatsApp'a önceden yazılan mesaj; sayfaya göre bağlam kazanır. */
  whatsappMessage?: string;
  primaryLabel?: string;
}

/**
 * Sitenin ana dönüşüm bandı. Her sayfanın sonunda aynı ritimde tekrarlanır:
 * koyu zemin, kayan ışık hattı, tek net eylem ve yanında güven sinyalleri.
 */
export default function CtaBand({
  eyebrow = "Ücretsiz ekspertiz",
  title = "Aracınızı görmeden fiyat vermiyoruz.",
  description = "Göçüğün yandan çekilmiş bir fotoğrafı çoğu zaman yöntemi ve süreyi söylemeye yeter. Gönderin, 15 dakika içinde dönelim.",
  whatsappMessage = "Merhaba, aracımdaki hasar için fotoğraf gönderip fiyat bilgisi almak istiyorum.",
  primaryLabel = "WhatsApp'tan fotoğraf gönder",
}: CtaBandProps) {
  const whatsappLink = `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className="relative overflow-hidden bg-primary-800 py-16 sm:py-20">
      <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />
      <div className="light-sweep" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                {eyebrow}
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight text-white text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-black text-primary-500 shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:bg-accent-light active:scale-95"
              >
                <Camera className="h-5 w-5" strokeWidth={2.5} />
                {primaryLabel}
              </a>

              <a
                href={`tel:${PHONE_DIGITS}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {SITE_CONFIG.phone}
              </a>
            </div>

            <Link
              href="/iletisim"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-accent"
            >
              Atölyeye yol tarifi al
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>

          <ul className="space-y-4 lg:border-l lg:border-white/10 lg:pl-10">
            {DEFAULT_POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Icon className="h-4 w-4 text-accent" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium leading-relaxed text-white/80">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
