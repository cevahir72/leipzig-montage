"use client";

import Link from "next/link";
import { useEffect } from "react";
import LogoSlider from "@/components/LogoSlider";
import SlideIn from "@/components/SlideIn";

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
      <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
        <nav className="flex justify-between items-center h-16 max-w-[1200px] mx-auto px-margin-mobile md:px-0">
          <div className="font-headline-md text-headline-md font-bold text-primary">
            Leipzig Montage Profis
          </div>
          <div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Leistungen</a>
            <a className="text-secondary hover:text-primary transition-colors" href="#">Ablauf</a>
            <a className="text-secondary hover:text-primary transition-colors" href="#">Gewerbe</a>
            <Link className="text-secondary hover:text-primary transition-colors" href="/about">About Us</Link>
            <Link className="text-secondary hover:text-primary transition-colors" href="/gallery">Galeri</Link>
            <Link className="text-secondary hover:text-primary transition-colors" href="/contact">Kontakt</Link>
          </div>
          <Link href="/contact" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:bg-primary-container transition-colors scale-98 active:opacity-80">
            Jetzt Buchen
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Professional furniture assembly"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXdwTq0HCmQTBlYDVHcPml34n0_syEO0CWxKHRppIxqfFVjADR7IhAmdOyaj_PRcvJUVQZUUqQLAiJV0WEKEp1zA9LmuXCVT034HREpI1ZwSfAN4ZQ0caeMjtdp4rPEeIGP0IX9ZjIsTcGRr_j08HHCv5oZVwYhfTxca9CAoIwy2c7hOSVjWC51bYp9_4q4e9EESAXAocK0qzQCoB7dlDrN3Cruyn1WgPUTf25UkL1Ule7RDUImiILJd8MTldL0RUPo2wjmzoXp9I"
            />
            <div className="absolute inset-0 bg-primary/40" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-0 w-full text-white">
            <div className="max-w-3xl">
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6 leading-tight">
                Leipzig&apos;de Mobilya Montajı:{" "}
                <span className="block">Profesyonel, Hızlı ve Sabit Fiyat Garantili!</span>
              </h1>
              <p className="font-body-lg text-body-lg mb-8 opacity-90 max-w-xl">
                11 yıllık deneyim ve haftalık 7 gün ulaşılabilirlik ile Leipzig ve çevresinde mobilya kurulumunda güvenilir çözüm ortağınız.
              </p>
              <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container transition-transform active:scale-95 shadow-lg">
                Hemen Teklif Al
              </Link>
            </div>
          </div>
        </section>

        <LogoSlider />
        <section className="bg-primary py-6">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0 flex flex-col md:flex-row justify-between gap-gutter">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-primary text-3xl">verified</span>
              <span className="font-headline-md text-headline-md text-on-primary">11 Yıllık Deneyim</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-primary text-3xl">payments</span>
              <span className="font-headline-md text-headline-md text-on-primary">Sabit Fiyat Garantisi</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-primary text-3xl">support_agent</span>
              <span className="font-headline-md text-headline-md text-on-primary">7/24 İletişim</span>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Hizmetlerimiz</h2>
              <p className="text-secondary max-w-2xl mx-auto">Her türlü mobilya montajı için hassas çözümler sunuyoruz.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <SlideIn direction="left" delay={0}>
                <div className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">chair</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Mobilya Montajı</h3>
                  <p className="text-secondary mb-6 flex-grow">IKEA, POCO, Höffner gibi tüm markaların profesyonel ve milimetrik hassasiyetle montajı.</p>
                  <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                    Hemen Başla <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">countertops</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Mutfak Montajı</h3>
                  <p className="text-secondary mb-6 flex-grow">Tüm mutfak üniteleri, ankastre cihazlar ve su bağlantıları dahil teknik yetkinlik ve tam kurulum.</p>
                  <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                    Hemen Başla <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">business</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Ofis ve Ticari Alan</h3>
                  <p className="text-secondary mb-6 flex-grow">İşletmeniz için verimli, ergonomik ve kurumsal ofis mobilyası kurulum çözümleri.</p>
                  <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                    Hemen Başla <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </SlideIn>
              <SlideIn direction="left" delay={0.3}>
                <div className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 flex flex-col md:col-start-1 md:col-end-2 lg:col-start-auto lg:col-end-auto">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">swap_horiz</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Demontaj &amp; Kurulum</h3>
                  <p className="text-secondary mb-6 flex-grow">Taşınma öncesi mobilyalarınızın sökümü ve yeni adreste tekrar profesyonel montajı.</p>
                  <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                    Hemen Başla <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.4}>
                <div className="bg-white border border-outline-variant p-8 group hover:shadow-xl transition-all duration-300 flex flex-col md:col-start-2 md:col-end-3 lg:col-start-auto lg:col-end-auto">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">construction</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Tamirat &amp; Ayarlama</h3>
                  <p className="text-secondary mb-6 flex-grow">Kapak ayarları, menteşe değişimi ve küçük mobilya onarımları ile mobilyalarınıza yeni hayat veriyoruz.</p>
                  <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                    Hemen Başla <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <section className="bg-primary py-12 text-white">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">task_alt</span>
                <p className="font-headline-md text-headline-md">200+</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Başarılı Proje (2024&apos;ten beri)</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">price_check</span>
                <p className="font-headline-md text-headline-md">100%</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Sabit Fiyat Garantisi</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">security</span>
                <p className="font-headline-md text-headline-md">Sigortalı</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Hizmet (Haftpflichtversichert)</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">bolt</span>
                <p className="font-headline-md text-headline-md">2 Saat</p>
                <p className="font-label-caps text-label-caps opacity-80 uppercase">Hızlı Yanıt Süresi</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Müşteri Ne Diyor?</h2>
              <p className="text-secondary">Müşterilerimizin Leipzig mobilya montaj hizmetimiz hakkındaki deneyimleri.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SlideIn direction="left" delay={0}>
                <div className="bg-surface-container-low p-8 border border-outline-variant rounded-lg">
                  <div className="flex text-primary mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="italic text-on-surface-variant mb-6">&quot;IKEA Pax dolabımın montajı için yardım aldım. Çok profesyonel bir ekipti, tam zamanında geldiler ve kurulum kusursuz oldu. Teşekkürler!&quot;</p>
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
                <div className="bg-surface-container-low p-8 border border-outline-variant rounded-lg">
                  <div className="flex text-primary mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="italic text-on-surface-variant mb-6">&quot;Yeni taşındığım evimin tüm mutfak kurulumunu yaptılar. Sabit fiyat garantisi vermeleri harika, sonradan sürpriz yaşamadık. Tavsiye ederim.&quot;</p>
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
                <div className="bg-surface-container-low p-8 border border-outline-variant rounded-lg">
                  <div className="flex text-primary mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="italic text-on-surface-variant mb-6">&quot;Ofis mobilyalarımızın montajı çok hızlı bitti. İşlerini gerçekten temiz ve titiz yapıyorlar. Fiyat/performans açısından 10 numara.&quot;</p>
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
                  <p className="font-headline-xl text-headline-xl">11+</p>
                  <p className="font-label-caps text-label-caps opacity-80 uppercase">Yıllık Tecrübe</p>
                </div>
              </SlideIn>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Leipzig&apos;in Yerel Gücü ve Alman Hassasiyeti</h2>
              <p className="font-body-lg text-body-lg text-secondary mb-6 leading-relaxed">
                Leipzig Montage Profis olarak, mobilya montajını sadece parçaları birleştirmek değil, yaşam alanınızı inşa etmek olarak görüyoruz. Leipzig kökenli ekibimizle, bölgenin her noktasına profesyonel el işçiliği ve teknik uzmanlık taşıyoruz.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Milisimetrik hassasiyetle montaj garantisi</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Sigortalı ve sertifikalı ekip çalışması</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Leipzig ve 50km çevre illere hizmet</span>
                </li>
              </ul>
              <SlideIn direction="right" delay={0.2}>
                <div className="p-6 bg-white border border-outline-variant border-l-4 border-l-primary">
                  <p className="italic text-secondary">&quot;Bizim için her vida, evinizdeki konforun bir parçasıdır.&quot;</p>
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
                  <h2 className="font-headline-lg text-headline-lg mb-6">Ücretsiz Teklif Alın</h2>
                  <p className="font-body-lg text-body-lg mb-12 opacity-80">Projeniz hakkında detayları paylaşın, 1 saat içinde size sabit fiyat teklifimizi iletelim.</p>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-3xl">call</span>
                      <div>
                        <p className="font-label-caps uppercase text-sm opacity-60">Hızlı İletişim</p>
                        <p className="text-xl font-bold">+49 (0) 123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-3xl">mail</span>
                      <div>
                        <p className="font-label-caps uppercase text-sm opacity-60">E-Posta</p>
                        <p className="text-xl font-bold">info@leipzig-montage.de</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-3xl">location_on</span>
                      <div>
                        <p className="font-label-caps uppercase text-sm opacity-60">Merkez Ofis</p>
                        <p className="text-xl font-bold">Leipzig, Almanya</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-12 md:p-16">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-caps text-label-caps text-secondary uppercase">İsim Soyisim</label>
                        <input className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none h-12" placeholder="Adınız" type="text" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-caps text-label-caps text-secondary uppercase">E-posta</label>
                        <input className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none h-12" placeholder="Email adresiniz" type="email" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-label-caps text-secondary uppercase">Hizmet Türü</label>
                      <select className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none h-12">
                        <option>Mobilya Montajı</option>
                        <option>Mutfak Montajı</option>
                        <option>Ofis ve Ticari Alan</option>
                        <option>Demontaj &amp; Kurulum</option>
                        <option>Tamirat &amp; Ayarlama</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-label-caps text-secondary uppercase">Mesajınız</label>
                      <textarea className="w-full border-outline-variant focus:border-primary focus:ring-0 rounded-none" placeholder="Mobilya sayısı, model adı veya özel istekleriniz..." rows={4} />
                    </div>
                    <a
                      className="w-full bg-[#25D366] text-white h-14 font-bold hover:brightness-110 transition-all uppercase tracking-widest flex items-center justify-center gap-3"
                      href="https://wa.me/49123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined">chat</span>
                      WhatsApp ile Hemen Sor
                    </a>
                  </form>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>
      </main>

      <section className="py-24 bg-white border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Hizmet Bölgelerimiz</h2>
            <p className="text-secondary max-w-2xl mx-auto">Merkezimiz Leipzig olmak üzere, geniş bir ağda profesyonel montaj hizmeti sunuyoruz.</p>
          </div>
          <SlideIn direction="up" delay={0} className="mb-12 flex justify-center">
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-outline-variant shadow-lg bg-surface-container-low p-2 md:p-4">
              <img
                src="/map.png"
                alt="Leipzig ve çevre hizmet bölgeleri haritası"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </SlideIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            <SlideIn direction="left" delay={0}>
              <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                <span className="font-bold text-primary text-center">Leipzig (Merkez)</span>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.05}>
              <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                <span className="font-bold text-primary text-center">Halle (Saale)</span>
              </div>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                <span className="font-bold text-primary text-center">Chemnitz</span>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.15}>
              <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                <span className="font-bold text-primary text-center">Jena</span>
              </div>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                <span className="font-bold text-primary text-center">Naumburg</span>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.25}>
              <div className="flex flex-col items-center p-6 bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-colors">
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
                <h3 className="font-headline-md text-headline-md mb-2 text-primary-fixed">Bölgesel Yakınlık: Hızlı Randevu ve Kişisel Destek</h3>
                <p className="font-body-lg opacity-90">Bölgesel yakınlığımız sayesinde size en hızlı şekilde ulaşıyor, mobilya kurulum süreçlerinizi kişisel destek ile kolaylaştırıyoruz.</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      <footer className="bg-surface-container-highest border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter py-12 max-w-[1200px] mx-auto px-margin-mobile md:px-0">
          <div>
            <div className="font-headline-md text-headline-md font-bold text-primary mb-4">
              Leipzig Montage Profis
            </div>
            <p className="text-on-surface-variant max-w-sm mb-6">
              &copy; 2024 Leipzig Montage Profis. Präzision in jedem Handgriff.
            </p>
            <div className="flex gap-4">
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">social_leaderboard</span>
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Impressum</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Datenschutz</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">AGB</a>
            </div>
            <div className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Servicegebiete Leipzig</a>
              <p className="text-sm text-secondary">Montaj ve Kurulum Çözümleri</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
