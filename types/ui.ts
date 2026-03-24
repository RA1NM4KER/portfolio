import type { ReactNode } from "react";

export type NavbarLink = {
  href: string;
  label: string;
};

export type NavbarProps = {
  links: readonly NavbarLink[];
  brandName?: string;
  brandHref?: string;
};

export type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export type ContentSectionProps = {
  id?: string;
  label: string;
  children: ReactNode;
};

export type TagListProps = {
  items: readonly string[];
  label?: string;
  className?: string;
};

export type LabeledListProps = {
  label: string;
  items: readonly string[];
  className?: string;
};

export type BulletListProps = {
  items: readonly string[];
  className?: string;
};
