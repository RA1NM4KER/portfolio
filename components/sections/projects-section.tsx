import Link from "next/link";
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
          const showLink = project.name !== "Showcase";
          const stackItems = project.stack.split(" · ").slice(0, 4);
          const linkLabel = isInternal ? "case study" : "view";

          return (
            <Reveal
              key={project.name}
              className={styles.projectReveal}
              delay={index * 70}
            >
              <article className={styles.projectCard}>
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

                  {showLink &&
                    (isInternal ? (
                      <Link
                        href={project.href}
                        scroll
                        className={styles.projectLink}
                      >
                        {linkLabel} →
                      </Link>
                    ) : (
                      <a
                        href={project.href}
                        className={styles.projectLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {linkLabel} →
                      </a>
                    ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </ContentSection>
  );
}
