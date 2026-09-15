import type { MetadataRoute } from "next";
import { divisi } from "@/data/struktur";

const BASE_URL = "https://hmpskeubank.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tentang`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/struktur`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...divisi.map((d) => ({
      url: `${BASE_URL}/struktur/${d.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${BASE_URL}/kontak`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
