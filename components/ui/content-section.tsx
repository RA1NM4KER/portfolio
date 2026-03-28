import { Reveal } from "@/components/ui/reveal";
import type { ContentSectionProps } from "@/types/ui";
import styles from "./content-section.module.css";

export function ContentSection({ id, label, children }: ContentSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <Reveal>
        <div className={styles.heading}>
          <span className={styles.label}>{label}</span>
          <div className={styles.rule} />
        </div>
      </Reveal>
      <Reveal delay={100}>{children}</Reveal>
    </section>
  );
}
