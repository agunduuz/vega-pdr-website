"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import type { BlogHeading } from "@/lib/blog-utils";

interface TableOfContentsProps {
  headings: BlogHeading[];
  /** Mobilde açılır-kapanır, masaüstünde sabit liste. */
  variant?: "sidebar" | "mobile";
}

export default function TableOfContents({
  headings,
  variant = "sidebar",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 },
    );

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null);

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  const list = (
    <ul className="space-y-1">
      {headings.map((heading) => {
        const isActive = activeId === heading.id;
        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`flex gap-2.5 rounded-lg py-1.5 text-sm leading-snug transition-colors ${
                heading.level === 3 ? "pl-5 pr-2" : "px-2 font-semibold"
              } ${
                isActive
                  ? "text-primary-500"
                  : "text-slate-custom hover:text-primary-500"
              }`}
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                  isActive ? "bg-accent" : "bg-primary-500/20"
                }`}
                aria-hidden="true"
              />
              {heading.text}
            </a>
          </li>
        );
      })}
    </ul>
  );

  if (variant === "mobile") {
    return (
      <details className="group mb-8 rounded-2xl border border-primary-500/10 bg-white p-4 lg:hidden">
        <summary className="flex cursor-pointer items-center gap-2 text-sm font-bold text-primary-500 marker:content-['']">
          <List className="h-4 w-4 text-accent" strokeWidth={2.5} />
          İçindekiler
          <span className="ml-auto text-xs font-medium text-slate-custom group-open:hidden">
            Aç
          </span>
          <span className="ml-auto hidden text-xs font-medium text-slate-custom group-open:inline">
            Kapat
          </span>
        </summary>
        <nav className="mt-3 border-t border-primary-500/10 pt-3">{list}</nav>
      </details>
    );
  }

  return (
    <nav aria-label="İçindekiler" className="hidden lg:block">
      <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-custom">
        <List className="h-4 w-4 text-accent" strokeWidth={2.5} />
        İçindekiler
      </h2>
      <div className="no-scrollbar mt-4 max-h-[48vh] overflow-y-auto border-l border-primary-500/10 pl-1">
        {list}
      </div>
    </nav>
  );
}
