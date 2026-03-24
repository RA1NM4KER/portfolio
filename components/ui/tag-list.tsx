import type { TagListProps } from "@/types/ui";

export function TagList({ items, label, className }: TagListProps) {
  return (
    <div className={className}>
      {label ? (
        <p className="architecture-domain-block__label">{label}</p>
      ) : null}
      <div className="stack-list">
        {items.map((item) => (
          <span key={item} className="stack-list__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
