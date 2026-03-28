import { ContentSection } from "@/components/ui/content-section";
import type { CaseStudySectionProps } from "@/types/fineapp";
import styles from "./fineapp.module.css";

export function CaseStudySection({
  id,
  label,
  title,
  body,
  children,
  fullWidthChildren,
}: CaseStudySectionProps) {
  return (
    <ContentSection id={id} label={label}>
      <div className={styles.copy}>
        <h2 className={styles.title}>{title}</h2>

        {body?.map((paragraph) => (
          <p key={paragraph} className={styles.bodyCopy}>
            {paragraph}
          </p>
        ))}

        {children}
      </div>

      {fullWidthChildren}
    </ContentSection>
  );
}
