import Link from "next/link";
import { Camera, MapPin, Phone } from "lucide-react";
import type { BlogHeading } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";
import TableOfContents from "./TableOfContents";
import ShareButtons from "./ShareButtons";

interface PostSidebarProps {
  headings: BlogHeading[];
  title: string;
  url: string;
}

const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.phone.replace(
  /[^\d]/g,
  "",
)}?text=${encodeURIComponent(
  "Merhaba, blogdaki yazınızı okudum. Aracımdaki hasar için bilgi almak istiyorum.",
)}`;

export default function PostSidebar({
  headings,
  title,
  url,
}: PostSidebarProps) {
  return (
    <div className="space-y-8 lg:sticky lg:top-28">
      <TableOfContents headings={headings} />

      {/* Yazı içi dönüşüm kartı */}
      <div className="overflow-hidden rounded-2xl bg-primary-500 p-6 text-white shadow-lg">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">
          Ücretsiz ekspertiz
        </span>
        <p className="mt-3 text-lg font-bold leading-snug">
          Aracınızdaki göçük boyasız çıkar mı?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Yandan çekilmiş bir fotoğraf çoğu zaman cevabı vermeye yeter. Gönderin,
          15 dakika içinde dönelim.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-sm font-black text-primary-500 transition-all hover:bg-accent-light active:scale-95"
        >
          <Camera className="h-4 w-4" strokeWidth={2.5} />
          Fotoğraf gönder
        </a>

        <a
          href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
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

      <ShareButtons title={title} url={url} />
    </div>
  );
}
