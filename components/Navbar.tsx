"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { href: "/büro", label: "Büro" },
  { href: "/küche", label: "Küche" },
  { href: "/schlafzimmer", label: "Schlafzimmer" },
  { href: "/uberuns", label: "Über Uns" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
      <nav className="flex justify-between items-center h-16 max-w-[1200px] mx-auto px-margin-mobile md:px-0">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo-1.png" alt="Logo" className="h-10 w-auto" />
          <span className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md font-bold text-primary">Moebelmontage-Leipzig</span>
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

        <a
          href="https://wa.me/49123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#1DA851] transition-colors scale-98 active:opacity-80 shrink-0"
        >
          <FaWhatsapp className="text-xl" />
          <span>Whatsapp schreiben</span>
        </a>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-primary"
          onClick={() => setMenuOpen(true)}
          aria-label="Menü öffnen"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:w-80 bg-surface z-50 flex flex-col shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between h-16 px-margin-mobile border-b border-outline-variant">
                <span className="font-headline-sm text-headline-sm font-bold text-primary">Menü</span>
                <button
                  className="flex items-center justify-center w-10 h-10 text-primary"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Menü schließen"
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-1 px-margin-mobile py-6">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`px-4 py-4 rounded-lg font-body-md text-body-md transition-colors ${
                        isActive
                          ? "bg-primary-container text-on-primary-container font-bold"
                          : "text-secondary hover:bg-surface-container hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="px-margin-mobile pb-8">
                <a
                  href="https://wa.me/49123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-[#1DA851] transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Whatsapp schreiben</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
