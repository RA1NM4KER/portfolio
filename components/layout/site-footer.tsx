import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { LocalTime } from "./local-time";
import styles from "./site-footer.module.css";

const siteLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#case-studies", label: "Systems" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/schoolscape", label: "Schoolscape case study" },
  { href: "/fineapp", label: "FineApp case study" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.lead}>
            <h2>Get in touch.</h2>
            <p>
              Always interested in thoughtful technical conversations, useful
              products, and ambitious engineering.
            </p>
            <a href={`mailto:${contact.email}`} className={styles.email}>
              {contact.email} <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>

          <nav className={styles.column} aria-label="Site">
            <h3>Site</h3>
            <ul>
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h3>Elsewhere</h3>
            <div className={styles.icons}>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Kefas Manda</p>
          <p className={styles.clock}>
            <span className={styles.dot} aria-hidden="true" />
            <LocalTime /> in Cape Town
          </p>
        </div>
      </div>

      <p className={styles.watermark} aria-hidden="true">
        Kefas Manda
      </p>
    </footer>
  );
}
