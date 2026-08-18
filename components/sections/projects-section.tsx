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
      {project.secondaryProject ? (
        <div className={styles.secondaryProject}>
          <p>Additional project</p>
          <h4>{project.secondaryProject.name}</h4>
          <span>{project.secondaryProject.description}</span>
          {project.secondaryProject.technologies ? (
            <ul aria-label={`${project.secondaryProject.name} technologies`}>
              {project.secondaryProject.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      {showMeta ? <ProjectTechnologyList project={project} /> : null}
      {showMeta ? <ProjectLinkList project={project} /> : null}
    </div>
  );
}

function HardwareExperiment({ project }: { project: Project }) {
  const experiment = project.hardwareExperiment;

  if (!experiment) return null;

  return (
    <aside
      className={styles.hardwareExperiment}
      aria-labelledby={`${project.name.toLowerCase()}-hardware-title`}
    >
      <div className={styles.hardwareCopy}>
        <p className={styles.projectEyebrow}>Hardware experiment</p>
        <h4 id={`${project.name.toLowerCase()}-hardware-title`}>
          {experiment.title}
        </h4>
        <p className={styles.hardwareDescription}>{experiment.description}</p>

        <div className={styles.hardwareStatusGrid}>
          <div>
            <strong>Working now</strong>
            <ul>
              {experiment.current.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Planned</strong>
            <ul>
              {experiment.planned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.telemetryStates} aria-label="Telemetry paths">
          {experiment.architecture.map((state) => (
            <div key={state.label}>
              <strong>{state.label}</strong>
              <ol className={styles.telemetryFlow}>
                {state.nodes.map((node) => (
                  <li key={node}>{node}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.hardwareMedia}>
        <video
          controls
          muted
          playsInline
          preload="metadata"
          aria-label="NewinMeter optical sensor detecting electricity meter pulses"
        >
          <source src={experiment.video.src} type="video/mp4" />
          Your browser cannot play this video.{" "}
          <a href={experiment.video.fallbackHref}>Open the MP4 directly.</a>
        </video>
        <p>Working optical pulse sensing proof of concept</p>
      </div>
    </aside>
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
    <div className={styles.projectStack}>
      <article
        className={[
          styles[`project_${project.presentation}`],
          !project.image ? styles.projectTextOnly : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
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
        {project.note ? (
          <p className={styles.projectNote}>{project.note}</p>
        ) : null}
      </article>
      <HardwareExperiment project={project} />
    </div>
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
