// app/galeri/page.tsx
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import GalleryMain from "@/components/gallery/GalleryMain";

export const metadata: Metadata = {
  title: `Galeri | ${SITE_CONFIG.fullName}`,
  alternates: {
    canonical: "/galeri",
  },
  description:
    "40 yıllık tecrübemizle gerçekleştirdiğimiz boyasız göçük düzeltme çalışmalarımızı görüntüleyin. Öncesi ve sonrası fotoğraflar, dolu hasarı, kapı vuruğu, park hasarı onarımları.",
  keywords:
    "galeri, önce sonra, boyasız göçük, pdr, samsun, vega pdr, dolu hasarı, park hasarı, kapı vuruğu",
  openGraph: {
    title: `Galeri | ${SITE_CONFIG.fullName}`,
    description:
      "40 yıllık tecrübemizle gerçekleştirdiğimiz boyasız göçük düzeltme çalışmalarımızı görüntüleyin.",
    images: [
      {
        url: "/images/gallery-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vega PDR Galeri",
      },
    ],
    type: "website",
  },
};

export default function GalleriPage() {
  return (
    <>
      <GalleryMain />
    </>
  );
}
