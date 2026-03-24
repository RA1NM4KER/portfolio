"use client";

import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import type { ArchitectureNodeData } from "@/types/architecture";

export function ArchitectureNode({
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
