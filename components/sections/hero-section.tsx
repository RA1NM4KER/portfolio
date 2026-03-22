import { contact, hero } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="hero">
      <Reveal>
        <p className="hero__eyebrow">
          FULL-STACK DEVELOPER · EMBEDDED SYSTEMS ENGINEER
        </p>
        <h1 className="hero__title">{hero.title}</h1>

        <p className="hero__intro">{hero.intro}</p>
      </Reveal>

      <Reveal delay={120}>
        <div className="hero__links">
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.email}>Email</a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      </Reveal>
    </section>
  );
}
