import { Clock3, Camera, ShieldCheck, Wallet } from "lucide-react";

const SIGNALS = [
  { icon: Camera, title: "Ücretsiz ekspertiz", detail: "Fotoğrafla 15 dk'da ön fiyat" },
  { icon: ShieldCheck, title: "1 yıl garanti", detail: "Yazılı işçilik garantisi" },
  { icon: Clock3, title: "Aynı gün teslim", detail: "Tekil göçüklerde 4-6 saat" },
  { icon: Wallet, title: "Değer kaybı yok", detail: "Boya kaydı oluşturmaz" },
];

/** Hero'nun hemen altında güven veren dört sinyal. */
export default function TrustStrip() {
  return (
    <section className="border-b border-primary-500/10 bg-white" aria-label="Güvence bilgileri">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 md:grid-cols-4 md:px-10">
        {SIGNALS.map(({ icon: Icon, title, detail }) => (
          <div
            key={title}
            className="group flex items-start gap-3 py-5 md:py-7 md:pr-6"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent-dark transition-colors group-hover:bg-accent group-hover:text-primary-500">
              <Icon className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-primary-500">{title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-custom">
                {detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
