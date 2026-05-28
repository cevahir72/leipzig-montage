"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/office", label: "Office" },
  { href: "/kitchen", label: "Kitchen" },
  { href: "/bedroom", label: "Bedroom" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Galeri" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
      <nav className="flex justify-between items-center h-16 max-w-[1200px] mx-auto px-margin-mobile md:px-0">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-primary shrink-0">
          Leipzig Montage Profis
        </Link>
        <div className="hidden md:flex items-center gap-6 font-body-md text-body-md">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-secondary hover:text-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/contact"
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:bg-primary-container transition-colors scale-98 active:opacity-80 shrink-0"
        >
          Jetzt Buchen
        </Link>
      </nav>
    </header>
  );
}
