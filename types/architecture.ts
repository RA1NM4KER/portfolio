import type { Edge, Node } from "@xyflow/react";

export type FlowKey =
  | "all"
  | "booking"
  | "requests"
  | "messaging"
  | "admin"
  | "media";

export type ArchitectureNodeData = {
  label: string;
  description: string;
  categories: FlowKey[];
  kind?: "surface" | "core" | "service";
};

export type ArchitectureFilter = {
  key: FlowKey;
  label: string;
};

export type ArchitectureFlowNode = Node<ArchitectureNodeData>;

export type ArchitectureFlowEdge = Edge & {
  categories: FlowKey[];
};

export type FlowDescription = {
  title: string;
  body: string;
};
