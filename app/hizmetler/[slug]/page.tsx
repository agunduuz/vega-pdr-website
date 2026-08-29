// app/hizmetler/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import ServiceDetailHero from "@/components/services/detail/ServiceDetailHero";
import ServiceDetailLayout from "@/components/services/detail/ServiceDetailLayout";
import ServiceDetailArticle from "@/components/services/detail/ServiceDetailArticle"; // ✅ GERİ GETİR
import ServiceDetailSidebar from "@/components/services/detail/ServiceDetailSidebar";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/mdx";
import CtaBand from "@/components/shared/CtaBand";
import { SITE_CONFIG } from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: "Hizmet Bulunamadı" };
  }

  return {
    title: `${service.title} ${service.subtitle} | ${SITE_CONFIG.fullName}`,
    description: service.description,
    openGraph: {
      title: `${service.title} ${service.subtitle}`,
      description: service.description,
      images: [service.featuredImage],
      type: "website",
    },
    alternates: {
      canonical: `/hizmetler/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const mdxSource = await serialize(service.content);

  const benefits = [
    "Orijinal boya korunur",
    "Aracın değeri düşmez",
    "Hızlı işlem süresi",
    "Garanti belgeli",
  ];

  return (
    <>
      <ServiceDetailHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        badge={service.badge}
        image={service.featuredImage}
      />

      <ServiceDetailLayout
        sidebar={
          <ServiceDetailSidebar
            currentSlug={service.slug}
            benefits={benefits}
          />
        }
      >
        <ServiceDetailArticle
          featuredImage={service.featuredImage}
          featuredImageAlt={`${service.title} - Vega PDR`}
          mdxSource={mdxSource}
        />
      </ServiceDetailLayout>

      <CtaBand
        title={`${service.title} için aracınızı görelim.`}
        whatsappMessage={`Merhaba, ${service.title} hizmeti için aracımın fotoğrafını gönderiyorum.`}
      />
    </>
  );
}
