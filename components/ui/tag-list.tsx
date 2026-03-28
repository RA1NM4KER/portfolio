import type { TagListProps } from "@/types/ui";
import styles from "@/components/sections/fineapp/fineapp.module.css";

export function TagList({ items, label, className }: TagListProps) {
  return (
    <div className={className}>
      {label ? <p className={styles.domainLabel}>{label}</p> : null}
      <div className={styles.tagList}>
        {items.map((item) => (
          <span key={item} className={styles.tag}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
