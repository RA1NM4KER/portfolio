import Image from "next/image";
import { ContentSection } from "@/components/ui/content-section";

type ScreenshotItem = {
  title: string;
  text: string;
  src: string;
};

type FineAppScreenshotsSectionProps = {
  title: string;
  items: ScreenshotItem[];
};

export function FineAppScreenshotsSection({
  title,
  items,
}: FineAppScreenshotsSectionProps) {
  return (
    <ContentSection label="/screens">
      <h2 className="case-study-subtitle">{title}</h2>

      <div className="screenshot-grid">
        {items.map((item) => (
          <div key={item.title} className="screenshot-card">
            <div className="screenshot-card__image">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="screenshot-card__img"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            <p className="architecture-card__title">{item.title}</p>
            <p className="architecture-card__text">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
