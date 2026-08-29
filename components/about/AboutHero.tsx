// components/about/AboutHero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronRight, Star } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-800 pt-28 pb-16 sm:pt-36 sm:pb-24">
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
              Hakkımızda
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Metin */}
          <div className="order-2 lg:order-1">
            <div className="reveal reveal-1 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                1984&apos;ten beri
              </span>
            </div>

            <h1 className="reveal reveal-2 mt-6 text-4xl font-black leading-[1.08] text-white text-balance sm:text-5xl lg:text-[3.5rem]">
              Metale dokunmayı{" "}
              <span className="relative inline-block text-accent">
                kırk yılda
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/30" />
              </span>{" "}
              öğrendik.
            </h1>

            <p className="reveal reveal-3 mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Samsun&apos;da dört kuşaktır aynı işi yapıyoruz: paneli boyamadan,
              macun sürmeden, metalin kendi hafızasıyla yerine oturtarak.
              Aracınızın orijinalliği bizim için bir tercih değil, çalışma
              biçimimizin sonucu.
            </p>

            <div className="reveal reveal-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#hikaye"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-black text-primary-500 shadow-lg shadow-accent/25 transition-all hover:scale-[1.02] hover:bg-accent-light active:scale-95"
              >
                Hikâyemizi okuyun
                <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                href="/galeri"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
              >
                Yaptığımız işlere bakın
              </Link>
            </div>
          </div>

          {/* Görsel */}
          <div className="reveal reveal-2 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-primary-900/40">
              <Image
                src="/images/about/about-hero-bg.webp"
                alt="Vega PDR ustası özel ışıklarla araç panelini incelerken — Samsun boyasız göçük düzeltme"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={75}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Tecrübe kartı */}
            <div className="absolute -bottom-5 -left-3 z-20 max-w-[190px] rounded-2xl border border-primary-500/10 bg-white p-5 shadow-2xl sm:-left-6 lg:-left-10">
              <div className="flex items-center gap-2">
                <Star className="h-7 w-7 fill-accent text-accent" />
                <span className="text-4xl font-black text-primary-500">40</span>
              </div>
              <p className="mt-2 text-xs font-semibold leading-tight text-slate-custom">
                yıllık atölye tecrübesi, on binlerce onarılan panel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
