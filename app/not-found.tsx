// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-custom mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-slate-custom mb-8 max-w-md">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-primary-500 px-6 py-3 rounded-lg font-bold hover:bg-accent-dark transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
