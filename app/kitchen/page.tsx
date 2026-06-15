"use client";

import Link from "next/link";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Kitchen() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <img
              alt="Kitchen assembly"
              className="w-full h-full object-cover"
              src="/kitchen-1.webp"
            />
          </div>
          <SlideIn direction="left" delay={0} className="relative z-20 max-w-[1200px] mx-auto px-gutter w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-caps text-label-caps uppercase tracking-wider mb-4 block text-primary-fixed">Küchenmontage</span>
              <h1 className="font-headline-xl text-headline-xl mb-6">Professionelle Küchenmontage</h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-90 border-l-4 border-primary-fixed pl-6">
                Maßgefertigte Küchenmontage mit technischer Präzision und Leidenschaft.
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
                    alt="Kitchen montage"
                    className="relative z-10 w-full h-auto rounded-lg shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAImBwL9FKyAqPfrxOfz7PzUkOLRtOvmfT5GBDKEianTKVLWF_z-9CULc5f2ccmqt0JOymnpC1vhYt2kpzyr_MK1ZiYTEDAlaF57MIYh-tt5talo7bhD-sdWA3Nk_243Ct35h1JgDo2Ryx7WszKKe_TJGC6xpQoeIXqC3A27npIjIs6gWBSyUG8k0d28uWvAViQY_89DwVii83YmLKR3vQ2n-NEaS7pzgaGZZs6SW_3pTNtiaFn8EQbm-lZnNTsU76rDjJb1AP43qc"
                  />
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.1}>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Küchenmontage vom Profi</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                  Ob IKEA Metod, Küchenquelle, Höffner oder Maßanfertigung – wir montieren Ihre
                  Küche fachgerecht inklusive Elektrogeräte, Armaturen und Wasseranschluss.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">Insurance Included</span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">Komplettservice</span>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-gutter text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">Küchen-Dienstleistungen</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid md:grid-cols-3 gap-8">
              <SlideIn direction="left" delay={0}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">cabinetry</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Küchenschränke</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Oberschränke, Unterschränke und Hochschränke millimetergenau montiert.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">countertops</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Arbeitsplatten</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Zuschnitt, Montage und Versiegelung von Arbeitsplatten aus Holz, Stein und Quarz.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">plumbing</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Geräte & Anschlüsse</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Geschirrspüler, Herd, Kühlschrank und Dunstabzug inklusive Sanitäranschluss.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-[1200px] mx-auto px-gutter text-center">
            <h2 className="font-headline-xl text-headline-xl mb-6">Bereit für Ihre neue Küche?</h2>
            <p className="font-body-lg text-body-lg mb-10 opacity-80 max-w-xl mx-auto">
              Verwandeln Sie Ihre Küche in einen Ort, an dem Kochen Freude macht.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/kontakt" className="bg-on-primary text-primary px-10 py-4 font-bold text-lg hover:bg-primary-fixed-dim transition-all">Get a Free Quote</Link>
              <Link href="/" className="border border-on-primary text-on-primary px-10 py-4 font-bold text-lg hover:bg-on-primary hover:text-primary transition-all">Our Services</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
