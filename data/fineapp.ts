import type { FineAppCaseStudy } from "@/types/fineapp";

export const fineAppCaseStudy: FineAppCaseStudy = {
  hero: {
    title: "FineApp",
    subtitle:
      "A full-stack creative services platform built to replace manual booking coordination with structured workflows for clients, creatives, and admins.",
    meta: [
      { label: "Role", value: "Lead builder / full-stack developer" },
      { label: "Built", value: "From scratch" },
      { label: "Status", value: "Live platform with real users" },
      {
        label: "Stack",
        value:
          "Next.js · Spring Boot · MySQL · Auth0 · Cloudinary · Railway · PayFast · WebSockets · Resend · Liquibase",
      },
    ],
    links: [
      {
        label: "Visit platform",
        href: "https://www.fineapp.co.za",
      },
      {
        label: "Jump to architecture",
        href: "#architecture",
      },
    ],
  },

  overview: {
    title: "Why it exists",
    body: [
      "FineApp started as a response to a real operational problem. The earlier setup worked as a portfolio and discovery site, but bookings still depended on a person manually coordinating every conversation between clients and creatives.",
      "That made scaling difficult, increased admin overhead, and kept the most important workflows outside the product. FineApp replaced that with a platform where clients and creatives can move through discovery, communication, booking, payment, and completion without admin intervention.",
    ],
  },

  built: {
    title: "What I built",
    points: [
      "Built the platform from the ground up, from repo structure and backend architecture to frontend product flows and deployment.",
      "Migrated from a lightweight portfolio-style setup to a full custom platform under FineApp.co.za.",
      "Implemented client, creative, admin, and super-admin workflows.",
      "Built real-time messaging, booking logic, request flows, payments, notifications, media handling, reviews, audit logging, and admin tooling.",
      "Integrated Auth0, PayFast, Cloudinary, Railway, WebSockets, Resend, and Liquibase-backed schema management.",
    ],
  },

  flows: {
    title: "Core platform flows",
    items: [
      {
        title: "Direct booking flow",
        summary:
          "Clients can browse creatives, open a conversation, agree on details, pay through the platform, and only then receive direct contact details.",
        details: [
          "Clients can discover a creative, review pricing and portfolio, and start a booking conversation.",
          "Creatives can confirm availability and accept or negotiate booking details.",
          "Bookings move through state transitions rather than ad-hoc chat only.",
          "After payment is confirmed through PayFast, the platform releases client and creative contact details automatically.",
        ],
      },
      {
        title: "Open request flow",
        summary:
          "Clients can publish an open request and let multiple creatives apply before selecting one.",
        details: [
          "Clients can create a request instead of targeting one creative directly.",
          "Multiple creatives can apply to the same request and chat with the client.",
          "When the client selects one creative, the other proposals close automatically.",
          "Participants receive updates and the selected path continues into the normal paid booking lifecycle.",
        ],
      },
      {
        title: "Creative onboarding and portfolio management",
        summary:
          "Creatives can become bookable quickly while still having control over rates, packages, media, and identity.",
        details: [
          "Creatives onboard through Auth0-backed signup and role assignment.",
          "They can define rates, session packages, specialties, and portfolio content.",
          "Media is uploaded to Cloudinary while references and ordering stay in MySQL.",
          "The system is usable with minimal setup, but supports richer profile and gallery management over time.",
        ],
      },
    ],
  },

  architecture: {
    title: "System architecture",
    description:
      "FineApp is structured as a multi-service web platform with a Next.js frontend, Spring Boot backend, MySQL database, and external integrations for authentication, media, payments, email, and real-time communication.",
    nodes: [
      {
        title: "Frontend",
        text: "Next.js application for client, creative, and admin workflows",
      },
      {
        title: "Backend API",
        text: "Spring Boot API with controller, service, repository, and provider layers",
      },
      {
        title: "Auth0",
        text: "Authentication, roles, permissions, and management APIs",
      },
      {
        title: "MySQL",
        text: "Core operational data for users, bookings, requests, messages, payments, reviews, and logs",
      },
      {
        title: "Cloudinary",
        text: "Media hosting and transformations for portfolios and galleries",
      },
      {
        title: "PayFast",
        text: "Payment initiation and confirmation flow for bookings",
      },
      {
        title: "Resend",
        text: "Transactional email notifications",
      },
      {
        title: "WebSockets",
        text: "Real-time messaging and notification updates",
      },
      {
        title: "Railway",
        text: "Hosting for frontend, backend, and database",
      },
    ],
    domains: [
      "Users and roles",
      "Creatives and portfolios",
      "Bookings and proposals",
      "Requests",
      "Messaging",
      "Payments",
      "Notifications",
      "Reviews",
      "Audit logs",
    ],
  },

  backend: {
    title: "Backend design and data model",
    intro:
      "FineApp’s backend is organized around distinct service domains rather than a single monolithic flow. Core modules include authentication and authorization, creatives and portfolio management, booking and request workflows, payments, notifications, reviews, gallery handling, and audit logging.",
    modules: [
      "Auth and authorization",
      "Creatives and onboarding",
      "Bookings and proposals",
      "Booking messages and timeline",
      "Requests",
      "Payments",
      "Notifications",
      "Reviews",
      "Gallery and media",
      "Audit logging",
      "Admin controls",
    ],
    entities: [
      "User",
      "Creative",
      "Booking",
      "BookingMessage",
      "BookingPayment",
      "BookingTimeline",
      "BookingChangeProposal",
      "Request",
      "Review",
      "Notification",
      "GalleryImage",
      "UserAuditLog",
    ],
  },

  challenges: {
    title: "Technical challenges",
    items: [
      {
        title: "Replacing manual coordination with product logic",
        summary:
          "The original workflow depended on a human intermediary. FineApp moved that coordination into the platform itself.",
        details: [
          "Discovery, communication, booking confirmation, payment, and release logic were all moved into the product.",
          "This reduced admin dependency while still protecting platform commission and control.",
        ],
      },
      {
        title: "Stateful booking and request workflows",
        summary:
          "Direct bookings and open requests share overlapping logic but have different entry points and lifecycle rules.",
        details: [
          "The platform supports direct bookings, open requests, multi-creative proposals, selection, payment, completion, and automatic cleanup.",
          "Request flows can transition into normal booking flows, which made the state model more intricate than a simple CRUD app.",
        ],
      },
      {
        title: "Real-time messaging and moderation",
        summary:
          "Messaging and notifications were built with WebSockets and tied directly to booking workflows.",
        details: [
          "Messages appear in real time between platform participants.",
          "The system blocks contact details, links, and profanity before the correct booking stage.",
          "Some system messages are generated automatically as state changes occur.",
        ],
      },
      {
        title: "Security, permissions, and auditability",
        summary:
          "The platform had to be secure enough for role-based actions, payments, admin controls, and user data handling.",
        details: [
          "Auth0 roles and permissions separate clients, creatives, admins, and super-admins.",
          "Sensitive backend actions rely on authenticated identity rather than trusting client-provided IDs.",
          "Audit logs capture platform activity across bookings, media, user changes, payments, and moderation-related actions.",
        ],
      },
      {
        title: "Performance and infrastructure tuning",
        summary:
          "Later iterations required architecture and efficiency improvements after earlier versions consumed too many resources.",
        details: [
          "Production usage forced a second pass on backend behavior and resource usage.",
          "This led to more disciplined thinking around caching, architecture, and operational cost.",
        ],
      },
    ],
  },

  admin: {
    title: "Admin and operational tooling",
    intro:
      "FineApp includes internal tooling for operating the platform, not just customer-facing pages.",
    tools: [
      {
        title: "Booking oversight",
        text: "Admins can browse bookings, inspect details, view timelines, see messages, and check payment state from internal tools.",
      },
      {
        title: "Creative management",
        text: "Admins can review creatives, inspect profiles, adjust details, and control listing order based on business needs.",
      },
      {
        title: "Gallery uploader",
        text: "Internal tooling supports structured media upload workflows for general galleries and creator-specific content.",
      },
      {
        title: "Audit logs",
        text: "Admins can filter activity by action, actor, entity, and request metadata to investigate behavior and trace platform changes.",
      },
    ],
  },

  audit: {
    title: "Audit logging and operational insight",
    body: [
      "FineApp captures audit events across booking, media, payment, request, and user workflows. Logs include actor identity, roles, action type, target entity, request metadata, HTTP outcomes, and before/after change data where relevant.",
      "These logs are useful operationally, but they have also surfaced product insight. One example was discovering how heavily creatives relied on phones for uploads and account management, which changed how mobile experience was prioritized.",
    ],
    sampleActions: [
      "BOOKING_MESSAGE_SENT",
      "REQUEST_APPLIED",
      "GALLERY_MEDIA_UPLOADED",
      "PAYMENT_INITIATED",
      "USER_PROFILE_IMAGE_UPDATED",
      "BOOKING_STATUS_UPDATED",
    ],
  },

  screenshots: {
    title: "Selected internal views",
    items: [
      {
        title: "Audit logs",
        text: "Filterable internal visibility into user actions, messages, uploads, and operational events.",
        src: "/fineapp/audit-logs.png",
      },
      {
        title: "Gallery uploader",
        text: "Internal upload tooling for media workflows tied to platform galleries and creative portfolios.",
        src: "/fineapp/gallery-uploader.png",
      },
      {
        title: "Admin bookings",
        text: "Operational list view for booking oversight, filters, status monitoring, and quick inspection.",
        src: "/fineapp/admin-bookings.png",
      },
      {
        title: "Booking detail",
        text: "Detailed view into booking state, timeline, payment, and message history.",
        src: "/fineapp/booking-detail.png",
      },
      {
        title: "Creative management",
        text: "Admin editing and profile management for creators, specialties, and display ordering.",
        src: "/fineapp/creative-management.png",
      },
      {
        title: "Creative detail editor",
        text: "Profile editing controls for identity, specialties, availability, images, and other operational fields.",
        src: "/fineapp/creative-edit.png",
      },
    ],
  },

  results: {
    title: "Current state",
    points: [
      "Live production platform with real users and real workflows.",
      "Roughly 30 creatives already onboarded.",
      "Supports client, creative, admin, and super-admin behavior.",
      "Handles real messaging, booking, review, and payment-related flows.",
      "WhatsApp notifications are prepared for future rollout pending verification and testing.",
    ],
  },

  reflection: {
    title: "What this project taught me",
    body: [
      "FineApp pushed me beyond building interfaces into designing and operating a full product system. It involved workflow design, security, permissions, state modeling, integrations, admin tooling, infrastructure, and real operational tradeoffs.",
      "It also changed how I think about backend structure and platform ownership, especially in systems where business logic is tightly coupled to trust, payments, communication, and user roles.",
    ],
  },
};
