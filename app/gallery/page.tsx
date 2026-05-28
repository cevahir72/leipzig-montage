"use client";

import Link from "next/link";
import { useRef } from "react";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Gallery() {
  const paxRef = useRef<HTMLDivElement>(null);
  const kitchenRef = useRef<HTMLDivElement>(null);

  const handleSlider = (
    e: React.ChangeEvent<HTMLInputElement>,
    container: HTMLDivElement | null
  ) => {
    if (!container) return;
    const value = e.target.value;
    const overlay = container.querySelector<HTMLDivElement>(".overlay-image");
    const handle = container.querySelector<HTMLDivElement>(".slider-handle");
    if (overlay && handle) {
      overlay.style.width = value + "%";
      handle.style.left = value + "%";
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-gutter text-center">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4 block">
              Handwerkliche Präzision
            </span>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-6">Unsere Referenzen</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Erleben Sie die Transformation von unhandlichen Paketen zu perfekt montierten
              Wohnträumen. Unsere Expertise liegt im Detail.
            </p>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="mb-12 border-l-4 border-primary pl-6">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                Interaktive Transformation
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Schieben Sie den Regler, um das Ergebnis unserer Montage-Arbeit zu sehen.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-20">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">
                      IKEA PAX Kleiderschrank-System
                    </h3>
                    <p className="text-on-surface-variant">
                      Komplexe Korpus-Montage mit Schiebetüren und Inneneinrichtung.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span className="font-label-caps text-label-caps">PROFI-MONTAGE</span>
                  </div>
                </div>
                <SlideIn direction="left" delay={0}>
                  <div
                    className="comparison-slider rounded-xl shadow-lg group relative border border-outline-variant overflow-hidden"
                    id="slider-pax"
                    ref={paxRef}
                  >
                    <div className="label-before rounded-lg font-label-caps shadow-sm">DAVOR</div>
                    <div className="label-after rounded-lg font-label-caps shadow-sm">DANACH</div>
                    <div className="overlay-image" style={{ width: "50%" }}>
                      <img
                        alt="Before Montage"
                        src="/living-before.webp"
                      />
                    </div>
                    <img
                      alt="After Montage"
                      src="/living-after.webp"
                    />
                    <div className="slider-handle" style={{ left: "50%" }}>
                      <div className="slider-button">
                        <span className="material-symbols-outlined">unfold_more</span>
                      </div>
                    </div>
                    <input
                      className="slider-input"
                      defaultValue={50}
                      max="100"
                      min="0"
                      type="range"
                      onChange={(e) => handleSlider(e, paxRef.current)}
                    />
                  </div>
                </SlideIn>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Moderne Einbauküche
                    </h3>
                    <p className="text-on-surface-variant">
                      Vollständige Installation inklusive Elektrogeräte und Wasseranschluss.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    <span className="font-label-caps text-label-caps">KOMPLETTSERVICE</span>
                  </div>
                </div>
                <SlideIn direction="right" delay={0.1}>
                  <div
                    className="comparison-slider rounded-xl shadow-lg group relative border border-outline-variant overflow-hidden"
                    id="slider-kitchen"
                    ref={kitchenRef}
                  >
                    <div className="label-before rounded-lg font-label-caps shadow-sm">DAVOR</div>
                    <div className="label-after rounded-lg font-label-caps shadow-sm">DANACH</div>
                    <div className="overlay-image" style={{ width: "50%" }}>
                      <img
                        alt="Before Montage"
                        src="/kitchen-before.webp"
                      />
                    </div>
                    <img
                      alt="After Montage"
                      src="/kitchen-after.webp"
                    />
                    <div className="slider-handle" style={{ left: "50%" }}>
                      <div className="slider-button">
                        <span className="material-symbols-outlined">unfold_more</span>
                      </div>
                    </div>
                    <input
                      className="slider-input"
                      defaultValue={50}
                      max="100"
                      min="0"
                      type="range"
                      onChange={(e) => handleSlider(e, kitchenRef.current)}
                    />
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                Weitere Projekte
              </h2>
              <p className="text-on-surface-variant">
                Ein Einblick in unsere tägliche Präzisionsarbeit in Leipzig und Umgebung.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <SlideIn direction="left" delay={0} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl border border-outline-variant">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="A professional kitchen assembly scene featuring high-end dark wooden cabinetry and white marble countertops. The space is illuminated with warm under-cabinet LED lighting, creating a luxurious and functional mood. The focus is on the precision alignment of the cabinet doors and the clean, seamless installation of modern appliances in a bright, modern Leipzig apartment."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAImBwL9FKyAqPfrxOfz7PzUkOLRtOvmfT5GBDKEianTKVLWF_z-9CULc5f2ccmqt0JOymnpC1vhYt2kpzyr_MK1ZiYTEDAlaF57MIYh-tt5talo7bhD-sdWA3Nk_243Ct35h1JgDo2Ryx7WszKKe_TJGC6xpQoeIXqC3A27npIjIs6gWBSyUG8k0d28uWvAViQY_89DwVii83YmLKR3vQ2n-NEaS7pzgaGZZs6SW_3pTNtiaFn8EQbm-lZnNTsU76rDjJb1AP43qc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold">Maßküchen Installation</p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.1} className="relative group overflow-hidden rounded-xl border border-outline-variant aspect-square">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Detailed close-up shot of office furniture assembly showcasing ergonomic desk setups in a modern corporate workspace. The lighting is crisp and neutral, highlighting the technical perfection of the metal frame construction and cable management systems. The environment feels disciplined and organized, reflecting German engineering standards."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDH4tnfBGrifLs5vffyT-3V6NgZbicLEyR-kqomeY7dfymRHY1Ilr4iClX62Q2GfHm8ADfJWm5Dk-sn2Sw3lWlXA-uWuJPo-PQB-6HjouXVda1vpqxnMyDWZ02JFdRgpv3lM2Vjg5ap27I9x42w3ab4Bj_qihh1dtw5Fl2GHIa61hfth_LXBh_XxGsXMNmBfcuieycEYRJEju1rvNdEgSWiLl2y3pkymt61F6CTS2ofIryy97OsKZP1D8emYkOqdJmDBTZfXXWLzM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-bold text-sm">Büro-Montage</p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2} className="relative group overflow-hidden rounded-xl border border-outline-variant aspect-square">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="A minimalist living room featuring a perfectly assembled modular shelf system against a light grey wall. The lighting is soft and natural from a side window, emphasizing the clean lines and absence of visual clutter. The palette consists of white, natural oak wood, and navy accents, embodying a premium and calm residential atmosphere."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcl3B2nPeMAayfRbRxW_xWDr2tVPeGvE10rSxlvUyqNFenUcuo4MP-NAzT1kTPLQg1davmPpSLyS_hWL4xbI8qde_VmuDdkZ8g-9JcdSZzIxPf-5nwL6GnvpNwM7B3OqDA9xf9dMpqjuhPDdtHdvDt67F-p9fTOAgZ_d9X-L88oYPpC7qHcjS_1B3detbhoF9CJ22TrmcgsZsyJOlPQ_PQ-d10BEWL5NqMARejsxHIvMCc-tYsuVF8v7uOhWr7FKLzNCA4W12D0-Y"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-bold text-sm">Wohnzimmer-Systeme</p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.3} className="md:col-span-2 relative group overflow-hidden rounded-xl border border-outline-variant h-64">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Wide shot of a fully furnished bedroom with a large mirrored wardrobe and a neatly assembled bed frame. The room is styled with high-quality textiles in grey and white tones. The lighting is bright and airy, giving the impression of a professional transformation from a construction site to a cozy home. Precision is visible in every corner of the furniture layout."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZfyRwbNUCqTFgAQbphk9U6pq62XVbdQALjaBZX-FhgkUZ-og6RQUCp-7HSSM-jL7NT-qLQZwOLwLmKFD3LIPILD3snVsPoSJ6A3_SMCvRazqeu2MNwHHHodd0TL5PRm9d1RC1_1Mm9bvApCCt10kuCROy7WH1ImEYeZfPP-MXZo1pRKIK2eYJX6dELmUUdFOoeVATr3askEDLqHNIiBJn1AvfktAIpvY9CtltNyQ-ia757YIyqUcZDNKaOpjsUzhS-Fm5-OwJYU"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold">Schlafzimmer-Komplettierung</p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-on-primary">
          <div className="max-w-[1200px] mx-auto px-gutter text-center">
            <h2 className="font-headline-lg text-headline-lg mb-8">Bereit für Ihr nächstes Projekt?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <SlideIn direction="left" delay={0}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-on-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-4xl">schedule</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md">Pünktlich</h4>
                  <p className="opacity-80">
                    Wir halten uns strikt an vereinbarte Termine ohne Wenn und Aber.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.1}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-on-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-4xl">construction</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md">Präzise</h4>
                  <p className="opacity-80">
                    Jede Schraube sitzt perfekt. Wir arbeiten nach Hersteller-Vorgaben.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-on-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-4xl">shield</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md">Versichert</h4>
                  <p className="opacity-80">
                    Ihre Möbel sind bei uns in sicheren Händen. Vollständiger Schutz.
                  </p>
                </div>
              </SlideIn>
            </div>
            <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all shadow-xl">
              Kostenloses Angebot einholen
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
