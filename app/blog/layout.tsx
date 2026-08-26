// app/blog/layout.tsx
// Blog, hizmet sayfalarından ayrı bir tipografiyle çalışır: başlıklarda Manrope.
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${manrope.variable} blog-scope`}>{children}</div>;
}
