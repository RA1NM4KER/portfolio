"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const navRef = useRef<HTMLElement>(null);
  const [activeHref, setActiveHref] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const navbar = navRef.current;

    if (!navbar) {
      return;
    }

    const sectionLinks = links.filter((link) => link.href.startsWith("#"));

    if (sectionLinks.length === 0) {
      return;
    }

    const syncNavbarHeight = () => {
      const height = Math.ceil(navbar.getBoundingClientRect().height);
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`,
      );
      return height;
    };

    const updateActiveSection = () => {
      const navbarHeight = syncNavbarHeight();
      const activationLine = window.scrollY + navbarHeight + 24;
      const currentHref =
        sectionLinks.reduce((active, link) => {
          const section = document.getElementById(link.href.slice(1));

          if (section && section.offsetTop <= activationLine) {
            return link.href;
          }

          return active;
        }, "") || sectionLinks[0].href;

      setActiveHref(currentHref);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateActiveSection();
    });

    resizeObserver.observe(navbar);
    syncNavbarHeight();
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [links]);

  return (
    <header ref={navRef} className="navbar">
      <Link
        href={brandHref}
        scroll
        className="navbar__brand"
        onClick={(event) => {
          if (brandHref === pathname) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
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
            aria-current={activeHref === link.href ? "location" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
