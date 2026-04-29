"use client";

import React from "react";
import Image from "next/image";

const values = [
  {
    id: "01",
    title: "Doğayla Uyum",
    description: "Mimariden gündelik yaşama kadar her adımda ekosistemin doğal döngülerini koruyan çözümler geliştiriyoruz.",
    image: "/anasayfa/introsection1.webp",
  },
  {
    id: "02",
    title: "Sürdürülebilir Yaşam",
    description: "Kaynakları tüketmek yerine dönüştüren, kalıcı ve ekolojik ayak izi düşük bir yaşam modelini savunuyoruz.",
    image: "/anasayfa/introsection2.webp",
  },
  {
    id: "03",
    title: "Topluluk ve Paylaşım",
    description: "Doğa bilincini kolektif bir güçle yaymak adına dayanışma temelli öğrenme ve uygulama alanları açıyoruz.",
    image: "/anasayfa/introsection3.webp",
  },
  {
    id: "04",
    title: "Gelecek İçin Dönüşüm",
    description: "Yarının dünyasını bugünden hazırlıyor, ekolojik mirası modern ihtiyaçlarla harmanlayarak dönüştürüyoruz.",
    image: "/anasayfa/introsection4.webp",
  },
];

const ValuesSection = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 sm:py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-10 sm:mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-3 block">
              Değerlerimiz
            </span>
            <h2 className="text-[#231F20] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
              Daha derin bir<br />
              <span className="font-serif italic font-normal">bağ kurmak için.</span>
            </h2>
          </div>
          <p className="text-[#5C5C56] text-sm font-light leading-relaxed max-w-xs md:pb-1">
            Prensiplerimiz, sadece birer kural değil; doğaya olan borcumuzun birer nişanesidir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4">
          {values.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[300px] lg:min-h-[460px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                <span className="text-3xl sm:text-4xl font-extralight text-[#B7D8A6]">
                  {item.id}
                </span>

                <div>
                  <h3 className="text-white text-lg sm:text-xl font-medium tracking-tight mb-2 sm:mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm sm:text-[15px] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
