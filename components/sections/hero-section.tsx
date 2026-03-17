import { hero } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero">
      <h1 className="hero__title">{hero.title}</h1>

      <p className="hero__intro">{hero.intro}</p>

      <div className="hero__links">
        <a href="https://github.com/RA1NM4KER" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kefas-manda/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:kefasa112@gmail.com">Email</a>
        <a href="/Kefas-Aleck-CV.pdf" target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
    </section>
  );
}
