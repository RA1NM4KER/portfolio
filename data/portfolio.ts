import type {
  CapabilityGroup,
  ContactInfo,
  CurrentFocus,
  ExperienceItem,
  HeroContent,
  Project,
  ToolProject,
} from "@/types/portfolio";

export const hero: HeroContent = {
  name: "Kefas Manda",
  title:
    "I build production software across fintech, data, and product systems.",
  intro:
    "I’m a software engineer with experience shipping monetised fintech features, building data pipelines and internal tools, and taking independent products from architecture through deployment.",
  location: "Stellenbosch, South Africa",
  availability:
    "Open to software engineering roles and thoughtful product work.",
};

export const experience: readonly ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Glyde Payments",
    location: "Cape Town, South Africa",
    period: "January 2025 to February 2026",
    summary:
      "Shipped commercial fintech features and worked across reporting interfaces, backend services, financial data pipelines, warehousing, and cloud infrastructure.",
    highlights: [
      "Designed and implemented an OFX export used to import financial data into QuickBooks, Xero, and Sage; it was adopted as a paid account capability.",
      "Migrated the reporting module from a legacy frontend to a TanStack-based architecture and built backend export pipelines for financial statements.",
      "Built and maintained BigQuery warehousing pipelines, SQL reporting, transaction-monitoring workflows, and PostgreSQL data models.",
    ],
    areas: [
      {
        title: "Product and integrations",
        details: [
          "Contributed to REST APIs, webhook integrations, enterprise reporting systems, and transactional email delivery.",
          "Worked across frontend, backend, data, and infrastructure layers to deliver production outcomes.",
        ],
      },
      {
        title: "Delivery and team support",
        details: [
          "Operated services in Google Cloud Platform, including Cloud Run, BigQuery, and managed PostgreSQL, with Terraform-backed infrastructure.",
          "Mentored junior engineers, onboarded team members, and delivered structured knowledge transfer and responsibility handover.",
        ],
      },
    ],
    technologies: [
      "Java",
      "TypeScript",
      "React",
      "TanStack",
      "SQL",
      "PostgreSQL",
      "BigQuery",
      "Python",
      "GCP",
      "Cloud Run",
      "Terraform",
    ],
    presentation: "lead",
    metrics: [
      { value: "Paid", label: "Commercial account capability" },
      { value: "3", label: "Accounting platforms supported" },
      { value: "4 layers", label: "Product, backend, data, infrastructure" },
    ],
  },
  {
    role: "Web Developer and Database Support Specialist",
    company: "Schoolscape",
    location: "Stellenbosch, South Africa",
    period: "June 2026 to present",
    engagement:
      "Full-time independent contract from 17 June to 31 July 2026; continued part-time from August 2026.",
    summary:
      "Own a substantial CRM data-quality and migration-preparation programme while delivering production web pages, business-system integrations, and a stakeholder-ready technical handover.",
    highlights: [
      "Reconciled an initial 31,675 organisation records and more than 33,000 contacts across multiple historical sources while preserving contact-to-account relationships.",
      "Consolidated 5,301 duplicate or linked account rows and applied 2,398 approved matches from a trusted cleaned school dataset.",
      "Produced validated import files, reproducible scripts, review workbooks, documentation, a handover dashboard, and Glimmer, an AI-assisted retrieval interface for the project knowledge base.",
    ],
    areas: [
      {
        title: "CRM data engineering",
        details: [
          "Used Python, spreadsheet workflows, domain and exact matching, carefully reviewed fuzzy matching, validation rules, and manual research for record linkage and enrichment.",
          "Normalised names, emails, phone numbers, fees, grade levels, geography, consent evidence, suppliers, and organisation classifications into a reviewed business taxonomy.",
          "Created surviving-ID redirect maps, repaired risky matches, investigated unresolved relationships, and prepared roughly 26,000 authoritative account records for migration.",
          "Researched and prepared 140 verified Kenyan school accounts without modifying existing CRM records.",
        ],
      },
      {
        title: "Internal tooling and handover",
        details: [
          "Built a browsable dashboard with aggregate metrics, data-quality coverage, taxonomy guidance, transformation decisions, and validation context.",
          "Designed Glimmer’s retrieval logic to surface relevant project facts and produced a structured final report covering methods, outcomes, limitations, and deliverables.",
        ],
      },
      {
        title: "Production web delivery",
        details: [
          "Build and maintain responsive WordPress and Elementor landing pages with custom HTML and CSS, resolving iframe, spacing, width, scrolling, and mobile-layout issues.",
          "Integrate Zoho Creator registration forms, confirmations, and automated registration emails, and support production publishing directly with stakeholders.",
        ],
      },
    ],
    technologies: [
      "Python",
      "SQL",
      "Zoho CRM",
      "Data reconciliation",
      "Record linkage",
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
    ],
    presentation: "substantial",
    metrics: [
      { value: "31,675", label: "Initial account records" },
      { value: "5,301", label: "Rows consolidated" },
      { value: "33,000+", label: "Contacts reviewed" },
    ],
  },
  {
    role: "Embedded Systems Intern",
    company: "Metacom",
    location: "Cape Town, South Africa",
    period: "June 2024 to July 2024",
    summary:
      "Worked on ESP32 firmware and device-to-server communication in a production networking environment.",
    highlights: [
      "Developed firmware using C, C++, ESP32, and Arduino-based tooling.",
      "Implemented MQTT and HTTP device communication and contributed to remote firmware-update capability deployed into production.",
    ],
    technologies: ["C", "C++", "ESP32", "MQTT", "HTTP", "Firmware"],
    presentation: "compact",
  },
];

