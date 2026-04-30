import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";
import styles from "./home-sections.module.css";

export function ProjectsSection() {
  return (
    <ContentSection id="projects" label="/projects">
      <div className={styles.projectGrid}>
        {projects.map((project, index) => {
          const isInternal = project.href.startsWith("/");
          const isInDevelopment = project.href === "#";
          const isGitHub = project.href.includes("github.com");
          const stackItems = project.stack.split(" · ").slice(0, 4);
          const hasLinks = !isInDevelopment;

          return (
            <Reveal
              key={project.name}
              className={styles.projectReveal}
              delay={index * 70}
            >
              <article
                className={`${styles.projectCard} ${hasLinks ? styles.projectCardHoverable : ""}`}
              >
                <div className={styles.projectCardHeader}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                </div>

                <p className={styles.projectText}>{project.description}</p>

                <div className={styles.projectFooter}>
                  <div className={styles.projectStack}>
                    {stackItems.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  {hasLinks && (
                    <div className={styles.projectLinks}>
                      {isInternal ? (
                        <Link
                          href={project.href}
                          scroll
                          className={styles.projectLink}
                          aria-label={`${project.name} case study`}
                        >
                          case study <ArrowRight size={11} strokeWidth={2} />
                        </Link>
                      ) : (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.projectLink}
                          aria-label={
                            isGitHub
                              ? `${project.name} on github`
                              : `${project.name} live`
                          }
                        >
                          {isGitHub ? "github" : "live"}{" "}
                          <ExternalLink size={11} strokeWidth={2} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.projectLink}
                          aria-label={`${project.name} live demo`}
                        >
                          live <ExternalLink size={11} strokeWidth={2} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </ContentSection>
  );
}
