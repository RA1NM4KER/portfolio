"use client";

import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import type { ArchitectureNodeData } from "@/types/architecture";
import styles from "./fineapp-architecture.module.css";

export function ArchitectureNode({
  data,
  selected,
}: NodeProps<Node<ArchitectureNodeData>>) {
  return (
    <div
      className={[
        styles.node,
        data.kind === "surface" ? styles.nodeSurface : "",
        data.kind === "core" ? styles.nodeCore : "",
        data.kind === "service" ? styles.nodeService : "",
        selected ? styles.nodeSelected : "",
      ].join(" ")}
    >
      <Handle
        type="target"
        position={Position.Left}
        className={styles.nodeHandle}
      />
      <div className={styles.nodeLabel}>{data.label}</div>
      <div className={styles.nodeDescription}>{data.description}</div>
      <Handle
        type="source"
        position={Position.Right}
        className={styles.nodeHandle}
      />
    </div>
  );
}
