import Image from "next/image";
import { ContentSection } from "@/components/ui/content-section";
import type { FineAppScreenshotsSectionProps } from "@/types/fineapp";
import styles from "./fineapp.module.css";

export function FineAppScreenshotsSection({
  title,
  items,
}: FineAppScreenshotsSectionProps) {
  return (
    <ContentSection label="/screens">
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.screenshotGrid}>
        {items.map((item) => (
          <div key={item.title} className={styles.screenshotCard}>
            <div className={styles.screenshotImage}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className={styles.screenshotImg}
                sizes="(max-width: 900px) 100vw, 540px"
              />
            </div>

            <p className={styles.cardTitle}>{item.title}</p>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
