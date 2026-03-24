import { ChevronDown } from "lucide-react";
import { BulletList } from "@/components/ui/bullet-list";
import type { CaseStudyDisclosureProps } from "@/types/fineapp";

export function CaseStudyDisclosure({
  title,
  summary,
  details,
}: CaseStudyDisclosureProps) {
  return (
    <details className="case-study-disclosure">
      <summary className="case-study-disclosure__summary">
        <div>
          <h3 className="case-study-disclosure__title">{title}</h3>
          <p className="case-study-disclosure__text">{summary}</p>
        </div>

        <span className="case-study-disclosure__icon" aria-hidden="true">
          <ChevronDown size={18} strokeWidth={2.2} />
        </span>
      </summary>

      <div className="case-study-disclosure__content">
        <BulletList items={details} />
      </div>
    </details>
  );
}
