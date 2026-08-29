import Link from "next/link";
import { Camera, ChevronRight, MoveHorizontal } from "lucide-react";
import { GALLERY_ITEMS, SITE_CONFIG } from "@/lib/constants";

const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.phone.replace(
  /[^\d]/g,
  "",
)}?text=${encodeURIComponent(
  "Merhaba, galerinizi inceledim. Aracımdaki göçük için fotoğraf gönderiyorum.",
)}`;

/** Giriş animasyonu CSS ile (bkz. globals.css → .reveal). */
export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-primary-800 pt-28 pb-14 sm:pt-36 sm:pb-16">
      <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />
      <div className="light-sweep" aria-hidden="true" />

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
              Galeri
            </li>
          </ol>
        </nav>

        <div className="reveal reveal-1 mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            Öncesi & sonrası
          </span>
        </div>

        <h1 className="reveal reveal-2 mt-6 max-w-3xl text-4xl font-black leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl"
        >
          Sonucu anlatmıyoruz,{" "}
          <span className="relative inline-block text-accent">
            gösteriyoruz
            <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/30" />
          </span>
        </h1>

        <p className="reveal reveal-3 mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Aşağıdaki her kare, atölyemizde tamamlanmış gerçek bir onarım. Kaydırıcıyı
          sürükleyerek aynı panelin öncesine ve sonrasına bakabilirsiniz.
        </p>

        <div className="reveal reveal-4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-2 text-sm font-medium text-white/60">
            <MoveHorizontal className="h-4 w-4 text-accent" strokeWidth={2.5} />
            {GALLERY_ITEMS.length} karşılaştırmalı çalışma
          </span>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-black text-primary-500 shadow-lg shadow-accent/25 transition-all hover:scale-[1.02] hover:bg-accent-light active:scale-95"
          >
            <Camera className="h-4 w-4" strokeWidth={2.5} />
            Aracınız için fiyat alın
          </Link>
        </div>
      </div>
    </section>
  );
}
