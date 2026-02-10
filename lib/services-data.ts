export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  heroImage: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: Array<{ step: number; title: string; description: string }>;
  duration: string;
  warranty: string;
  priceRange: string;
}

export const SERVICES_DETAILS: Record<string, ServiceDetail> = {
  "boyasiz-gocuk-duzeltme": {
    id: "pdr",
    slug: "boyasiz-gocuk-duzeltme",
    title: "Boyasız Göçük Düzeltme",
    subtitle: "(PDR)",
    description:
      "Aracınızın orijinal boyasını bozmadan, özel el aletleri ve masaj tekniği ile fabrikasyon formuna geri döndürüyoruz.",
    badge: "En Çok Tercih Edilen Hizmet",
    heroImage: "/images/services/boyasiz-gocuk-duzeltme.webp",
    icon: "Wrench",
    features: [
      "Orijinal boya korunur",
      "Aracın değeri düşmez",
      "Hızlı işlem süresi (4-6 saat)",
      "Garanti belgeli",
      "Ücretsiz keşif",
    ],
    benefits: [
      "Boya uyuşmazlığı riski yok",
      "Daha ekonomik çözüm",
      "Aynı gün teslim",
      "Çevre dostu yöntem",
    ],
    process: [
      {
        step: 1,
        title: "Ücretsiz Hasar Tespiti",
        description: "Uzman ekibimiz aracınızı detaylı inceler",
      },
      {
        step: 2,
        title: "Fiyat Teklifi",
        description: "Şeffaf ve net fiyatlandırma",
      },
      {
        step: 3,
        title: "Profesyonel Onarım",
        description: "40 yıllık tecrübe ile kusursuz sonuç",
      },
      {
        step: 4,
        title: "Kalite Kontrol",
        description: "Her detay incelenir",
      },
      {
        step: 5,
        title: "Teslim",
        description: "Sıfır km görünümünde araç",
      },
    ],
    duration: "4-6 saat",
    warranty: "1 yıl garanti",
    priceRange: "Hasar durumuna göre değişir",
  },
  "lokal-boya": {
    id: "lokal-boya",
    slug: "lokal-boya",
    title: "Lokal Boya ve Rötuş",
    subtitle: "",
    description:
      "Sadece hasarlı bölgeye uygulanan, renk farkı yaratmayan mikro onarım tekniği. Çizikler ve küçük sürtmeler için ekonomik ve hızlı.",
    badge: "Hızlı Çözüm",
    heroImage: "/images/services/boya.webp",
    icon: "Droplet",
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
      {
        step: 1,
        title: "Renk Tespiti",
        description: "Bilgisayar destekli renk analizi",
      },
      {
        step: 2,
        title: "Yüzey Hazırlığı",
        description: "Profesyonel temizlik ve zımparalama",
      },
      {
        step: 3,
        title: "Boya Uygulaması",
        description: "3 kat boya + vernik",
      },
      {
        step: 4,
        title: "Fırın Kurutma",
        description: "60°C profesyonel fırın",
      },
      {
        step: 5,
        title: "Parlatma ve Koruma",
        description: "Son rötuşlar",
      },
    ],
    duration: "1-2 gün",
    warranty: "2 yıl garanti",
    priceRange: "Boya alanına göre",
  },
  "dolu-hasari": {
    id: "dolu-hasari",
    slug: "dolu-hasari",
    title: "Dolu Hasarı Onarımı",
    subtitle: "",
    description:
      "Yoğun dolu yağışı sonrası oluşan yüzlerce göçüğü, özel masaj tekniği ile boyaya zarar vermeden tek tek düzeltiyoruz.",
    badge: "Sigorta Destekli",
    heroImage: "/images/services/dolu-onarim.webp",
    icon: "Cloud",
    features: [
      "Kapsamlı dolu hasarı onarımı",
      "Orijinal boya korunur",
      "Sigorta işlemleri",
      "Tüm kaporta parçaları",
      "Profesyonel keşif",
    ],
    benefits: [
      "Kasko ile ücretsiz",
      "Araç değeri korunur",
      "Hızlı işlem",
      "Garantili onarım",
    ],
    process: [
      {
        step: 1,
        title: "Detaylı Keşif",
        description: "Tüm hasar noktaları tespit edilir",
      },
      {
        step: 2,
        title: "Sigorta İşlemleri",
        description: "Ekspertiz ve evrak hazırlığı",
      },
      {
        step: 3,
        title: "PDR Uygulaması",
        description: "Her göçük özenle düzeltilir",
      },
      {
        step: 4,
        title: "Kalite Kontrol",
        description: "Işık altında son kontrol",
      },
      {
        step: 5,
        title: "Teslim",
        description: "Sıfır km görünüm",
      },
    ],
    duration: "2-5 gün",
    warranty: "Ömür boyu garanti",
    priceRange: "Kasko ile ücretsiz",
  },
  "kaporta-boya-onarim": {
    id: "kaporta-boya-onarim",
    slug: "kaporta-boya-onarim",
    title: "Kaporta & Boya Onarımı",
    subtitle: "(Profesyonel Uygulama)",
    description:
      "Samsun kaporta boya hizmetimizle aracınızın hasarlı bölgelerini profesyonel ekipman ve kaliteli boya sistemleriyle ilk günkü görünümüne kavuşturuyoruz.",
    badge: "Samsun'un Tercih Edilen Servisi",
    heroImage: "/images/services/kaporta-onarim.webp",
    icon: "Car",
    features: [
      "Orijinal renge birebir boya uyumu",
      "Modern boya kabini kullanımı",
      "Kaporta düzeltme ve tamir",
      "Garanti belgeli işçilik",
      "Ücretsiz hasar tespiti",
    ],
    benefits: [
      "Profesyonel kaporta tamiri",
      "Kalıcı boya çözümü",
      "Sigorta işlem desteği",
      "Uzman ekip",
    ],
    process: [
      {
        step: 1,
        title: "Hasar İncelemesi",
        description: "Kaporta ve boya durumu detaylı analiz edilir",
      },
      {
        step: 2,
        title: "Kaporta Düzeltme",
        description: "Ezik, kırık ve deformasyonlar giderilir",
      },
      {
        step: 3,
        title: "Yüzey Hazırlığı",
        description: "Zımpara ve astar uygulaması yapılır",
      },
      {
        step: 4,
        title: "Boya Uygulaması",
        description: "Kabin ortamında profesyonel boya işlemi",
      },
      {
        step: 5,
        title: "Kalite Kontrol",
        description: "Renk ve yüzey kontrolü sonrası teslim",
      },
    ],
    duration: "1-5 gün",
    warranty: "1 yıl garanti",
    priceRange: "Hasar durumuna göre değişir",
  },
};

// ✅ Helper: Slug'a göre servis al
export function getServiceBySlug(slug: string): ServiceDetail | null {
  return SERVICES_DETAILS[slug] || null;
}

// ✅ Helper: Tüm slug'ları al
export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES_DETAILS);
}
