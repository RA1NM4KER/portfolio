import { CaseStudyDisclosure } from "@/components/sections/fineapp/case-study-disclosure";
import { ContentSection } from "@/components/ui/content-section";

type DisclosureItem = {
  title: string;
  summary: string;
  details: string[];
};

type CaseStudyDisclosureSectionProps = {
  id?: string;
  label: string;
  items: DisclosureItem[];
};

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
