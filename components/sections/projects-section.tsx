import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";

export function ProjectsSection() {
  return (
    <ContentSection id="projects" label="/projects">
      <div className="list">
        {projects.map((project) => {
          const isInternal = project.href.startsWith("/");
          const showLink = project.name !== "Showcase";

          return (
            <article key={project.name} className="list-row">
              <div>
                <h3 className="list-row__title">{project.name}</h3>
                <p className="list-row__text">{project.description}</p>
                <p className="list-row__meta">{project.stack}</p>
              </div>

              {showLink &&
                (isInternal ? (
                  <Link href={project.href} className="list-row__link">
                    view →
                  </Link>
                ) : (
                  <a
                    href={project.href}
                    className="list-row__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    view →
                  </a>
                ))}
            </article>
          );
        })}
      </div>
    </ContentSection>
  );
}
