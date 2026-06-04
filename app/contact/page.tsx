"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function StepperDot({
  step,
  label,
  currentStep,
  onGoToStep,
}: {
  step: number;
  label: string;
  currentStep: number;
  onGoToStep: (step: number) => void;
}) {
  const isDone = step < currentStep;
  const isActive = step === currentStep;

  return (
    <div
      className="flex flex-col items-center gap-2 group cursor-pointer"
      onClick={() => onGoToStep(step)}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDone || isActive
            ? "bg-primary text-on-primary"
            : "bg-surface-container-highest text-secondary"
        }`}
      >
        {isDone ? (
          <span className="material-symbols-outlined">check</span>
        ) : (
          step
        )}
      </div>
      <span
        className={`font-label-caps ${
          isDone || isActive ? "text-primary" : "text-secondary"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const [calculating, setCalculating] = useState(false);
  const [dismantle, setDismantle] = useState<"yes" | "no" | null>(null);

  const goToStep = (step: number) => {
    setCurrentStep(step);
    setTimeout(() => {
      document.getElementById("ai-quote-form")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);
  };

  const calculateQuote = () => {
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      goToStep(3);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <header className="pt-32 pb-16 px-margin-mobile md:px-0 max-w-[1200px] mx-auto text-center">
        <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full font-label-caps mb-4">
          INTELLIGENTES PREISSYSTEM
        </span>
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
          Schnelles Angebot &amp; Kontakt
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
          Erhalten Sie mit unserem KI-gestützten System in Sekunden eine Preissschätzung. Der zuverlässigste Partner für Möbelmontage in Leipzig.
        </p>
      </header>

      <main className="pb-24 px-margin-mobile md:px-0 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <SlideIn direction="left" delay={0} className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-10 ai-glow">
            <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
              <StepperDot step={1} label="ANALYSE" currentStep={currentStep} onGoToStep={goToStep} />
              <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6" />
              <StepperDot step={2} label="DETAILS" currentStep={currentStep} onGoToStep={goToStep} />
              <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6" />
              <StepperDot step={3} label="SCHÄTZUNG" currentStep={currentStep} onGoToStep={goToStep} />
            </div>

            <form
              id="ai-quote-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Ihre Angebotsanfrage wurde erfolgreich empfangen! Unsere Berater werden sich innerhalb von 2 Stunden bei Ihnen melden."
                );
              }}
            >
              {currentStep === 1 && (
                <div className="step-transition" id="step-1">
                  <h2 className="font-headline-md text-headline-md text-primary mb-4 text-center">
                    Beschreiben Sie Ihre Möbel
                  </h2>
                  <p className="text-secondary text-center mb-8">
                    Laden Sie Produktfotos hoch oder geben Sie IKEA Produktcodes ein.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center hover:border-primary transition-colors cursor-pointer bg-surface-container-low group">
                      <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary mb-4">
                        cloud_upload
                      </span>
                      <p className="font-label-caps text-secondary text-center">FOTOS HOCHLADEN</p>
                      <p className="text-xs text-outline mt-2">JPG, PNG oder PDF</p>
                      <input className="hidden" type="file" />
                    </div>
                    <div className="space-y-4">
                      <div>
                          <label className="font-label-caps text-secondary mb-2 block">
                            IKEA PRODUKTCODE / LINK
                          </label>
                          <input
                            className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                            placeholder="z.B. 802.130.74 oder Link"
                            type="text"
                          />
                      </div>
                      <div>
                        <label className="font-label-caps text-secondary mb-2 block">
                            PLANUNGSCODE (PAX/METOD)
                          </label>
                          <input
                            className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                            placeholder="z.B. LXZY92"
                            type="text"
                          />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex justify-end">
                    <button
                      className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-caps hover:bg-primary-container flex items-center gap-2 group"
                      type="button"
                      onClick={() => goToStep(2)}
                    >
                      NÄCHSTER SCHRITT
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="step-transition" id="step-2">
                  <h2 className="font-headline-md text-headline-md text-primary mb-8 text-center">
                    Legen Sie die Servicedetails fest
                  </h2>
                  <div className="space-y-6 max-w-xl mx-auto">
                    <div className="flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg">
                      <div>
                        <p className="font-body-md font-bold text-primary">
                          Ist ein Abbau alter Möbel erforderlich?
                        </p>
                        <p className="text-sm text-secondary">
                          Wir können Ihre vorhandenen Möbel sicher demontieren.
                        </p>
                      </div>
                      <div className="flex bg-surface-container rounded-full p-1">
                        <button
                          className={`px-4 py-1 rounded-full text-sm font-bold ${
                            dismantle === "yes"
                              ? "bg-primary text-on-primary"
                              : "text-secondary"
                          }`}
                          type="button"
                          onClick={() => setDismantle("yes")}
                        >
                          Ja
                        </button>
                        <button
                          className={`px-4 py-1 rounded-full text-sm font-bold ${
                            dismantle === "no"
                              ? "bg-primary text-on-primary"
                              : "text-secondary"
                          }`}
                          type="button"
                          onClick={() => setDismantle("no")}
                        >
                          Nein
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-label-caps text-secondary mb-2 block">
                          ABHOLADRESSE (OPTIONAL)
                        </label>
                        <input
                          className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                          placeholder="Geschäft oder Lager"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="font-label-caps text-secondary mb-2 block">
                          LIEFERADRESSE
                        </label>
                        <input
                          className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                          placeholder="Ort der Montage"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-label-caps text-secondary mb-2 block">STOCKWERK</label>
                      <select className="w-full bg-white border border-outline-variant p-4 rounded-lg appearance-none">
                        <option>EG (Erdgeschoss)</option>
                        <option>1. OG</option>
                        <option>2. OG</option>
                        <option>3. OG</option>
                        <option>Höher (mit Aufzug)</option>
                        <option>Höher (ohne Aufzug)</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-10 flex justify-between">
                    <button
                      className="text-primary font-label-caps flex items-center gap-2"
                      type="button"
                      onClick={() => goToStep(1)}
                    >
                      <span className="material-symbols-outlined">arrow_back</span>
                      ZURÜCK
                    </button>
                    <button
                      className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-caps hover:bg-primary-container flex items-center gap-2 group"
                      type="button"
                      onClick={calculateQuote}
                      disabled={calculating}
                    >
                      {calculating ? (
                        <>
                          <span className="material-symbols-outlined animate-spin">refresh</span>
                          ANALYSE LÄUFT...
                        </>
                      ) : (
                        <>
                          BERECHNEN &amp; SCHÄTZUNG
                          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                            auto_awesome
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="step-transition" id="step-3">
                  <h2 className="font-headline-md text-headline-md text-primary mb-8 text-center">
                    Ihre Individuelle Preissschätzung
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-primary-container text-on-primary-container p-8 rounded-xl relative overflow-hidden">
                      <div className="relative z-10">
                        <p className="font-label-caps opacity-80 mb-2">UNSER GESCHÄTZTER PREIS</p>
                        <div className="text-4xl font-bold mb-4">€185,00*</div>
                        <p className="text-sm opacity-70 italic">
                          *Das endgültige Angebot wird nach Prüfung übermittelt.
                        </p>
                      </div>
                      <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">
                        verified
                      </span>
                    </div>
                    <div className="border border-outline-variant p-8 rounded-xl bg-white">
                      <p className="font-label-caps text-secondary mb-4">MARKTVERGLEICH</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-secondary font-body-md">Taskrabbit Durchschnitt:</span>
                        <span className="font-bold text-secondary line-through">€218,00</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold bg-secondary-container p-3 rounded-lg">
                        <span className="material-symbols-outlined">check_circle</span>
                          <span>Wir sind 15 % günstiger.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-high p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 mb-12">
                    <div className="flex-1">
                      <h3 className="font-headline-md text-primary mb-2">Letzter Schritt: Bestätigung</h3>
                      <p className="text-secondary">
                        Übermitteln Sie diese Daten an unsere Experten und wir erstellen innerhalb von 2 Stunden ein verbindliches Angebot.
                      </p>
                    </div>
                    <button
                      className="w-full md:w-auto bg-primary text-on-primary px-8 py-5 rounded-lg font-label-caps hover:bg-primary-container shadow-lg shadow-primary-container/20 whitespace-nowrap active:scale-95 transition-all"
                      type="submit"
                    >
                      FORMULAR AUSFÜLLEN, VERBINDLICHES ANGEBOT IN 2 STD.
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      className="text-secondary font-label-caps hover:text-primary"
                      type="button"
                      onClick={() => goToStep(2)}
                    >
                      Informationen bearbeiten
                    </button>
                  </div>
                </div>
              )}
            </form>

          </SlideIn>
          <div className="lg:col-span-4 space-y-6">
            <SlideIn direction="right" delay={0.1}>
            <div className="bg-white border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-md text-primary mb-6">Warum uns wählen?</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <div>
                    <p className="font-bold text-primary">Versicherter Service</p>
                    <p className="text-sm text-secondary">
                      Alle Montagearbeiten sind bei der Allianz versichert.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">timer</span>
                  <div>
                    <p className="font-bold text-primary">                    24h Express-Service</p>
                    <p className="text-sm text-secondary">
                      Termingarantie innerhalb von 24 Stunden in Leipzig.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">construction</span>
                  <div>
                    <p className="font-bold text-primary">Expertenteam</p>
                    <p className="text-sm text-secondary">
                      Nur auf Möbelmontage spezialisierte Handwerker.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden aspect-video group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Professioneller Möbelmontage-Experte"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7VTiFPMCyF0hhUZm01cTPD1AfYqvhe7Kfy-DD2bDocS4_RP0drt30VcxnbL7LfKvnRpCna2OXm2A_3bH8vcSHRqhq1W4rpO471U339S-5h92gzurmfJ-Tf03yg9Cpy6T2wDXXJvjyYQHwL5EkklS40UlDuWlH_ooOboWziqpi7cSE2liX44bvaepcMVDHBY38VmXvj50ffs_gJyx2Za_8WvvughIniKaMcRBwoEgmEMHgKlixMTaQn_tA6tZvMKhbd7UctteFv4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white font-bold">
                  Über 5.000 erfolgreiche Montageprojekte in ganz Leipzig.
                </p>
            </div>
            </div>
            </SlideIn>
          </div>
        </div>
      </main>

      <Footer />

      <a
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group"
        href="https://wa.me/49123456789"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="font-bold">WhatsApp – Jetzt Fragen</span>
      </a>
    </>
  );
}
