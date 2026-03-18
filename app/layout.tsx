// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://samsunboyasizgocukduzeltme.com",
  ),
  alternates: {
    canonical: "/", // Her sayfada override edilebilir
  },
  verification: {
    google: "9JTyaX0QC-RzRCctKzOHZU9YxgMvjmkuW47opCuTBMs",
  },
  title: {
    default: SITE_CONFIG.fullName,
    template: `%s | ${SITE_CONFIG.fullName}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.fullName }],
  creator: SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.fullName,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: SITE_CONFIG.fullName,
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vega PDR - Samsun Boyasız Göçük Düzeltme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Schema.org - Google'a işletme bilgilerini tanıt
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE_CONFIG.fullName,
    alternateName: "Vega PDR",
    description: SITE_CONFIG.description,
    url: "https://samsunboyasizgocukduzeltme.com",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yenimahalle, 54. Sk. Gülsan Sanayi Sitesi No: 12",
      addressLocality: "Canik",
      addressRegion: "Samsun",
      postalCode: "55080",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.2722623",
      longitude: "36.3640689",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "19:00",
      },
    ],
    priceRange: "₺₺",
    image: "https://samsunboyasizgocukduzeltme.com/images/og-image.jpg",
    logo: "https://samsunboyasizgocukduzeltme.com/vega-logo.svg",
    hasMap: SITE_CONFIG.googleMapsLink,
    sameAs: [SITE_CONFIG.social.instagram],
    servesCuisine: null,
    areaServed: {
      "@type": "City",
      name: "Samsun",
    },
    knowsAbout: [
      "Boyasız Göçük Düzeltme",
      "PDR",
      "Dolu Hasarı Onarımı",
      "Kaporta Onarımı",
      "Lokal Boya",
    ],
  };

  return (
    <html lang="tr">
      <head>
        {/* ✅ Schema.org Yapısal Veri */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
