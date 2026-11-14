import Image from "next/image";
import { fineAppCaseStudy } from "@/data/fineapp";
import {
  CaseStudyHero,
  CaseStudyMetrics,
  CaseStudyNext,
  CaseStudySection,
} from "@/components/sections/case-study/case-study";
import styles from "@/components/sections/case-study/case-study.module.css";

export function FineAppProjectPage() {
  const project = fineAppCaseStudy;

  return (
    <main className="page-content">
      <CaseStudyHero
        label="Product case study"
        title={project.title}
        summary={project.summary}
        meta={[
          { label: "Role", value: project.role },
          { label: "Built", value: "From scratch" },
          { label: "Today", value: "Paid listings and direct enquiries" },
        ]}
        href="https://www.fineapp.co.za/creatives"
        linkLabel="Visit FineApp"
      />

      <CaseStudyMetrics metrics={project.metrics} />

      <CaseStudySection
        id="overview"
        label="Overview"
        title="From manual coordination to a product."
      >
        <div className={styles.prose}>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CaseStudySection>

      <figure className={styles.imageFigure}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1160px) calc(100vw - 80px), 1080px"
          quality={95}
        />
        <figcaption>{project.image.caption}</figcaption>
      </figure>

      <CaseStudySection
        id="evolution"
        label="Product decision"
        title="A shorter path to the conversation."
        description={project.evolution.reason}
      >
        <div className={styles.comparison}>
          <article>
            <h3>Earlier version</h3>
            <p>{project.evolution.before}</p>
          </article>
          <article>
            <h3>Current approach</h3>
            <p>{project.evolution.current}</p>
          </article>
        </div>
      </CaseStudySection>

      <CaseStudySection
        id="engineering"
        label="Engineering"
        title="What went into the original system."
        description="The earlier marketplace involved more than a listing page. These are the engineering decisions and operational lessons behind that build, including features that have since been retired."
      >
        <div className={styles.rows}>
          {project.engineering.map((decision) => (
            <article key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.detail}</p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        id="architecture"
        label="Architecture"
        title="Product flows over a clear backend."
        description={project.architecture.summary}
      >
        <ul
          className={styles.stack}
          aria-label="Technologies used across the build"
        >
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <p className={styles.note}>{project.architecture.note}</p>
      </CaseStudySection>

      <CaseStudySection
        id="reflection"
        label="Reflection"
        title="Building it was one decision. Simplifying it was another."
      >
        <div className={styles.prose}>
          {project.reflection.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudyNext
        href="/schoolscape"
        label="Next case study"
        title="Schoolscape: turning fragmented records into a trusted CRM."
      />
    </main>
  );
}
