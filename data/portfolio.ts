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
  title: "I like building simple, reliable systems that scale.",
  intro:
    "I’m a software developer focused on applied AI. Whether I’m working on agent infrastructure, data-intensive products, or production software, I care about making complex systems understandable, dependable, and useful.",
  location: "Stellenbosch, South Africa",
  availability:
    "Focused on applied AI, agent infrastructure, and production software.",
};

export const experience: readonly ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Glyde Payments",
    location: "Cape Town, South Africa",
    period: "January 2025 to February 2026",
    summary:
      "Shipped commercial fintech features across reporting interfaces, backend services, financial data pipelines, warehousing, and cloud infrastructure.",
    highlights: [
      "Designed and implemented an OFX export for QuickBooks, Xero, and Sage that was adopted as a paid account capability.",
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
    role: "Software Developer, Independent Contractor",
    company: "Schoolscape",
    location: "Stellenbosch, South Africa",
    period: "June to October 2026",
    engagement:
      "Full-time independent contract from 17 June to 31 July 2026; continued part-time from August to October 2026.",
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
  {
    role: "Web Developer, Independent Contractor",
    company: "AgriVision Foundation",
    location: "Stellenbosch, South Africa",
    period: "August 2026",
    summary:
      "Contract engagement implementing and deploying responsive WordPress pages using Beaver Builder from supplied HTML and CSS, including responsive navigation and production QA.",
    highlights: [
      "Implemented and deployed responsive WordPress/Beaver Builder pages from supplied HTML and CSS.",
      "Built responsive navigation and carried out production QA before go-live.",
    ],
    technologies: [
      "WordPress",
      "Beaver Builder",
      "HTML",
      "CSS",
      "Responsive design",
    ],
    presentation: "compact",
  },
];

export const selectedProjects: readonly Project[] = [
  {
    name: "Agent Relay",
    eyebrow: "Open-source agent infrastructure",
    description:
      "A macOS-first Rust CLI that supervises isolated Claude Code and Codex profiles, detects verified usage exhaustion, and moves an active coding conversation to the next eligible profile without pretending cross-provider sessions are identical.",
    outcome:
      "Shipped as a versioned Homebrew package with prebuilt binaries, transactional handoffs, crash recovery, project-scoped session ownership, and CI-tested Linux builds.",
    technologies: ["Rust", "Git", "Shell", "Claude Code", "Codex CLI"],
    signals: [
      "Isolated auth profiles",
      "Single-writer ownership",
      "Transactional handoff",
      "Failure recovery",
    ],
    links: [
      {
        label: "Open site",
        href: "https://ra1nm4ker.github.io/agent-relay/",
      },
      {
        label: "View repository",
        href: "https://github.com/RA1NM4KER/agent-relay",
      },
    ],
    presentation: "compact",
    video: {
      src: "/agent-relay/demo.mp4",
      poster: "/agent-relay/demo-poster.jpg",
      label:
        "Agent Relay demo showing a managed Claude Code session and Relay ownership state",
    },
  },
  {
    name: "NewinMeter",
    eyebrow: "Community product",
    description:
      "A multi-user electricity platform with automatic LiveMopay sync, deterministic interval-to-daily rollups, alerts, operational diagnostics, and a grounded AI energy copilot over each user’s own data.",
    outcome:
      "The assistant returns schema-validated evidence and visualisation instructions, never arbitrary SQL. Mutations remain typed proposals until the user confirms them, then reuse the same ownership-checked domain functions as the hand-built UI.",
    proof: {
      value: "37 users",
      label: "23 connected to LiveMopay",
    },
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI"],
    signals: [
      "Grounded tool-calling",
      "Confirmation-gated actions",
      "Supabase Auth + RLS",
      "Automated sync and alerts",
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
    hardwareExperiment: {
      title: "From meter to telemetry",
      description:
        "I wanted to see whether NewinMeter could eventually read the meter itself. After investigating the meter’s optical interface and finding the richer communication path protected and inaccessible to an independent implementation, I pivoted to its observable pulse output. The current end-to-end proof of concept uses a GL5528 light-dependent resistor to detect the pulses, an Arduino Uno R3 for acquisition, and a laptop as the HTTP bridge, turning physical readings into usable consumption telemetry.",
      current: [
        "GL5528 light-dependent resistor detects the meter’s optical pulses",
        "Arduino Uno R3 acquires and counts the pulse signal",
        "Laptop bridges measurements to HTTP telemetry",
        "Pulse counts are converted into consumption measurements",
      ],
      planned: [
        "Replace the Arduino and laptop bridge with an ESP32",
        "Run continuous pulse acquisition and network telemetry on the ESP32",
        "Send telemetry to NewinMeter, Home Assistant, or another data consumer",
      ],
      architecture: [
        {
          label: "Current",
          nodes: [
            "Meter",
            "Optical sensor",
            "Arduino Uno R3",
            "Laptop / HTTP",
            "Data consumer",
          ],
        },
        {
          label: "Next",
          nodes: ["Meter", "Optical sensor", "ESP32", "Telemetry consumer"],
        },
      ],
      video: {
        src: "/newinmeter/newinmeter-optical.mp4",
        fallbackHref: "/newinmeter/newinmeter-optical.mp4",
      },
    },
  },
  {
    name: "Learn MCP",
    eyebrow: "Education infrastructure",
    description:
      "A read-only MCP server that lets AI clients work with a student’s own Moodle courses, assignments, deadlines, grades, announcements, forums, and course files without exposing raw credentials.",
    outcome:
      "Supports a local stdio mode and a hosted Cloudflare deployment with OAuth 2.1, multi-site identity, encrypted Moodle tokens, user-bound expiring file references, and self-service data deletion.",
    technologies: [
      "TypeScript",
      "MCP",
      "OAuth 2.1",
      "Cloudflare Workers",
      "D1",
    ],
    signals: [
      "Local and remote modes",
      "Multi-site identity",
      "Read-only Moodle access",
      "Encrypted credentials",
    ],
    links: [
      {
        label: "Open site",
        href: "https://learnmcp.kefas.co.za/",
      },
      {
        label: "View repository",
        href: "https://github.com/RA1NM4KER/sunlearn-mcp",
      },
    ],
    presentation: "compact",
  },
  {
    name: "Beacon",
    eyebrow: "AI context and capability layer",
    description:
      "A transport-free TypeScript core that gives AI clients deterministic personal context and explicit capabilities across mail, calendar, commute, weather, and product data through thin MCP and HTTP adapters.",
    outcome:
      "Sensitive actions use prepare, confirm, and execute as separate trust boundaries, backed by single-use authorisation tokens, durable audit records, and a typed registry shared by every transport.",
    technologies: ["TypeScript", "MCP", "OpenAPI", "PostgreSQL", "Railway"],
    signals: [
      "Transport-free core",
      "Typed capability registry",
      "Prepare-confirm-execute",
      "MCP and HTTP adapters",
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/RA1NM4KER/beacon",
      },
    ],
    presentation: "compact",
  },
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
];