export const selectedProjects: readonly Project[] = [
  {
    name: "Schoolscape CRM data engineering",
    eyebrow: "Client project",
    description:
      "A structured data-quality, record-linkage, reconciliation, and migration-preparation programme spanning more than 30,000 education CRM records, paired with a handover dashboard and AI-assisted retrieval interface.",
    outcome:
      "Made a complex cleanup auditable, reviewable, and transferable without exposing confidential source data.",
    technologies: ["Python", "Zoho CRM", "Record linkage", "Data validation"],
    signals: [
      "Historical sources",
      "Match and validate",
      "Preserve relationships",
      "Migration-ready CRM",
    ],
    links: [{ label: "View project details", href: "/schoolscape" }],
    presentation: "metrics",
    metrics: [
      { value: "31,675", label: "Initial organisations" },
      { value: "5,301", label: "Rows consolidated" },
      { value: "2,398", label: "Trusted matches applied" },
    ],
  },
  {
    name: "NewinMeter",
    eyebrow: "Community product",
    description:
      "A multi-user community electricity analytics platform with automated ingestion, daily, hourly, and interval rollups, cost and tariff visibility, and grounded AI-assisted questions about each user's data.",
    outcome:
      "Reworked an earlier single-user prototype into an authenticated product with per-user connections and database-level isolation.",
    proof: {
      value: "21 users",
      label: "13 connected to LiveMopay",
    },
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    signals: [
      "Supabase Auth",
      "Row-level security",
      "Structured rollups",
      "Grounded assistant",
    ],
    links: [
      { label: "Open product", href: "https://newinmeter.vercel.app" },
      {
        label: "View repository",
        href: "https://github.com/RA1NM4KER/newinmeter",
      },
    ],
    presentation: "dashboard",
    image: {
      src: "/home/newinmeter.webp",
      alt: "NewinMeter dashboard showing electricity balance, spend, usage, tariffs, daily charts, and the energy assistant",
    },
  },
  {
    name: "FineApp",
    eyebrow: "Independent product",
    description:
      "A creative freelance marketplace that replaced manual email and WhatsApp coordination with secure booking, payment, moderated chat, and operational workflows.",
    outcome:
      "Reduced ongoing administration to lightweight moderation after launch.",
    proof: {
      value: "15 to 30+",
      label: "creatives onboarded after launch",
    },
    technologies: ["Spring Boot", "Next.js", "MySQL", "PayFast"],
    signals: [
      "Booking lifecycle",
      "Verified payment webhooks",
      "Moderated chat",
      "Role-based access",
    ],
    links: [
      { label: "Read case study", href: "/fineapp" },
      {
        label: "Open product",
        href: "https://www.fineapp.co.za/creatives",
      },
    ],
    presentation: "product",
    image: {
      src: "/home/fineapp.webp",
      alt: "FineApp marketplace showing creative discovery, search, categories, profiles, availability, and pricing",
    },
  },
  {
    name: "Showcased",
    eyebrow: "Website builder",
    description:
      "A website-builder platform for creating and publishing portfolio, gallery, and product sites from a library of original templates.",
    outcome:
      "Designed the templates and built the multi-page editing system behind them, including reusable sections, page management, and creator-controlled colour and typography systems.",
    technologies: ["Next.js", "TypeScript", "Supabase", "dnd-kit", "TipTap"],
    signals: [
      "Original template library",
      "Multi-page builder",
      "Section-based editing",
      "Design controls",
    ],
    links: [{ label: "Open product", href: "https://showcased.studio" }],
    presentation: "product",
    image: {
      src: "/home/showcased-full.webp",
      alt: "Showcased homepage presenting original portfolio and product templates, design controls, and the visual website builder",
      motion: "vertical-pan",
    },
  },
  {
    name: "GradeLog",
    eyebrow: "Academic product",
    description:
      "A privacy-first, local-first academic grade tracker for managing semesters, modules, weighted assessments, and progress without requiring academic data to live in a third-party service.",
    technologies: ["Next.js", "React", "TypeScript", "IndexedDB"],
    signals: ["No account required", "IndexedDB persistence", "Offline-first"],
    links: [
      { label: "Open product", href: "https://www.gradelog.app" },
      {
        label: "View repository",
        href: "https://github.com/RA1NM4KER/GradeLog",
      },
    ],
    presentation: "compact",
    image: {
      src: "/home/gradelog.webp",
      alt: "GradeLog module view showing weighted assignments, current standing, and required grade calculations",
    },
  },
];

