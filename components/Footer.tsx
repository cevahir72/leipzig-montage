import Link from "next/link";

const services = [
  { href: "/buero", label: "Büro" },
  { href: "/kuche", label: "Küche" },
  { href: "/schlafzimmer", label: "Schlafzimmer" },
  { href: "/montage", label: "Möbelmontage" },
  { href: "/galerie", label: "Galerie" },
  { href: "/uberuns", label: "Über Uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 max-w-[1200px] mx-auto px-margin-mobile md:px-0">
        <div>
          <div className="font-headline-md text-headline-md font-bold text-primary mb-6">
            Moebelmontage-Leipzig
          </div>
          <div className="space-y-3 text-secondary">
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              Klingenstraße 30a, Plagwitz, 04229 Leipzig
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <a href="tel:+491773999476" className="hover:text-primary transition-colors">+49 177 3999476</a>
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <a href="mailto:info@möbelmontageleipzig.com" className="hover:text-primary transition-colors">info@möbelmontageleipzig.com</a>
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="Instagram">
              <span className="material-symbols-outlined text-2xl">photo_camera</span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="LinkedIn">
              <span className="material-symbols-outlined text-2xl">work</span>
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href="/impressum" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Datenschutz</Link>
          </div>
          <p className="text-on-surface-variant text-sm mt-4">
            &copy; 2024 Moebelmontage-Leipzig. Alle Rechte vorbehalten.
          </p>
        </div>
        <div>
          <p className="font-headline-md text-headline-md font-bold text-primary mb-6">Unsere Leistungen</p>
          <div className="flex flex-col gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-secondary hover:text-primary hover:underline transition-all"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
