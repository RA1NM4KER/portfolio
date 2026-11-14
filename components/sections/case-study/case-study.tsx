import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./case-study.module.css";

export function CaseStudyHero({
  label,
  title,
  summary,
  meta,
  href,
  linkLabel,
}: {
  label: string;
  title: string;
  summary: string;
  meta: readonly { label: string; value: string }[];
  href?: string;
  linkLabel?: string;
}) {
  return (
    <header className={styles.hero}>
      <Link href="/#case-studies" className={styles.back}>
        <span aria-hidden="true">←</span> Selected work
      </Link>
      <p className={styles.label}>{label.replace(/^\/\s*/, "")}</p>
      <h1>{title}</h1>
      <p className={styles.summary}>{summary}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.visit}
        >
          {linkLabel} <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      <dl className={styles.projectMeta}>
        {meta.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

export function CaseStudyMetrics({
  metrics,
}: {
  metrics: readonly { value: string; label: string; detail?: string }[];
}) {
  return (
    <dl className={styles.metrics} aria-label="Project at a glance">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
          {metric.detail ? (
            <dd className={styles.metricDetail}>{metric.detail}</dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

export function CaseStudySection({
  id,
  label,
  title,
  description,
  children,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <p className={styles.label}>{label.replace(/^\/\s*/, "")}</p>
      <div className={styles.sectionBody}>
        <h2 id={`${id}-title`}>{title}</h2>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CaseStudyNext({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <nav className={styles.next} aria-label="More case studies">
      <p className={styles.label}>{label}</p>
      <Link href={href}>
        {title} <span aria-hidden="true">↗</span>
      </Link>
    </nav>
  );
}
