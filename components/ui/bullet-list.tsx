import type { BulletListProps } from "@/types/ui";
import styles from "@/components/sections/fineapp/fineapp.module.css";

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
