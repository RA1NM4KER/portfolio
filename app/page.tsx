import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { EducationSection } from "@/components/sections/education-section";
import { CurrentFocusSection } from "@/components/sections/current-focus-section";
import { homeNavLinks } from "@/data/navigation";

export default function HomePage() {
  return (
    <>
      <Navbar links={homeNavLinks} />
      <main className="page-content">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <CurrentFocusSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
