import type {
  ContactInfo,
  ExperienceItem,
  HeroContent,
  Project,
} from "@/types/portfolio";

export const hero: HeroContent = {
  title:
    "Software developer building real systems across product, backend, data, and infrastructure.",
  intro:
    "I like building software from the ground up, where product thinking, backend logic, and clean implementation all matter, shaped by experience across fintech, embedded systems, and startup products.",
};

export const projects: Project[] = [
  {
    name: "FineApp",
    description:
      "A full-stack freelance platform built to replace manual booking coordination with structured workflows for clients, creatives, and admins.",
    stack:
      "Next.js · Spring Boot (Java) · MySQL · Auth0 · Cloudinary · Railway · Payfast · WebSockets · Resend · JavaScript (React)",
    href: "/fineapp",
  },
  {
    name: "beacon-mcp",
    description:
      "Personal operations MCP server that turns weather, commute, Gmail, Google Calendar, and FineApp admin data into agent-usable tools and a combined morning brief.",
    stack:
      "TypeScript · Node.js · MCP SDK · Zod · Google APIs · WeatherAPI · FineApp API",
    href: "https://github.com/RA1NM4KER/beacon-mcp",
  },
  {
    name: "GradeLog",
    description:
      "A privacy-first, local-first grade tracker that lets students manage semesters, modules, and weighted assessments without handing their academic data to a third-party service.",
    stack: "Next.js 15 · React 19 · TypeScript · Tailwind CSS · Radix UI",
    href: "https://github.com/RA1NM4KER/GradeLog",
  },
  {
    name: "jobmatch-mcp",
    description:
      "MCP server for job discovery and candidate-job ranking, combining external listings with profile-based matching.",
    stack: "TypeScript · Node.js · MCP SDK · Zod · TheirStack Jobs API · Codex",
    href: "https://github.com/RA1NM4KER/jobmatch-mcp",
  },
  {
    name: "Livenopay",
    description:
      "Personal local-first tool for extracting and analyzing LiveMopay electricity usage, spend, and balance by turning Android UI history into a structured dataset and calm analytics dashboard.",
    stack: "Next.js · TypeScript · Tailwind CSS · Python · ADB · CSV analytics",
    href: "https://github.com/RA1NM4KER/livenopay",
  },
  {
    name: "fineapp-mcp",
    description:
      "MCP server exposing FineApp creatives, profiles, search, and session packages to AI clients.",
    stack: "TypeScript · Node.js · MCP SDK · Zod · FineApp API · Codex",
    href: "https://github.com/RA1NM4KER/fineapp-mcp",
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

export const experience: ExperienceItem[] = [
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
];

export const contact: ContactInfo = {
  email: "kefasa112@gmail.com",
  github: "https://github.com/RA1NM4KER",
  linkedin: "https://www.linkedin.com/in/kefas-manda/",
  resume: "/Kefas-Aleck-CV.pdf",
};
