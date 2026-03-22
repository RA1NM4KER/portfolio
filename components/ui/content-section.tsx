import { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type ContentSectionProps = {
  id?: string;
  label: string;
  children: ReactNode;
};

export function ContentSection({ id, label, children }: ContentSectionProps) {
  return (
    <section id={id} className="content-section">
      <Reveal>
        <div className="section-heading">
          <span className="section-heading__label">{label}</span>
          <div className="section-heading__rule" />
        </div>
      </Reveal>
      <Reveal delay={100}>{children}</Reveal>
    </section>
  );
}
