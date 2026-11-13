import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { homeTitle, personId, siteUrl } from "@/data/seo";
import { contact } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: "%s | Kefas Manda",
  },
  authors: [{ name: "Kefas Manda", url: siteUrl }],
  creator: "Kefas Manda",
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Kefas Manda",
  url: `${siteUrl}/`,
  email: `mailto:${contact.email}`,
  jobTitle: "Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressCountry: "ZA",
  },
  sameAs: [contact.github, contact.linkedin],
  affiliation: {
    "@type": "Organization",
    name: "Stellenbosch University",
  },
  knowsAbout: [
    "Applied AI systems",
    "AI agent infrastructure",
    "Model Context Protocol",
    "Backend systems",
    "Data pipelines",
    "CRM data engineering",
    "Cloud infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="describedby" href="/llms.txt" type="text/plain" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <div className="site-shell">{children}</div>
        {process.env.VERCEL ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
