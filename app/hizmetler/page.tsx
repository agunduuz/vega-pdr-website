import { Metadata } from "next";
import ServicesHero from "@/components/services/ServiceHero";
import ServicesList from "@/components/services/ServicesList";
import { SITE_CONFIG } from "@/lib/constants";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: `Hizmetlerimiz | ${SITE_CONFIG.fullName}`,
  description:
    "Boyasız göçük düzeltme, kaporta onarımı ve lokal boya hizmetlerimiz. 40 yıllık tecrübe ile Samsun'da.",
  keywords:
    "boyasız göçük düzeltme, kaporta, boya, samsun, pdr, vega boyasız göçük düzeltme",
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function HizmetlerPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}
