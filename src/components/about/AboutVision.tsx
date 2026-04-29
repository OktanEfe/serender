"use client";

import React from "react";

const AboutVision = () => {
  return (
    <section className="relative w-full bg-[#1E4D3A] py-24 md:py-32 overflow-hidden">

      {/* Ambient ışık */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F6A4A]/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#13362A]/50 rounded-full blur-[120px]" />
      </div>

      {/* Dalgalı SVG arka plan */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 300 C150 200 300 400 450 300 C600 200 750 400 900 300 C1050 200 1150 350 1200 300 L1200 600 L0 600Z" fill="white"/>
        <path d="M0 380 C200 280 350 460 550 360 C750 260 900 440 1100 360 C1150 340 1180 350 1200 360 L1200 600 L0 600Z" fill="white" fillOpacity="0.5"/>
        <path d="M0 460 C180 380 320 500 500 430 C680 360 820 480 1000 420 C1100 390 1160 410 1200 420 L1200 600 L0 600Z" fill="white" fillOpacity="0.3"/>

        <style>{`
          @keyframes wave1 {
            0% { d: path("M0 300 C150 200 300 400 450 300 C600 200 750 400 900 300 C1050 200 1150 350 1200 300 L1200 600 L0 600Z"); }
            50% { d: path("M0 320 C150 240 300 360 450 320 C600 240 750 360 900 320 C1050 240 1150 330 1200 320 L1200 600 L0 600Z"); }
            100% { d: path("M0 300 C150 200 300 400 450 300 C600 200 750 400 900 300 C1050 200 1150 350 1200 300 L1200 600 L0 600Z"); }
          }
        `}</style>
      </svg>

      {/* Botanik SVG — sağ üst */}
      <svg
        className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.08] pointer-events-none"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280 10 C280 10 150 10 60 110 C-10 190 20 280 20 280 C20 280 20 160 110 80 C190 10 280 10 280 10Z" fill="white"/>
        <path d="M250 40 C250 40 140 40 70 130 C10 205 40 270 40 270 C40 270 30 160 110 90 C190 25 250 40 250 40Z" fill="white"/>
        <path d="M290 60 C290 60 200 50 150 120 C110 175 130 240 130 240 C130 240 110 170 150 110 C195 45 290 60 290 60Z" fill="white" fillOpacity="0.6"/>
      </svg>

      {/* Botanik SVG — sol alt */}
      <svg
        className="absolute bottom-0 left-0 w-[240px] h-[240px] opacity-[0.06] pointer-events-none"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 230 C10 230 120 200 180 120 C230 55 200 10 200 10 C200 10 190 80 140 140 C80 210 10 230 10 230Z" fill="white"/>
        <path d="M10 190 C10 190 100 165 150 100 C190 48 170 15 170 15 C170 15 165 75 120 125 C65 185 10 190 10 190Z" fill="white"/>
      </svg>

      {/* İnce yatay çizgi detayları */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-[0.04]"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 100 Q300 60 600 100 Q900 140 1200 100" stroke="white" strokeWidth="1" fill="none"/>
        <path d="M0 80 Q300 40 600 80 Q900 120 1200 80" stroke="white" strokeWidth="0.8" fill="none"/>
        <path d="M0 120 Q300 80 600 120 Q900 160 1200 120" stroke="white" strokeWidth="0.8" fill="none"/>
      </svg>

      {/* İçerik */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <div>
            <span className="text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase mb-8 block">
              Vizyonumuz
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-light leading-tight tracking-tight mb-8">
              Ekolojik yaşamın<br />
              <span className="font-serif italic text-white/70">olağan hale geldiği</span><br />
              bir dünya.
            </h2>
            <p className="text-white/55 text-base font-light leading-relaxed">
              İnsanların doğayla uyum içinde yaşadığı, sürdürülebilirliğin
              bir lüks değil standart olduğu bir gelecek için çalışıyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase block">
              Misyonumuz
            </span>

            {[
              "Uygulamalı eğitimlerle ekolojik farkındalık yaratmak",
              "Sürdürülebilir yaşam modellerini topluma tanıtmak ve yaymak",
              "Yerel üretim ve tüketim döngülerini güçlendirmek",
              "Nesiller arası çevre bilinci aktarımını sağlamak",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-6 border-b border-white/[0.08] last:border-0">
                <span className="text-[11px] font-medium text-white/30 tracking-wider mt-0.5 flex-shrink-0">
                  0{i + 1}
                </span>
                <p className="text-white/70 text-base font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVision;
