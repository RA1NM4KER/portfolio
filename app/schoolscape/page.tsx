import {
  pageMetadata,
  personId,
  schoolscapeDescription,
  schoolscapeTitle,
  siteUrl,
} from "@/data/seo";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SchoolscapeProjectPage } from "@/components/sections/schoolscape/schoolscape-project-page";
import { schoolscapeProject } from "@/data/schoolscape";
import { schoolscapeNavLinks } from "@/data/navigation";

export const metadata = pageMetadata({
  title: schoolscapeTitle,
  description: schoolscapeDescription,
  path: "/schoolscape",
});

const projectStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/schoolscape#webpage`,
  url: `${siteUrl}/schoolscape`,
  name: schoolscapeTitle,
  description: schoolscapeDescription,
  inLanguage: "en-ZA",
  author: { "@id": personId },
  mainEntity: {
    "@type": "CreativeWork",
    "@id": `${siteUrl}/schoolscape#project`,
    name: schoolscapeTitle,
    description: schoolscapeProject.summary,
    creator: { "@id": personId },
    about: ["CRM data engineering", "Data reconciliation", "Data migration"],
  },
};

export default function SchoolscapePage() {
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
      <Navbar links={schoolscapeNavLinks} />
      <SchoolscapeProjectPage project={schoolscapeProject} />
      <SiteFooter />
    </>
  );
}
