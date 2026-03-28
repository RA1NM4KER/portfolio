import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";
import styles from "./home-sections.module.css";

export function ProjectsSection() {
  return (
    <ContentSection id="projects" label="/projects">
      <div className={styles.list}>
        {projects.map((project, index) => {
          const isInternal = project.href.startsWith("/");
          const showLink = project.name !== "Showcase";

          return (
            <Reveal key={project.name} delay={index * 70}>
              <article className={styles.listRow}>
                <div>
                  <h3 className={styles.listTitle}>{project.name}</h3>
                  <p className={styles.listText}>{project.description}</p>
                  <p className={styles.listMeta}>{project.stack}</p>
                </div>

                {showLink &&
                  (isInternal ? (
                    <Link
                      href={project.href}
                      scroll
                      className={styles.listLink}
                    >
                      view →
                    </Link>
                  ) : (
                    <a
                      href={project.href}
                      className={styles.listLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      view →
                    </a>
                  ))}
              </article>
            </Reveal>
          );
        })}
      </div>
    </ContentSection>
  );
}
