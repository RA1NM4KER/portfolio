import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyDisclosure } from "@/components/sections/fineapp/case-study-disclosure";

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
    <section id={id} className="content-section">
      <SectionHeading label={label} />
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
    </section>
  );
}
