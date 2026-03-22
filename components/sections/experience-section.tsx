"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ContentSection id="experience" label="/work-experience">
      <div className="list">
        {experience.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Reveal key={`${item.role}-${item.company}`} delay={index * 80}>
              <article className="experience-row">
                <button
                  type="button"
                  className="experience-row__trigger"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="experience-row__main">
                    <h3 className="list-row__title">{item.role}</h3>
                    <p className="list-row__text">{item.company}</p>
                    <p className="list-row__subtext">
                      {item.location} · {item.mode}
                    </p>
                    <p className="list-row__meta">{item.period}</p>
                  </div>

                  <span
                    className={`experience-row__icon ${
                      isOpen ? "experience-row__icon--open" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown size={18} strokeWidth={2.2} />
                  </span>
                </button>

                {isOpen && (
                  <div className="experience-row__details">
                    <ul className="experience-row__details-list">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <p className="experience-row__stack">
                      <span className="experience-row__stack-label">
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
