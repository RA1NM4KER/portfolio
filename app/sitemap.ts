import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-01");
  return [
    {
      url: "https://kefas.co.za",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://kefas.co.za/schoolscape",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://kefas.co.za/fineapp",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
