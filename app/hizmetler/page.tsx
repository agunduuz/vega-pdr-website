import { Metadata } from "next";
import ServicesHero from "@/components/services/ServiceHero";
import ServicesList from "@/components/services/ServicesList";
import { SITE_CONFIG } from "@/lib/constants";
import CtaBand from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: `Hizmetlerimiz | ${SITE_CONFIG.fullName}`,
  description:
    "Boyasız göçük düzeltme, kaporta onarımı ve lokal boya hizmetlerimiz. 40 yıllık tecrübe ile Samsun'da.",
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function HizmetlerPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CtaBand
        title="Hangi yöntemin uygun olduğunu birlikte belirleyelim."
        whatsappMessage="Merhaba, aracımdaki hasar için hangi hizmetin uygun olduğunu öğrenmek istiyorum."
      />
    </>
  );
}
