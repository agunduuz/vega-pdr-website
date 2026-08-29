// components/about/AboutStory.tsx
import { Award, Users, TrendingUp } from "lucide-react";

const MILESTONES = [
  {
    year: "1984",
    title: "Kalfalıktan Ustalığa",
    description:
      "Türkiye Samsun'da kaporta onarımında uzmanlaşarak sektörde tanındık.",
    icon: TrendingUp,
  },
  {
    year: "2010",
    title: "Binlerce Mutlu Müşteri",
    description:
      "Hizmet kalitemizle 10.000'den fazla müşteriye ulaştık ve güven kazandık.",
    icon: Users,
  },
  {
    year: "2020",
    title: "Yeni Serüven PDR Teknolojisi",
    description:
      "Artık kaporta onarımında boyasız göçük düzeltme (PDR) hizmeti sunuyoruz.",
    icon: Award,
  },
];

const AboutStory = () => {
  return (
    <section
      id="hikaye"
      className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Hikâyemiz
            </span>
          </div>
          <h2 className="text-primary-500 text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            40 Yıllık Başarı Hikayesi
          </h2>
          <p className="text-slate-custom text-base sm:text-lg md:text-xl leading-relaxed">
            Dört nesil boyunca aktarılan el işçiliği ve modern teknolojinin
            mükemmel birleşimi ile aracınıza en iyi hizmeti sunuyoruz.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Dikey Çizgi - Desktop */}
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200"
            aria-hidden="true"
          ></div>

          {/* Mobil Çizgi */}
          <div
            className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200"
            aria-hidden="true"
          ></div>

          {/* Milestone Items */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* İkon - Mobil */}
                  <div className="lg:hidden absolute left-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent flex items-center justify-center shadow-lg border-4 border-white">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-500" />
                    </div>
                  </div>

                  {/* İkon - Desktop (Ortada) */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg border-4 border-white">
                      <Icon className="w-7 h-7 text-primary-500" />
                    </div>
                  </div>

                  {/* İçerik */}
                  <div
                    className={`ml-16 sm:ml-20 lg:ml-0 ${
                      isEven ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"
                    }`}
                  >
                    <div className="rounded-2xl border border-primary-500/10 bg-background-light p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 sm:p-8">
                      <span className="inline-block text-accent text-xl sm:text-2xl font-black mb-2 sm:mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-primary-500 text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-custom text-sm sm:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
