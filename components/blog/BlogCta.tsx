import Link from "next/link";
import { ArrowRight, Camera, ShieldCheck, Timer } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.phone.replace(
  /[^\d]/g,
  "",
)}?text=${encodeURIComponent(
  "Merhaba, aracımdaki göçük için fotoğraf gönderip fiyat bilgisi almak istiyorum.",
)}`;

const TRUST = [
  { icon: Camera, text: "Fotoğrafla 15 dakikada ön değerlendirme" },
  { icon: ShieldCheck, text: "1 yıl işçilik garantisi" },
  { icon: Timer, text: "Tekil göçüklerde çoğunlukla aynı gün teslim" },
];

export default function BlogCta() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-16 sm:py-20">
      <div className="light-sweep" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
              Ücretsiz ekspertiz
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-white text-balance sm:text-4xl">
              Okumak iyidir; aracınızı görmek daha iyi.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Göçüğün yandan çekilmiş bir fotoğrafı, çoğu zaman yöntemi ve
              yaklaşık süreyi söylemeye yeter. Gönderin, aynı gün değerlendirip
              size dönelim.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-black text-primary-500 shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:bg-accent-light active:scale-95"
              >
                <Camera className="h-5 w-5" strokeWidth={2.5} />
                WhatsApp&apos;tan fotoğraf gönder
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
              >
                Atölyeye yol tarifi
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <ul className="space-y-4 lg:border-l lg:border-white/10 lg:pl-10">
            {TRUST.map(({ icon: Icon, text }) => (
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
