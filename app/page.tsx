import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div className="site-shell">
      <div className="f1-stripe" />
      <Navbar />
      <main className="page-content">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
