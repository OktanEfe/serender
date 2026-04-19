"use client";

import React from "react";
import Image from "next/image";

const values = [
  {
    id: "01",
    title: "Doğayla Uyum",
    description: "Mimariden gündelik yaşama kadar her adımda ekosistemin doğal döngülerini koruyan çözümler geliştiriyoruz.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  },
  {
    id: "02",
    title: "Sürdürülebilir Yaşam",
    description: "Kaynakları tüketmek yerine dönüştüren, kalıcı ve ekolojik ayak izi düşük bir yaşam modelini savunuyoruz.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
  },
  {
    id: "03",
    title: "Topluluk ve Paylaşım",
    description: "Doğa bilincini kolektif bir güçle yaymak adına dayanışma temelli öğrenme ve uygulama alanları açıyoruz.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
  },
  {
    id: "04",
    title: "Gelecek İçin Dönüşüm",
    description: "Yarının dünyasını bugünden hazırlıyor, ekolojik mirası modern ihtiyaçlarla harmanlayarak dönüştürüyoruz.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  },
];

const ValuesSection = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-3 block">
              Değerlerimiz
            </span>
            <h2 className="text-[#231F20] text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
              Daha derin bir<br />
              <span className="font-serif italic font-normal">bağ kurmak için.</span>
            </h2>
          </div>
          <p className="text-[#5C5C56] text-sm font-light leading-relaxed max-w-xs md:pb-1">
            Prensiplerimiz, sadece birer kural değil; doğaya olan borcumuzun birer nişanesidir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[460px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between">
                <span className="text-4xl font-extralight text-white/65">
                  {item.id}
                </span>

                <div>
                  <h3 className="text-white text-xl font-medium tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-[15px] font-light leading-relaxed">
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
