// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllServiceSlugs();

  const services = slugs.map((slug) => ({
    url: `https://www.samsunboyasizgocukduzeltme.com/hizmetler/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.samsunboyasizgocukduzeltme.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.samsunboyasizgocukduzeltme.com/hizmetler",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.samsunboyasizgocukduzeltme.com/galeri",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.samsunboyasizgocukduzeltme.com/hakkimizda",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.samsunboyasizgocukduzeltme.com/iletisim",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...services,
  ];
}
