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
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            Çalışma ilkelerimiz
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-primary-500/10 bg-background-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/20 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-accent transition-colors group-hover:bg-accent group-hover:text-primary-500">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mb-3 text-lg font-black text-primary-500 sm:text-xl">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-custom">
                  {value.description}
                </p>
                <span className="card-line absolute bottom-0 left-0 h-[3px] w-full bg-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
