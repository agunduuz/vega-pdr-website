// app/not-found.tsx
import Link from "next/link";
import { ArrowRight, Camera, Home } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const LINKS = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NotFound() {
  const whatsappLink = `https://wa.me/${SITE_CONFIG.phone.replace(
    /[^\d]/g,
    "",
  )}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-primary-800 px-4 py-28">
      <div className="blog-grid-lines absolute inset-0" aria-hidden="true" />
      <div className="light-sweep" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            404 — sayfa bulunamadı
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-black leading-[1.1] text-white text-balance sm:text-5xl">
          Bu sayfa, düzelttiğimiz göçükler gibi{" "}
          <span className="text-accent">ortadan kayboldu.</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
          Aradığınız içerik taşınmış veya adresi değişmiş olabilir. Aşağıdaki
          bağlantılardan devam edebilir ya da doğrudan bize yazabilirsiniz.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-black text-primary-500 transition-all hover:scale-[1.02] hover:bg-accent-light active:scale-95"
          >
            <Home className="h-4 w-4" strokeWidth={2.5} />
            Ana sayfaya dön
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
          >
            <Camera className="h-4 w-4" strokeWidth={2.5} />
            WhatsApp&apos;tan sor
          </a>
        </div>

        <nav className="mt-12 border-t border-white/10 pt-6" aria-label="Site bağlantıları">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
