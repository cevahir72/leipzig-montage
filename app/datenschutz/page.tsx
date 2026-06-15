import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <img
              alt="Datenschutz"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqpFTBcV-usyf4s_QbOxst_Nsj8uRlwxJ-iNJt5HE0ubm5t4WG4UvTL4sSJv_q4Ojf126YxnYjcMiiEE8GD25fhjx2KYf_Mz_ZTkSjRpJdOk6BKaVFcKDzPSCXEDXYd6toamdolH89inCtsVY4yIRPMIhcDF-QIADmchviYcvhugv7XyNJ3qD_ybH7B_ji8SB1Ui5ihgVINo3Mr7KCYT-pC0ed_Vb4VMWA5Tx5i7V8wo9oRPSjr-TaJiMDE8nzN7UxID7py5Mg08"
            />
          </div>
          <SlideIn direction="left" delay={0} className="relative z-20 max-w-[1200px] mx-auto px-gutter w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-caps text-label-caps uppercase tracking-wider mb-4 block text-primary-fixed">
                Datenschutz
              </span>
              <h1 className="font-headline-xl text-headline-xl mb-6">Datenschutzerklärung</h1>
            </div>
          </SlideIn>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <SlideIn direction="up" delay={0}>
              <div className="prose prose-lg max-w-3xl mx-auto text-on-surface-variant leading-relaxed space-y-8">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-4">1. Datenschutz auf einen Blick</h2>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Datenerfassung auf dieser Website</h3>
                  <p className="font-bold text-primary">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-primary">Wie erfassen wir Ihre Daten?</p>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>

                <div>
                  <p className="font-bold text-primary">Wofür nutzen wir Ihre Daten?</p>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p>
                    Wenn Sie diese Website besuchen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Hinweis zur verantwortlichen Stelle</h3>
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                    Möbelmontage Leipzig<br />
                    Musterstraße 123<br />
                    04109 Leipzig<br />
                    E-Mail: info@moebelmontage-leipzig.de
                  </p>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-4">3. Datenerfassung auf unserer Website</h2>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Kontaktformular</h3>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">WhatsApp</h3>
                  <p>
                    Wenn Sie uns über WhatsApp kontaktieren, nutzen wir den Nachrichtendienst WhatsApp der WhatsApp LLC (1601 Willow Road, Menlo Park, California 94025, USA). Die Übermittlung Ihrer Daten erfolgt hierbei verschlüsselt. Wir weisen darauf hin, dass WhatsApp auf Server in den USA zurückgreift. Mit der Kontaktaufnahme über WhatsApp erklären Sie sich mit der Nutzung dieses Dienstes einverstanden.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Cookies</h3>
                  <p>
                    Diese Website verwendet keine Cookies von Drittanbietern. Technisch notwendige Cookies werden nur eingesetzt, um die Funktionsfähigkeit der Website zu gewährleisten. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
                  </p>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-4">4. Ihre Rechte</h2>
                  <p>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-4">5. Widerspruch gegen Werbe-Mails</h2>
                  <p>
                    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
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
