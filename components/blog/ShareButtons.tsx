"use client";

import { useState } from "react";
import { Check, Facebook, Link2, MessageCircle, Share2 } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Bağlantıyı kopyalayın:", url);
    }
  };

  const targets = [
    {
      label: "WhatsApp'ta paylaş",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: "X'te paylaş",
      icon: Share2,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title,
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "Facebook'ta paylaş",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url,
      )}`,
    },
  ];

  return (
    <div>
      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-custom">
        Paylaş
      </h2>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {targets.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/15 bg-white text-primary-500 transition-all hover:border-accent hover:bg-accent"
          >
            <Icon className="h-4 w-4" strokeWidth={2.5} />
          </a>
        ))}

        <button
          type="button"
          onClick={copyLink}
          aria-label="Bağlantıyı kopyala"
          title="Bağlantıyı kopyala"
          className={`flex h-10 items-center gap-2 rounded-full border px-4 text-xs font-bold transition-all ${
            copied
              ? "border-green-400 bg-green-50 text-green-600"
              : "border-primary-500/15 bg-white text-primary-500 hover:border-accent hover:bg-accent"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" strokeWidth={3} />
              Kopyalandı
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" strokeWidth={2.5} />
              Bağlantı
            </>
          )}
        </button>
      </div>
    </div>
  );
}
