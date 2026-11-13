import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { additionalProjects, selectedProjects } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectMedia } from "@/components/sections/project-media";
import { CountUp } from "@/components/ui/count-up";
import type {
  LinkItem,
  Project,
  VisualProject as VisualProjectData,
} from "@/types/portfolio";
import styles from "./projects.module.css";

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
  showMeta = true,
}: {
  project: Project;
  showMeta?: boolean;
}) {
  return (
    <div className={styles.projectCopy}>
      <h3>{project.name}</h3>
      {project.proof ? (
        <p className={styles.projectProof}>
          <strong>
            <CountUp value={project.proof.value} />
          </strong>
          <span>{project.proof.label}</span>
        </p>
      ) : null}
      <p className={styles.projectDescription}>{project.description}</p>
      {project.outcome ? (
        <p className={styles.projectOutcome}>{project.outcome}</p>
      ) : null}
      {project.note ? (
        <p className={styles.projectNote}>{project.note}</p>
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
        <h4 id={`${project.name.toLowerCase()}-hardware-title`}>
          {experiment.title}
        </h4>
        {experiment.description.split("\n\n").map((paragraph) => (
          <p key={paragraph} className={styles.hardwareDescription}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles.hardwareMedia}>
        <video
          autoPlay
          controls
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="NewinMeter optical sensor detecting electricity meter pulses"
        >
          <source src={experiment.video.src} type="video/mp4" />
          An optical sensor detects electricity meter pulses, an Arduino counts
          them, and a laptop sends the readings as live usage data.{" "}
          <a href={experiment.video.fallbackHref}>
            Watch the NewinMeter optical sensor demo (MP4).
          </a>
        </video>
        <p>Working optical pulse sensing proof of concept</p>
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
    </aside>
  );
}

function ProjectDiagram({ project }: { project: Project }) {
  if (!project.diagram) return null;

  return (
    <figure
      className={styles.projectDiagram}
      aria-label={`${project.name} architecture`}
    >
      <ol>
        {project.diagram.map((layer) => (
          <li key={layer.label}>
            <strong>{layer.label}</strong>
            {layer.detail ? <span>{layer.detail}</span> : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function VisualProject({ project }: { project: VisualProjectData }) {
  const destinationLink =
    project.links.find((link) => link.purpose === "product") ??
    project.links.find((link) => link.purpose === "site");

  const media =
    project.image || project.video ? (
      <ProjectMedia
        image={project.image}
        video={project.video}
        productName={project.name}
        productHref={destinationLink?.href}
      />
    ) : (
      <ProjectDiagram project={project} />
    );

  return (
    <div className={styles.projectStack}>
      <article
        className={[
          styles[`project_${project.presentation}`],
          !project.image && !project.video && !project.diagram
            ? styles.projectTextOnly
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {media}
        <ProjectCopy project={project} />
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
        title="Agent infrastructure, grounded AI, and production systems."
        headingLayout="stacked"
      >
        <div className={styles.featuredProjects}>
          {selectedProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 55}>
              <VisualProject project={project} />
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="more-work" label="/ More work" headingLayout="rule">
        <div className={styles.toolsHeader}>
          <h2>More projects</h2>
          <p>
            Products and integrations that round out the larger systems above.
          </p>
        </div>
        <div className={styles.toolsGrid}>
          {additionalProjects.map((tool) => (
            <article key={tool.name} className={styles.toolItem}>
              <span className={styles.toolCategory}>{tool.category}</span>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className={styles.toolLink}
                aria-label={`${tool.linkLabel}: ${tool.name}`}
              >
                {tool.linkLabel} <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </article>
          ))}
        </div>
        <p className={styles.moreGithub}>
          See more projects on my{" "}
          <a
            href="https://github.com/RA1NM4KER"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </p>
      </ContentSection>
    </>
  );
}
