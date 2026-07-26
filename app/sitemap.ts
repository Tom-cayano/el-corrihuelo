import { MetadataRoute } from "next";
import { INSTALLATIONS_DATA } from "@/lib/installations";

const BASE_URL = "https://elcorrihuelo.es"; 

export default function sitemap(): MetadataRoute.Sitemap {
  // Main routes
  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1,
    },
  ];

  // Dynamic installation routes
  const installationsRoutes = INSTALLATIONS_DATA.map((item) => ({
    url: `${BASE_URL}/instalaciones/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...installationsRoutes];
}
