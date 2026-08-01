import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { SchoolscapeProject } from "@/types/schoolscape";
import styles from "./schoolscape-project.module.css";

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.sectionLabel}>
        <span aria-hidden="true">/</span> {label}
      </p>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
}

export function SchoolscapeProjectPage({
  project,
}: {
  project: SchoolscapeProject;
}) {
  return (
    <main className="page-content">
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Client project</p>
          <h1>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.heroLinks}>
            <Link href="/#case-studies">
              <ArrowLeft aria-hidden="true" size={14} /> Selected work
            </Link>
            <a href="#system">
              System overview <ArrowRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>
        <dl className={styles.projectMeta}>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Engagement</dt>
            <dd>{project.engagement}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{project.location}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>
              CRM data engineering, handover tooling, and production web
              delivery
            </dd>
          </div>
        </dl>
      </header>

      <section className={styles.metrics} aria-label="Project outcomes">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </div>
        ))}
      </section>

      <section id="system" className={styles.section}>
        <SectionHeading
          label="System"
          title="Identity first, automation second."
          description="Matching suggestions accelerated the work, but stable CRM identities, evidence, and review thresholds controlled what was allowed into the final dataset."
        />
        <ol className={styles.pipeline}>
          {project.pipeline.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="work" className={styles.section}>
        <SectionHeading
          label="Work"
          title="Eight connected workstreams."
          description="The programme covered more than deduplication: source control, enrichment, relationships, permissions, business taxonomy, and migration readiness were handled together."
        />
        <div className={styles.workstreamGrid}>
          {project.workstreams.map((workstream, index) => (
            <article key={workstream.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{workstream.title}</h3>
                <p>{workstream.detail}</p>
              </div>
              <strong>{workstream.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="quality" className={styles.section}>
        <SectionHeading
          label="Quality"
          title="Improvement that can be checked."
          description="Coverage was only used where it was meaningful. Invalid or unsupported values stayed visible instead of being converted into decorative completeness."
        />
        <div className={styles.qualityLayout}>
          <div className={styles.outcomeTable}>
            {project.fieldOutcomes.map((outcome) => (
              <div key={outcome.field}>
                <span>{outcome.field}</span>
                <strong>{outcome.result}</strong>
                <p>{outcome.detail}</p>
              </div>
            ))}
          </div>
          <aside className={styles.principles}>
            <p>Validation principles</p>
            {project.principles.map((principle) => (
              <div key={principle.title}>
                <Check aria-hidden="true" size={15} />
                <span>
                  <strong>{principle.title}</strong>
                  {principle.detail}
                </span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section id="handover" className={styles.section}>
        <SectionHeading
          label="Handover"
          title="The output was designed to be inherited."
          description="The final files were only one part of the delivery. Stakeholders also received the context, controls, and retrieval tools needed to review and maintain the work."
        />
        <div className={styles.handoverGrid}>
          {project.handover.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className={styles.webDelivery}>
          <div>
            <p className={styles.eyebrow}>Also delivered</p>
            <h3>Production web and business-system work</h3>
          </div>
          <ul>
            {project.webDelivery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <aside className={styles.boundary}>
        <strong>Public boundary</strong>
        <p>{project.boundary}</p>
      </aside>
    </main>
  );
}
