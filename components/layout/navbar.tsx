import Link from "next/link";

const links = [
  { href: "#experience", label: "/work-experience" },
  { href: "#projects", label: "/projects" },
  { href: "#contact", label: "/contact" },
];

export function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="navbar__brand">
        Kefas Manda
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
