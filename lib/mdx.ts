import fs from "fs";
import path from "path";
import matter from "gray-matter";

const servicesDirectory = path.join(process.cwd(), "content/services");

export interface ServiceMDXData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  featuredImage: string;
  duration: string;
  warranty: string;
  priceRange: string;
  content: string;
}

// Get all MDX file slugs
export function getAllServiceSlugs(): string[] {
  const fileNames = fs.readdirSync(servicesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

// Get single service MDX data
export async function getServiceBySlug(
  slug: string
): Promise<ServiceMDXData | null> {
  try {
    const fullPath = path.join(servicesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle || "",
      description: data.description,
      badge: data.badge,
      featuredImage: data.featuredImage,
      duration: data.duration,
      warranty: data.warranty,
      priceRange: data.priceRange,
      content,
    };
  } catch (error) {
    console.error(`Error loading MDX for slug: ${slug}`, error);
    return null;
  }
}

// Get all services data
export async function getAllServices(): Promise<ServiceMDXData[]> {
  const slugs = getAllServiceSlugs();
  const services = await Promise.all(
    slugs.map((slug) => getServiceBySlug(slug))
  );
  return services.filter(
    (service): service is ServiceMDXData => service !== null
  );
}
