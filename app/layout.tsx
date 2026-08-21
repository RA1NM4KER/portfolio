import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://kefas.co.za"),
  title: {
    default: "Kefas Manda, Software engineer",
    template: "%s | Kefas Manda",
  },
  description:
    "Kefas Manda is a final-year Computer Science student at Stellenbosch University building applied AI, data, and software systems through internships, contract engineering work, and independently shipped products.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://kefas.co.za",
    siteName: "Kefas Manda",
    title: "Kefas Manda, Software engineer",
    description:
      "Applied AI, data, and software systems, built through internships, contract work, and independently shipped products.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kefas Manda, software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kefas Manda, Software engineer",
    description: "Applied AI, data, and software systems.",
    images: ["/opengraph-image"],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kefas Manda",
  url: "https://kefas.co.za",
  email: "mailto:kefasa112@gmail.com",
  jobTitle: "Computer Science Student and Software Developer",
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
    "Applied AI and tool-calling systems",
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
