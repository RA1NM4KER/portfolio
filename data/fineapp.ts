export const fineAppCaseStudy = {
  title: "FineApp",
  summary:
    "A creative marketplace I built from scratch, then simplified around paid freelancer listings and direct client enquiries.",
  role: "Lead builder and full stack developer",
  currentModel:
    "Freelancers pay to be listed on the platform and receive enquiries. Clients discover creatives and contact them directly through email or WhatsApp.",
  metrics: [
    {
      value: "40+",
      label: "Creatives onboarded",
      detail: "Across the platform’s development and launch.",
    },
    {
      value: "From scratch",
      label: "Product ownership",
      detail: "Frontend, backend, integrations, and deployment.",
    },
    {
      value: "Direct",
      label: "Client contact",
      detail: "Email and WhatsApp replace platform messaging.",
    },
  ],
  overview: [
    "FineApp began with a discovery site where bookings depended on someone manually coordinating conversations between clients and creatives. I built a custom platform to bring that coordination into the product.",
    "The original system covered discovery, messaging, booking, and payment. Running it exposed a different problem: there was too much friction in the conversion journey. Building the workflow was only part of the job; deciding what to remove became just as important.",
  ],
  evolution: {
    before:
      "The original marketplace kept conversations, booking state, and payments inside FineApp. Clients and creatives moved through a structured flow, with direct contact details released after payment confirmation.",
    reason:
      "The integrated flow created friction in conversion. I changed the strategy from managing the transaction to helping freelancers be discovered and contacted, and removed platform messaging and payments.",
    current:
      "FineApp now charges freelancers for being on the platform and receiving enquiries. Clients contact them directly through email or WhatsApp, so the conversation happens in tools they already use.",
  },
  engineering: [
    {
      title: "Booking state instead of ad hoc coordination",
      detail:
        "In the original build, direct bookings and open requests shared a booking lifecycle. Clients could select a creative from several proposals, close the remaining proposals, and continue into payment and completion. I modelled those transitions explicitly rather than treating a booking as a single editable record.",
    },
    {
      title: "Payment confirmation as a backend responsibility",
      detail:
        "I implemented PayFast integration and verified payment webhooks in the earlier version. Confirmed payment drove the release of client and creative contact details. This payment workflow is historical work; payments are no longer part of the current platform flow.",
    },
    {
      title: "Messaging tied to the booking lifecycle",
      detail:
        "The earlier WebSocket messaging system delivered conversations and notifications in real time. Moderation blocked contact details, links, and profanity before the relevant booking stage, while system messages reflected state changes. Platform messaging has since been removed in favour of direct email and WhatsApp contact.",
    },
    {
      title: "Identity, permissions, and traceability",
      detail:
        "The original backend separated client, creative, admin, and super admin actions through Auth0 roles and permissions. Sensitive actions relied on authenticated identity rather than client supplied IDs. Audit events recorded actors, actions, target entities, request outcomes, and before and after changes where relevant.",
    },
    {
      title: "Tools for operating the product",
      detail:
        "I built admin views for booking oversight, creative management, media uploads, and audit logs. Operational evidence also showed how heavily creatives relied on phones for uploads and account management, informing the attention given to the mobile experience.",
    },
    {
      title: "Revisiting resource usage after launch",
      detail:
        "Earlier versions used too many resources, so I revisited backend behaviour, architecture, and caching. Operating the product made infrastructure cost and maintainability part of the engineering work, alongside delivering features.",
    },
  ],
  stack: [
    "Next.js",
    "Spring Boot",
    "MySQL",
    "Auth0",
    "Cloudinary",
    "Railway",
    "Resend",
    "Liquibase",
    "PayFast (earlier version)",
    "WebSockets (earlier version)",
  ],
  architecture: {
    summary:
      "The original build paired a Next.js frontend with a Spring Boot API and MySQL. Controller, service, repository, and provider layers separated product rules from storage and external integrations.",
    note: "PayFast and WebSockets describe the earlier payment and messaging implementation. Today, client conversations happen directly through email or WhatsApp.",
  },
  reflection: [
    "FineApp took me from implementing interfaces to owning a product system: workflows, security, integrations, operational tools, and deployment. The messaging and payment work remains part of that engineering experience, even though those features are no longer the direction of the product.",
    "The most useful lesson was that a complete workflow can still ask too much of the people using it. I removed working features to support a simpler model, with the aim of reducing the distance between discovering a creative and starting a conversation.",
  ],
  image: {
    src: "/home/fineapp.webp",
    alt: "Earlier FineApp discovery interface with search, categories, creative profiles, availability, and pricing",
    width: 1800,
    height: 1133,
    caption:
      "Creative discovery in the earlier FineApp interface. The current approach uses direct email and WhatsApp enquiries instead of platform messaging.",
  },
} as const;
