import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://kefas.co.za"),
  title: {
    default: "Kefas Manda, Software developer",
    template: "%s | Kefas Manda",
  },
  description:
    "Kefas Manda is a software developer focused on applied AI, building simple, reliable systems across agent infrastructure, data-intensive products, and production software.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://kefas.co.za",
    siteName: "Kefas Manda",
    title: "Kefas Manda, Software developer",
    description:
      "Simple, reliable systems across applied AI, agent infrastructure, and production software.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kefas Manda, software developer focused on applied AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kefas Manda, Software developer",
    description:
      "Simple, reliable systems across applied AI, agent infrastructure, and production software.",
    images: ["/opengraph-image"],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kefas Manda",
  url: "https://kefas.co.za",
  email: "mailto:kefasa112@gmail.com",
  jobTitle: "Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stellenbosch",
    addressCountry: "ZA",
  },
  sameAs: [
    "https://github.com/RA1NM4KER",
    "https://www.linkedin.com/in/kefas-manda/",
  ],
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
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <div className="site-shell">
          <div className="f1-stripe" />
          {children}
        </div>
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
