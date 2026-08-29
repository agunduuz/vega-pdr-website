import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/shared/TrustStrip";
import Services from "@/components/home/Services";
import Features from "@/components/home/Features";
import Gallery from "@/components/home/Gallery";
import BlogTeaser from "@/components/home/BlogTeaser";
import CtaBand from "@/components/shared/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Gallery />
      <Features />
      <BlogTeaser />
      <CtaBand
        title="Göçüğün fotoğrafını gönderin, gerisini biz anlatalım."
        whatsappMessage="Merhaba, aracımdaki göçüğün fotoğrafını gönderiyorum. Boyasız onarılır mı?"
      />
    </>
  );
}
