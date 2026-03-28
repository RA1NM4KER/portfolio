"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  Background,
  Controls,
  ReactFlow,
  type ReactFlowInstance,
} from "@xyflow/react";
import { Expand, X } from "lucide-react";
import { ArchitectureNode } from "@/components/sections/fineapp-architecture/architecture-node";
import {
  FILTERS,
  baseEdges,
  baseNodes,
  flowDescriptions,
} from "@/components/sections/fineapp-architecture/architecture-config";
import type { FlowKey } from "@/types/architecture";
import styles from "./fineapp-architecture.module.css";

const nodeTypes = {
  architectureNode: ArchitectureNode,
};

export function FineAppArchitectureFlow() {
  const [activeFlow, setActiveFlow] = useState<FlowKey>("all");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flowInstance, setFlowInstance] = useState<ReactFlowInstance | null>(
    null,
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!flowInstance) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      flowInstance.fitView({ padding: 0.12, duration: 250 });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [flowInstance, isFullscreen]);

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
  const canUsePortal = typeof document !== "undefined";

  const panel = (
    <>
      {isFullscreen ? (
        <div
          className={styles.backdrop}
          onClick={() => setIsFullscreen(false)}
          aria-hidden="true"
        />
      ) : null}

      <div
        className={[
          styles.panel,
          isFullscreen ? styles.panelFullscreen : "",
        ].join(" ")}
      >
        <div className={styles.copy}>
          <div className={styles.copyTop}>
            <div>
              <p className={styles.eyebrow}>Interactive system view</p>
              <h3 className={styles.title}>{selectedInfo.title}</h3>
              <p className={styles.text}>{selectedInfo.body}</p>
            </div>

            <button
              type="button"
              className={styles.fullscreenBtn}
              onClick={() => setIsFullscreen((prev) => !prev)}
              aria-label={isFullscreen ? "Exit fullscreen" : "Open fullscreen"}
            >
              {isFullscreen ? <X size={18} /> : <Expand size={18} />}
            </button>
          </div>
        </div>

        <div className={styles.canvas}>
          <div className={[styles.toolbar, styles.toolbarOverlay].join(" ")}>
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={[
                  styles.filter,
                  activeFlow === filter.key ? styles.filterActive : "",
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
            onInit={setFlowInstance}
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
    </>
  );

  return (
    <div className={styles.root}>
      {isFullscreen && canUsePortal
        ? createPortal(panel, document.body)
        : panel}
    </div>
  );
}
