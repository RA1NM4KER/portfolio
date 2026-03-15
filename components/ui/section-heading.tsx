type SectionHeadingProps = {
  label: string;
};

export function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-heading__label">{label}</span>
      <div className="section-heading__rule" />
    </div>
  );
}
