"use client";

import Link from "next/link";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";

export default function Office() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <img
              alt="Office furniture assembly"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDH4tnfBGrifLs5vffyT-3V6NgZbicLEyR-kqomeY7dfymRHY1Ilr4iClX62Q2GfHm8ADfJWm5Dk-sn2Sw3lWlXA-uWuJPo-PQB-6HjouXVda1vpqxnMyDWZ02JFdRgpv3lM2Vjg5ap27I9x42w3ab4Bj_qihh1dtw5Fl2GHIa61hfth_LXBh_XxGsXMNmBfcuieycEYRJEju1rvNdEgSWiLl2y3pkymt61F6CTS2ofIryy97OsKZP1D8emYkOqdJmDBTZfXXWLzM"
            />
          </div>
          <SlideIn direction="left" delay={0} className="relative z-20 max-w-[1200px] mx-auto px-gutter w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-caps text-label-caps uppercase tracking-wider mb-4 block text-primary-fixed">Office Montage</span>
              <h1 className="font-headline-xl text-headline-xl mb-6">Professionelle Büromontage</h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-90 border-l-4 border-primary-fixed pl-6">
                Ergonomische und effiziente Arbeitsplatzlösungen für Ihr Unternehmen.
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
                    alt="Office furniture montage"
                    className="relative z-10 w-full h-auto rounded-lg shadow-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDH4tnfBGrifLs5vffyT-3V6NgZbicLEyR-kqomeY7dfymRHY1Ilr4iClX62Q2GfHm8ADfJWm5Dk-sn2Sw3lWlXA-uWuJPo-PQB-6HjouXVda1vpqxnMyDWZ02JFdRgpv3lM2Vjg5ap27I9x42w3ab4Bj_qihh1dtw5Fl2GHIa61hfth_LXBh_XxGsXMNmBfcuieycEYRJEju1rvNdEgSWiLl2y3pkymt61F6CTS2ofIryy97OsKZP1D8emYkOqdJmDBTZfXXWLzM"
                  />
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.1}>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Büromöbel Montage</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                  Wir montieren sämtliche Büromöbel – von einzelnen Schreibtischen bis zur kompletten
                  Büroausstattung. Unsere Expertise umfasst ergonomische Arbeitsplätze,
                  Besprechungsräume und Empfangstheken.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">Insurance Included</span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">24h Express</span>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-gutter text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">Unsere Büro-Dienstleistungen</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid md:grid-cols-3 gap-8">
              <SlideIn direction="left" delay={0}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">desk</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Schreibtische</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Steh-Sitz-Schreibtische, Ecklösungen und höhenverstellbare Arbeitsplätze.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">shelves</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Regalsysteme</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Aktenregale, Archivlösungen und modulare Aufbewahrungssysteme.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="bg-surface-container-lowest p-10 tonal-elevation text-center">
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl">meeting_room</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Konferenzräume</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Komplette Bestuhlung, Tischsysteme und Präsentationstechnik-Montage.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-[1200px] mx-auto px-gutter text-center">
            <h2 className="font-headline-xl text-headline-xl mb-6">Bereit für Ihr Büro-Projekt?</h2>
            <p className="font-body-lg text-body-lg mb-10 opacity-80 max-w-xl mx-auto">
              Lassen Sie uns gemeinsam Ihren perfekten Arbeitsplatz planen und montieren.
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
