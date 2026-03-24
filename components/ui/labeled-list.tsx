import { BulletList } from "@/components/ui/bullet-list";
import type { LabeledListProps } from "@/types/ui";

export function LabeledList({ label, items, className }: LabeledListProps) {
  return (
    <div className={className}>
      <p className="case-study-mini-label">{label}</p>
      <BulletList items={items} />
    </div>
  );
}
