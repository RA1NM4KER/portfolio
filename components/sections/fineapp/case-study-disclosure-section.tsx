import { CaseStudyDisclosure } from "@/components/sections/fineapp/case-study-disclosure";
import { ContentSection } from "@/components/ui/content-section";
import type { CaseStudyDisclosureSectionProps } from "@/types/fineapp";

export function CaseStudyDisclosureSection({
  id,
  label,
  items,
}: CaseStudyDisclosureSectionProps) {
  return (
    <ContentSection id={id} label={label}>
      <div className="case-study-stack">
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
