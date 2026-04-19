import React from "react";
import Image from "next/image";

const values = [
  {
    id: "01",
    title: "Doğayla Uyum",
    desc: "Her projemizde ekosistemin doğal döngülerini koruyarak, doğayla çatışmak yerine onunla birlikte var olmayı seçiyoruz.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=85",
    large: true,
  },
  {
    id: "02",
    title: "Uygulamalı Öğrenme",
    desc: "Bilgiyi sınıftan çıkarıp toprağa, atölyeye, pratiğe taşıyoruz.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    large: false,
  },
  {
    id: "03",
    title: "Topluluk Ruhu",
    desc: "Bireysel dönüşümün toplumsal bir güce dönüşeceğine inanıyoruz.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    large: false,
  },
  {
    id: "04",
    title: "Gelecek Sorumluluğu",
    desc: "Bugün attığımız her adım yarının dünyasını şekillendiriyor.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    large: false,
  },
];

const AboutValues = () => {
  const featured = values[0];
  const rest = values.slice(1);

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-6 block">
              Değerlerimiz
            </span>
            <h2 className="text-[#231F20] text-3xl md:text-5xl font-light leading-tight tracking-tight">
              Her kararımızın<br />
              <span className="font-serif italic">arkasındaki ilkeler.</span>
            </h2>
          </div>
          <p className="text-[#5C5C56] text-sm font-light leading-relaxed max-w-xs">
            Doğaya olan borcumuzu, günlük pratiklerimize yansıtıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="group relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[620px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
              <span className="text-5xl font-extralight text-white/60">{featured.id}</span>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight mb-4">
                  {featured.title}
                </h3>
                <p className="text-white/65 text-base font-light leading-relaxed max-w-sm">
                  {featured.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {rest.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden flex-1 min-h-[180px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                <div className="absolute inset-0 px-7 py-6 flex items-center gap-8">
                  <span className="text-3xl font-extralight text-white/60 flex-shrink-0">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-white text-lg font-medium tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-[13px] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutValues;
