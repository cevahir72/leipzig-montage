import { FaWhatsapp } from "react-icons/fa";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontaktPage() {
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
            <iframe
    src="https://api.centernex.com/widget/form/txEEsD82mithoIfhouTa"
    style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
    id="inline-txEEsD82mithoIfhouTa" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Contact Us"
    data-height="914"
    data-layout-iframe-id="inline-txEEsD82mithoIfhouTa"
    data-form-id="txEEsD82mithoIfhouTa"
    title="Contact Us"
    
        >
</iframe>
<script src="https://api.centernex.com/js/form_embed.js"></script>

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
