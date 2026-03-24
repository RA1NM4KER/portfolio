import type { BulletListProps } from "@/types/ui";

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={["case-study-list", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
