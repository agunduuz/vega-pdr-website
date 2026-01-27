// components/about/AboutHero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Star } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Sol Taraf - Metin İçeriği */}
          <div className="order-2 lg:order-1 flex flex-col gap-4 sm:gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 w-fit">
              <span
                className="size-1.5 sm:size-2 rounded-full bg-primary-500"
                aria-hidden="true"
              ></span>
              <span className="text-primary-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                40 Yıllık Deneyim
              </span>
            </div>

            {/* Başlık */}
            <h1 className="text-primary-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Gerçek Ustalık,
              <br /> Kusursuz Sonuç.
            </h1>

            {/* Açıklama */}
            <p className="text-slate-custom text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-lg">
              1984&apos;ten beri Samsun&apos;da araç onarımı sanatını icra
              ediyoruz. Geleneksel el işçiliğini modern PDR teknolojisiyle
              birleştirerek aracınızın orijinalliğini koruyoruz.
            </p>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
              <Link
                href="#hikaye"
                className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-lg h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-bold shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Hikayemizi Keşfedin</span>
                <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="/galeri"
                className="bg-white border-2 border-gray-200 hover:border-primary-500/50 active:border-primary-500 text-slate-custom hover:text-primary-500 rounded-lg h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-bold transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Galeriye Göz Atın
              </Link>
            </div>
          </div>

          {/* Sağ Taraf - Görsel */}
          <div className="order-1 lg:order-2 relative px-4 sm:px-0">
            {/* Arka plan efekti */}
            <div
              className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-48 h-48 sm:w-64 sm:h-64 bg-accent/20 rounded-full blur-3xl -z-10"
              aria-hidden="true"
            ></div>

            {/* Ana görsel container */}
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gray-200 relative group">
              <div
                className="absolute inset-0 bg-primary-500/10 group-hover:bg-transparent transition-all duration-500 z-10"
                aria-hidden="true"
              ></div>
              <Image
                src="/images/about/about-hero-bg.webp"
                alt="Vega PDR ustası özel ışıklarla araç panelini incelerken - Samsun boyasız göçük düzeltme"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 45vw"
                quality={75}
              />
            </div>

            {/* Tecrübe Badge'i - Mobilde küçültülmüş */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:bottom-8 md:-left-12 bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-gray-100 max-w-[160px] sm:max-w-[200px] z-20">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-accent fill-accent" />
                <span className="text-3xl sm:text-4xl font-black text-primary-500">
                  40
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-custom leading-tight">
                Yılın Üzerinde Tecrübe ve Güven
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
