import { capabilities } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import styles from "./home-sections.module.css";

export function CapabilitiesSection() {
  return (
    <ContentSection
      id="capabilities"
      label="/ Technical capabilities"
      title="Applied AI, product, backend, data, cloud, and embedded systems."
      headingLayout="stacked"
    >
      <div className={styles.capabilityList}>
        {capabilities.map((group, index) => (
          <article key={group.title} className={styles.capabilityRow}>
            <span className={styles.capabilityIndex} aria-hidden="true">
              0{index + 1}
            </span>
            <h3>{group.title}</h3>
            <div className={styles.capabilityDetails}>
              <p>{group.description}</p>
              <ul aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </ContentSection>
  );
}
