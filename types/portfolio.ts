export type LinkItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  title: string;
  intro: string;
  location: string;
  availability: string;
};

export type ExperienceArea = {
  title: string;
  details: readonly string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  engagement?: string;
  summary: string;
  highlights: readonly string[];
  areas?: readonly ExperienceArea[];
  technologies: readonly string[];
  presentation: "lead" | "substantial" | "compact";
  metrics?: readonly { value: string; label: string }[];
};

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  outcome?: string;
  proof?: { value: string; label: string };
  technologies: readonly string[];
  signals?: readonly string[];
  links: readonly LinkItem[];
  presentation: "metrics" | "dashboard" | "product" | "compact";
  image?: {
    src: string;
    alt: string;
    motion?: "vertical-pan";
  };
  metrics?: readonly { value: string; label: string }[];
};

export type CurrentFocus = {
  title: string;
  introduction: string;
  items: readonly { title: string; description: string }[];
};

export type ToolProject = {
  name: string;
  description: string;
  href: string;
};

export type CapabilityGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
};
