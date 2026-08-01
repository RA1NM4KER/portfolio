import { ContentSection } from "@/components/ui/content-section";
import styles from "./home-sections.module.css";

export function EducationSection() {
  return (
    <ContentSection id="education" label="/ Education" headingLayout="rule">
      <article className={styles.education}>
        <div>
          <p className={styles.educationInstitution}>Stellenbosch University</p>
          <h2>BSc Computer Science</h2>
          <p>Focal area: Computer Systems</p>
        </div>
        <div className={styles.educationMeta}>
          <p>Expected graduation</p>
          <strong>December 2026</strong>
          <p>Stellenbosch, South Africa</p>
        </div>
      </article>
    </ContentSection>
  );
}
