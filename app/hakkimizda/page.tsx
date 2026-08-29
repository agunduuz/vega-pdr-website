// app/hakkimizda/page.tsx
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import AboutHero from "@/components/about/AboutHero";
import CtaBand from "@/components/shared/CtaBand";
import AboutStory from "@/components/about/AboutStory";
import AboutNarrative from "@/components/about/AboutNarrative";
import AboutValues from "@/components/about/AboutValues";
import AboutWorkshopGallery from "@/components/about/AboutWorkshopGallery";

export const metadata: Metadata = {
  title: `Hakkımızda | ${SITE_CONFIG.fullName}`,
  description:
    "1984'ten beri Samsun'da boyasız göçük düzeltme hizmeti veriyoruz. 40 yıllık tecrübemiz ve modern PDR teknolojisiyle aracınızın orijinalliğini koruyoruz.",
  openGraph: {
    title: `Hakkımızda | ${SITE_CONFIG.name}`,
    description:
      "1984'ten beri Samsun'da boyasız göçük düzeltme hizmeti veriyoruz. 40 yıllık tecrübemiz ve modern PDR teknolojisiyle aracınızın orijinalliğini koruyoruz.",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vega PDR Hakkımızda",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <AboutHero />
      <AboutNarrative />
      <AboutStory />
      <AboutValues />
      <AboutWorkshopGallery />
      <CtaBand
        title="40 yılın farkını aracınızda görün."
        whatsappMessage="Merhaba, atölyeniz hakkında bilgi aldım. Aracımdaki hasar için fotoğraf gönderiyorum."
      />
    </>
  );
}
