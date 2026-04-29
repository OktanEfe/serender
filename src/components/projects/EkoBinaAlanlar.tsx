"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    id: "01",
    title: "Kompost Alanları",
    desc: "Soğuk kompost ve bokashi yöntemleriyle organik atıklar toprağa kazandırılıyor. Toprak verimliliği artıyor, çöpe giden atık sıfıra iniyor. Katılımcılar kendi evlerinde uygulayabilecekleri kompost tekniklerini burada öğreniyor. Atık dönüşümü yalnızca çevre için değil, topluluk bilinci için de güçlü bir araç haline geliyor.",
    image: "/images/ekobina/ekobina.png",
  },
  {
    id: "02",
    title: "Mini Sera & Üretim",
    desc: "Bitki yetiştirme kasaları ve mini sera alanında uygulamalı tarım deneyimi sunuluyor. Yerel üretim döngüsü güçlendiriliyor. Mevsimlik sebze ve şifalı bitkilerin yetiştirildiği bu alanda, tohumdan hasata tüm süreç katılımcılarla birlikte yönetiliyor. Gıda bağımsızlığı ve doğal tarım pratiklerine dair bilinç burada filizleniyor.",
    image: "/images/ekobina/ekobina2.png",
  },
  {
    id: "03",
    title: "Eğitim & Atölyeler",
    desc: "Çocuk ve yetişkinlere yönelik ekolojik yaşam eğitimleri, geri dönüşüm ve ahşap işleme atölyeleri düzenleniyor. Nesiller arası çevre bilinci aktarımı burada gerçekleşiyor. Okullarla iş birliği yapılarak müfredata entegre programlar hayata geçiriliyor. El emeği ve yaratıcılığı ön plana çıkaran atölyeler, sürdürülebilir üretim anlayışını yaşatıyor.",
    image: "/images/ekobina/ekobina3.png",
  },
  {
    id: "04",
    title: "Ekolojik Kafe",
    desc: "Yerel üreticilerden beslenen, sıfır atık prensibiyle işletilen kafe, ekolojik ürünler ve topluluk buluşmaları için ideal bir alan sunuyor. Menüde yalnızca mevsimlik ve doğal içerikler yer alıyor. Kafe aynı zamanda merkezin gelir modelinin önemli bir parçasını oluşturuyor ve sürdürülebilir işletmecilik için örnek bir uygulama alanı işlevi görüyor.",
    image: "/images/ekobina/ekobina4.png",
  },
  {
    id: "05",
    title: "Genel Merkez",
    desc: "Dernek ofisi, koordinasyon alanı ve topluluk buluşma mekanlarıyla merkezin kalbi olan bu alan, tüm faaliyetlerin yönetildiği nokta. Gönüllü koordinasyonundan proje planlamasına, etkinlik organizasyonundan ortaklık görüşmelerine kadar pek çok süreç buradan yürütülüyor. Açık kapı politikasıyla her ziyaretçiye kapılarını açan bir dayanışma merkezi.",
    image: "/images/ekobina/ekobina5.png",
  },
];

const EkoBinaAlanlar = () => {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <section className="w-full bg-[#FAF9F6] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-4 block">
            Merkezde Neler Var
          </span>
          <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight">
            Beş farklı{" "}
            <span className="font-serif italic">faaliyet alanı.</span>
          </h2>
        </div>

        {/* Tab butonlar — daha tıklanabilir */}
        <div className="flex flex-wrap gap-2 mb-8">
          {areas.map((area, i) => (
            <button
              key={i}
              onClick={() => setActiveArea(i)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${
                activeArea === i
                  ? "bg-[#1E4D3A] text-white shadow-[0_4px_16px_-4px_rgba(0,74,48,0.4)]"
                  : "bg-white text-[#5C5C56] border border-[#E8E4DC] hover:border-[#1E4D3A]/30 hover:text-[#1E4D3A] hover:shadow-sm"
              }`}
            >
              <span className={`text-[10px] font-semibold tracking-wider ${activeArea === i ? "text-white/50" : "text-[#9C9C94] group-hover:text-[#1E4D3A]/50"}`}>
                {area.id}
              </span>
              {area.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Fotoğraf */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image
              src={areas[activeArea].image}
              alt={areas[activeArea].title}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase block mb-2">
                {areas[activeArea].id} / 05
              </span>
              <h3 className="text-white text-xl font-medium tracking-tight">
                {areas[activeArea].title}
              </h3>
            </div>
          </div>

          {/* Metin */}
          <div className="flex flex-col justify-center lg:py-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#1E4D3A]/50 uppercase">
                {areas[activeArea].id}
              </span>
              <div className="w-8 h-[1px] bg-[#1E4D3A]/20" />
              <span className="text-[10px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase">
                Faaliyet Alanı
              </span>
            </div>
            <h3 className="text-[#231F20] text-2xl md:text-3xl font-light tracking-tight mb-5">
              {areas[activeArea].title}
            </h3>
            <p className="text-[#5C5C56] text-base font-light leading-relaxed">
              {areas[activeArea].desc}
            </p>

            {/* Navigasyon */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#E8E4DC]">
              <button
                onClick={() => setActiveArea((prev) => (prev - 1 + areas.length) % areas.length)}
                className="flex items-center gap-2 text-[12px] font-medium text-[#9C9C94] hover:text-[#1E4D3A] transition-colors rotate-180"
              >
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
              <span className="text-[11px] text-[#9C9C94]">
                {activeArea + 1} / {areas.length}
              </span>
              <button
                onClick={() => setActiveArea((prev) => (prev + 1) % areas.length)}
                className="flex items-center gap-2 text-[12px] font-medium text-[#9C9C94] hover:text-[#1E4D3A] transition-colors"
              >
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EkoBinaAlanlar;
