import { notFound } from "next/navigation";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import ServiceDetailHero from "@/components/services/detail/ServiceDetailHero";
import ServiceDetailLayout from "@/components/services/detail/ServiceDetailLayout";
import ServiceDetailArticle from "@/components/services/detail/ServiceDetailArticle";
import ServiceDetailSidebar from "@/components/services/detail/ServiceDetailSidebar";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/mdx";
import { SITE_CONFIG } from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  return {
    title: `${service.title} ${service.subtitle} | ${SITE_CONFIG.fullName}`,
    description: service.description,
    keywords: `${service.title}, ${service.slug}, samsun, pdr, boyasız göçük`,
    openGraph: {
      title: `${service.title} ${service.subtitle}`,
      description: service.description,
      images: [service.featuredImage],
      type: "website",
    },
  };
}

// Main page component
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Serialize MDX content
  const mdxSource = await serialize(service.content);

  // Extract benefits from services-data or MDX
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
          featuredImageAlt={`${service.title} - Vega Boyasız Göçük Düzeltme`}
          mdxSource={mdxSource}
        />
      </ServiceDetailLayout>
    </>
  );
}
