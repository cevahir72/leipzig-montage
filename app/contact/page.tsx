"use client";

import Link from "next/link";
import { useState } from "react";
import SlideIn from "@/components/SlideIn";
import Navbar from "@/components/Navbar";

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
          AKILLI FİYATLANDIRMA SİSTEMİ
        </span>
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
          Hızlı Teklif &amp; İletişim
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
          AI destekli sistemimizle saniyeler içinde tahmini fiyat alın. Mobilya montajında
          Leipzig&apos;in en güvenilir partneri.
        </p>
      </header>

      <main className="pb-24 px-margin-mobile md:px-0 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <SlideIn direction="left" delay={0} className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-10 ai-glow">
            <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
              <StepperDot step={1} label="ANALİZ" currentStep={currentStep} onGoToStep={goToStep} />
              <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6" />
              <StepperDot step={2} label="DETAYLAR" currentStep={currentStep} onGoToStep={goToStep} />
              <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6" />
              <StepperDot step={3} label="TAHMİN" currentStep={currentStep} onGoToStep={goToStep} />
            </div>

            <form
              id="ai-quote-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Teklif talebiniz başarıyla alındı! Danışmanlarımız 2 saat içinde sizinle iletişime geçecek."
                );
              }}
            >
              {currentStep === 1 && (
                <div className="step-transition" id="step-1">
                  <h2 className="font-headline-md text-headline-md text-primary mb-4 text-center">
                    Mobilyalarınızı Tanımlayın
                  </h2>
                  <p className="text-secondary text-center mb-8">
                    Ürün fotoğraflarını yükleyin veya IKEA ürün kodlarını girin.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center hover:border-primary transition-colors cursor-pointer bg-surface-container-low group">
                      <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary mb-4">
                        cloud_upload
                      </span>
                      <p className="font-label-caps text-secondary text-center">FOTOĞRAF YÜKLE</p>
                      <p className="text-xs text-outline mt-2">JPG, PNG veya PDF</p>
                      <input className="hidden" type="file" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="font-label-caps text-secondary mb-2 block">
                          IKEA ÜRÜN KODU / LİNK
                        </label>
                        <input
                          className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                          placeholder="Örn: 802.130.74 veya Link"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="font-label-caps text-secondary mb-2 block">
                          PLANLAMA KODU (PAX/METOD)
                        </label>
                        <input
                          className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                          placeholder="Örn: LXZY92"
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
                      SONRAKİ ADIM
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
                    Hizmet Detaylarını Belirleyin
                  </h2>
                  <div className="space-y-6 max-w-xl mx-auto">
                    <div className="flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg">
                      <div>
                        <p className="font-body-md font-bold text-primary">
                          Eski mobilya sökümü mü gerekiyor?
                        </p>
                        <p className="text-sm text-secondary">
                          Mevcut mobilyalarınızı güvenle demonte edebiliriz.
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
                          Evet
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
                          Hayır
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-label-caps text-secondary mb-2 block">
                          ALIM ADRESİ (SEÇENEKLİ)
                        </label>
                        <input
                          className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                          placeholder="Mağaza veya Depo"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="font-label-caps text-secondary mb-2 block">
                          TESLİMAT ADRESİ
                        </label>
                        <input
                          className="w-full bg-white border border-outline-variant p-4 rounded-lg"
                          placeholder="Montaj yapılacak ev"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-label-caps text-secondary mb-2 block">KAT BİLGİSİ</label>
                      <select className="w-full bg-white border border-outline-variant p-4 rounded-lg appearance-none">
                        <option>EG (Giriş Kat)</option>
                        <option>1. OG</option>
                        <option>2. OG</option>
                        <option>3. OG</option>
                        <option>Daha yüksek (Asansörlü)</option>
                        <option>Daha yüksek (Asansörsüz)</option>
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
                      GERİ DÖN
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
                          ANALİZ EDİLİYOR...
                        </>
                      ) : (
                        <>
                          HESAPLA &amp; TAHMİNİ GÖR
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
                    Size Özel Fiyat Tahmini
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-primary-container text-on-primary-container p-8 rounded-xl relative overflow-hidden">
                      <div className="relative z-10">
                        <p className="font-label-caps opacity-80 mb-2">TAHMİNİ FİYATIMIZ</p>
                        <div className="text-4xl font-bold mb-4">€185,00*</div>
                        <p className="text-sm opacity-70 italic">
                          *Kesin teklif incelemeden sonra iletilecektir.
                        </p>
                      </div>
                      <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">
                        verified
                      </span>
                    </div>
                    <div className="border border-outline-variant p-8 rounded-xl bg-white">
                      <p className="font-label-caps text-secondary mb-4">PİYASA KIYASLAMASI</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-secondary font-body-md">Taskrabbit Ortalaması:</span>
                        <span className="font-bold text-secondary line-through">€218,00</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold bg-secondary-container p-3 rounded-lg">
                        <span className="material-symbols-outlined">check_circle</span>
                        <span>Biz %15 daha uygunuz.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-high p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 mb-12">
                    <div className="flex-1">
                      <h3 className="font-headline-md text-primary mb-2">Son Adım: Onay Alın</h3>
                      <p className="text-secondary">
                        Bu verileri uzmanlarımıza iletin, size 2 saat içinde kesin bir teklif paketi
                        hazırlayalım.
                      </p>
                    </div>
                    <button
                      className="w-full md:w-auto bg-primary text-on-primary px-8 py-5 rounded-lg font-label-caps hover:bg-primary-container shadow-lg shadow-primary-container/20 whitespace-nowrap active:scale-95 transition-all"
                      type="submit"
                    >
                      AI İLE FORMU DOLDUR, 2 SAAT İÇİNDE KESİN TEKLİFİNİ AL
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      className="text-secondary font-label-caps hover:text-primary"
                      type="button"
                      onClick={() => goToStep(2)}
                    >
                      Bilgileri Düzenle
                    </button>
                  </div>
                </div>
              )}
            </form>

          </SlideIn>
          <div className="lg:col-span-4 space-y-6">
            <SlideIn direction="right" delay={0.1}>
            <div className="bg-white border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-md text-primary mb-6">Neden Bizi Seçmelisiniz?</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <div>
                    <p className="font-bold text-primary">Sigortalı Hizmet</p>
                    <p className="text-sm text-secondary">
                      Tüm montaj işlemlerimiz Allianz sigortası altındadır.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">timer</span>
                  <div>
                    <p className="font-bold text-primary">24h Express</p>
                    <p className="text-sm text-secondary">
                      Leipzig içinde 24 saat içinde randevu garantisi.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">construction</span>
                  <div>
                    <p className="font-bold text-primary">Uzman Ekip</p>
                    <p className="text-sm text-secondary">
                      Sadece mobilya montajında uzmanlaşmış marangozlar.
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
                alt="Profesyonel mobilya montaj uzmanı"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7VTiFPMCyF0hhUZm01cTPD1AfYqvhe7Kfy-DD2bDocS4_RP0drt30VcxnbL7LfKvnRpCna2OXm2A_3bH8vcSHRqhq1W4rpO471U339S-5h92gzurmfJ-Tf03yg9Cpy6T2wDXXJvjyYQHwL5EkklS40UlDuWlH_ooOboWziqpi7cSE2liX44bvaepcMVDHBY38VmXvj50ffs_gJyx2Za_8WvvughIniKaMcRBwoEgmEMHgKlixMTaQn_tA6tZvMKhbd7UctteFv4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white font-bold">
                  Leipzig genelinde +5.000 başarılı montaj projesi.
                </p>
            </div>
            </div>
            </SlideIn>
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-highest border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-12 px-margin-mobile md:px-0 max-w-[1200px] mx-auto">
          <div>
            <div className="font-headline-md text-headline-md font-bold text-primary mb-4">
              Leipzig Montage Profis
            </div>
            <p className="text-secondary max-w-md">
              Meisterhafte Montage in Sachsen. Ev ve ofis mobilyalarınız için profesyonel kurulum
              çözümleri sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-label-caps text-primary mb-2">KURUMSAL</p>
              <a className="text-secondary hover:text-primary transition-all" href="#">
                Impressum
              </a>
              <a className="text-secondary hover:text-primary transition-all" href="#">
                Datenschutz
              </a>
              <a className="text-secondary hover:text-primary transition-all" href="#">
                AGB
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-label-caps text-primary mb-2">HİZMET</p>
              <a className="text-secondary hover:text-primary transition-all" href="#">
                Servicegebiete
              </a>
              <a className="text-secondary hover:text-primary transition-all" href="#">
                Partnerprogramm
              </a>
              <Link className="text-primary font-bold underline" href="/contact">
                Hızlı Teklif
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/30 py-6 text-center text-secondary text-sm">
          &copy; 2024 Leipzig Montage Profis. Alle Rechte vorbehalten. Meisterhafte Montage in Sachsen.
        </div>
      </footer>

      <a
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group"
        href="https://wa.me/49123456789"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
        <span className="font-bold">WhatsApp ile Hemen Sor</span>
      </a>
    </>
  );
}
