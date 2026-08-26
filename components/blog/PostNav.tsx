import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

interface PostNavProps {
  previous: BlogPostMeta | null;
  next: BlogPostMeta | null;
}

export default function PostNav({ previous, next }: PostNavProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Diğer yazılar"
      className="mt-14 grid gap-4 border-t border-primary-500/10 pt-10 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group rounded-2xl border border-primary-500/10 bg-white p-5 transition-all hover:border-accent hover:shadow-md"
        >
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-custom">
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
              strokeWidth={2.5}
            />
            Önceki yazı
          </span>
          <p className="mt-2 font-bold leading-snug text-primary-500">
            {previous.title}
          </p>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next && (
        <Link
          href={`/blog/${next.slug}`}
          className="group rounded-2xl border border-primary-500/10 bg-white p-5 text-right transition-all hover:border-accent hover:shadow-md sm:col-start-2"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-custom">
            Sonraki yazı
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </span>
          <p className="mt-2 font-bold leading-snug text-primary-500">
            {next.title}
          </p>
        </Link>
      )}
    </nav>
  );
}
