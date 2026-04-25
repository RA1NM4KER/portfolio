import { contact } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";
import styles from "./home-sections.module.css";

export function ContactSection() {
  return (
    <ContentSection id="contact" label="/contact">
      <div className={styles.sectionBlock}>
        <p className={[styles.bodyCopy, styles.bodyCopyMuted].join(" ")}>
          Open to software roles, technical conversations, and interesting
          product work.
        </p>
        <p className={styles.contactMeta}>
          Based in Cape Town · Open to hybrid and remote
        </p>

        <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
          {contact.email}
        </a>

        <div className={styles.contactList}>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            LinkedIn
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            CV
          </a>
        </div>
      </div>
    </ContentSection>
  );
}
