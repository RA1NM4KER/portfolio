import { BulletList } from "@/components/ui/bullet-list";
import type { LabeledListProps } from "@/types/ui";
import styles from "@/components/sections/fineapp/fineapp.module.css";

export function LabeledList({ label, items, className }: LabeledListProps) {
  return (
    <div className={className}>
      <p className={styles.miniLabel}>{label}</p>
      <BulletList items={items} />
    </div>
  );
}
