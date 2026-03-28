"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";
import styles from "./home-sections.module.css";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ContentSection id="experience" label="/work-experience">
      <div className={styles.list}>
        {experience.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Reveal key={`${item.role}-${item.company}`} delay={index * 80}>
              <article className={styles.experienceRow}>
                <button
                  type="button"
                  className={styles.experienceTrigger}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.experienceMain}>
                    <h3 className={styles.listTitle}>{item.role}</h3>
                    <p className={styles.listText}>{item.company}</p>
                    <p className={styles.listSubtext}>
                      {item.location} · {item.mode}
                    </p>
                    <p className={styles.listMeta}>{item.period}</p>
                  </div>

                  <span
                    className={[
                      styles.experienceIcon,
                      isOpen ? styles.experienceIconOpen : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-hidden="true"
                  >
                    <ChevronDown size={18} strokeWidth={2.2} />
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.experienceDetails}>
                    <ul className={styles.experienceDetailsList}>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <p className={styles.experienceStack}>
                      <span className={styles.experienceStackLabel}>
                        Stack:
                      </span>{" "}
                      {item.stack}
                    </p>
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </ContentSection>
  );
}
