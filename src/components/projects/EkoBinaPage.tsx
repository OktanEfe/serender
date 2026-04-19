"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const areas = [
  {
    id: "01",
    title: "Kompost Alanları",
    desc: "Soğuk kompost ve bokashi yöntemleriyle organik atıklar toprağa kazandırılıyor. Toprak verimliliği artıyor, çöpe giden atık sıfıra iniyor.",
    image: "/images/ekobina/ekobina.png",
  },
  {
    id: "02",
    title: "Mini Sera & Üretim",
    desc: "Bitki yetiştirme kasaları ve mini sera alanında uygulamalı tarım deneyimi sunuluyor. Yerel üretim döngüsü güçlendiriliyor.",
    image: "/images/ekobina/ekobina2.png",
  },
  {
    id: "03",
    title: "Eğitim & Atölyeler",
    desc: "Çocuk ve yetişkinlere yönelik ekolojik yaşam eğitimleri, geri dönüşüm ve ahşap işleme atölyeleri. Nesiller arası çevre bilinci aktarımı burada gerçekleşiyor.",
    image: "/images/ekobina/ekobina3.png",
  },
  {
    id: "04",
    title: "Ekolojik Kafe",
    desc: "Yerel üreticilerden beslenen, sıfır atık prensibiyle işletilen kafe. Ekolojik ürünler ve topluluk buluşmaları için ideal bir alan.",
    image: "/images/ekobina/ekobina4.png",
  },
  {
    id: "05",
    title: "Genel Merkez",
    desc: "Dernek ofisi, koordinasyon alanı ve topluluk buluşma mekanlarıyla merkezin kalbi. Tüm faaliyetlerin yönetildiği nokta.",
    image: "/images/ekobina/ekobina5.png",
  },
];

const stages = [
  { num: "01", title: "Proje Onayı", desc: "Alan tahsisi ve resmi onay süreçleri" },
  { num: "02", title: "Mimari Planlama", desc: "Ekolojik tasarım ve mühendislik" },
  { num: "03", title: "Altyapı & Kurulum", desc: "İnşaat ve sistem kurulumları" },
  { num: "04", title: "Pilot Eğitimler", desc: "İlk atölye ve eğitim programları" },
  { num: "05", title: "Tam Kapasite", desc: "Merkez tam faaliyete geçiş" },
];

