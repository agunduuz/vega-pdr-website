// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllServiceSlugs();

  const services = slugs.map((slug) => ({
    url: `https://samsunboyasizgocukduzeltme.com/hizmetler/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://samsunboyasizgocukduzeltme.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: "https://samsunboyasizgocukduzeltme.com/hizmetler",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://samsunboyasizgocukduzeltme.com/galeri",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://samsunboyasizgocukduzeltme.com/hakkimizda",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://samsunboyasizgocukduzeltme.com/iletisim",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...services,
  ];
}
