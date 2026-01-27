import { ReactNode } from "react";

interface ServiceDetailLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function ServiceDetailLayout({
  children,
  sidebar,
}: ServiceDetailLayoutProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row">
        {/* Article Area - Left Side (2/3) */}
        <article className="w-full lg:w-2/3 min-w-0">{children}</article>

        {/* Aside Area - Right Side (1/3) */}
        <aside className="w-full lg:w-1/3">{sidebar}</aside>
      </div>
    </main>
  );
}
