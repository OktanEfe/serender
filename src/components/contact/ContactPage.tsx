"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    ad: "",
    eposta: "",
    telefon: "",
    konu: "",
    mesaj: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleBagisClick = () => {
    setFormData({ ...formData, konu: "bagis" });
    document
      .getElementById("iletisim-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative w-full bg-[#1E4D3A] overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F6A4A]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#13362A]/50 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase mb-8 block">
            <span className="w-6 h-[1px] bg-white/20" />
            İletişim
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tight mb-8 max-w-3xl">
            <span className="font-light block">Birlikte bir</span>
            <span className="font-semibold block">şey</span>
            <span className="font-light italic text-white/60 block">yapalım.</span>
          </h1>
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
            Projelerimiz, etkinliklerimiz veya üyelik hakkında her türlü sorunuz
            için bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <section
        id="iletisim-form"
        className="w-full bg-[#FAF9F6] py-20 md:py-28 scroll-mt-20"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E8E4DC]">
              {sent ? (
                <div className="flex flex-col items-start gap-4 py-8">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3A]/10 flex items-center justify-center">
                    <ArrowUpRight
                      size={20}
                      className="text-[#1E4D3A]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-[#231F20] text-2xl font-light tracking-tight">
                    Mesajınız iletildi.
                  </h3>
                  <p className="text-[#5C5C56] text-base font-light leading-relaxed">
                    En kısa sürede size geri döneceğiz. Teşekkür ederiz.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({
                        ad: "",
                        eposta: "",
                        telefon: "",
                        konu: "",
                        mesaj: "",
                      });
                    }}
                    className="mt-4 text-[13px] font-medium text-[#1E4D3A] border-b border-[#1E4D3A]/30 hover:border-[#1E4D3A] transition-colors"
                  >
                    Yeni mesaj gönder
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-3 block">
                      Bize Yazın
                    </span>
                    <h2 className="text-[#231F20] text-2xl md:text-3xl font-light leading-tight tracking-tight">
                      Mesajınızı bekliyoruz.
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          name="ad"
                          value={formData.ad}
                          onChange={handleChange}
                          required
                          placeholder="Adınız Soyadınız"
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#1E4D3A]/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">
                          E-posta
                        </label>
                        <input
                          type="email"
                          name="eposta"
                          value={formData.eposta}
                          onChange={handleChange}
                          required
                          placeholder="ornek@email.com"
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#1E4D3A]/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          placeholder="+90 5xx xxx xx xx"
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#1E4D3A]/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">
                          Konu
                        </label>
                        <select
                          name="konu"
                          value={formData.konu}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[14px] font-light text-[#231F20] focus:outline-none focus:border-[#1E4D3A]/40 transition-colors appearance-none"
                        >
                          <option value="" disabled>
                            Konu seçin
                          </option>
                          <option value="uyelik">Üyelik</option>
                          <option value="bagis">Bağış & Yardım</option>
                          <option value="proje">Proje İş Birliği</option>
                          <option value="egitim">Eğitim & Atölye</option>
                          <option value="gonullu">Gönüllülük</option>
                          <option value="basin">Basın & Medya</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">
                        Mesaj
                      </label>
                      <textarea
                        name="mesaj"
                        value={formData.mesaj}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Mesajınızı buraya yazın..."
                        className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#1E4D3A]/40 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#1E4D3A] text-white text-[13px] font-medium tracking-wide px-8 py-4 rounded-full hover:bg-[#13362A] transition-all duration-300 w-fit mt-2"
                    >
                      Gönder
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-[#1E4D3A] rounded-3xl p-8">
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-6">
                  İletişim Bilgileri
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} strokeWidth={1.5} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.15em] text-white/40 uppercase mb-1">
                        E-posta
                      </p>
                      <a
                        href="mailto:info@serenderekolojik.com"
                        className="font-serif italic text-white text-base hover:text-white/80 transition-colors"
                      >
                        info@serenderekolojik.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} strokeWidth={1.5} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.15em] text-white/40 uppercase mb-1">
                        Telefon
                      </p>
                      <a
                        href="tel:+905325740235"
                        className="text-white font-light text-base hover:text-white/80 transition-colors"
                      >
                        +90 532 574 02 35
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} strokeWidth={1.5} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.15em] text-white/40 uppercase mb-1">
                        Adres
                      </p>
                      <p className="text-white font-light text-base leading-relaxed">
                        Yalova, Türkiye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#E8E4DC]">
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#9C9C94] uppercase mb-5">
                  Sosyal Medya
                </p>
                <a
                  href="https://instagram.com/serenderekolojikyasam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#E8E4DC] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E4D3A] group-hover:border-[#1E4D3A] transition-all duration-300">
                      <FaInstagram
                        size={15}
                        className="text-[#5C5C56] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.1em] text-[#9C9C94] uppercase mb-0.5">
                        Instagram
                      </p>
                      <p className="text-[#231F20] text-sm font-light group-hover:text-[#1E4D3A] transition-colors">
                        @serenderekolojikyasam
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#9C9C94] group-hover:text-[#1E4D3A] transition-all duration-300"
                  />
                </a>
              </div>

              <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-[#E8E4DC]">
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#9C9C94] uppercase mb-4">
                  Çalışma Saatleri
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { gun: "Pazartesi — Cuma", saat: "09:00 — 18:00" },
                    { gun: "Cumartesi", saat: "10:00 — 15:00" },
                    { gun: "Pazar", saat: "Kapalı" },
                  ].map((s) => (
                    <div
                      key={s.gun}
                      className="flex items-center justify-between pb-3 border-b border-[#E8E4DC] last:border-0"
                    >
                      <p className="text-[#5C5C56] text-sm font-light">{s.gun}</p>
                      <p className="text-[#231F20] text-sm font-medium">{s.saat}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1E4D3A] rounded-3xl p-8">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5">
                  <Heart size={16} strokeWidth={1.5} className="text-white" />
                </div>

                <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-3">
                  Destek Olun
                </p>

                <h3 className="text-white text-xl font-light leading-snug tracking-tight mb-3">
                  Bağış & <span className="font-serif italic">Yardım</span>
                </h3>

                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  Ekolojik yaşam projelerimize destek olmak ister misiniz?
                  Bizimle iletişime geçin, size yardımcı olalım.
                </p>

                <button
                  onClick={handleBagisClick}
                  className="inline-flex items-center gap-2 bg-white text-[#1E4D3A] text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-[#FAF9F6] transition-all duration-300"
                >
                  Bize Ulaşın
                  <ArrowUpRight size={13} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
