export type HeroContent = {
  title: string;
  intro: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  mode: string;
  period: string;
  details: string[];
  stack: string;
};

export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
};
