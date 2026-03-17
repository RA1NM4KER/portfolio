import { ExternalLink } from "lucide-react";

type HeroMetaItem = {
  label: string;
  value: string;
};

type HeroLinkItem = {
  label: string;
  href: string;
};

type CaseStudyHeroProps = {
  title: string;
  subtitle: string;
  meta: HeroMetaItem[];
  links: HeroLinkItem[];
};

export function CaseStudyHero({
  title,
  subtitle,
  meta,
  links,
}: CaseStudyHeroProps) {
  return (
    <section className="case-study-hero">
      <p className="case-study-hero__eyebrow">/project</p>

      <a href="https://www.fineapp.co.za" target="_blank" rel="noreferrer">
        <h1 className="case-study-hero__title">
          {title}
          <ExternalLink
            size={24}
            style={{ marginLeft: 6, verticalAlign: "middle" }}
          />
        </h1>
      </a>

      <p className="case-study-hero__subtitle">{subtitle}</p>

      <div className="case-study-meta-grid">
        {meta.map((item) => (
          <div key={item.label} className="case-study-meta-card">
            <p className="case-study-meta-card__label">{item.label}</p>
            <p className="case-study-meta-card__value">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="hero__links">
        {links.map((link) =>
          link.href.startsWith("http") ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
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
