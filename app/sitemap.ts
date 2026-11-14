import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until content revision dates are tracked accurately.
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/schoolscape` },
    { url: `${siteUrl}/fineapp` },
  ];
}
