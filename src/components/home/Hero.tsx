"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#1E4D3A] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[40%] w-[50%] h-[60%] bg-[#B7D8A6]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[35%] h-[50%] bg-[#13362A]/60 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-96px)]">

          <div className="flex flex-col justify-center">

            <div className="mb-8">
              <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase">
                <span className="w-6 h-[1px] bg-white/20" />
                Sürdürülebilir Gelecek
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] text-white mb-8 md:mb-10">
              <span className="font-light block">Ekolojik</span>
              <span className="font-semibold block">Yaşamın</span>
              <span className="font-light italic text-[#B7D8A6] block mt-2">Yeni Adresi.</span>
            </h1>

            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-[420px] mb-10 md:mb-12">
              Doğayla uyumlu, sürdürülebilir ve modern bir yaşam için
              geleneksel dokuyu yenilikçi mimariyle buluşturuyoruz.
            </p>

            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <Link
                href="/projeler/eko-bina"
                className="group inline-flex items-center justify-center gap-2 bg-[#FAF9F6] text-[#1E4D3A] text-[12px] sm:text-[13px] font-medium tracking-wide px-5 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white transition-all duration-500 shadow-xl shadow-black/10 whitespace-nowrap"
              >
                Projeleri Keşfet
                <ArrowUpRight size={14} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>

              <Link
                href="/hakkimizda"
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/60 text-[12px] sm:text-[13px] font-medium tracking-wide px-5 sm:px-8 py-3 sm:py-4 rounded-full hover:border-white/30 hover:text-white transition-all duration-500 whitespace-nowrap"
              >
                Manifestomuz
              </Link>
            </div>

            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/5 grid grid-cols-3 gap-6 md:gap-12">
              {[
                { value: "2019", label: "Kuruluş" },
                { value: "8+", label: "Aktif Proje" },
                { value: "100+", label: "Gönüllü" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[280px] sm:h-[340px] lg:h-[80vh] lg:max-h-[750px] mt-6 lg:mt-0">
            <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden border border-white/5 p-2 lg:p-3">
              <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src="/anasayfa/heroserender.webp"
                  alt="Serender ekolojik yaşam"
                  fill
                  className="object-cover  transition-transform duration-1000 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E4D3A]/60 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-3 sm:left-4 lg:-left-6 bg-[#1E4D3A]/40 backdrop-blur-2xl border border-white/10 rounded-2xl lg:rounded-3xl px-4 sm:px-5 lg:px-8 py-3 sm:py-4 lg:py-6 shadow-2xl">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 flex-shrink-0">
                  <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#B7D8A6] rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-0.5">
                    Yalova, Türkiye
                  </p>
                  <p className="text-white font-light text-[11px] sm:text-xs lg:text-sm">
                    Doğayla uyumlu yaşam için buradayız
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
