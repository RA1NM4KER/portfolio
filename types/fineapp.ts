import type { ReactNode } from "react";

export type HeroMetaItem = {
  label: string;
  value: string;
};

export type HeroLinkItem = {
  label: string;
  href: string;
};

export type DisclosureItem = {
  title: string;
  summary: string;
  details: string[];
};

export type InfoCardItem = {
  title: string;
  text: string;
};

export type FineAppScreenshotItem = InfoCardItem & {
  src: string;
};

export type CaseStudyHeroProps = {
  title: string;
  subtitle: string;
  meta: HeroMetaItem[];
  links: HeroLinkItem[];
};

export type CaseStudySectionProps = {
  id?: string;
  label: string;
  title: string;
  body?: string[];
  children?: ReactNode;
  fullWidthChildren?: ReactNode;
};

export type CaseStudyDisclosureProps = DisclosureItem;

export type CaseStudyDisclosureSectionProps = {
  id?: string;
  label: string;
  items: DisclosureItem[];
};

export type FineAppScreenshotsSectionProps = {
  title: string;
  items: FineAppScreenshotItem[];
};

export type FineAppCaseStudy = {
  hero: {
    title: string;
    subtitle: string;
    meta: HeroMetaItem[];
    links: HeroLinkItem[];
  };
  overview: {
    title: string;
    body: string[];
  };
  built: {
    title: string;
    points: string[];
  };
  flows: {
    title: string;
    items: DisclosureItem[];
  };
  architecture: {
    title: string;
    description: string;
    nodes: InfoCardItem[];
    domains: string[];
  };
  backend: {
    title: string;
    intro: string;
    modules: string[];
    entities: string[];
  };
  challenges: {
    title: string;
    items: DisclosureItem[];
  };
  admin: {
    title: string;
    intro: string;
    tools: InfoCardItem[];
  };
  audit: {
    title: string;
    body: string[];
    sampleActions: string[];
  };
  screenshots: {
    title: string;
    items: FineAppScreenshotItem[];
  };
  results: {
    title: string;
    points: string[];
  };
  reflection: {
    title: string;
    body: string[];
  };
};
