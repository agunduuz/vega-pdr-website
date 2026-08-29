import Link from "next/link";
import { ChevronRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const PHONE_DIGITS = SITE_CONFIG.phone.replace(/[^\d]/g, "");

const QUICK_ACTIONS = [
  {
    icon: MessageCircle,
    label: "WhatsApp'tan yazın",
    detail: "15 dakikada dönüş",
    href: `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
      SITE_CONFIG.whatsappMessage,
    )}`,
    external: true,
    primary: true,
  },
  {
    icon: Phone,
    label: SITE_CONFIG.phone,
    detail: "Doğrudan atölye hattı",
    href: `tel:${PHONE_DIGITS}`,
    external: false,
    primary: false,
  },
  {
    icon: MapPin,
    label: "Yol tarifi al",
    detail: "Atakum / Samsun",
    href: SITE_CONFIG.googleMapsLink,
    external: true,
    primary: false,
  },
];

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-800 pt-28 pb-16 sm:pt-36 sm:pb-20">
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
              İletişim
            </li>
          </ol>
        </nav>

        <div className="reveal reveal-1 mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            İletişim
          </span>
        </div>

        <h1 className="reveal reveal-2 mt-6 max-w-3xl text-4xl font-black leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
          Bir fotoğraf,{" "}
          <span className="relative inline-block text-accent">
            bir cevap
            <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/30" />
          </span>{" "}
          kadar yakınız.
        </h1>

        <p className="reveal reveal-3 mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Aracınızı getirmeden önce hasarın fotoğrafını gönderin; boyasız
          onarıma uygun olup olmadığını, süreyi ve fiyat aralığını çalışma
          saatleri içinde 15 dakikada iletelim.
        </p>

        {/* Hızlı eylemler */}
        <div className="reveal reveal-4 mt-10 grid gap-3 sm:grid-cols-3">
          {QUICK_ACTIONS.map(({ icon: Icon, label, detail, href, external, primary }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`group flex items-center gap-3 rounded-2xl border px-5 py-4 transition-all hover:-translate-y-0.5 ${
                primary
                  ? "border-accent bg-accent text-primary-500 shadow-lg shadow-accent/20"
                  : "border-white/15 bg-white/5 text-white hover:border-accent/50"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  primary ? "bg-primary-500/10" : "bg-white/5 text-accent"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-black">{label}</span>
                <span
                  className={`block text-xs ${
                    primary ? "text-primary-500/70" : "text-white/50"
                  }`}
                >
                  {detail}
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs text-white/50">
          <Clock3 className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
          {SITE_CONFIG.workingHours} · {SITE_CONFIG.workingHoursFull}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
