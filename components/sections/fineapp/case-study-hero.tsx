import { ExternalLink } from "lucide-react";
import type { CaseStudyHeroProps } from "@/types/fineapp";
import styles from "./fineapp.module.css";

export function CaseStudyHero({
  title,
  subtitle,
  meta,
  links,
}: CaseStudyHeroProps) {
  return (
    <section className={styles.hero}>
      <p className={styles.heroEyebrow}>/project</p>

      <a href="https://www.fineapp.co.za" target="_blank" rel="noreferrer">
        <h1 className={styles.heroTitle}>
          {title}
          <ExternalLink
            size={24}
            style={{ marginLeft: 6, verticalAlign: "middle" }}
          />
        </h1>
      </a>

      <p className={styles.heroSubtitle}>{subtitle}</p>

      <div className={styles.metaGrid}>
        {meta.map((item) => (
          <div key={item.label} className={styles.metaCard}>
            <p className={styles.metaCardLabel}>{item.label}</p>
            <p className={styles.metaCardValue}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className={styles.linkRow}>
        {links.map((link) =>
          link.href.startsWith("http") ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <ExternalLink size={14} style={{ marginLeft: 6 }} />
            </a>
          ) : (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ),
        )}
      </div>
    </section>
  );
}
