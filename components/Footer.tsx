import Link from "next/link";

const services = [
  { href: "/office", label: "Büro" },
  { href: "/kitchen", label: "Küche" },
  { href: "/bedroom", label: "Schlafzimmer" },
  { href: "/montage", label: "Möbelmontage" },
  { href: "/gallery", label: "Galerie" },
  { href: "/about", label: "Über Uns" },
  { href: "/contact", label: "Kontakt" },
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
              Musterstraße 123, 04109 Leipzig
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <a href="tel:+49123456789" className="hover:text-primary transition-colors">+49 123 456789</a>
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <a href="mailto:info@moebelmontage-leipzig.de" className="hover:text-primary transition-colors">info@moebelmontage-leipzig.de</a>
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
          <p className="text-on-surface-variant text-sm mt-6">
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
