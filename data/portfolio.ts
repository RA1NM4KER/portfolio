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
  title:
    "I build applied AI, data, and software systems, through internships, contract work, and independently shipped products.",
  intro:
    "I’m a final-year Computer Science student at Stellenbosch University, building applied AI, data, and software systems through internships, contract work, and independently shipped products alongside my studies. I’m especially interested in connecting AI models to real application data, tools, and capabilities.",
  location: "Stellenbosch, South Africa",
  availability:
    "Open to software engineering roles and thoughtful product work.",
};

export const experience: readonly ExperienceItem[] = [
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
    presentation: "lead",
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
    role: "Private Computer Science Tutor",
    company: "Private tutoring, independent",
    location: "Stellenbosch, South Africa",
    period: "August 2026 to present",
    summary:
      "Privately tutor third-year Stellenbosch University Computer Science students in CS343 (Databases and Web-Centric Programming) and CS344 (Program Design and Software Engineering). This is independent private tutoring, arranged directly with students and not employment by the university.",
    highlights: [
      "Tutor CS343 topics including relational database design, SQL, and web-centric programming.",
      "Tutor CS344 topics including software design principles, program design, and software engineering practice.",
    ],
    technologies: [
      "Databases",
      "SQL",
      "Web-centric programming",
      "Software design",
      "Software engineering",
    ],
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
    technologies: ["WordPress", "Beaver Builder", "HTML", "CSS", "Responsive design"],
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
      "A multi-user electricity analytics platform with Supabase Auth and row-level security for per-user data isolation, deterministic daily, hourly, and interval rollups, and a grounded AI assistant that answers usage questions through scoped OpenAI function-calling tools over precomputed analytics, rather than arbitrary SQL, behind rate limiting.",
    outcome:
      "Reworked an earlier single-user prototype into an authenticated product with per-user connections and database-level isolation.",
    proof: {
      value: "21 users",
      label: "13 connected to LiveMopay",
    },
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI"],
    signals: [
      "Supabase Auth + RLS",
      "Deterministic rollups",
      "Scoped tool-calling assistant",
      "Rate limited",
    ],
    links: [
      { label: "Open product", href: "https://newinmeter.vercel.app" },
      {
        label: "View repository",
        href: "https://github.com/RA1NM4KER/newinmeter",
      },
    ],
    note: "Demo access available on request",
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
    proof: {
      value: "27+",
      label: "users",
    },
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
  {
    name: "STM32 Embedded Systems",
    eyebrow: "University engineering · 2023–2024",
    description:
      "Designed and built an STM32F411RE-based PV monitoring system combining analogue and digital sensing, ADC acquisition, interrupt-driven pulse measurement, PWM load control, UART, RTC, and LCD interfaces. Tested sensor accuracy, timing, and communications using oscilloscopes and multimeters.",
    outcome:
      "Integrated sensing, control, communications, power regulation, and circuit validation into a tested electronic system.",
    technologies: [
      "STM32F411RE",
      "C",
      "ADC",
      "PWM",
      "UART",
      "Interrupts",
      "Sensors",
      "Circuit design",
    ],
    links: [],
    presentation: "compact",
    secondaryProject: {
      name: "Multi-Functional Light Source",
      description:
        "Also built a multi-mode STM32F303RE light source using ADC, DAC, PWM, UART, I2C, timers, and interrupts for trackpad input, serial control, and high-power white/RGB LED output.",
      technologies: ["STM32F303RE", "DAC", "I2C", "Timers"],
    },
  },
];

export const developerTools: readonly ToolProject[] = [
  {
    name: "beacon-mcp",
    description:
      "A context and capability layer, not just an MCP server or an agent: deterministic reads of weather, commute, Gmail, Calendar, and FineApp state, explicit typed capabilities, and prepare-confirm-execute for sensitive actions, exposed through HTTP/OpenAPI and MCP adapters.",
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
};
