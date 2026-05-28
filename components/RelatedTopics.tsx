"use client";

import { useState } from "react";
import SlideIn from "./SlideIn";

const tabs = [
  { id: "office", label: "Office", icon: "business" },
  { id: "kitchen", label: "Kitchen", icon: "countertops" },
  { id: "bedroom", label: "Bedroom", icon: "bed" },
  { id: "about", label: "Über Uns", icon: "info" },
];

const content: Record<string, { title: string; desc: string; items: { icon: string; label: string; text: string }[] }> = {
  office: {
    title: "Professionelle Büromontage",
    desc: "Ergonomische und effiziente Arbeitsplatzlösungen für Ihr Unternehmen. Wir montieren sämtliche Büromöbel – von einzelnen Schreibtischen bis zur kompletten Büroausstattung.",
    items: [
      { icon: "desk", label: "Schreibtische", text: "Steh-Sitz-Schreibtische, Ecklösungen und höhenverstellbare Arbeitsplätze." },
      { icon: "shelves", label: "Regalsysteme", text: "Aktenregale, Archivlösungen und modulare Aufbewahrungssysteme." },
      { icon: "meeting_room", label: "Konferenzräume", text: "Komplette Bestuhlung, Tischsysteme und Präsentationstechnik-Montage." },
    ],
  },
  kitchen: {
    title: "Professionelle Küchenmontage",
    desc: "Ob IKEA Metod, Küchenquelle, Höffner oder Maßanfertigung – wir montieren Ihre Küche fachgerecht inklusive Elektrogeräte, Armaturen und Wasseranschluss.",
    items: [
      { icon: "cabinetry", label: "Küchenschränke", text: "Oberschränke, Unterschränke und Hochschränke millimetergenau montiert." },
      { icon: "countertops", label: "Arbeitsplatten", text: "Zuschnitt, Montage und Versiegelung von Arbeitsplatten aus Holz, Stein und Quarz." },
      { icon: "plumbing", label: "Geräte & Anschlüsse", text: "Geschirrspüler, Herd, Kühlschrank und Dunstabzug inklusive Sanitäranschluss." },
    ],
  },
  bedroom: {
    title: "Professionelle Schlafzimmermontage",
    desc: "Vom Kleiderschrank über das Bett bis zur Kommode – wir montieren Ihr gesamtes Schlafzimmer mit höchster Präzision. IKEA PAX, MALM, BRIMNES und alle anderen Serien sind unsere Spezialität.",
    items: [
      { icon: "bed", label: "Betten", text: "Einzel-, Doppel- und Polsterbetten inklusive Lattenrost und Matratze." },
      { icon: "closet", label: "Kleiderschränke", text: "IKEA PAX Systeme, Drehtüren- und Schiebetürenschränke fachgerecht montiert." },
      { icon: "dresser", label: "Kommoden & Sideboards", text: "Kommoden, Nachttische und Sideboards aller Marken und Stilrichtungen." },
    ],
  },
  about: {
    title: "Über Uns",
    desc: "Von der ersten Beratung bis zur endgültigen Montage bieten wir einen kompletten Rundum-Service unter einem Dach – einschließlich maßgeschneiderter Beratung, detaillierter Planung, hochwertiger Einrichtung und professioneller Ausführung.",
    items: [
      { icon: "history", label: "Erfahrung", text: "11+ Jahre. Ein Jahrzehnt meisterhafter Montageerfahrung in Leipzig und Umgebung." },
      { icon: "support_agent", label: "Zuverlässigkeit", text: "7/24 Support. Termintreue ist unser höchstes Gebot." },
      { icon: "verified", label: "Qualität", text: "Deutsche Präzision. Höchste Standards bei jedem Projekt." },
    ],
  },
};

export default function RelatedTopics() {
  const [activeTab, setActiveTab] = useState("office");
  const current = content[activeTab];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Verwandte Themen</h2>
          <p className="text-secondary max-w-2xl mx-auto">Entdecken Sie unsere Servicekategorien und finden Sie die passende Lösung für Ihre Bedürfnisse.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-outline-variant rounded-xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-secondary hover:text-primary hover:bg-surface-container"
                }`}
              >
                <span className="material-symbols-outlined text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <SlideIn direction="up" delay={0} key={activeTab}>
          <div className="bg-white border border-outline-variant rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-4">{current.title}</h3>
                <p className="text-secondary leading-relaxed">{current.desc}</p>
              </div>
              <div className="flex gap-3 justify-start md:justify-end">
                <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">Versicherung inklusive</span>
                <span className="px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full">24h Express</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {current.items.map((item, i) => (
                <div key={i} className="bg-surface-container-lowest p-8 tonal-elevation text-center rounded-xl border border-outline-variant">
                  <div className="mb-4 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">{item.label}</h4>
                  <p className="text-secondary text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
