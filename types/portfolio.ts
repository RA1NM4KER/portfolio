export type LinkItem = {
  purpose: "product" | "repository" | "site" | "details";
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
  website: string;
  logo?: {
    src: string;
    height: number;
  };
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

type ProjectBase = {
  name: string;
  eyebrow: string;
  description: string;
  outcome?: string;
  proof?: { value: string; label: string };
  technologies: readonly string[];
  signals?: readonly string[];
  links: readonly LinkItem[];
  note?: string;
  secondaryProject?: {
    name: string;
    description: string;
    technologies?: readonly string[];
  };
  hardwareExperiment?: {
    title: string;
    description: string;
    current: readonly string[];
    planned: readonly string[];
    architecture: readonly {
      label: string;
      nodes: readonly string[];
    }[];
    video: {
      src: string;
      fallbackHref: string;
    };
  };
};

type ProjectImage = {
  src: string;
  alt: string;
  motion?: "vertical-pan";
};

type ProjectVideo = {
  src: string;
  poster: string;
  label: string;
};

type ProjectMedia =
  | { image: ProjectImage; video?: never }
  | { video: ProjectVideo; image?: never };

export type MetricsProject = ProjectBase & {
  presentation: "metrics";
  metrics: readonly [
    { value: string; label: string },
    ...{ value: string; label: string }[],
  ];
  image?: never;
  video?: never;
};

export type VisualProject = ProjectBase &
  (
    | ({ presentation: "dashboard" | "product" } & ProjectMedia)
    | ({ presentation: "compact" } & (
        | ProjectMedia
        | { image?: never; video?: never }
      ))
  );

export type Project = MetricsProject | VisualProject;

export type CurrentFocus = {
  title: string;
  introduction: string;
  items: readonly { title: string; description: string }[];
};

export type ToolProject = {
  name: string;
  category: string;
  description: string;
  href: string;
  linkLabel: string;
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
};