export const developerTools: readonly ToolProject[] = [
  {
    name: "beacon-mcp",
    description:
      "Representative MCP server combining weather, commute, Gmail, Calendar, and FineApp operations into typed agent tools and a morning brief.",
    href: "https://github.com/RA1NM4KER/beacon-mcp",
  },
  {
    name: "jobmatch-mcp",
    description:
      "Job discovery and candidate-aware matching through external listings and profile context.",
    href: "https://github.com/RA1NM4KER/jobmatch-mcp",
  },
  {
    name: "fineapp-mcp",
    description:
      "Agent-facing tools for FineApp creative search, profiles, packages, and client requests.",
    href: "https://github.com/RA1NM4KER/fineapp-mcp",
  },
];

export const capabilities: readonly CapabilityGroup[] = [
  {
    title: "Product and frontend",
    description:
      "Production interfaces, reporting workflows, responsive landing pages, and complete product experiences.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "TanStack",
      "HTML",
      "CSS",
      "WordPress",
      "Elementor",
    ],
  },
  {
    title: "Backend and integrations",
    description:
      "Business workflows, secure APIs, external services, payments, events, and real-time communication.",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Webhooks",
      "Node.js",
      "Auth and authorisation",
      "PayFast",
      "SendGrid",
      "Resend",
      "WebSockets",
    ],
  },
  {
    title: "Data and databases",
    description:
      "Financial pipelines, CRM reconciliation, record linkage, reporting, taxonomy design, and migration preparation.",
    items: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "BigQuery",
      "Supabase",
      "Zoho CRM",
      "Python",
      "Data validation",
    ],
  },
  {
    title: "Cloud and delivery",
    description:
      "Services and products deployed and maintained across managed cloud platforms.",
    items: [
      "Google Cloud Platform",
      "Cloud Run",
      "Vercel",
      "Railway",
      "Terraform",
      "Production deployment",
    ],
  },
  {
    title: "Systems and embedded",
    description:
      "Firmware and device-to-server communication for networked ESP32 systems.",
    items: ["C", "C++", "ESP32", "MQTT", "HTTP device communication"],
  },
];

export const currentFocus: CurrentFocus = {
  title:
    "I want my understanding of AI to be useful in the room, not just impressive in a bio.",
  introduction:
    "I already build with retrieval, MCP, tool calling, and grounded assistants. My current focus is connecting that practical experience to a stronger understanding of the technology, its limits, and where it creates real business value.",
  items: [
    {
      title: "Understand",
      description:
        "Connect model foundations, retrieval, agents, evaluation, cost, reliability, privacy, and governance into one coherent mental map.",
    },
    {
      title: "Build",
      description:
        "Keep turning unclear problems into working assistants, retrieval systems, evaluations, and human-reviewed workflows.",
    },
    {
      title: "Apply",
      description:
        "Learn to identify when AI can save time, improve a decision, or create value, and when normal software is the better answer.",
    },
    {
      title: "Explain",
      description:
        "Form evidence-based opinions and explain the same system clearly to developers, founders, clients, and non-technical teams.",
    },
  ],
};

export const contact: ContactInfo = {
  email: "kefasa112@gmail.com",
  github: "https://github.com/RA1NM4KER",
  linkedin: "https://www.linkedin.com/in/kefas-manda/",
  resume: "/Kefas-Aleck-CV.pdf",
};
