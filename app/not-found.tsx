import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-32 px-margin-mobile">
        <div className="text-center max-w-xl">
          <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full font-label-caps mb-6">
            404
          </span>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
            Seite nicht gefunden
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mb-10">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="bg-primary text-on-primary px-8 py-4 font-bold text-lg hover:opacity-90 transition-all">
              Zur Startseite
            </Link>
            <Link href="/kontakt" className="border border-outline-variant text-primary px-8 py-4 font-bold text-lg hover:bg-surface-container transition-all">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
