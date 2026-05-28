"use client";

import Link from "next/link";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {

  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <img
              alt="Craftsman at work"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqpFTBcV-usyf4s_QbOxst_Nsj8uRlwxJ-iNJt5HE0ubm5t4WG4UvTL4sSJv_q4Ojf126YxnYjcMiiEE8GD25fhjx2KYf_Mz_ZTkSjRpJdOk6BKaVFcKDzPSCXEDXYd6toamdolH89inCtsVY4yIRPMIhcDF-QIADmchviYcvhugv7XyNJ3qD_ybH7B_ji8SB1Ui5ihgVINo3Mr7KCYT-pC0ed_Vb4VMWA5Tx5i7V8wo9oRPSjr-TaJiMDE8nzN7UxID7py5Mg08"
            />
          </div>
          <SlideIn direction="left" delay={0} className="relative z-20 max-w-[1200px] mx-auto px-gutter w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-caps text-label-caps uppercase tracking-wider mb-4 block text-primary-fixed">
                Über Uns
              </span>
              <h1 className="font-headline-xl text-headline-xl md:text-headline-xl mb-6">
                Über Uns / About Us
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-90 border-l-4 border-primary-fixed pl-6">
                Handwerkliche Präzision trifft auf modernes Design.
              </p>
            </div>
          </SlideIn>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <SlideIn direction="left" delay={0} className="order-2 md:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary-fixed opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-lg" />
                  <img
                    alt="Möbelmontage Profi in Leipzig"
                    className="relative z-10 w-full h-auto rounded-lg shadow-xl"
                    src="/furniture_assembly.gif"
                  />
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.1} className="order-1 md:order-2">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
                  Unsere Philosophie
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                  From the first consultation to the final installation, we provide a complete
                  end-to-end service under one roof — including tailored guidance, detailed planning,
                  premium furnishings, and expert execution. With years of experience, dependable
                  service, and a strong dedication to quality, we design work and living spaces that
                  are both functional and inspiring. That&apos;s the standard our interior design
                  professionals are committed to delivering.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">
                    Insurance Included
                  </span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">
                    24h Express
                  </span>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-gutter text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">Unsere Kernwerte</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid md:grid-cols-3 gap-8">
              <SlideIn direction="left" delay={0}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">history</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Erfahrung</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">
                    11+ Years
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Ein Jahrzehnt meisterhafter Montageerfahrung in Leipzig und Umgebung. Wir kennen
                    jedes Scharnier und jede Schraube.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">
                      support_agent
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">
                    Zuverlässigkeit
                  </h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">
                    7/24 Support
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Termintreue ist unser höchstes Gebot. Wir sind für Sie da, wenn Sie uns brauchen –
                    rund um die Uhr einsatzbereit.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">verified</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Qualität</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">
                    German Precision
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Höchste Standards bei jedem Projekt. Wir montieren nicht nur, wir erschaffen
                    Perfektion bis ins kleinste Detail.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <SlideIn direction="up" delay={0}>
          <section className="py-24 bg-primary text-on-primary">
            <div className="max-w-[1200px] mx-auto px-gutter text-center">
              <h2 className="font-headline-xl text-headline-xl mb-6">Bereit für die Veränderung?</h2>
              <p className="font-body-lg text-body-lg mb-10 opacity-80 max-w-xl mx-auto">
                Ready to transform your space? Lassen Sie uns gemeinsam Ihr Projekt planen und mit
                höchster Präzision umsetzen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="bg-on-primary text-primary px-10 py-4 font-bold text-lg hover:bg-primary-fixed-dim transition-all">
                  Get a Free Quote
                </Link>
                <Link href="/" className="border border-on-primary text-on-primary px-10 py-4 font-bold text-lg hover:bg-on-primary hover:text-primary transition-all">
                  Unsere Services
                </Link>
              </div>
            </div>
          </section>
        </SlideIn>
      </main>

      <Footer />
    </>
  );
}
