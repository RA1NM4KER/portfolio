import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";
import { fineAppCaseStudy } from "@/data/fineapp";
import { FineAppArchitectureFlow } from "@/components/sections/fineapp-architecture-flow";

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="section-heading">
      <span className="section-heading__label">{label}</span>
      <div className="section-heading__rule" />
    </div>
  );
}

function ChevronBlock({
  title,
  summary,
  details,
}: {
  title: string;
  summary: string;
  details: string[];
}) {
  return (
    <details className="case-study-disclosure">
      <summary className="case-study-disclosure__summary">
        <div>
          <h3 className="case-study-disclosure__title">{title}</h3>
          <p className="case-study-disclosure__text">{summary}</p>
        </div>
        <span className="case-study-disclosure__icon" aria-hidden="true">
          <ChevronDown size={18} strokeWidth={2.2} />
        </span>
      </summary>

      <div className="case-study-disclosure__content">
        <ul className="case-study-list">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export default function FineAppPage() {
  const data = fineAppCaseStudy;

  return (
    <div className="site-shell">
      <div className="f1-stripe" />

      <header className="navbar">
        <Link href="/" className="navbar__brand">
          Kefas Manda
        </Link>
        <nav className="navbar__nav" aria-label="Primary">
          <a href="#overview" className="navbar__link">
            /overview
          </a>
          <a href="#flows" className="navbar__link">
            /flows
          </a>
          <a href="#architecture" className="navbar__link">
            /architecture
          </a>
          <a href="#challenges" className="navbar__link">
            /challenges
          </a>
          <a href="#results" className="navbar__link">
            /results
          </a>
        </nav>
      </header>

      <main className="page-content case-study-page">
        <section className="case-study-hero">
          <p className="case-study-hero__eyebrow">/project</p>
          <Link href={"https://www.fineapp.co.za"}>
            <h1 className="case-study-hero__title">
              {data.hero.title}
              <ExternalLink
                size={24}
                style={{ marginLeft: 6, verticalAlign: "middle" }}
              />
            </h1>
          </Link>
          <p className="case-study-hero__subtitle">{data.hero.subtitle}</p>

          <div className="case-study-meta-grid">
            {data.hero.meta.map((item) => (
              <div key={item.label} className="case-study-meta-card">
                <p className="case-study-meta-card__label">{item.label}</p>
                <p className="case-study-meta-card__value">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="hero__links">
            {data.hero.links.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ),
            )}
          </div>
        </section>

        <section id="overview" className="content-section">
          <SectionHeader label="/overview" />
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
          <SectionHeader label="/what-i-built" />
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
          <SectionHeader label="/flows" />
          <div className="case-study-stack">
            {data.flows.items.map((item) => (
              <ChevronBlock
                key={item.title}
                title={item.title}
                summary={item.summary}
                details={item.details}
              />
            ))}
          </div>
        </section>

        <section id="architecture" className="content-section">
          <SectionHeader label="/architecture" />
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
          <SectionHeader label="/backend" />
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
          <SectionHeader label="/challenges" />
          <div className="case-study-stack">
            {data.challenges.items.map((item) => (
              <ChevronBlock
                key={item.title}
                title={item.title}
                summary={item.summary}
                details={item.details}
              />
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader label="/admin" />
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
          <SectionHeader label="/audit" />
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

        <section className="content-section">
          <SectionHeader label="/screens" />
          <div className="case-study-copy">
            <h2 className="case-study-subtitle">{data.screenshots.title}</h2>
          </div>

          <div className="screenshot-grid">
            {data.screenshots.items.map((item) => (
              <div key={item.title} className="screenshot-card">
                <div className="screenshot-card__image">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="screenshot-card__img"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <p className="architecture-card__title">{item.title}</p>
                <p className="architecture-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="results" className="content-section">
          <SectionHeader label="/results" />
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
          <SectionHeader label="/reflection" />
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
          <SectionHeader label="/back" />
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
    </div>
  );
}
