"use client";

import Link from "next/link";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlashyCTA from "@/components/FlashyCTA";

export default function Montage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <img
              alt="Furniture assembly"
              className="w-full h-full object-cover"
              src="/montage.webp"
            />
          </div>
          <SlideIn direction="left" delay={0} className="relative z-20 max-w-[1200px] mx-auto px-gutter w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-caps text-label-caps uppercase tracking-wider mb-4 block text-primary-fixed">Möbelmontage</span>
              <h1 className="font-headline-xl text-headline-xl mb-6">Professionelle Möbelmontage</h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-90 border-l-4 border-primary-fixed pl-6">
                IKEA, POCO, Höffner – alle Marken. Präzise und professionelle Montage.
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
                    alt="Möbelmontage"
                    className="relative z-10 w-full h-auto rounded-lg shadow-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcl3B2nPeMAayfRbRxW_xWDr2tVPeGvE10rSxlvUyqNFenUcuo4MP-NAzT1kTPLQg1davmPpSLyS_hWL4xbI8qde_VmuDdkZ8g-9JcdSZzIxPf-5nwL6GnvpNwM7B3OqDA9xf9dMpqjuhPDdtHdvDt67F-p9fTOAgZ_d9X-L88oYPpC7qHcjS_1B3detbhoF9CJ22TrmcgsZsyJOlPQ_PQ-d10BEWL5NqMARejsxHIvMCc-tYsuVF8v7uOhWr7FKLzNCA4W12D0-Y"
                  />
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.1}>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Möbelmontage vom Profi</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                  Wir montieren sämtliche Möbel aller Marken – von IKEA über POCO bis Höffner.
                  Mit über 11 Jahren Erfahrung garantieren wir eine schnelle, saubere und
                  präzise Montage Ihrer Möbelstücke.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">Versicherung inklusive</span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">Alle Marken</span>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-gutter text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">Unsere Montage-Dienstleistungen</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid md:grid-cols-3 gap-8">
              <SlideIn direction="left" delay={0}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">chair</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">IKEA Spezialist</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    PAX, MALM, KALLAX, BESTÅ – wir kennen jedes IKEA System in- und auswendig.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">store</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Alle Marken</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    POCO, Höffner, XXXLutz, Segmüller – jedes Möbelhaus wird von uns montiert.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">handyman</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Wohnzimmer & Mehr</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Sofas, Regale, Vitrinen und Sideboards – alles wird bei uns fachgerecht montiert.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-[1200px] mx-auto px-gutter text-center">
            <h2 className="font-headline-xl text-headline-xl mb-6">Bereit für Ihre Möbelmontage?</h2>
            <p className="font-body-lg text-body-lg mb-10 opacity-80 max-w-xl mx-auto">
              Lassen Sie uns Ihre Möbel professionell montieren. Schnell, sauber und präzise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <FlashyCTA href="/kontakt" variant="primary">Get a Free Quote</FlashyCTA>
              <Link href="/galerie" className="border border-on-primary text-on-primary px-10 py-4 font-bold text-lg hover:bg-on-primary hover:text-primary transition-all">Our Work</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
