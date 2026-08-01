import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import styles from "./home-sections.module.css";

export function ContactSection() {
  return (
    <ContentSection id="contact" label="/ Contact" headingLayout="rule">
      <div className={styles.contactPanel}>
        <div>
          <h2>Get in touch.</h2>
          <p className={styles.contactCopy}>
            Based in Stellenbosch, South Africa. Open to software engineering
            roles, product work, and technical conversations.
          </p>
        </div>
        <div className={styles.contactAction}>
          <span>Start a conversation</span>
          <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
            {contact.email} <ArrowUpRight aria-hidden="true" size={20} />
          </a>
        </div>
        <div className={styles.contactLinks}>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            Résumé <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </ContentSection>
  );
}
