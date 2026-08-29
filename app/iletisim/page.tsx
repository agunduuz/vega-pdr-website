// app/iletisim/page.tsx
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import CtaBand from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: `İletişim | ${SITE_CONFIG.fullName}`,
  alternates: {
    canonical: "/iletisim",
  },
  description:
    "Samsun'daki boyasız göçük düzeltme hizmetlerimiz için bizimle iletişime geçin. Randevu alın, fiyat teklifi isteyin. WhatsApp, telefon ve email ile 7/24 ulaşabilirsiniz.",
  openGraph: {
    title: `İletişim | ${SITE_CONFIG.name}`,
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
      <CtaBand
        eyebrow="Kısa yol"
        title="Form doldurmak istemiyorsanız, tek fotoğraf yeterli."
        description="Göçüğün yandan çekilmiş bir karesini WhatsApp'tan gönderin; yöntemi ve fiyat aralığını 15 dakikada iletelim."
        whatsappMessage="Merhaba, aracımdaki hasarın fotoğrafını gönderiyorum. Bilgi alabilir miyim?"
      />
    </>
  );
}
