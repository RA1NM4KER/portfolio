import Image from "next/image";
import type { Project } from "@/types/portfolio";
import styles from "./home-sections.module.css";

type ProjectMediaProps = {
  image?: Project["image"];
  video?: Project["video"];
  productName: string;
  productHref?: string;
};

export function ProjectMedia({
  image,
  video,
  productName,
  productHref,
}: ProjectMediaProps) {
  if (video) {
    return (
      <div className={styles.projectMedia}>
        <video
          autoPlay
          controls
          loop
          muted
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={video.label}
        >
          <source src={video.src} type="video/mp4" />
          Your browser cannot play this video.{" "}
          <a href={video.src}>Open the MP4 directly.</a>
        </video>
      </div>
    );
  }

  if (!image) return null;

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
