import type { Metadata } from "next";

// Match the primary hostname served by the production hosting configuration.
export const siteUrl = "https://www.kefas.co.za";
export const personId = `${siteUrl}/#person`;
export const homeTitle =
  "Kefas Manda | Software Developer & Applied AI, Cape Town";
export const homeDescription =
  "Kefas Manda is a software developer in Cape Town building applied AI tools, agent infrastructure, backend systems, and data pipelines. Explore his work.";
export const schoolscapeTitle = "Schoolscape CRM data engineering";
export const schoolscapeDescription =
  "How Kefas Manda reconciled 31,675 Schoolscape CRM account rows, preserved contact relationships, and prepared validated data for migration and handover.";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = path === "/" ? title : `${title} | Kefas Manda`;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Kefas Manda, software developer focused on applied AI",
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url: new URL(path, siteUrl).href,
      siteName: "Kefas Manda",
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