export const additionalProjects: readonly ToolProject[] = [
  {
    name: "Showcased",
    category: "Website builder",
    description:
      "Multi-page visual website builder with original templates, reusable sections, rich-text editing, and creator-controlled design systems.",
    href: "https://showcased.studio",
    linkLabel: "Open product",
  },
  {
    name: "GradeLog",
    category: "Local-first product",
    description:
      "Privacy-first grade tracker for web and mobile with offline storage, weighted assessments, and no account requirement.",
    href: "https://github.com/RA1NM4KER/GradeLog",
    linkLabel: "Repository",
  },
  {
    name: "FineApp MCP",
    category: "Agent integration",
    description:
      "Typed tools for agent-facing creative search, profiles, packages, and client requests over the FineApp marketplace.",
    href: "https://github.com/RA1NM4KER/fineapp-mcp",
    linkLabel: "Repository",
  },
];

export const capabilities: readonly CapabilityGroup[] = [
  {
    title: "Applied AI and agents",
    description:
      "Grounded assistants, agent-facing tools, evaluated model workflows, and explicit trust boundaries around real application capabilities.",
    items: [
      "MCP",
      "Tool calling",
      "Structured outputs",
      "Retrieval",
      "Model evaluation",
      "Human-in-the-loop actions",
      "OpenAI Responses API",
      "Qwen",
    ],
  },
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
      "Rust",
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
      "Firmware, sensing, control, device communication, and hardware/software integration across STM32 and ESP32 systems.",
    items: [
      "C",
      "C++",
      "STM32",
      "ESP32",
      "ADC",
      "PWM",
      "UART",
      "I2C",
      "GPIO",
      "Timers",
      "Interrupts",
      "MQTT",
      "HTTP",
      "Circuit design",
      "Oscilloscope testing",
    ],
  },
];

export const currentFocus: CurrentFocus = {
  title: "AI becomes useful when the surrounding system earns trust.",
  introduction:
    "My focus is the engineering around the model: reliable context, constrained tools, explicit authority, evaluation, observability, and product decisions that make the non-AI path clear when it is better.",
  items: [
    {
      title: "Ground",
      description:
        "Connect models to authoritative application data through typed tools and bounded retrieval instead of asking them to invent state.",
    },
    {
      title: "Constrain",
      description:
        "Separate suggestions from execution with validation, ownership checks, confirmation, and narrow capability boundaries.",
    },
    {
      title: "Evaluate",
      description:
        "Use held-out data, human-labelled samples, failure cases, and operational evidence to decide whether complexity has earned its place.",
    },
    {
      title: "Operate",
      description:
        "Design for rate limits, retries, audit trails, privacy, cost, recovery, and the people who still need to trust the result.",
    },
  ],
};

export const contact: ContactInfo = {
  email: "kefasa112@gmail.com",
  github: "https://github.com/RA1NM4KER",
  linkedin: "https://www.linkedin.com/in/kefas-manda/",
};
