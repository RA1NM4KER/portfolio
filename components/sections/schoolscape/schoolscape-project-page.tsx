import type { SchoolscapeProject } from "@/types/schoolscape";
import {
  CaseStudyHero,
  CaseStudyMetrics,
  CaseStudyNext,
  CaseStudySection,
} from "@/components/sections/case-study/case-study";
import styles from "@/components/sections/case-study/case-study.module.css";

export function SchoolscapeProjectPage({
  project,
}: {
  project: SchoolscapeProject;
}) {
  return (
    <main className="page-content">
      <CaseStudyHero
        label="/ Client case study"
        title="Schoolscape"
        summary={project.summary}
        meta={[
          { label: "Role", value: project.role },
          { label: "Engagement", value: project.engagement },
          { label: "Location", value: project.location },
        ]}
      />

      <CaseStudyMetrics metrics={project.metrics} />

      <CaseStudySection
        id="system"
        label="/ System"
        title="Identity first, automation second."
        description="Matching suggestions accelerated the work, but stable CRM identities, evidence, and review thresholds controlled what was allowed into the final dataset."
      >
        <ol className={styles.numberedRows}>
          {project.pipeline.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </CaseStudySection>

      <CaseStudySection
        id="work"
        label="/ Work"
        title="Eight connected workstreams."
        description="The programme covered more than deduplication: source control, enrichment, relationships, permissions, business taxonomy, and migration readiness were handled together."
      >
        <div className={styles.workRows}>
          {project.workstreams.map((workstream, index) => (
            <article key={workstream.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{workstream.title}</h3>
                <p>{workstream.detail}</p>
              </div>
              <strong>{workstream.result}</strong>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        id="quality"
        label="/ Quality"
        title="Improvement that can be checked."
        description="Coverage was only used where it was meaningful. Invalid or unsupported values stayed visible instead of being converted into decorative completeness."
      >
        <table className={styles.qualityTable}>
          <caption>Field quality after reconciliation</caption>
          <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">Result</th>
              <th scope="col">What was checked</th>
            </tr>
          </thead>
          <tbody>
            {project.fieldOutcomes.map((outcome) => (
              <tr key={outcome.field}>
                <th scope="row">{outcome.field}</th>
                <td>{outcome.result}</td>
                <td>{outcome.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <aside className={styles.principles}>
          <h3>Validation principles</h3>
          <ul>
            {project.principles.map((principle) => (
              <li key={principle.title}>
                <strong>{principle.title}</strong>
                <span>{principle.detail}</span>
              </li>
            ))}
          </ul>
        </aside>
      </CaseStudySection>

      <CaseStudySection
        id="handover"
        label="/ Handover"
        title="The output was designed to be inherited."
        description="The final files were only one part of the delivery. Stakeholders also received the context, controls, and retrieval tools needed to review and maintain the work."
      >
        <div className={styles.handoverRows}>
          {project.handover.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className={styles.prose}>
          <h3>Also delivered: production web and business systems</h3>
          <ul className={styles.list}>
            {project.webDelivery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection
        id="public-boundary"
        label="/ Public boundary"
        title="A public account of the work."
      >
        <p className={styles.note}>{project.boundary}</p>
      </CaseStudySection>

      <CaseStudyNext
        href="/fineapp"
        label="Product engineering"
        title="FineApp: building a marketplace, then simplifying it."
      />
    </main>
  );
}
