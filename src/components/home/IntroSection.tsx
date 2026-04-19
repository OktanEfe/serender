"use client";

import React from "react";

const IntroSection = () => {
  return (
    <section className="relative w-full bg-[#FAF9F6] py-24 md:py-40 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004A30]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004A30]/4 rounded-full blur-[100px]" />
      </div>

      <svg
        className="absolute top-0 right-0 w-[420px] h-[420px] opacity-[0.06] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M380 20 C380 20 200 20 60 160 C-40 260 20 380 20 380 C20 380 20 200 160 80 C260 -10 380 20 380 20Z"
          fill="#004A30"
        />
        <path
          d="M340 60 C340 60 180 60 80 180 C0 280 50 360 50 360 C50 360 40 200 140 100 C240 10 340 60 340 60Z"
          fill="#004A30"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[320px] h-[320px] opacity-[0.05] pointer-events-none"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 280 C20 280 200 280 280 120 C340 0 220 20 220 20 C220 20 280 140 160 220 C60 290 20 280 20 280Z"
          fill="#004A30"
        />
        <path
          d="M40 260 C40 260 180 250 250 120 C300 30 200 40 200 40 C200 40 260 150 160 220 C70 280 40 260 40 260Z"
          fill="#004A30"
        />
      </svg>

      <svg
        className="absolute top-1/2 left-[8%] -translate-y-1/2 w-[60px] opacity-[0.08] pointer-events-none"
        viewBox="0 0 40 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20" y1="0" x2="20" y2="120" stroke="#004A30" strokeWidth="1.5" />
        <path d="M20 30 C20 30 5 20 2 8 C8 12 20 30 20 30Z" fill="#004A30" />
        <path d="M20 30 C20 30 35 20 38 8 C32 12 20 30 20 30Z" fill="#004A30" />
        <path d="M20 55 C20 55 4 44 0 30 C8 36 20 55 20 55Z" fill="#004A30" />
        <path d="M20 55 C20 55 36 44 40 30 C32 36 20 55 20 55Z" fill="#004A30" />
        <path d="M20 78 C20 78 6 67 3 52 C10 58 20 78 20 78Z" fill="#004A30" />
        <path d="M20 78 C20 78 34 67 37 52 C30 58 20 78 20 78Z" fill="#004A30" />
      </svg>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col space-y-12">

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#004A30] uppercase">
              Biz Kimiz
            </span>
            <div className="h-[1px] w-10 bg-[#004A30]/30" />
          </div>

          <div>
            <h2 className="text-[#231F20] text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.25] tracking-tight">
              Serender, toprağın hafızasını modern bir vizyonla buluşturan bir{" "}
              <span className="font-serif italic text-[#5C5C56]">ekolojik farkındalık </span>
              hareketidir. İnanıyoruz ki; gerçek lüks, doğayla kurulan{" "}
              <span className="text-[#004A30] font-medium">sessiz bir uyumun </span>
              içinde saklıdır.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-8 border-t border-[#E8E4DC]">
            <p className="text-[#5C5C56] text-lg font-light leading-relaxed">
              Sürdürülebilirliği sadece bir kavram değil, bir yaşam pratiği
              olarak görüyoruz. Ekolojik yapı projelerinden yerel kalkınmaya
              kadar her adımımızda, gelecek nesillere nefes alan bir dünya
              bırakmayı amaçlıyoruz.
            </p>
            <div className="flex flex-col justify-end">
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#9C9C94] uppercase">
                — Serender Ekolojik Yaşam Derneği
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;
