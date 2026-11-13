import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDownRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { contact, hero } from "@/data/portfolio";
import styles from "./hero.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title} aria-label={hero.title}>
        {hero.title.split(" ").map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={styles.word}
            style={{ "--word-index": index } as CSSProperties}
            aria-hidden="true"
          >
            {word}{" "}
          </span>
        ))}
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

        <aside className={styles.heroPanel} aria-label="Location and profiles">
          <p className={styles.locationLine}>
            <MapPin aria-hidden="true" size={15} />
            {hero.location}
          </p>
          <div className={styles.profileLinks}>
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
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${contact.email}`}
              title={contact.email}
            >
              <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
