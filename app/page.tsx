"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LogoSlider from "@/components/LogoSlider";
import SlideIn from "@/components/SlideIn";
import RelatedTopics from "@/components/RelatedTopics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const inputs = document.querySelectorAll("input, select, textarea");
    const handleFocus = (e: Event) => {
      const input = e.target as HTMLElement;
      input.parentElement?.classList.add("text-primary");
    };
    const handleBlur = (e: Event) => {
      const input = e.target as HTMLElement;
      input.parentElement?.classList.remove("text-primary");
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        if (targetId === "#" || !targetId) return;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Professional furniture assembly"
              className="w-full h-full object-cover"
              src="/screen.webp"
            />
            <div className="absolute inset-0 bg-primary/40" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-0 w-full text-white">
            <div className="max-w-3xl">
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6 leading-tight">
                Möbelmontage in Leipzig:{" "}
                <span className="block">Professionell, Schnell und mit Festpreisgarantie!</span>
              </h1>
              <p className="font-body-lg text-body-lg mb-8 opacity-90 max-w-xl">
                Mit 11 Jahren Erfahrung und 7 Tagen die Woche erreichbar – Ihr zuverlässiger Partner für Möbelmontage in Leipzig und Umgebung.
              </p>
              <Link href="/kontakt" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container transition-transform active:scale-95 shadow-lg">
                Kostenloses Angebot
              </Link>
            </div>
          </div>
        </section>

        <LogoSlider />
        <section className="bg-primary py-6">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0 flex flex-col md:flex-row justify-between gap-gutter">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-primary text-3xl">verified</span>
              <span className="font-headline-md text-headline-md text-on-primary">50+ km Auch über</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-primary text-3xl">payments</span>
              <span className="font-headline-md text-headline-md text-on-primary">Festpreisgarantie</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-primary text-3xl">support_agent</span>
              <span className="font-headline-md text-headline-md text-on-primary">7/24 Erreichbar</span>
            </div>
          </div>
        </section>

        <section id="leistungen" className="py-24 bg-surface">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Unsere Leistungen</h2>
              <p className="text-secondary max-w-2xl mx-auto">Präzise Lösungen für jede Art von Möbelmontage.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              <SlideIn direction="left" delay={0} className="md:col-span-2 md:row-span-2">
                <Link href="/montage" className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
                  <img
                    alt="IKEA Montage"
                    className="w-full h-64 object-cover mb-8"
                    src="/IKEA.webp"
                  />
                  <div className="mt-auto">
                    <span className="bg-surface-container text-primary font-bold px-3 py-1 text-sm rounded mb-4 inline-block">Beliebter Service</span>
                    <h3 className="font-headline-lg text-headline-lg mb-4">IKEA Montage</h3>
                    <p className="text-secondary mb-6">Schnelle und einwandfreie Montage aller IKEA Möbel – von PAX Schränken bis zu kompletten Systemen.</p>
                    <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Details ansehen <span className="material-symbols-outlined">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </SlideIn>
              <SlideIn direction="up" delay={0.1} className="md:col-span-2">
                <Link href="/kitchen" className="bg-white border border-outline-variant p-8 flex items-center gap-8 group hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                  <div className="flex-1">
                    <h3 className="font-headline-md text-headline-md mb-2">Küchenmontage</h3>
                    <p className="text-secondary text-sm">Montage aller Küchenelemente und Einbau von Elektrogeräten.</p>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      alt="Küche"
                      className="w-full h-full object-cover rounded shadow-sm"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY-Qh5a4-896u0f9Azl3-b5DFC0J9SEV4XLud1lgiSxThQmMM_dxWw9xltPMJEEkyg-kJH50RUD6DMCLCxHzGdXSvpQ33lQkU3hzahO4AduxLNUaowGzyswrZxP_UOotUI1lZhDwFym6YR2WIUZZtB0KV7wz5bs38T-DJaYgGh1GzMYFb59dnDY7IkLiudEoYh8Ju1oN-amrJy-CccDGIoNIe4s4Va097xxLK64SwCeHNtB9-r0lkhDdCEaySp-6NenP-J28iRmI8"
                    />
                  </div>
                </Link>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <Link href="/office" className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 h-full cursor-pointer block">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">business_center</span>
                  <h3 className="font-headline-md text-headline-md mb-2">Büromöbel</h3>
                  <p className="text-secondary text-sm">Professionelle Montage für effiziente Arbeitsplätze.</p>
                </Link>
              </SlideIn>
              <SlideIn direction="up" delay={0.3}>
                <Link href="/bedroom" className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 h-full cursor-pointer block">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">dresser</span>
                  <h3 className="font-headline-md text-headline-md mb-2">Schränke &amp; Garderoben</h3>
                  <p className="text-secondary text-sm">Sichere und ausgewogene Montage von Stauraumsystemen.</p>
                </Link>
              </SlideIn>
              <SlideIn direction="up" delay={0.4} className="md:col-span-4">
                <Link href="/services" className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 h-full cursor-pointer block">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">build</span>
                  <h3 className="font-headline-md text-headline-md mb-2">Sonstige Dienstleistungen</h3>
                  <p className="text-secondary text-sm">Darüber hinaus übernehmen wir auch die Montage aller anderen Möbelstücke</p>
                </Link>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="bg-primary py-12 text-white">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">task_alt</span>
                <p className="font-headline-md text-headline-md">1000+</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Erfolgreiche Projekte (seit 2024)</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">price_check</span>
                <p className="font-headline-md text-headline-md">100%</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Festpreisgarantie</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">security</span>
                <p className="font-headline-md text-headline-md">Versichert</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Service (Haftpflichtversichert)</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">bolt</span>
                <p className="font-headline-md text-headline-md">2 Stunden</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Schnelle Antwortzeit</p>
              </div>
            </div>
          </div>
        </section>

        <RelatedTopics />

        <section className="py-24 bg-white border-t border-outline-variant">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Unsere Servicegebiete</h2>
              <p className="text-secondary max-w-2xl mx-auto">Mit unserem Zentrum in Leipzig bieten wir professionelle Montage in einem großen Netzwerk an.</p>
            </div>
            <SlideIn direction="up" delay={0} className="mb-12 flex justify-center">
              <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-outline-variant shadow-lg bg-surface-container-low p-2 md:p-4">
                <img
                  src="/map.webp"
                  alt="Karte der Servicegebiete Leipzig und Umgebung"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </SlideIn>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <SlideIn direction="left" delay={0}>
                <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors w-[165px]">
                  <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                  <span className="font-bold text-primary text-center">Leipzig (Zentrum)</span>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.05}>
                <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors w-[165px]">
                  <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                  <span className="font-bold text-primary text-center">Halle (Saale)</span>
                </div>
              </SlideIn>

              <SlideIn direction="right" delay={0.15}>
                <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors w-[165px]">
                  <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                  <span className="font-bold text-primary text-center">Jena</span>
                </div>
              </SlideIn>
              <SlideIn direction="left" delay={0.2}>
                <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors w-[165px]">
                  <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                  <span className="font-bold text-primary text-center">Naumburg</span>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.25}>
                <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors w-[165px]">
                  <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                  <span className="font-bold text-primary text-center">Gera</span>
                </div>
              </SlideIn>
            </div>
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-primary text-white p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center gap-8">
                <div className="bg-white/10 p-4 rounded-full">
                  <span className="material-symbols-outlined text-5xl">near_me</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2 text-primary-fixed">Regionale Nähe: Schnelle Termine und persönlicher Support</h3>
                  <p className="font-body-lg opacity-90">Dank unserer regionalen Nähe erreichen wir Sie schnell und erleichtern Ihnen den Möbelaufbau mit persönlicher Unterstützung.</p>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <img
                alt="Leipzig Expertise"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRY9gdi7YIw09ZYa1tO5askZ6SGh0K7CIRtmCpAr2UF5VKaCmuUSoUt1fRUIA4i-ntqrjIZbzR_VdkrM0DRTMXUWzazgeXbwpXzCIsrIVI0CTxIEAAknBrvQJY31Ag3xNOi5w6KyDrXxhs5fdPonJxd3b3J5kmW7dp6djC7FzLFC32Tr_fyNx-u7KMZoo37iMyWLDqX6dryVNu-QwWZEnmNZ5nGDnanZihvCHpetzxTOaKVuRBR7AicOeVxKnxcif30Lj3WvW54qc"
              />
              <SlideIn direction="right" delay={0.4}>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded shadow-2xl hidden md:block">
                  <p className="font-headline-xl text-headline-xl">50km +</p>
                  <p className="font-label-caps text-label-caps opacity-80 uppercase">Auch über</p>
                </div>
              </SlideIn>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Leipziger Lokalstärke und deutsche Präzision</h2>
              <p className="font-body-lg text-body-lg text-secondary mb-6 leading-relaxed">
                Als Leipzig Montage Profis sehen wir die Möbelmontage nicht nur als Zusammenfügen von Teilen, sondern als Gestaltung Ihres Wohnraums. Mit unserem in Leipzig verwurzelten Team bringen wir professionelle Handwerkskunst und technisches Know-how in jede Ecke der Region.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Montagegarantie mit millimetergenauer Präzision</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Versicherte und zertifizierte Teamarbeit</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Service in Leipzig und 50 km Umkreis</span>
                </li>
              </ul>
              <SlideIn direction="right" delay={0.2}>
                <div className="p-6 bg-white border border-outline-variant border-l-4 border-l-primary">
                  <p className="italic text-secondary">&quot;Für uns ist jede Schraube ein Teil Ihres Wohnkomforts.&quot;</p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
            <SlideIn direction="up" delay={0}>
              <div className="bg-white border border-outline-variant grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 md:p-16 bg-primary text-white">
                  <h2 className="font-headline-lg text-headline-lg mb-6">Kostenloses Angebot</h2>
                  <p className="font-body-lg text-body-lg mb-12 opacity-80">Teilen Sie uns die Details Ihres Projekts mit – innerhalb einer Stunde erhalten Sie unser Festpreisangebot.</p>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-3xl">call</span>
                      <div>
                        <p className="font-label-caps uppercase text-sm opacity-60">Schnelle Kontaktaufnahme</p>
                        <p className="text-xl font-bold">+49 (0) 123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-3xl">mail</span>
                      <div>
                        <p className="font-label-caps uppercase text-sm opacity-60">E-Mail</p>
                        <p className="text-xl font-bold">info@leipzig-montage.de</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-3xl">location_on</span>
                      <div>
                        <p className="font-label-caps uppercase text-sm opacity-60">Hauptsitz</p>
                        <p className="text-xl font-bold">Leipzig, Deutschland</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-12 md:p-16">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-caps text-label-caps text-secondary uppercase">Vor- und Nachname</label>
                        <input className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none h-12" placeholder="Ihr Name" type="text" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-caps text-label-caps text-secondary uppercase">E-Mail</label>
                        <input className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none h-12" placeholder="Ihre E-Mail-Adresse" type="email" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-label-caps text-secondary uppercase">Serviceart</label>
                      <select className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none h-12">
                        <option>Möbelmontage</option>
                        <option>Küchenmontage</option>
                        <option>Büro &amp; Gewerbe</option>
                        <option>Demontage &amp; Montage</option>
                        <option>Reparatur &amp; Einstellung</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-label-caps text-secondary uppercase">Ihre Nachricht</label>
                      <textarea className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none" placeholder="Möbelanzahl, Modellname oder besondere Wünsche..." rows={4} />
                    </div>
                    <a
                      className="w-full bg-[#25D366] text-white h-14 font-bold hover:brightness-110 transition-all uppercase tracking-widest flex items-center justify-center gap-3"
                      href="https://wa.me/49123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined">chat</span>
                      Jetzt per WhatsApp fragen
                    </a>
                  </form>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>
      </main>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Was sagen unsere Kunden?</h2>
            <p className="text-secondary">Erfahrungen unserer Kunden mit unserem Möbelmontageservice in Leipzig.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideIn direction="left" delay={0}>
              <div className="bg-surface-container-low p-8 border border-outline-variant rounded-lg h-full flex flex-col">
                <div className="flex text-primary mb-4">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="italic text-on-surface-variant mb-6 flex-1">&quot;Ich habe Hilfe bei der Montage meines IKEA Pax Schranks bekommen. Sehr professionelles Team, pünktlich gekommen und die Montage war einwandfrei. Danke!&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">A</div>
                  <div>
                    <p className="font-bold text-primary">Ahmet Y.</p>
                    <p className="text-sm text-secondary">Leipzig Zentrum</p>
                  </div>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-surface-container-low p-8 border border-outline-variant rounded-lg h-full flex flex-col">
                <div className="flex text-primary mb-4">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="italic text-on-surface-variant mb-6 flex-1">&quot;Sie haben die gesamte Küche in meiner neuen Wohnung montiert. Die Festpreisgarantie ist großartig, keine Überraschungen hinterher. Sehr empfehlenswert.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">M</div>
                  <div>
                    <p className="font-bold text-primary">Merve S.</p>
                    <p className="text-sm text-secondary">Grünau</p>
                  </div>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="bg-surface-container-low p-8 border border-outline-variant rounded-lg h-full flex flex-col">
                <div className="flex text-primary mb-4">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="italic text-on-surface-variant mb-6 flex-1">&quot;Die Montage unserer Büromöbel war sehr schnell. Sie arbeiten wirklich sauber und gewissenhaft. Preis-Leistung 10/10.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">C</div>
                  <div>
                    <p className="font-bold text-primary">Can K.</p>
                    <p className="text-sm text-secondary">Connewitz</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
