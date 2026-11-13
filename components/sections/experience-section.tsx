import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import type { ExperienceItem } from "@/types/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import styles from "./experience.module.css";

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
      title="Fintech, data engineering, production software, and embedded systems."
      headingLayout="stacked"
    >
      <div className={styles.experienceList}>
        <span className={styles.timelineTrack} aria-hidden="true" />
        {experience.map((item, index) => (
          <Reveal key={`${item.role}-${item.company}`} delay={index * 60}>
            <article className={styles.experienceItem}>
              <div className={styles.experienceWhen}>
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>

              <div className={styles.experienceMain}>
                <a
                  className={styles.companyIdentity}
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.company} official website (opens in a new tab)`}
                >
                  {item.logo ? (
                    <span className={styles.companyLogo}>
                      <Image
                        src={item.logo.src}
                        alt=""
                        width={96}
                        height={item.logo.height}
                        style={{ height: item.logo.height }}
                        unoptimized
                      />
                    </span>
                  ) : null}
                  <span className={styles.company}>{item.company}</span>
                </a>
                <h3 className={styles.experienceTitle}>{item.role}</h3>
                <p className={styles.experienceSummary}>{item.summary}</p>

                {item.metrics ? (
                  <dl className={styles.experienceMetrics}>
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt>{metric.label}</dt>
                        <dd>
                          <CountUp value={metric.value} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <ul className={styles.highlightList}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {item.engagement ? (
                  <p className={styles.engagement}>{item.engagement}</p>
                ) : null}

                <ExperienceScope item={item} />
                <TechnologyLine item={item} />
                {item.caseStudy ? (
                  <Link href={item.caseStudy.href} className={styles.caseStudy}>
                    {item.caseStudy.label}{" "}
                    <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </ContentSection>
  );
}
