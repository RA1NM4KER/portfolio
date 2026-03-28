import { CaseStudyDisclosure } from "@/components/sections/fineapp/case-study-disclosure";
import { ContentSection } from "@/components/ui/content-section";
import type { CaseStudyDisclosureSectionProps } from "@/types/fineapp";
import styles from "./fineapp.module.css";

export function CaseStudyDisclosureSection({
  id,
  label,
  items,
}: CaseStudyDisclosureSectionProps) {
  return (
    <ContentSection id={id} label={label}>
      <div className={styles.stack}>
        {items.map((item) => (
          <CaseStudyDisclosure
            key={item.title}
            title={item.title}
            summary={item.summary}
            details={item.details}
          />
        ))}
      </div>
    </ContentSection>
  );
}
