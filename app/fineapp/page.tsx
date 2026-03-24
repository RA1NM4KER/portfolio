import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { fineAppCaseStudy } from "@/data/fineapp";
import { Navbar } from "@/components/layout/navbar";
import { CaseStudyHero } from "@/components/sections/fineapp/case-study-hero";
import { FineAppScreenshotsSection } from "@/components/sections/fineapp/fineapp-screenshots-section";
import { CaseStudySection } from "@/components/sections/fineapp/case-study-section";
import { fineAppNavLinks } from "@/data/navigation";
import { CaseStudyDisclosureSection } from "@/components/sections/fineapp/case-study-disclosure-section";
import { ContentSection } from "@/components/ui/content-section";
import { FineAppArchitectureFlow } from "@/components/sections/fineapp-architecture/fineapp-architecture-flow";
import { TagList } from "@/components/ui/tag-list";
import { LabeledList } from "@/components/ui/labeled-list";
import { BulletList } from "@/components/ui/bullet-list";

export default function FineAppPage() {
  const data = fineAppCaseStudy;

  return (
    <>
      <Navbar links={fineAppNavLinks} />

      <main className="page-content case-study-page">
        <CaseStudyHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          meta={data.hero.meta}
          links={data.hero.links}
        />

        <CaseStudySection
          id="overview"
          label="/overview"
          title={data.overview.title}
          body={data.overview.body}
        />

        <CaseStudySection label="/what-i-built" title={data.built.title}>
          <BulletList items={data.built.points} />
        </CaseStudySection>

        <CaseStudyDisclosureSection
          id="flows"
          label="/flows"
          items={data.flows.items}
        />

        <ContentSection id="architecture" label="/architecture">
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.architecture.title}</h2>
            <p className="body-copy">{data.architecture.description}</p>
          </div>

          <FineAppArchitectureFlow />

          <TagList
            className="architecture-domain-block"
            label="Core domains"
            items={data.architecture.domains}
          />
        </ContentSection>

        <CaseStudySection
          label="/backend"
          title={data.backend.title}
          body={[data.backend.intro]}
        >
          <div className="case-study-two-col">
            <LabeledList label="Modules" items={data.backend.modules} />
            <LabeledList label="Key entities" items={data.backend.entities} />
          </div>
        </CaseStudySection>

        <CaseStudyDisclosureSection
          id="challenges"
          label="/challenges"
          items={data.challenges.items}
        />

        <CaseStudySection
          label="/admin"
          title={data.admin.title}
          body={[data.admin.intro]}
        >
          <div className="architecture-grid">
            {data.admin.tools.map((tool) => (
              <div key={tool.title} className="architecture-card">
                <p className="architecture-card__title">{tool.title}</p>
                <p className="architecture-card__text">{tool.text}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          label="/audit"
          title={data.audit.title}
          body={data.audit.body}
        >
          <TagList items={data.audit.sampleActions} />
        </CaseStudySection>

        <FineAppScreenshotsSection
          title={data.screenshots.title}
          items={data.screenshots.items}
        />

        <CaseStudySection
          id="results"
          label="/results"
          title={data.results.title}
        >
          <BulletList items={data.results.points} />
        </CaseStudySection>

        <CaseStudySection
          label="/reflection"
          title={data.reflection.title}
          body={data.reflection.body}
        />

        <ContentSection label="/back">
          <div className="hero__links">
            <Link href="/">Back to portfolio</Link>
            <a
              href="https://www.fineapp.co.za"
              target="_blank"
              rel="noreferrer"
            >
              Open FineApp <ExternalLink size={14} style={{ marginLeft: 6 }} />
            </a>
          </div>
        </ContentSection>
      </main>
    </>
  );
}
