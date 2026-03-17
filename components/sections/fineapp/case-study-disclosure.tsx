import { ChevronDown } from "lucide-react";

type CaseStudyDisclosureProps = {
  title: string;
  summary: string;
  details: string[];
};

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
        <ul className="case-study-list">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}
