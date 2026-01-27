// app/hakkimizda/page.tsx
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import AboutHero from "@/components/about/AboutHero";
import ServicesCTA from "@/components/services/ServicesCTA";
import AboutStory from "@/components/about/AboutStory";
import AboutNarrative from "@/components/about/AboutNarrative";
import AboutValues from "@/components/about/AboutValues";
import AboutWorkshopGallery from "@/components/about/AboutWorkshopGallery";

export const metadata: Metadata = {
  title: `Hakkımızda | ${SITE_CONFIG.fullName}`,
  description:
    "1984'ten beri Samsun'da boyasız göçük düzeltme hizmeti veriyoruz. 40 yıllık tecrübemiz ve modern PDR teknolojisiyle aracınızın orijinalliğini koruyoruz.",
  keywords:
    "hakkımızda, vega pdr, samsun pdr, boyasız göçük, 40 yıl tecrübe, profesyonel ekip",
  openGraph: {
    title: `Hakkımızda | ${SITE_CONFIG.fullName}`,
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
};

export default function HakkimizdaPage() {
  return (
    <>
      <AboutHero />
      <AboutNarrative />
      <AboutStory />
      <AboutValues />
      <AboutWorkshopGallery />
      <ServicesCTA />
    </>
  );
}
