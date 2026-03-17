import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { fineAppCaseStudy } from "@/data/fineapp";
import { Navbar } from "@/components/layout/navbar";
import { FineAppArchitectureFlow } from "@/components/sections/fineapp-architecture-flow";
import { CaseStudyHero } from "@/components/sections/fineapp/case-study-hero";
import { FineAppScreenshotsSection } from "@/components/sections/fineapp/fineapp-screenshots-section";
import { CaseStudySection } from "@/components/sections/fineapp/case-study-section";
import { fineAppNavLinks } from "@/data/navigation";
import { CaseStudyDisclosureSection } from "@/components/sections/fineapp/case-study-disclosure-section";
import { ContentSection } from "@/components/ui/content-section";

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
          <ul className="case-study-list">
            {data.built.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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

          <div className="architecture-domain-block">
            <p className="architecture-domain-block__label">Core domains</p>
            <div className="stack-list">
              {data.architecture.domains.map((domain) => (
                <span key={domain} className="stack-list__item">
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </ContentSection>

        <CaseStudySection
          label="/backend"
          title={data.backend.title}
          body={[data.backend.intro]}
        >
          <div className="case-study-two-col">
            <div>
              <p className="case-study-mini-label">Modules</p>
              <ul className="case-study-list">
                {data.backend.modules.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="case-study-mini-label">Key entities</p>
              <ul className="case-study-list">
                {data.backend.entities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
          <div className="stack-list">
            {data.audit.sampleActions.map((action) => (
              <span key={action} className="stack-list__item">
                {action}
              </span>
            ))}
          </div>
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
          <ul className="case-study-list">
            {data.results.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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
              Open FineApp{" "}
              <ExternalLink
                size={14}
                style={{ marginLeft: 6, verticalAlign: "middle" }}
              />
            </a>
          </div>
        </ContentSection>
      </main>
    </>
  );
}
