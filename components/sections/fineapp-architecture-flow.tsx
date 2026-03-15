"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { Expand, X } from "lucide-react";

type FlowKey = "all" | "booking" | "requests" | "messaging" | "admin" | "media";

type ArchitectureNodeData = {
  label: string;
  description: string;
  categories: FlowKey[];
  kind?: "surface" | "core" | "service";
};

const FILTERS: { key: FlowKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "booking", label: "Booking" },
  { key: "requests", label: "Requests" },
  { key: "messaging", label: "Messaging" },
  { key: "admin", label: "Admin" },
  { key: "media", label: "Media" },
];

function ArchitectureNode({
  data,
  selected,
}: NodeProps<Node<ArchitectureNodeData>>) {
  return (
    <div
      className={[
        "fineapp-flow-node",
        data.kind ? `fineapp-flow-node--${data.kind}` : "",
        selected ? "fineapp-flow-node--selected" : "",
      ].join(" ")}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="fineapp-flow-node__handle"
      />
      <div className="fineapp-flow-node__label">{data.label}</div>
      <div className="fineapp-flow-node__description">{data.description}</div>
      <Handle
        type="source"
        position={Position.Right}
        className="fineapp-flow-node__handle"
      />
    </div>
  );
}

const nodeTypes = {
  architectureNode: ArchitectureNode,
};

const baseNodes: Node<ArchitectureNodeData>[] = [
  {
    id: "clients",
    type: "architectureNode",
    position: { x: 0, y: 40 },
    draggable: false,
    selectable: true,
    data: {
      label: "Clients",
      description: "Browse creatives, book directly, or create open requests.",
      categories: ["all", "booking", "requests", "messaging"],
      kind: "surface",
    },
  },
  {
    id: "creatives",
    type: "architectureNode",
    position: { x: 0, y: 220 },
    draggable: false,
    selectable: true,
    data: {
      label: "Creatives",
      description:
        "Onboard, manage packages, upload media, chat, and get booked.",
      categories: ["all", "booking", "requests", "messaging", "media"],
      kind: "surface",
    },
  },
  {
    id: "admins",
    type: "architectureNode",
    position: { x: 0, y: 400 },
    draggable: false,
    selectable: true,
    data: {
      label: "Admins",
      description:
        "Moderation, booking oversight, audit visibility, and creative controls.",
      categories: ["all", "admin"],
      kind: "surface",
    },
  },

  {
    id: "frontend",
    type: "architectureNode",
    position: { x: 340, y: 220 },
    draggable: false,
    selectable: true,
    data: {
      label: "Next.js Frontend",
      description: "Client, creative, and admin interfaces in one application.",
      categories: ["all", "booking", "requests", "messaging", "admin", "media"],
      kind: "core",
    },
  },
  {
    id: "api",
    type: "architectureNode",
    position: { x: 690, y: 220 },
    draggable: false,
    selectable: true,
    data: {
      label: "Spring Boot API",
      description:
        "Core backend for workflows, auth-aware actions, and business logic.",
      categories: ["all", "booking", "requests", "messaging", "admin", "media"],
      kind: "core",
    },
  },

  {
    id: "booking-engine",
    type: "architectureNode",
    position: { x: 1060, y: 20 },
    draggable: false,
    selectable: true,
    data: {
      label: "Booking Engine",
      description:
        "Handles booking states, proposals, payment gating, and completion logic.",
      categories: ["all", "booking", "requests"],
      kind: "service",
    },
  },
  {
    id: "request-flow",
    type: "architectureNode",
    position: { x: 1060, y: 160 },
    draggable: false,
    selectable: true,
    data: {
      label: "Request Flow",
      description:
        "Open requests, multi-creative applications, selection, and cleanup.",
      categories: ["all", "requests"],
      kind: "service",
    },
  },
  {
    id: "messaging",
    type: "architectureNode",
    position: { x: 1060, y: 300 },
    draggable: false,
    selectable: true,
    data: {
      label: "Messaging + WebSockets",
      description:
        "Real-time chat, live updates, moderation rules, and system messages.",
      categories: ["all", "messaging", "booking", "requests"],
      kind: "service",
    },
  },
  {
    id: "admin-tools",
    type: "architectureNode",
    position: { x: 1060, y: 440 },
    draggable: false,
    selectable: true,
    data: {
      label: "Admin Tools + Audit",
      description:
        "Booking oversight, creative management, audit logs, and support actions.",
      categories: ["all", "admin"],
      kind: "service",
    },
  },
  {
    id: "gallery",
    type: "architectureNode",
    position: { x: 1060, y: 580 },
    draggable: false,
    selectable: true,
    data: {
      label: "Gallery + Media",
      description:
        "Portfolio uploads, transformations, ordering, and creator media workflows.",
      categories: ["all", "media"],
      kind: "service",
    },
  },

  {
    id: "auth0",
    type: "architectureNode",
    position: { x: 1440, y: 20 },
    draggable: false,
    selectable: true,
    data: {
      label: "Auth0",
      description:
        "Authentication, roles, permissions, and management API flows.",
      categories: ["all", "admin", "booking", "requests", "messaging", "media"],
      kind: "service",
    },
  },
  {
    id: "mysql",
    type: "architectureNode",
    position: { x: 1440, y: 160 },
    draggable: false,
    selectable: true,
    data: {
      label: "MySQL",
      description:
        "Users, bookings, requests, messages, payments, reviews, and audit logs.",
      categories: ["all", "booking", "requests", "messaging", "admin", "media"],
      kind: "service",
    },
  },
  {
    id: "payfast",
    type: "architectureNode",
    position: { x: 1440, y: 300 },
    draggable: false,
    selectable: true,
    data: {
      label: "PayFast",
      description: "Booking payment initiation and confirmation handling.",
      categories: ["all", "booking"],
      kind: "service",
    },
  },
  {
    id: "resend",
    type: "architectureNode",
    position: { x: 1440, y: 440 },
    draggable: false,
    selectable: true,
    data: {
      label: "Resend",
      description:
        "Transactional emails for booking, request, and account events.",
      categories: ["all", "booking", "requests", "admin"],
      kind: "service",
    },
  },
  {
    id: "cloudinary",
    type: "architectureNode",
    position: { x: 1440, y: 580 },
    draggable: false,
    selectable: true,
    data: {
      label: "Cloudinary",
      description:
        "Image hosting and transformations for creator portfolios and galleries.",
      categories: ["all", "media"],
      kind: "service",
    },
  },
];

