"use client";

import Link from "next/link";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";

export default function Bedroom() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <img
              alt="Bedroom furniture assembly"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZfyRwbNUCqTFgAQbphk9U6pq62XVbdQALjaBZX-FhgkUZ-og6RQUCp-7HSSM-jL7NT-qLQZwOLwLmKFD3LIPILD3snVsPoSJ6A3_SMCvRazqeu2MNwHHHodd0TL5PRm9d1RC1_1Mm9bvApCCt10kuCROy7WH1ImEYeZfPP-MXZo1pRKIK2eYJX6dELmUUdFOoeVATr3askEDLqHNIiBJn1AvfktAIpvY9CtltNyQ-ia757YIyqUcZDNKaOpjsUzhS-Fm5-OwJYU"
            />
          </div>
          <SlideIn direction="left" delay={0} className="relative z-20 max-w-[1200px] mx-auto px-gutter w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-caps text-label-caps uppercase tracking-wider mb-4 block text-primary-fixed">Schlafzimmermontage</span>
              <h1 className="font-headline-xl text-headline-xl mb-6">Professionelle Schlafzimmermontage</h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-90 border-l-4 border-primary-fixed pl-6">
                Ihr Schlafzimmer – perfekt montiert für erholsame Nächte.
              </p>
            </div>
          </SlideIn>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <SlideIn direction="left" delay={0}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary-fixed opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-lg" />
                  <img
                    alt="Bedroom montage"
                    className="relative z-10 w-full h-auto rounded-lg shadow-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZfyRwbNUCqTFgAQbphk9U6pq62XVbdQALjaBZX-FhgkUZ-og6RQUCp-7HSSM-jL7NT-qLQZwOLwLmKFD3LIPILD3snVsPoSJ6A3_SMCvRazqeu2MNwHHHodd0TL5PRm9d1RC1_1Mm9bvApCCt10kuCROy7WH1ImEYeZfPP-MXZo1pRKIK2eYJX6dELmUUdFOoeVATr3askEDLqHNIiBJn1AvfktAIpvY9CtltNyQ-ia757YIyqUcZDNKaOpjsUzhS-Fm5-OwJYU"
                  />
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.1}>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Schlafzimmermöbel Montage</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                  Vom Kleiderschrank über das Bett bis zur Kommode – wir montieren Ihr gesamtes
                  Schlafzimmer mit höchster Präzision. IKEA PAX, MALM, BRIMNES und alle anderen
                  Serien sind unsere Spezialität.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">Insurance Included</span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">PAX Spezialisten</span>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-gutter text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">Schlafzimmer-Dienstleistungen</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid md:grid-cols-3 gap-8">
              <SlideIn direction="left" delay={0}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">bed</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Betten</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Einzel-, Doppel- und Polsterbetten inklusive Lattenrost und Matratze.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">closet</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Kleiderschränke</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    IKEA PAX Systeme, Drehtüren- und Schiebetürenschränke fachgerecht montiert.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">dresser</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Kommoden & Sideboards</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Kommoden, Nachttische und Sideboards aller Marken und Stilrichtungen.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-[1200px] mx-auto px-gutter text-center">
            <h2 className="font-headline-xl text-headline-xl mb-6">Bereit für Ihr Schlafzimmer-Projekt?</h2>
            <p className="font-body-lg text-body-lg mb-10 opacity-80 max-w-xl mx-auto">
              Verwandeln Sie Ihr Schlafzimmer in eine Wohlfühloase.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-on-primary text-primary px-10 py-4 font-bold text-lg hover:bg-primary-fixed-dim transition-all">Get a Free Quote</button>
              <button className="border border-on-primary text-on-primary px-10 py-4 font-bold text-lg hover:bg-on-primary hover:text-primary transition-all">Our Services</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-tertiary">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter py-12 max-w-[1200px] mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="text-headline-md font-headline-md text-on-tertiary mb-4">Leipzig Montage Profis</div>
            <p className="font-label-caps text-label-caps uppercase tracking-wider text-on-tertiary opacity-80">&copy; 2024 Leipzig Montage Profis. Präzision in jedem Handgriff.</p>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <a className="font-label-caps text-label-caps uppercase tracking-wider text-on-tertiary-container opacity-80 hover:opacity-100 transition-colors" href="#">Impressum</a>
            <a className="font-label-caps text-label-caps uppercase tracking-wider text-on-tertiary-container opacity-80 hover:opacity-100 transition-colors" href="#">Datenschutz</a>
            <a className="font-label-caps text-label-caps uppercase tracking-wider text-on-tertiary-container opacity-80 hover:opacity-100 transition-colors" href="#">AGB</a>
          </div>
        </div>
      </footer>
    </>
  );
}
