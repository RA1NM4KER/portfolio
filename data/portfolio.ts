export const hero = {
  title:
    "Software developer building reliable systems across frontend, backend, data, and infrastructure.",
  intro:
    "Experience spanning fintech, embedded systems, and founder-led platform development, with hands-on work across modern web apps, backend services, and data-driven systems.",
};

export const projects = [
  {
    name: "FineApp",
    description: "Creative freelancer platform.",
    stack:
      "Next.js · Spring Boot (Java) · MySQL · Auth0 · Cloudinary · Railway · Payfast · WebSockets · Resend · JavaScript (React)",
    href: "/fineapp",
  },
  {
    name: "Showcase",
    description:
      "Template-driven showcase pages for portfolios and collections, with editable content and creator-facing customization controls. Currently in development.",
    stack:
      "TypeScript (React) · Next.js · Supabase (PostgreSQL) · Cloudinary · Vercel · Auth0",
    href: "#",
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Glyde Payments",
    location: "Cape Town, South Africa",
    mode: "Hybrid",
    period: "Jan 2025 - Feb 2026",
    details: [
      "Shipped an OFX bank statement export feature for QuickBooks, Xero, and Sage, later adopted as a monetized account capability.",
      "Migrated reporting workflows from a legacy frontend to a modern TanStack-based architecture.",
      "Built backend export and reporting pipelines for financial data and statement generation.",
      "Transitioned into enterprise data and monitoring work through strong performance on data-heavy systems.",
      "Took on cross-functional ownership spanning frontend, backend, infrastructure, and data.",
    ],
    stack:
      "Java · TypeScript · React · TanStack · SQL · PostgreSQL · BigQuery · Python · GCP · REST APIs · Webhooks · Terraform · SendGrid",
  },
  {
    role: "Embedded Systems Engineer Intern",
    company: "Metacom",
    location: "Cape Town, South Africa",
    mode: "In-person",
    period: "Jun - Jul 2024",
    details: [
      "Contributed to firmware development for ESP32-based devices using C/C++ and Arduino-based tooling.",
      "Worked on MQTT-based device communication and on-device HTTP client functionality for backend connectivity.",
      "Contributed to remote firmware update functionality over HTTP, helping improve update efficiency and device performance.",
      "Worked at the boundary between embedded systems and backend infrastructure in a production networking environment.",
    ],
    stack: "C · C++ · MQTT · ESP32 · Arduino",
  },
] as const;

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "MySQL",
  "SQL",
  "GCP",
];

export const contact = {
  email: "kefasa112@gmail.com",
  github: "https://github.com/RA1NM4KER",
  linkedin: "https://www.linkedin.com/in/kefas-manda/",
  resume: "/Kefas-Aleck-CV.pdf",
};
