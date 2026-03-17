import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { fineAppCaseStudy } from "@/data/fineapp";
import { Navbar } from "@/components/layout/navbar";
import { SectionHeading } from "@/components/ui/section-heading";
import { FineAppArchitectureFlow } from "@/components/sections/fineapp-architecture-flow";
import { CaseStudyDisclosure } from "@/components/sections/fineapp/case-study-disclosure";
import { CaseStudyHero } from "@/components/sections/fineapp/case-study-hero";
import { FineAppScreenshotsSection } from "@/components/sections/fineapp/fineapp-screenshots-section";
import { fineAppNavLinks } from "@/data/navigation";

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

        <section id="overview" className="content-section">
          <SectionHeading label="/overview" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.overview.title}</h2>
            {data.overview.body.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeading label="/what-i-built" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.built.title}</h2>
            <ul className="case-study-list">
              {data.built.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="flows" className="content-section">
          <SectionHeading label="/flows" />
          <div className="case-study-stack">
            {data.flows.items.map((item) => (
              <CaseStudyDisclosure
                key={item.title}
                title={item.title}
                summary={item.summary}
                details={item.details}
              />
            ))}
          </div>
        </section>

        <section id="architecture" className="content-section">
          <SectionHeading label="/architecture" />
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
        </section>

        <section className="content-section">
          <SectionHeading label="/backend" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.backend.title}</h2>
            <p className="body-copy">{data.backend.intro}</p>
          </div>

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
        </section>

        <section id="challenges" className="content-section">
          <SectionHeading label="/challenges" />
          <div className="case-study-stack">
            {data.challenges.items.map((item) => (
              <CaseStudyDisclosure
                key={item.title}
                title={item.title}
                summary={item.summary}
                details={item.details}
              />
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeading label="/admin" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.admin.title}</h2>
            <p className="body-copy">{data.admin.intro}</p>
          </div>

          <div className="architecture-grid">
            {data.admin.tools.map((tool) => (
              <div key={tool.title} className="architecture-card">
                <p className="architecture-card__title">{tool.title}</p>
                <p className="architecture-card__text">{tool.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeading label="/audit" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.audit.title}</h2>
            {data.audit.body.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="stack-list">
            {data.audit.sampleActions.map((action) => (
              <span key={action} className="stack-list__item">
                {action}
              </span>
            ))}
          </div>
        </section>

        <FineAppScreenshotsSection
          title={data.screenshots.title}
          items={data.screenshots.items}
        />

        <section id="results" className="content-section">
          <SectionHeading label="/results" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.results.title}</h2>
            <ul className="case-study-list">
              {data.results.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section">
          <SectionHeading label="/reflection" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.reflection.title}</h2>
            {data.reflection.body.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeading label="/back" />
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
        </section>
      </main>
    </>
  );
}
