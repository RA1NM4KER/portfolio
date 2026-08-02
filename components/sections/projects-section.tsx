import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { developerTools, selectedProjects } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectMedia } from "@/components/sections/project-media";
import type { LinkItem, Project } from "@/types/portfolio";
import styles from "./home-sections.module.css";

function ProjectLink({ link }: { link: LinkItem }) {
  const internal = link.href.startsWith("/");
  const content = (
    <>
      {link.label}{" "}
      {internal ? (
        <ArrowRight aria-hidden="true" size={14} />
      ) : (
        <ArrowUpRight aria-hidden="true" size={14} />
      )}
    </>
  );
  return internal ? (
    <Link href={link.href}>{content}</Link>
  ) : (
    <a href={link.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

function ProjectTechnologyList({ project }: { project: Project }) {
  return (
    <ul
      className={styles.inlineTech}
      aria-label={`${project.name} technologies`}
    >
      {project.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

function ProjectLinkList({ project }: { project: Project }) {
  return (
    <div className={styles.projectLinks}>
      {project.links.map((link) => (
        <ProjectLink key={link.href} link={link} />
      ))}
    </div>
  );
}

function ProjectCopy({
  project,
  showSignals = true,
  showMeta = true,
}: {
  project: Project;
  showSignals?: boolean;
  showMeta?: boolean;
}) {
  return (
    <div className={styles.projectCopy}>
      <p className={styles.projectEyebrow}>{project.eyebrow}</p>
      <h3>{project.name}</h3>
      {project.proof ? (
        <p className={styles.projectProof}>
          <strong>{project.proof.value}</strong>
          <span>{project.proof.label}</span>
        </p>
      ) : null}
      <p className={styles.projectDescription}>{project.description}</p>
      {project.outcome ? (
        <p className={styles.projectOutcome}>{project.outcome}</p>
      ) : null}
      {project.signals && showSignals ? (
        <ul className={styles.projectSignals}>
          {project.signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      ) : null}
      {showMeta ? <ProjectTechnologyList project={project} /> : null}
      {showMeta ? <ProjectLinkList project={project} /> : null}
    </div>
  );
}

function MetricsProject({ project }: { project: Project }) {
  return (
    <article className={styles.metricsProject}>
      <div className={styles.metricsProjectCopy}>
        <ProjectCopy project={project} showSignals={false} />
      </div>
      <div
        className={styles.reconciliationVisual}
        aria-label="Schoolscape reconciliation process"
      >
        <div className={styles.metricStack}>
          {project.metrics?.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <ol className={styles.flowSteps}>
          {project.signals?.map((signal, index) => (
            <li key={signal}>
              <span>0{index + 1}</span>
              {signal}
            </li>
          ))}
        </ol>
        <p>Audited decisions · ID-based redirects · reproducible delivery</p>
      </div>
    </article>
  );
}

function VisualProject({ project }: { project: Project }) {
  const productLink = project.links.find(
    (link) => link.label === "Open product",
  );

  return (
    <article className={styles[`project_${project.presentation}`]}>
      {project.image ? (
        <ProjectMedia
          image={project.image}
          productName={project.name}
          productHref={productLink?.href}
        />
      ) : null}
      <ProjectCopy project={project} showMeta={false} />
      <div className={styles.projectMetaFooter}>
        <ProjectTechnologyList project={project} />
        <ProjectLinkList project={project} />
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <>
      <ContentSection
        id="case-studies"
        label="/ Selected systems"
        title="Schoolscape, NewinMeter, FineApp, Showcased, and GradeLog."
        headingLayout="stacked"
      >
        <div className={styles.featuredProjects}>
          {selectedProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 55}>
              {project.presentation === "metrics" ? (
                <MetricsProject project={project} />
              ) : (
                <VisualProject project={project} />
              )}
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="more-work"
        label="/ Smaller tools"
        headingLayout="rule"
      >
        <div className={styles.toolsHeader}>
          <h2>More projects</h2>
          <p>Typed MCP integrations.</p>
        </div>
        <div className={styles.toolsGrid}>
          {developerTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noreferrer"
              className={styles.toolItem}
            >
              <span className={styles.toolCategory}>Developer tool</span>
              <strong>{tool.name}</strong>
              <small>{tool.description}</small>
              <span className={styles.toolLink}>
                Repository <ArrowUpRight aria-hidden="true" size={14} />
              </span>
            </a>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
