import { ChevronDown } from "lucide-react";
import { BulletList } from "@/components/ui/bullet-list";
import type { CaseStudyDisclosureProps } from "@/types/fineapp";
import styles from "./fineapp.module.css";

export function CaseStudyDisclosure({
  title,
  summary,
  details,
}: CaseStudyDisclosureProps) {
  return (
    <details className={styles.disclosure}>
      <summary className={styles.disclosureSummary}>
        <div>
          <h3 className={styles.disclosureTitle}>{title}</h3>
          <p className={styles.disclosureText}>{summary}</p>
        </div>

        <span className={styles.disclosureIcon} aria-hidden="true">
          <ChevronDown size={18} strokeWidth={2.2} />
        </span>
      </summary>

      <div className={styles.disclosureContent}>
        <BulletList items={details} />
      </div>
    </details>
  );
}
