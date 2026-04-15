import type { CSSProperties } from "react";
import type { RevealProps } from "@/types/ui";
import styles from "./reveal.module.css";

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div
      className={[styles.reveal, className ?? ""].filter(Boolean).join(" ")}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
