import { contact, hero } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import styles from "./home-sections.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <Reveal>
        <p className={styles.eyebrow}>
          FULL-STACK DEVELOPER · EMBEDDED SYSTEMS ENGINEER
        </p>
        <h1 className={styles.title}>{hero.title}</h1>

        <p className={styles.intro}>{hero.intro}</p>
      </Reveal>

      <Reveal delay={120}>
        <div className={styles.linkRow}>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      </Reveal>
    </section>
  );
}
