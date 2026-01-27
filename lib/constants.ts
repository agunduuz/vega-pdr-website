// lib/constants.ts
export const SITE_CONFIG = {
  name: "Vega",
  fullName: "Vega Boyasız Göçük Düzeltme",
  tagline: "40 Yıllık Tecrübe ile Boyasız Göçük Düzeltme",
  description:
    "Samsun'da 40 yıllık tecrübesiyle boyasız göçük düzeltme (PDR) hizmeti. Dolu hasarı, kapı vuruğu, park hasarı onarımında uzman ekip. Aracınızın değerini koruyoruz.",
  phone: "+90532 267 23 37", // Babanın gerçek numarasını buraya koy
  keywords:
    "boyasız göçük düzeltme, pdr samsun, dolu hasarı, kapı vuruğu, park hasarı, araç onarımı samsun, vega pdr, göçük düzeltme, vega boyasız göçük düzeltme",
  email: "info@samsunboyasizgocukduzeltme.com",
  address:
    "Yenimahalle, 54. Sk. Gülsan Sanayi Sitesi No: 12, 55080 Canik/Samsun", // Gerçek adresi koy
  googleMapsLink:
    "https://www.google.com/maps/place/Vega+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme/@41.2722622,36.359198,17z/data=!3m1!4b1!4m6!3m5!1s0x4088778e3177bb79:0x8cac9494a70a9f7c!8m2!3d41.2722623!4d36.3640689!16s%2Fg%2F11vr1s48vm?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
  workingHours: "Pzt-Cmt: 08:30 - 19:00",
  workingHoursFull: "Pazar: Kapalı",
  whatsappMessage: "Merhaba, aracımın hasarı için bilgi almak istiyorum.",
  social: {
    instagram: "https://instagram.com/vegaboyasizgocukduzeltme",
  },
};

export const SERVICES = [
  {
    id: "boyasiz-gocuk",
    title: "Boyasız Göçük Düzeltme (PDR)",
    description:
      "Orijinal boyayı koruyarak, aracınızın değerini düşürmeden kaporta hasarı onarımı.",
    icon: "wrench",
    image: "/images/pdr-1.webp",
    features: [
      "Orijinal boya korunur",
      "Araç değeri düşmez",
      "Hızlı işlem süresi",
      "Mükemmel sonuç garantisi",
    ],
  },
  {
    id: "kaporta-boya-onarim",
    title: "Kaporta Onarım",
    description:
      "Ciddi hasarlar için profesyonel kaporta düzeltme ve onarım hizmetleri.",
    icon: "hammer",
    image: "/images/kaporta-1.webp",
    features: [
      "Profesyonel onarım",
      "Kaliteli malzeme",
      "Uzman işçilik",
      "Garanti kapsamında",
    ],
  },
  {
    id: "lokal-boya",
    title: "Lokal Boya & Rötuş",
    description:
      "Derin çizikler ve boya hasarları için lokal boya uygulaması. Renk uyumu garantili.",
    icon: "paintbrush",
    image: "/images/boya-1.webp",
    features: [
      "Renk tonu uyumu",
      "Kaliteli boya",
      "Hızlı teslimat",
      "Uzun ömürlü",
    ],
  },
];

