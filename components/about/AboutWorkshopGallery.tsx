// components/about/AboutWorkshopGallery.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WORKSHOP_IMAGES = [
  {
    id: 1,
    src: "/images/about/workshop-wide.webp",
    alt: "Samsun'daki temiz ve düzenli araç onarım atölyesinin geniş açı çekimi",
    span: "col-span-2 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/about/workshop-tools.webp",
    alt: "Duvarda asılı özel PDR aletlerinin detayı",
    span: "col-span-1",
  },
  {
    id: 3,
    src: "/images/about/workshop-car.webp",
    alt: "Onarım sonrası atölye ışıklarını yansıtan lüks araç kaputu",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "/images/about/workshop-mechanic.webp",
    alt: "Odaklanmış şekilde araç kapısını cilalayan usta",
    span: "col-span-2",
  },
];

const AboutWorkshopGallery = () => {
  // Tüm görseller yüklenene kadar gösterme
  const allImagesExist = false; // Görseller eklendiğinde true yapın

  if (!allImagesExist) {
    return null; // display: none yerine component'i render etme
  }

  return (
    <section className="bg-background-light py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık ve Buton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-primary-500 text-2xl sm:text-3xl md:text-4xl font-bold">
              Atölyemizden Kareler
            </h2>
            <p className="text-slate-custom mt-2 text-base sm:text-lg">
              Tertemiz, düzenli ve profesyonel çalışma ortamımız.
            </p>
          </div>
          <Link
            href="/galeri"
            className="text-primary-500 font-bold flex items-center gap-1 hover:text-accent transition-colors text-sm sm:text-base"
          >
            Tüm Galeriyi Gör
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* Galeri Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 h-[300px] sm:h-[400px] md:h-[500px]">
          {WORKSHOP_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`${image.span} rounded-lg sm:rounded-xl overflow-hidden shadow-md group relative`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={75}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkshopGallery;
