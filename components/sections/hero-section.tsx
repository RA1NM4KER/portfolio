import { contact, hero } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero">
      <h1 className="hero__title">{hero.title}</h1>

      <p className="hero__intro">{hero.intro}</p>

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
    </section>
  );
}
