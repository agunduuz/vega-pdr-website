// components/about/AboutNarrative.tsx
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const EQUIPMENT_LIST = [
  "Özel PDR Işık Sistemleri",
  "Manyetik İndüksiyon Cihazları",
  "Hassas Çubuk Setleri",
];

const AboutNarrative = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 md:space-y-24">
        {/* Block 1: Ustalık Sabır İster */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Görsel */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src="/images/about/hands-pdr-tools.webp"
              alt="Uzman PDR ustasının elleri ile araç kapısında göçük düzeltme aletlerini kullanması"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
            />
          </div>

          {/* İçerik */}
          <div className="flex flex-col gap-4 sm:gap-6 md:pl-6 lg:pl-10">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 sm:w-8 bg-accent"></span>
              <span className="text-primary-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Bizim Hikayemiz
              </span>
            </div>
            <h2 className="text-primary-500 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Ustalık Sabır İster
            </h2>
            <p className="text-slate-custom text-base sm:text-lg leading-relaxed">
              Mesleğe ilk adımımızı attığımızda, henüz boyasız göçük düzeltme
              teknolojileri bugünkü kadar yaygın değildi. Ancak bir şey hiç
              değişmedi:{" "}
              <strong className="text-primary-500">
                Metale dokunmanın hassasiyeti.
              </strong>
            </p>
            <p className="text-slate-custom text-base sm:text-lg leading-relaxed">
              Samsun Sanayi Sitesi&apos;ndeki küçük bir dükkanda başlayan bu
              yolculuk, bugün şehrin en güvenilir PDR merkezi haline geldi.
              Bizim için her araç, sahibinin gözünde bir değerdir. Bu yüzden her
              çekiç darbesinde, her ışık ayarında 40 yıllık birikimimizin izi
              vardır.
            </p>
          </div>
        </div>

        {/* Block 2: Gelenek ve Teknoloji */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* İçerik */}
          <div className="flex flex-col gap-4 sm:gap-6 order-2 md:order-1 md:pr-6 lg:pr-10">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 sm:w-8 bg-accent"></span>
              <span className="text-primary-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Modern Yaklaşım
              </span>
            </div>
            <h2 className="text-primary-500 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Gelenek ve Teknoloji Bir Arada
            </h2>
            <p className="text-slate-custom text-base sm:text-lg leading-relaxed">
              Geçmişin ustalığına saygı duyarken, geleceğin teknolojisini
              kucaklıyoruz. Aracınızın boyasına en ufak bir zarar vermeden,
              fabrika çıkışı orijinalliğine döndürmek için dünyadaki en son PDR
              tekniklerini ve ekipmanlarını kullanıyoruz.
            </p>
            <ul className="space-y-3 mt-2">
              {EQUIPMENT_LIST.map((equipment) => (
                <li
                  key={equipment}
                  className="flex items-center gap-3 text-slate-custom font-medium text-sm sm:text-base"
                >
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  {equipment}
                </li>
              ))}
            </ul>
          </div>

          {/* Görsel */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg order-1 md:order-2 bg-gray-100">
            <Image
              src="/images/about/modern-workshop.webp"
              alt="Temiz aydınlatma ve duvardaki modern tamir aletleri ile yüksek teknolojili atölye"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNarrative;
