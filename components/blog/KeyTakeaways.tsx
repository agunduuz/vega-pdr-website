import { Check } from "lucide-react";

interface KeyTakeawaysProps {
  items: string[];
}

/** Yazının özeti: okumaya vakti olmayan için üç satırda cevap. */
export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
  if (items.length === 0) return null;

  return (
    <aside
      className="relative mb-10 overflow-hidden rounded-2xl border border-primary-500/10 bg-white p-6 shadow-sm sm:p-7"
      aria-labelledby="key-takeaways-heading"
    >
      <span
        className="absolute left-0 top-0 h-full w-1 bg-accent"
        aria-hidden="true"
      />
      <h2
        id="key-takeaways-heading"
        className="text-xs font-black uppercase tracking-[0.2em] text-slate-custom"
      >
        Kısaca
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
              <Check className="h-3 w-3 text-accent-dark" strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-primary-700 sm:text-[15px]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
