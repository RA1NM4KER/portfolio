import Image from "next/image";
import type { Project } from "@/types/portfolio";
import styles from "./home-sections.module.css";

type ProjectMediaProps = {
  image: NonNullable<Project["image"]>;
  productName: string;
  productHref?: string;
};

export function ProjectMedia({
  image,
  productName,
  productHref,
}: ProjectMediaProps) {
  const pansOnInteraction = image.motion === "vertical-pan";
  const imageContent = (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes="(max-width: 800px) 100vw, 62vw"
    />
  );

  if (productHref) {
    return (
      <a
        href={productHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${productName}`}
        className={styles.projectMedia}
        data-pan={pansOnInteraction ? "interactive" : undefined}
      >
        {imageContent}
      </a>
    );
  }

  return (
    <div
      className={styles.projectMedia}
      data-pan={pansOnInteraction ? "interactive" : undefined}
    >
      {imageContent}
    </div>
  );
}
