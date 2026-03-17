"use client";

import { useEffect, useMemo, useState } from "react";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import { Expand, X } from "lucide-react";
import { ArchitectureNode } from "@/components/sections/fineapp-architecture/architecture-node";
import {
  FILTERS,
  baseEdges,
  baseNodes,
  flowDescriptions,
  type FlowKey,
} from "@/components/sections/fineapp-architecture/architecture-config";

const nodeTypes = {
  architectureNode: ArchitectureNode,
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
            minZoom={0.2}
            maxZoom={2}
            panOnDrag
            zoomOnScroll={false}
            zoomOnPinch
            zoomOnDoubleClick={false}
            preventScrolling={false}
            panOnScroll={false}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable
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