const baseEdges: (Edge & { categories: FlowKey[] })[] = [
  {
    id: "e1",
    source: "clients",
    target: "frontend",
    type: "smoothstep",
    categories: ["all", "booking", "requests", "messaging"],
  },
  {
    id: "e2",
    source: "creatives",
    target: "frontend",
    type: "smoothstep",
    categories: ["all", "booking", "requests", "messaging", "media"],
  },
  {
    id: "e3",
    source: "admins",
    target: "frontend",
    type: "smoothstep",
    categories: ["all", "admin"],
  },

  {
    id: "e4",
    source: "frontend",
    target: "api",
    type: "smoothstep",
    categories: ["all", "booking", "requests", "messaging", "admin", "media"],
  },

  {
    id: "e5",
    source: "api",
    target: "booking-engine",
    type: "smoothstep",
    categories: ["all", "booking", "requests"],
  },
  {
    id: "e6",
    source: "api",
    target: "request-flow",
    type: "smoothstep",
    categories: ["all", "requests"],
  },
  {
    id: "e7",
    source: "api",
    target: "messaging",
    type: "smoothstep",
    categories: ["all", "messaging", "booking", "requests"],
  },
  {
    id: "e8",
    source: "api",
    target: "admin-tools",
    type: "smoothstep",
    categories: ["all", "admin"],
  },
  {
    id: "e9",
    source: "api",
    target: "gallery",
    type: "smoothstep",
    categories: ["all", "media"],
  },

  {
    id: "e10",
    source: "api",
    target: "auth0",
    type: "smoothstep",
    categories: ["all", "admin", "booking", "requests", "messaging", "media"],
  },
  {
    id: "e11",
    source: "api",
    target: "mysql",
    type: "smoothstep",
    categories: ["all", "booking", "requests", "messaging", "admin", "media"],
  },
  {
    id: "e12",
    source: "booking-engine",
    target: "payfast",
    type: "smoothstep",
    categories: ["all", "booking"],
  },
  {
    id: "e13",
    source: "api",
    target: "resend",
    type: "smoothstep",
    categories: ["all", "booking", "requests", "admin"],
  },
  {
    id: "e14",
    source: "gallery",
    target: "cloudinary",
    type: "smoothstep",
    categories: ["all", "media"],
  },
  {
    id: "e15",
    source: "messaging",
    target: "mysql",
    type: "smoothstep",
    categories: ["all", "messaging", "booking", "requests"],
  },
  {
    id: "e16",
    source: "admin-tools",
    target: "mysql",
    type: "smoothstep",
    categories: ["all", "admin"],
  },
];

