"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavbarLink = {
  href: string;
  label: string;
};

type NavbarProps = {
  links: readonly NavbarLink[];
  brandName?: string;
  brandHref?: string;
};

export function Navbar({
  links,
  brandName = "Kefas Manda",
  brandHref = "/",
}: NavbarProps) {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sectionLinks = links.filter((link) => link.href.startsWith("#"));

    if (sectionLinks.length === 0) {
      return;
    }

    const sections = sectionLinks
      .map((link) => ({
        href: link.href,
        element: document.getElementById(link.href.slice(1)),
      }))
      .filter(
        (entry): entry is { href: string; element: HTMLElement } =>
          entry.element !== null,
      );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          return;
        }

        const activeSection = sections.find(
          (section) => section.element === visibleEntries[0].target,
        );

        if (activeSection) {
          setActiveHref(activeSection.href);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section.element));

    return () => observer.disconnect();
  }, [links]);

  return (
    <header className="navbar">
      <Link href={brandHref} className="navbar__brand">
        {brandName}
      </Link>

      <nav className="navbar__nav" aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__link ${
              activeHref === link.href ? "navbar__link--active" : ""
            }`.trim()}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
