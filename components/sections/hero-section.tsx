import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { contact, hero } from "@/data/portfolio";
import styles from "./home-sections.module.css";

const focusAreas = [
  "Fintech product engineering",
  "Data and reporting systems",
  "Independent production products",
];

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroIdentity}>
        <p className={styles.eyebrow}>Software engineer</p>
      </div>

      <h1 id="hero-title" className={styles.title}>
        {hero.title}
      </h1>

      <div className={styles.heroLower}>
        <div>
          <p className={styles.intro}>{hero.intro}</p>
          <div className={styles.heroActions}>
            <Link href="#case-studies" className={styles.primaryAction}>
              Selected work <ArrowDownRight aria-hidden="true" size={17} />
            </Link>
            <Link href="#experience" className={styles.secondaryAction}>
              Experience
            </Link>
          </div>
        </div>

        <aside
          className={styles.heroPanel}
          aria-label="Location and profile links"
        >
          <div className={styles.locationLine}>
            <MapPin aria-hidden="true" size={15} />
            <span>{hero.location}</span>
          </div>
          <p className={styles.availability}>{hero.availability}</p>
          <div className={styles.profileLinks}>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a href={contact.resume} target="_blank" rel="noreferrer">
              Résumé <FileText aria-hidden="true" size={14} />
            </a>
          </div>
        </aside>
      </div>

      <ul className={styles.heroSignals} aria-label="Engineering focus areas">
        {focusAreas.map((area, index) => (
          <li key={area}>
            <span aria-hidden="true">0{index + 1}</span>
            {area}
          </li>
        ))}
      </ul>
    </section>
  );
}