export const FEATURES = [
  {
    id: "experience",
    title: "40 Yıllık Tecrübe",
    description: "Samsun'da dört kuşaktır güvenilir hizmet sunuyoruz.",
    icon: "award",
  },
  {
    id: "paint-protection",
    title: "Orijinal Boya Koruması",
    description: "Aracınızın orijinal boyası bozulmadan işlem yapılır.",
    icon: "shield-check",
  },
  {
    id: "customer-satisfaction",
    title: "Müşteri Memnuniyeti",
    description: "Binlerce mutlu müşteri, yüzlerce başarılı onarım.",
    icon: "thumbs-up",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export const GALLERY_ITEMS = [
  // Skoda
  {
    id: "skoda-1",
    before: "/images/gallery/skoda-before-1.webp",
    after: "/images/gallery/skoda-after-1.webp",
    alt: "Skoda araç göçük onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  // Audi
  {
    id: "audi-1",
    before: "/images/gallery/audi-before-1.webp",
    after: "/images/gallery/audi-after-2.webp",
    alt: "Audi kapı hasarı onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  // Honda
  {
    id: "honda-1",
    before: "/images/gallery/honda-before-1.webp",
    after: "/images/gallery/honda-after-1.webp",
    alt: "Honda kapı göçük düzeltme",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  // Toyota
  {
    id: "toyota-1",
    before: "/images/gallery/toyota-before-1.webp",
    after: "/images/gallery/toyota-after-1.webp",
    alt: "Toyota çamurluk göçük onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  {
    id: "audi-2",
    before: "/images/gallery/audi-before-2.webp",
    after: "/images/gallery/audi-after-1.webp",
    alt: "Audi çamurluk onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },

  {
    id: "honda-2",
    before: "/images/gallery/honda-before-2.webp",
    after: "/images/gallery/honda-after-2.webp",
    alt: "Honda çamurluk onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  // Nissan
  {
    id: "nissan-1",
    before: "/images/gallery/nissan-before-1.webp",
    after: "/images/gallery/nissan-after-1.webp",
    alt: "Nissan kapı hasarı düzeltme",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },

  // VW (Volkswagen)
  {
    id: "wv-1",
    before: "/images/gallery/wv-1-before-1.webp",
    after: "/images/gallery/wv-1-after-1.webp",
    alt: "Volkswagen kapı onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  {
    id: "wv-2",
    before: "/images/gallery/wv-1-before-2.webp",
    after: "/images/gallery/wv-1-after-2.webp",
    alt: "Volkswagen çamurluk düzeltme",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  {
    id: "wv-3",
    before: "/images/gallery/wv-before-1.webp",
    after: "/images/gallery/wv-after-1.webp",
    alt: "Volkswagen göçük onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  {
    id: "wv-4",
    before: "/images/gallery/wv-before-2.webp",
    after: "/images/gallery/wv-after-2.webp",
    alt: "Volkswagen kapı düzeltme",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
  {
    id: "wv-5",
    before: "/images/gallery/wv-before-3.webp",
    after: "/images/gallery/wv-after-3.webp",
    alt: "Volkswagen çamurluk onarımı",
    category: "boyasiz-gocuk",
    categoryName: "Boyasız Göçük Düzeltme",
  },
];

// Detaylı hizmet bilgileri
export const SERVICES_DETAILED = [
  {
    id: "boyasiz-gocuk",
    title: "Boyasız Göçük Düzeltme (PDR)",
    slug: "boyasiz-gocuk-duzeltme",
    shortDescription: "Orijinal boyayı koruyarak göçük düzeltme",
    fullDescription:
      "Aracınızın orijinal boyasına zarar vermeden, özel aletler ve tekniklerle göçükleri düzeltiyoruz. Dolu hasarı, park göçükleri ve kapı çarpmaları için ideal.",
    icon: "build_circle",
    image: "/images/services/pdr-service.jpg",
    features: [
      "Orijinal boya korunur",
      "Aracın değeri düşmez",
      "Hızlı işlem süresi",
      "Ücretsiz keşif",
    ],
    benefits: [
      "Boya uyuşmazlığı riski yok",
      "Daha ekonomik çözüm",
      "Çevre dostu yöntem",
    ],
    process: [
      "Ücretsiz hasar tespiti",
      "Fiyat teklifi",
      "Profesyonel onarım",
      "Kalite kontrol",
      "Teslim",
    ],
    duration: "Hasar durumuna göre değişir",
    warranty: "1 yıl garanti",
    priceRange: "Hasar durumuna göre değişir",
  },
  {
    id: "kaporta-boya-onarim",
    title: "Kaporta Onarımı",
    slug: "kaporta-boya-onarim",
    shortDescription: "Profesyonel kaporta ve çarpma onarımı",
    fullDescription:
      "Büyük hasarlar, çarpma sonucu oluşan deformasyonlar ve kaporta değişimleri için uzman kadromuzla hizmet veriyoruz.",
    icon: "car_crash",
    image: "/images/services/kaporta-service.jpg",
    features: [
      "Orjinal yedek parça",
      "Ömür boyu iş garantisi",
      "Sigorta anlaşmaları",
      "Çekme düzeltme",
      "Spot kaynak",
    ],
    benefits: [
      "Sıfır km görünüm",
      "Uzun ömürlü onarım",
      "Ekspertiz raporu",
      "Tüm sigorta şirketleri",
    ],
    process: [
      "Detaylı hasar tespiti",
      "Sigorta işlemleri",
      "Parça temini",
      "Kaporta onarımı",
      "Son kontrol ve teslim",
    ],
    duration: "3-7 gün",
    warranty: "Ömür boyu garanti",
    priceRange: "Hasar kapsamına göre",
  },
  {
    id: "lokal-boya",
    title: "Lokal Boya",
    slug: "lokal-boya",
    shortDescription: "Bölgesel boya ve rötuş işlemleri",
    fullDescription:
      "Çizik, soyulma ve küçük hasarlar için bilgisayar destekli renk eşleştirme sistemiyle kusursuz boya uygulaması.",
    icon: "palette",
    image: "/images/services/boya-service.jpg",
    features: [
      "Bilgisayarlı renk eşleştirme",
      "Fırın kurutma",
      "Nano seramik kaplama",
      "UV koruma",
      "Parlaklık garantisi",
    ],
    benefits: [
      "%100 renk uyumu",
      "Pas koruması",
      "Uzun ömürlü sonuç",
      "Hızlı teslimat",
    ],
    process: [
      "Renk tespiti",
      "Yüzey hazırlığı",
      "Boya uygulaması",
      "Fırın kurutma",
      "Parlatma ve koruma",
    ],
    duration: "1-2 gün",
    warranty: "2 yıl garanti",
    priceRange: "Boya alanına göre",
  },
];

export const SERVICES_PAGE_DATA = [
  {
    id: "pdr",
    title: "Boyasız Göçük Düzeltme (PDR)",
    description:
      "Orijinal boyayı koruyarak, aracınızda oluşan göçükleri değer kaybı yaşatmadan onarıyoruz. Dolu hasarı ve park kazaları için en ideal çözüm.",
    icon: "Wrench",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBz1M9wJe_jDH7GIzVOtBjUPK29CuOeQNr6ne-AC-6eIFtsIZEPpm0CKRSXEjUJpo-_TJtjK5mTzmZhwec-hzi8I3A-gT8v8Y0kB8__rDS5ycxousWcl5yY5mIMvZkQlHepfz-YE-WWLH6uVX6ZodsNNTwKP8dRaI632swjMNAMsyhVLckFRFuJQyX4c333i9crET1Jq-Sd9XGwMaByntHOea17fGlzN7oPH61azvk_BijadYCWbF3maTKa4puypIQmT89TkqmtDPj_",
    slug: "boyasiz-gocuk-duzeltme",
  },
  {
    id: "lokal-boya",
    title: "Lokal Boya ve Rötuş",
    description:
      "Sadece hasarlı bölgeye uygulanan, renk farkı yaratmayan mikro onarım tekniği. Çizikler ve küçük sürtmeler için ekonomik ve hızlı.",
    icon: "Droplet",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuAmu4wXEh4JxfdtZHaJFhEtyts8ml4cjL8sPZHJiMu3jw30vIA7NU6MPARHXJdFoMtF7i8OK0Yh_Z6IpNEBCYjzKK0b9BPLKMC5wigAYpJ4gJQUFBKESPEEmK1CpkK2K3v-1F4UL2jyhTKKVZj0fX5gWM9bguDM3mB-X0DYAUJ_ddkp-WcxcTRm9MiDLzxEjqqDoezK-9WdS4XWcLXs7_kZ692GDsAT2Nr0XavH5xuKAQ4eN4b0WtoWKwl3MGxF290rVD04x8UdGu",
    slug: "lokal-boya",
  },
  {
    id: "dolu-hasari",
    title: "Dolu Hasarı Onarımı",
    description:
      "Yoğun dolu yağışı sonrası oluşan yüzlerce göçüğü, özel masaj tekniği ile boyaya zarar vermeden tek tek düzeltiyoruz.",
    icon: "Cloud",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKdrNs36Q48P1GfbYmJO3ByKIUMxFQ6Pokcc3pTRw4HFD0OgsVzZTBjAssQT2ekrctOf3N3EJc-YUul8hgja3rtPV2ALYG7x_ofwprm3s8DItyh3zryfDXg_Bz5GNKCtqpmo8-WSEW7mgPluhvcWeDp1R5npFtkaF5DaYT8KupPIMl9SqIDtPHKyXmSbrV9R2iMPaf--9fWN1zlo58AGm5hDdIu5OGtcT2hMv5tnRoZzWD5v0T2QdNgF9ysjYyIc56O_qL3dU0PSzr",
    slug: "dolu-hasari",
  },
  {
    id: "kaporta-boya-onarim",
    title: "Kaporta & Boya Onarımı",
    description:
      "Çarpma ve kaza sonucu oluşan kaporta hasarlarını, orijinal yedek parçalar ve uzman işçilikle onarıyoruz.",
    icon: "Car",
    image: "/images/kaporta-1.webp",
    slug: "kaporta-boya-onarim",
  },
] as const;

export const FAQ_DATA = [
  {
    id: "faq-1",
    question: "Onarım süresi ne kadar sürüyor?",
    answer:
      "Göçük boyutuna ve sayısına bağlı olarak değişmekle birlikte, standart PDR işlemleri genellikle aynı gün içerisinde, 4-6 saat arasında tamamlanmaktadır. Boyalı işlemlerde bu süre 2-3 günü bulabilir. Hasar ve işlem süresi hakkında detaylı bilgi almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.",
  },
  {
    id: "faq-2",
    question: "Boyasız göçük düzeltme değer kaybını önler mi?",
    answer:
      "Evet, kesinlikle. PDR işlemi aracın orijinal boyasına zarar vermez ve Tramer kaydında 'boya işlemi' olarak geçmez. Bu sayede aracınız ikinci el piyasasında değer kaybetmez.",
  },
  {
    id: "faq-3",
    question: "Garanti veriyor musunuz?",
    answer:
      "Yaptığımız tüm işçilikler firmamızın garantisi altındadır. İşlem sonrası memnuniyetiniz bizim önceliğimizdir. Özellikle boya koruma ve seramik kaplama işlemlerimiz yazılı garanti belgesi ile teslim edilir.",
  },
] as const;
