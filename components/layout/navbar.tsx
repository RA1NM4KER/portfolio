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
  return (
    <header className="navbar">
      <Link href={brandHref} className="navbar__brand">
        {brandName}
      </Link>

      <nav className="navbar__nav" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="navbar__link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
