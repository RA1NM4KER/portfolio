import "@xyflow/react/dist/style.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FineApp product engineering case study",
  description:
    "A full-stack case study covering FineApp’s booking workflows, secure payment-webhook processing, moderated real-time chat, role-based access, and production operations.",
  alternates: { canonical: "/fineapp" },
};

export default function FineAppLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
