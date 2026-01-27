// components/contact/ContactHero.tsx

const ContactHero = () => {
  return (
    <section className="relative bg-primary-500 py-16 pt-24 lg:py-24 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-custom rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-accent font-bold tracking-wider uppercase mb-3 text-xs sm:text-sm">
          İletişim
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Bize Ulaşın
        </h1>
        <p className="text-primary-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          40 yıllık ustalık ve modern teknoloji ile aracınız emin ellerde.
          Sorularınız veya randevu talepleriniz için aşağıdaki formu
          doldurabilir veya bizi doğrudan arayabilirsiniz.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
