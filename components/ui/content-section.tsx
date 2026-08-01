import { Reveal } from "@/components/ui/reveal";
import type { ContentSectionProps } from "@/types/ui";
import styles from "./content-section.module.css";

export function ContentSection({
  id,
  label,
  title,
  headingLayout = "split",
  children,
}: ContentSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <Reveal>
        <div
          className={[styles.heading, styles[headingLayout]]
            .filter(Boolean)
            .join(" ")}
        >
          <span className={styles.label}>{label}</span>
          {title ? (
            <h2 className={styles.title}>{title}</h2>
          ) : (
            <div className={styles.rule} />
          )}
        </div>
      </Reveal>
      <Reveal delay={100}>{children}</Reveal>
    </section>
  );
}
