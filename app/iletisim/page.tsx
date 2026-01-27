// app/iletisim/page.tsx
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: `İletişim | ${SITE_CONFIG.fullName}`,
  description:
    "Samsun'daki boyasız göçük düzeltme hizmetlerimiz için bizimle iletişime geçin. Randevu alın, fiyat teklifi isteyin. WhatsApp, telefon ve email ile 7/24 ulaşabilirsiniz.",
  keywords:
    "iletişim, randevu, fiyat teklifi, samsun pdr, vega pdr iletişim, boyasız göçük randevu",
  openGraph: {
    title: `İletişim | ${SITE_CONFIG.fullName}`,
    description:
      "Samsun'daki boyasız göçük düzeltme hizmetlerimiz için bizimle iletişime geçin.",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vega PDR İletişim",
      },
    ],
    type: "website",
  },
};

export default function IletisimPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      {/* Diğer componentler buraya gelecek */}
    </>
  );
}
