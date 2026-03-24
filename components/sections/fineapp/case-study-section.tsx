import { ContentSection } from "@/components/ui/content-section";
import type { CaseStudySectionProps } from "@/types/fineapp";

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
      <div className="case-study-copy">
        <h2 className="case-study-subtitle">{title}</h2>

        {body?.map((paragraph) => (
          <p key={paragraph} className="body-copy">
            {paragraph}
          </p>
        ))}

        {children}
      </div>

      {fullWidthChildren}
    </ContentSection>
  );
}
