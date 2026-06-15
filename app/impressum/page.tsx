import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <img
              alt="Impressum"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqpFTBcV-usyf4s_QbOxst_Nsj8uRlwxJ-iNJt5HE0ubm5t4WG4UvTL4sSJv_q4Ojf126YxnYjcMiiEE8GD25fhjx2KYf_Mz_ZTkSjRpJdOk6BKaVFcKDzPSCXEDXYd6toamdolH89inCtsVY4yIRPMIhcDF-QIADmchviYcvhugv7XyNJ3qD_ybH7B_ji8SB1Ui5ihgVINo3Mr7KCYT-pC0ed_Vb4VMWA5Tx5i7V8wo9oRPSjr-TaJiMDE8nzN7UxID7py5Mg08"
            />
          </div>
          <SlideIn direction="left" delay={0} className="relative z-20 max-w-[1200px] mx-auto px-gutter w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-caps text-label-caps uppercase tracking-wider mb-4 block text-primary-fixed">
                Rechtliches
              </span>
              <h1 className="font-headline-xl text-headline-xl mb-6">Impressum</h1>
            </div>
          </SlideIn>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <SlideIn direction="up" delay={0}>
              <div className="prose prose-lg max-w-3xl mx-auto text-on-surface-variant leading-relaxed space-y-8">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Angaben gemäß § 5 TMG</h2>
                  <p className="mb-2">
                    Möbelmontage Leipzig<br />
                    Inhaber: [Vorname Nachname]<br />
                    Musterstraße 123<br />
                    04109 Leipzig
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Kontakt</h3>
                  <p>
                    Telefon: +49 123 456789<br />
                    E-Mail: info@moebelmontage-leipzig.de
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Umsatzsteuer-ID</h3>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE [XXXXX]
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                  <p>
                    [Vorname Nachname]<br />
                    Musterstraße 123<br />
                    04109 Leipzig
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Streitschlichtung</h3>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> https://ec.europa.eu/consumers/odr/</a>.
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
