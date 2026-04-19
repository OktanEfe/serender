"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    ad: "",
    eposta: "",
    telefon: "",
    konu: "",
    mesaj: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full bg-[#004A30] overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F6A4A]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#003623]/50 rounded-full blur-[100px]" />
        </div>

        <svg className="absolute top-0 right-0 w-[320px] h-[320px] opacity-[0.05] pointer-events-none" viewBox="0 0 400 400" fill="none">
          <path d="M380 20 C380 20 200 20 60 160 C-40 260 20 380 20 380 C20 380 20 200 160 80 C260 -10 380 20 380 20Z" fill="white"/>
          <path d="M340 60 C340 60 180 60 80 180 C0 280 50 360 50 360 C50 360 40 200 140 100 C240 10 340 60 340 60Z" fill="white"/>
        </svg>

        <svg className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.06]" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0 40 C200 10 400 70 600 40 C800 10 1000 70 1200 40 L1200 80 L0 80Z" fill="white">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0 40 C200 10 400 70 600 40 C800 10 1000 70 1200 40 L1200 80 L0 80Z;M0 55 C200 30 400 60 600 35 C800 15 1000 60 1200 50 L1200 80 L0 80Z;M0 40 C200 10 400 70 600 40 C800 10 1000 70 1200 40 L1200 80 L0 80Z"
            />
          </path>
        </svg>

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
            Projelerimiz, etkinliklerimiz veya üyelik hakkında her türlü sorunuz için
            bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* FORM + BİLGİLER */}
      <section className="w-full bg-[#FAF9F6] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E8E4DC]">
              {sent ? (
                <div className="flex flex-col items-start gap-4 py-8">
                  <div className="w-12 h-12 rounded-full bg-[#004A30]/10 flex items-center justify-center">
                    <ArrowUpRight size={20} className="text-[#004A30]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#231F20] text-2xl font-light tracking-tight">
                    Mesajınız iletildi.
                  </h3>
                  <p className="text-[#5C5C56] text-base font-light leading-relaxed">
                    En kısa sürede size geri döneceğiz. Teşekkür ederiz.
                  </p>
                  <button
                    onClick={() => { setSent(false); setFormData({ ad: "", eposta: "", telefon: "", konu: "", mesaj: "" }); }}
                    className="mt-4 text-[13px] font-medium text-[#004A30] border-b border-[#004A30]/30 hover:border-[#004A30] transition-colors"
                  >
                    Yeni mesaj gönder
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-3 block">
                      Bize Yazın
                    </span>
                    <h2 className="text-[#231F20] text-2xl md:text-3xl font-light leading-tight tracking-tight">
                      Mesajınızı{" "}
                      <span className="font-serif italic">bekliyoruz.</span>
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">Ad Soyad</label>
                        <input
                          type="text"
                          name="ad"
                          value={formData.ad}
                          onChange={handleChange}
                          required
                          placeholder="Adınız Soyadınız"
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#004A30]/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">E-posta</label>
                        <input
                          type="email"
                          name="eposta"
                          value={formData.eposta}
                          onChange={handleChange}
                          required
                          placeholder="ornek@email.com"
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#004A30]/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">Telefon</label>
                        <input
                          type="tel"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          placeholder="+90 5xx xxx xx xx"
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#004A30]/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">Konu</label>
                        <select
                          name="konu"
                          value={formData.konu}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[14px] font-light text-[#231F20] focus:outline-none focus:border-[#004A30]/40 transition-colors appearance-none"
                        >
                          <option value="" disabled>Konu seçin</option>
                          <option value="uyelik">Üyelik</option>
                          <option value="proje">Proje İş Birliği</option>
                          <option value="egitim">Eğitim & Atölye</option>
                          <option value="gonullu">Gönüllülük</option>
                          <option value="basin">Basın & Medya</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase">Mesaj</label>
                      <textarea
                        name="mesaj"
                        value={formData.mesaj}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Mesajınızı buraya yazın..."
                        className="w-full bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl px-5 py-3.5 text-[#231F20] text-[14px] font-light placeholder:text-[#9C9C94] focus:outline-none focus:border-[#004A30]/40 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 bg-[#004A30] text-white text-[13px] font-medium tracking-wide px-8 py-4 rounded-full hover:bg-[#003623] transition-all duration-300 w-fit mt-2"
                    >
                      Gönder
                      <ArrowUpRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* İletişim Bilgileri */}
            <div className="flex flex-col gap-4">

              <div className="bg-[#004A30] rounded-3xl p-8">
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-6">
                  İletişim Bilgileri
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} strokeWidth={1.5} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.15em] text-white/40 uppercase mb-1">E-posta</p>
                      <a href="mailto:info@serender.org.tr" className="font-serif italic text-white text-base hover:text-white/80 transition-colors">
                        info@serender.org.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} strokeWidth={1.5} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.15em] text-white/40 uppercase mb-1">Telefon</p>
                      <a href="tel:+905001234567" className="text-white font-light text-base hover:text-white/80 transition-colors">
                        +90 500 123 45 67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} strokeWidth={1.5} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.15em] text-white/40 uppercase mb-1">Adres</p>
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
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Instagram", handle: "@serender.dernek", href: "#" },
                    { label: "Twitter / X", handle: "@serender", href: "#" },
                    { label: "LinkedIn", handle: "Serender Derneği", href: "#" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="group flex items-center justify-between py-3 border-b border-[#E8E4DC] last:border-0"
                    >
                      <div>
                        <p className="text-[11px] font-medium tracking-[0.1em] text-[#9C9C94] uppercase mb-0.5">{s.label}</p>
                        <p className="text-[#231F20] text-sm font-light group-hover:text-[#004A30] transition-colors">{s.handle}</p>
                      </div>
                      <ArrowUpRight size={14} strokeWidth={1.5} className="text-[#9C9C94] group-hover:text-[#004A30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </a>
                  ))}
                </div>
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
                    <div key={s.gun} className="flex items-center justify-between pb-3 border-b border-[#E8E4DC] last:border-0">
                      <p className="text-[#5C5C56] text-sm font-light">{s.gun}</p>
                      <p className="text-[#231F20] text-sm font-medium">{s.saat}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
