import { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

type CaseStudySectionProps = {
  id?: string;
  label: string;
  title: string;
  body?: string[];
  children?: ReactNode;
};

export function CaseStudySection({
  id,
  label,
  title,
  body,
  children,
}: CaseStudySectionProps) {
  return (
    <section id={id} className="content-section">
      <SectionHeading label={label} />

      <div className="case-study-copy">
        <h2 className="case-study-subtitle">{title}</h2>

        {body?.map((paragraph) => (
          <p key={paragraph} className="body-copy">
            {paragraph}
          </p>
        ))}

        {children}
      </div>
    </section>
  );
}
