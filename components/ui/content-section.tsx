import { ReactNode } from "react";

type ContentSectionProps = {
  id?: string;
  label: string;
  children: ReactNode;
};

export function ContentSection({ id, label, children }: ContentSectionProps) {
  return (
    <section id={id} className="content-section">
      <div className="section-heading">
        <span className="section-heading__label">{label}</span>
        <div className="section-heading__rule" />
      </div>
      {children}
    </section>
  );
}
