import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { FineAppProjectPage } from "@/components/sections/fineapp/fineapp-project-page";
import { fineAppCaseStudy } from "@/data/fineapp";
import { fineAppNavLinks } from "@/data/navigation";
import { pageMetadata, personId, siteUrl } from "@/data/seo";

const title = "FineApp marketplace case study";

export const metadata = pageMetadata({
  title,
  description: fineAppCaseStudy.summary,
  path: "/fineapp",
});

const projectStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/fineapp#webpage`,
  url: `${siteUrl}/fineapp`,
  name: title,
  description: fineAppCaseStudy.summary,
  inLanguage: "en-ZA",
  author: { "@id": personId },
  mainEntity: {
    "@type": "CreativeWork",
    "@id": `${siteUrl}/fineapp#project`,
    name: title,
    description: `${fineAppCaseStudy.summary} ${fineAppCaseStudy.currentModel} The case study also documents the original messaging and payment features, which have since been removed.`,
    creator: { "@id": personId },
    about: [
      "Marketplace engineering",
      "Product development",
      "Product simplification",
    ],
  },
};

export default function FineAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <Navbar links={fineAppNavLinks} />
      <FineAppProjectPage />
      <SiteFooter />
    </>
  );
}
