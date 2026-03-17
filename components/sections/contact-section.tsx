import { contact } from "@/data/portfolio";
import { ContentSection } from "@/components/ui/content-section";

export function ContactSection() {
  return (
    <ContentSection id="contact" label="/contact">
      <div className="section-block">
        <p className="body-copy body-copy--muted">
          Open to software roles, technical conversations, and interesting
          product work.
        </p>

        <div className="contact-list">
          <a href={`mailto:${contact.email}`} className="contact-list__link">
            Email
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="contact-list__link"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-list__link"
          >
            LinkedIn
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            className="contact-list__link"
          >
            CV
          </a>
        </div>
      </div>
    </ContentSection>
  );
}
