import {
  homeDescription,
  homeTitle,
  pageMetadata,
  personId,
  siteUrl,
} from "@/data/seo";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { EducationSection } from "@/components/sections/education-section";
import { CurrentFocusSection } from "@/components/sections/current-focus-section";
import { homeNavLinks } from "@/data/navigation";

export const metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
});

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Kefas Manda",
      inLanguage: "en-ZA",
      publisher: { "@id": personId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: homeTitle,
      description: homeDescription,
      inLanguage: "en-ZA",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": personId },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar links={homeNavLinks} />
      <main className="page-content">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <CurrentFocusSection />
        <EducationSection />
      </main>
      <SiteFooter />
    </>
  );
}
