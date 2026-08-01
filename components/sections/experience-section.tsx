import { experience } from "@/data/portfolio";
import type { ExperienceItem } from "@/types/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";
import styles from "./home-sections.module.css";

function ExperienceScope({ item }: { item: ExperienceItem }) {
  if (!item.areas) return null;

  return (
    <details className={styles.experienceDetails}>
      <summary>Additional scope and responsibilities</summary>
      <div className={styles.ownershipGrid}>
        {item.areas.map((area) => (
          <div key={area.title}>
            <h4>{area.title}</h4>
            <ul>
              {area.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

function TechnologyLine({ item }: { item: ExperienceItem }) {
  return (
    <ul
      className={styles.inlineTech}
      aria-label={`${item.company} technologies`}
    >
      {item.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

export function ExperienceSection() {
  return (
    <ContentSection
      id="experience"
      label="/ Professional experience"
      title="Fintech, CRM data, production web, and embedded systems."
      headingLayout="stacked"
    >
      <div className={styles.experienceList}>
        {experience.map((item, index) => (
          <Reveal key={`${item.role}-${item.company}`} delay={index * 60}>
            <article className={styles[`experience_${item.presentation}`]}>
              <header className={styles.experienceHeader}>
                <div>
                  <p className={styles.company}>{item.company}</p>
                  <h3 className={styles.experienceTitle}>{item.role}</h3>
                </div>
                <div className={styles.experienceMeta}>
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </header>

              {item.metrics ? (
                <dl className={styles.experienceMetrics}>
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              <div className={styles.experienceBody}>
                <div>
                  <p className={styles.experienceSummary}>{item.summary}</p>
                  {item.engagement ? (
                    <p className={styles.engagement}>{item.engagement}</p>
                  ) : null}
                </div>
                <ul className={styles.highlightList}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <ExperienceScope item={item} />
              <TechnologyLine item={item} />
            </article>
          </Reveal>
        ))}
      </div>
    </ContentSection>
  );
}
