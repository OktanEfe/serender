"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="relative bg-[#004A30] rounded-3xl overflow-hidden min-h-[520px]">

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0F6A4A]/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#003623]/60 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[520px]">

            <div className="p-10 md:p-14 lg:p-16 flex flex-col gap-8">

              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span className="text-[10px] font-medium tracking-[0.25em] text-white/50 uppercase">
                  Öne Çıkan Proje
                </span>
              </div>

              <div>
                <h2 className="text-white text-4xl md:text-6xl font-light tracking-tight leading-none mb-4">
                  Eko<br />
                  <span className="font-semibold">Bina</span>
                </h2>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md">
                  Geleneksel mimariyi modern enerji çözümleriyle birleştiren,
                  karbon ayak izi sıfıra indirilmiş yaşam alanı prototipimiz.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                <div>
                  <p className="text-white text-2xl font-light tracking-tight mb-1">%100</p>
                  <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">Doğal Malzeme</p>
                </div>
                <div>
                  <p className="text-white text-2xl font-light tracking-tight mb-1">Sıfır</p>
                  <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">Atık Politikası</p>
                </div>
              </div>

              <Link
                href="/projeler/eko-bina"
                className="group inline-flex items-center gap-2 bg-white text-[#004A30] text-[13px] font-medium tracking-wide px-6 py-3 rounded-full w-fit hover:bg-[#FAF9F6] transition-all duration-300"
              >
                Projeyi İncele
                <ArrowUpRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>

            <div className="relative h-[320px] lg:h-full flex items-center justify-center p-8 lg:p-12">
              <svg
                viewBox="0 0 420 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[420px] opacity-90"
              >
                <rect x="60" y="180" width="300" height="160" rx="4" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
                <rect x="80" y="160" width="260" height="30" rx="3" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
                <polygon points="210,60 340,160 80,160" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
                <rect x="170" y="260" width="80" height="80" rx="2" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
                <rect x="90" y="200" width="50" height="50" rx="2" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
                <rect x="280" y="200" width="50" height="50" rx="2" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
                <line x1="90" y1="215" x2="140" y2="215" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <line x1="105" y1="215" x2="105" y2="250" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <line x1="280" y1="215" x2="330" y2="215" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <line x1="305" y1="215" x2="305" y2="250" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <rect x="80" y="120" width="30" height="40" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <rect x="120" y="100" width="30" height="60" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <rect x="270" y="100" width="30" height="60" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <rect x="310" y="120" width="30" height="40" rx="2" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                <line x1="60" y1="340" x2="360" y2="340" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
                <ellipse cx="140" cy="340" rx="8" ry="12" fill="white" fillOpacity="0.08"/>
                <ellipse cx="210" cy="340" rx="10" ry="16" fill="white" fillOpacity="0.08"/>
                <ellipse cx="280" cy="340" rx="8" ry="12" fill="white" fillOpacity="0.08"/>
                <circle cx="210" cy="100" r="20" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
                <line x1="196" y1="100" x2="224" y2="100" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
                <line x1="210" y1="86" x2="210" y2="114" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
              </svg>

              <div className="absolute bottom-8 left-8 bg-white/8 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 hidden md:block">
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-1">
                  İnşaat Durumu
                </p>
                <p className="text-white font-light text-sm">
                  %85 Tamamlandı
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