const EkoBinaPage = () => {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-screen flex items-end bg-[#004A30] overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0F6A4A]/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003623]/50 rounded-full blur-[120px]" />
        </div>

        <div className="absolute right-0 top-0 w-[48%] h-full hidden lg:block">
          <Image
            src="/images/ekobina/ekobina.png"
            alt="Sürdürülebilir Yaşam ve Eğitim Merkezi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004A30] via-[#004A30]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004A30]/50 via-transparent to-transparent" />
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.07]"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path d="M0 50 C200 10 400 90 600 50 C800 10 1000 90 1200 50 L1200 100 L0 100Z" fill="white">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0 50 C200 10 400 90 600 50 C800 10 1000 90 1200 50 L1200 100 L0 100Z;M0 65 C200 30 400 70 600 45 C800 20 1000 75 1200 60 L1200 100 L0 100Z;M0 50 C200 10 400 90 600 50 C800 10 1000 90 1200 50 L1200 100 L0 100Z"
            />
          </path>
          <path d="M0 70 C150 40 350 90 550 65 C750 40 950 90 1200 70 L1200 100 L0 100Z" fill="white" fillOpacity="0.5">
            <animate attributeName="d" dur="11s" repeatCount="indefinite"
              values="M0 70 C150 40 350 90 550 65 C750 40 950 90 1200 70 L1200 100 L0 100Z;M0 60 C150 85 350 45 550 75 C750 100 950 45 1200 60 L1200 100 L0 100Z;M0 70 C150 40 350 90 550 65 C750 40 950 90 1200 70 L1200 100 L0 100Z"
            />
          </path>
        </svg>

        <svg className="absolute top-0 right-[45%] w-[180px] h-[300px] opacity-[0.06] pointer-events-none hidden lg:block" viewBox="0 0 180 300" fill="none">
          <path d="M90 300 C90 300 88 200 94 140 C100 80 82 50 90 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M90 180 C90 180 40 160 20 120 C5 90 20 55 50 50 C75 46 88 90 90 180Z" fill="white" fillOpacity="0.5"/>
          <path d="M94 130 C94 130 140 110 155 75 C165 50 150 20 125 18 C100 16 94 60 94 130Z" fill="white" fillOpacity="0.4"/>
        </svg>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
          <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase mb-8 block">
            <span className="w-6 h-[1px] bg-white/20" />
            Serender Projesi
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tight mb-8 max-w-2xl">
            <span className="font-light block">Sürdürülebilir</span>
            <span className="font-semibold block">Yaşam &</span>
            <span className="font-light italic text-white/60 block">Eğitim Merkezi</span>
          </h1>
          <p className="text-white/55 text-lg font-light leading-relaxed max-w-md mb-12">
            Atıkların doğaya kazandırıldığı, uygulamalı eğitimlerin verildiği
            ve ekolojik yaşam bilincinin yaygınlaştırıldığı çok yönlü bir merkez.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Kompost", "Permakültür", "Eğitim", "Atölye", "Ekolojik Kafe"].map((tag) => (
              <span key={tag} className="border border-white/15 text-white/55 text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
            {[
              { value: "%100", label: "Doğal Malzeme" },
              { value: "Sıfır", label: "Atık Politikası" },
              { value: "5+", label: "Faaliyet Alanı" },
              { value: "5", label: "Uygulama Aşaması" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-light text-white tracking-tight mb-1">{s.value}</p>
                <p className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-6 block">
                Projenin Amacı
              </span>
              <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight mb-8">
                Çok yönlü bir<br />
                <span className="font-serif italic">sürdürülebilir yaşam merkezi.</span>
              </h2>
              <p className="text-[#5C5C56] text-base font-light leading-relaxed mb-5">
                Serender Ekolojik Yaşam Derneği olarak amacımız; atıkların doğaya
                kazandırıldığı, çocuklar ve yetişkinler için uygulamalı eğitimlerin
                verildiği, ekolojik yaşam bilincinin yaygınlaştırıldığı çok yönlü
                bir sürdürülebilir yaşam merkezi kurmaktır.
              </p>
              <p className="text-[#5C5C56] text-base font-light leading-relaxed">
                Bu proje ile belediyenin çevre politikalarına katkı sağlanması
                ve örnek bir model oluşturulması hedeflenmektedir.
              </p>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden">
              <Image src="/images/ekobina/ekobina5.png" alt="Merkez genel görünüm" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF9F6] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-4 block">
              Merkezde Neler Var
            </span>
            <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight">
              Beş farklı{" "}
              <span className="font-serif italic">faaliyet alanı.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {areas.map((area, i) => (
              <button
                key={i}
                onClick={() => setActiveArea(i)}
                className={`px-4 py-2 rounded-full text-[12px] font-medium tracking-wide transition-all duration-300 ${
                  activeArea === i
                    ? "bg-[#004A30] text-white"
                    : "bg-white text-[#5C5C56] border border-[#E8E4DC] hover:text-[#231F20]"
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[380px] rounded-3xl overflow-hidden">
              <Image
                src={areas[activeArea].image}
                alt={areas[activeArea].title}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white/40 text-[10px] font-medium tracking-[0.2em] uppercase">
                  {areas[activeArea].id}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-[#231F20] text-2xl md:text-3xl font-light tracking-tight mb-5">
                {areas[activeArea].title}
              </h3>
              <p className="text-[#5C5C56] text-base font-light leading-relaxed">
                {areas[activeArea].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-4 block">
              Neden Bu Proje
            </span>
            <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight">
              Üç boyutta{" "}
              <span className="font-serif italic">etki yaratıyor.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Çevresel Katkı", items: ["Organik atıkların çöpe gitmesi engellenir", "Toprak verimliliği artar", "Karbon ayak izi azalır"], dark: true },
              { label: "Sosyal Katkı", items: ["Çocuklara erken yaşta çevre bilinci", "Yetişkinlere sürdürülebilir yaşam eğitimi", "Toplumsal farkındalık artışı"], dark: false },
              { label: "Belediyeye Katkı", items: ["Şehir markalaşmasına örnek proje", "Sıfır atık politikalarına güçlü destek", "Halkla doğrudan temas eden sosyal proje"], dark: false },
            ].map((impact, i) => (
              <div key={i} className={`rounded-3xl p-8 ${impact.dark ? "bg-[#004A30]" : "bg-[#FAF9F6] border border-[#E8E4DC]"}`}>
                <p className={`text-[10px] font-medium tracking-[0.2em] uppercase mb-6 ${impact.dark ? "text-white/40" : "text-[#9C9C94]"}`}>
                  {impact.label}
                </p>
                <ul className="space-y-4">
                  {impact.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${impact.dark ? "bg-white/30" : "bg-[#004A30]/30"}`} />
                      <p className={`text-sm font-light leading-relaxed ${impact.dark ? "text-white/65" : "text-[#5C5C56]"}`}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#004A30] py-20 md:py-28 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <path d="M0 200 C300 100 600 300 900 200 C1050 150 1150 250 1200 200 L1200 400 L0 400Z" fill="white">
            <animate attributeName="d" dur="9s" repeatCount="indefinite"
              values="M0 200 C300 100 600 300 900 200 C1050 150 1150 250 1200 200 L1200 400 L0 400Z;M0 220 C300 140 600 260 900 220 C1050 190 1150 230 1200 210 L1200 400 L0 400Z;M0 200 C300 100 600 300 900 200 C1050 150 1150 250 1200 200 L1200 400 L0 400Z"
            />
          </path>
        </svg>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase mb-4 block">İşleyiş Modeli</span>
            <h2 className="text-white text-3xl md:text-4xl font-light leading-tight tracking-tight">
              Kendi kendini{" "}
              <span className="font-serif italic text-white/65">sürdüren bir yapı.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { icon: "🏛", label: "Arazi", value: "Belediye tarafından tahsis" },
              { icon: "🏗", label: "Yapı & İşletme", value: "Dernek tarafından hibe ve desteklerle" },
              { icon: "📚", label: "Eğitimler", value: "Uzmanlar ve gönüllüler tarafından" },
            ].map((item) => (
              <div key={item.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-3xl p-7">
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-2">{item.label}</p>
                <p className="text-white font-light text-base leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-3xl p-7">
            <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-4">Gelir Modeli</p>
            <div className="flex flex-wrap gap-3">
              {["Atölye ve Eğitimler", "Ekolojik Ürün Satışları", "Kafe İşletmesi"].map((item) => (
                <span key={item} className="bg-white/10 text-white/65 text-[13px] font-light px-5 py-2 rounded-full border border-white/10">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF9F6] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-4 block">Uygulama Aşamaları</span>
            <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight">
              5 adımda{" "}
              <span className="font-serif italic">hayata geçiyor.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="relative flex items-center mb-8">
              <div className="absolute left-0 right-0 h-[1px] bg-[#E8E4DC]" />
              {stages.map((_, i) => (
                <div key={i} className="relative flex-1 flex justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-[#004A30] bg-[#FAF9F6] z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#004A30]" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {stages.map((stage) => (
                <div key={stage.num} className="flex-1 bg-white rounded-2xl p-6 border border-[#E8E4DC]">
                  <p className="text-[10px] font-medium tracking-[0.2em] text-[#004A30] uppercase mb-2">{stage.num}</p>
                  <h3 className="text-[#231F20] text-base font-medium mb-2">{stage.title}</h3>
                  <p className="text-[#5C5C56] text-[13px] font-light leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 md:hidden">
            {stages.map((stage) => (
              <div key={stage.num} className="flex gap-4 bg-white rounded-2xl p-5 border border-[#E8E4DC]">
                <span className="text-[#004A30] text-sm font-medium w-8 flex-shrink-0 pt-0.5">{stage.num}</span>
                <div>
                  <h3 className="text-[#231F20] text-base font-medium mb-1">{stage.title}</h3>
                  <p className="text-[#5C5C56] text-[13px] font-light">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
};

export default EkoBinaPage;
