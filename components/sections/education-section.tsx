import Image from "next/image";
import { ContentSection } from "@/components/ui/content-section";
import { education } from "@/data/portfolio";
import styles from "./education.module.css";

export function EducationSection() {
  return (
    <ContentSection id="education" label="/ Education" headingLayout="rule">
      <article className={styles.education}>
        <div>
          <p className={styles.educationInstitution}>
            <Image
              src="/companies/stellenbosch-university.png"
              alt=""
              width={21}
              height={28}
            />
            {education.institution}
          </p>
          <h2>{education.qualification}</h2>
        </div>
        <div className={styles.educationMeta}>
          <p>Focal area</p>
          <strong>{education.focalArea}</strong>
        </div>
      </article>
    </ContentSection>
  );
}