const flowDescriptions: Record<FlowKey, { title: string; body: string }> = {
  all: {
    title: "FineApp as a system",
    body: "A high-level view of how users, backend modules, and external services connect across booking, requests, messaging, payments, media, and admin operations.",
  },
  booking: {
    title: "Booking flow",
    body: "Clients and creatives move through booking creation, negotiation, confirmation, payment, and contact release through the frontend, Spring Boot API, booking engine, PayFast, and notifications.",
  },
  requests: {
    title: "Request flow",
    body: "Open requests allow multiple creatives to apply, message, and compete before one proposal turns into the selected booking path and the rest close automatically.",
  },
  messaging: {
    title: "Messaging flow",
    body: "Real-time chat and status-aware updates run through WebSockets and backend messaging logic, with moderation rules preventing links, contact details, and profanity too early in the flow.",
  },
  admin: {
    title: "Admin flow",
    body: "Admins interact with booking oversight, creative controls, and audit visibility through internal tools backed by role-based access and operational logs.",
  },
  media: {
    title: "Media flow",
    body: "Creative uploads and gallery management pass through the frontend and API into media services, with Cloudinary storing assets while MySQL stores references, ordering, and metadata.",
  },
};

export function FineAppArchitectureFlow() {
  const [activeFlow, setActiveFlow] = useState<FlowKey>("all");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const nodes = useMemo(() => {
    return baseNodes.map((node) => {
      const isActive =
        activeFlow === "all" || node.data.categories.includes(activeFlow);

      return {
        ...node,
        data: {
          ...node.data,
        },
        style: {
          opacity: isActive ? 1 : 0.28,
        },
      };
    });
  }, [activeFlow]);

  const edges = useMemo(() => {
    return baseEdges.map((edge) => {
      const isActive =
        activeFlow === "all" || edge.categories.includes(activeFlow);

      return {
        ...edge,
        animated: isActive && activeFlow !== "all",
        style: {
          stroke: isActive ? "#f2b316" : "#324255",
          strokeWidth: isActive ? 2.2 : 1.2,
          opacity: isActive ? 0.95 : 0.22,
        },
      };
    });
  }, [activeFlow]);

  const selectedInfo = flowDescriptions[activeFlow];

  return (
    <div className="fineapp-architecture">
      <div
        className={[
          "fineapp-architecture__panel",
          isFullscreen ? "fineapp-architecture__panel--fullscreen" : "",
        ].join(" ")}
      >
        <div className="fineapp-architecture__copy">
          <div className="fineapp-architecture__copy-top">
            <div>
              <p className="fineapp-architecture__eyebrow">
                Interactive system view
              </p>
              <h3 className="fineapp-architecture__title">
                {selectedInfo.title}
              </h3>
              <p className="fineapp-architecture__text">{selectedInfo.body}</p>
            </div>

            <button
              type="button"
              className="fineapp-architecture__fullscreen-btn"
              onClick={() => setIsFullscreen((prev) => !prev)}
              aria-label={isFullscreen ? "Exit fullscreen" : "Open fullscreen"}
            >
              {isFullscreen ? <X size={18} /> : <Expand size={18} />}
            </button>
          </div>
        </div>

        <div className="fineapp-architecture__canvas">
          <div className="fineapp-architecture__toolbar fineapp-architecture__toolbar--overlay">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={[
                  "fineapp-architecture__filter",
                  activeFlow === filter.key
                    ? "fineapp-architecture__filter--active"
                    : "",
                ].join(" ")}
                onClick={() => setActiveFlow(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.12 }}
            panOnDrag
            zoomOnScroll={false}
            zoomOnPinch
            zoomOnDoubleClick={false}
            preventScrolling={false}
            panOnScroll={false}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={true}
            proOptions={{ hideAttribution: true }}
          >
            <Background gap={18} size={1} color="#1a2b40" />
            <Controls
              showInteractive={false}
              fitViewOptions={{ padding: 0.12 }}
            />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
