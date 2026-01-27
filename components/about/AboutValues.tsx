// components/about/AboutValues.tsx
import { Handshake, Diamond, Clock } from "lucide-react";

const VALUES = [
  {
    icon: Handshake,
    title: "Şeffaf İletişim",
    description:
      "Fiyatlandırmadan işlem sürecine kadar her aşamada dürüstlük ilkesiyle hareket ediyoruz. Sürpriz yok, güven var.",
  },
  {
    icon: Diamond,
    title: "Değer Koruma",
    description:
      "Aracınızın orijinalliğini bozmadan onarım yapıyoruz. Böylece aracınızın ikinci el değeri asla düşmüyor.",
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description:
      "Zamanınızın değerli olduğunu biliyoruz. İşlemlerinizi mümkün olan en kısa sürede tamamlayarak size zaman kazandırıyoruz.",
  },
];

const AboutValues = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-background-light rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent transition-colors">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-500 group-hover:text-primary-500" />
                </div>
                <h3 className="text-primary-500 text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-custom text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
