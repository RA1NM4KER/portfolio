import { currentFocus } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import styles from "./focus.module.css";

export function CurrentFocusSection() {
  return (
    <ContentSection id="focus" label="/ Current focus" headingLayout="rule">
      <div className={styles.focusPanel}>
        <div className={styles.focusLead}>
          <h2>{currentFocus.title}</h2>
          <p>{currentFocus.introduction}</p>
        </div>
        <div className={styles.focusGrid}>
          {currentFocus.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
