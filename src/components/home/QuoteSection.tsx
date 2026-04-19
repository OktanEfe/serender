"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const QuoteCTA = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="relative bg-[#004A30] rounded-3xl overflow-hidden px-10 md:px-20 py-20 md:py-28 text-center">

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0F6A4A]/25 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#003623]/50 rounded-full blur-[100px]" />
          </div>

          <svg
            className="absolute top-0 right-0 w-[280px] h-[280px] opacity-[0.04] pointer-events-none"
            viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380 20 C380 20 200 20 60 160 C-40 260 20 380 20 380 C20 380 20 200 160 80 C260 -10 380 20 380 20Z" fill="white"/>
            <path d="M340 60 C340 60 180 60 80 180 C0 280 50 360 50 360 C50 360 40 200 140 100 C240 10 340 60 340 60Z" fill="white"/>
          </svg>

          <div className="relative z-10 max-w-3xl mx-auto">

            <span className="text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase mb-10 block">
              Vizyon
            </span>

            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6">
              &quot;Doğaya dönmek değil,{" "}
              <span className="font-serif italic text-white/70">doğada olduğumuzu</span>{" "}
              hatırlamak.&quot;
            </h2>

            <div className="flex items-center justify-center gap-3 mb-16">
              <div className="w-8 h-[1px] bg-white/20" />
              <p className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
                Sürdürülebilir Bir Gelecek Vizyonu
              </p>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>

            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
              Sürdürülebilir bir yaşam modeline geçiş yapmak ve projelerimize
              destek olmak için ilk adımı bugün atın.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/bize-ulasin"
                className="group inline-flex items-center gap-2 bg-white text-[#004A30] text-[13px] font-medium tracking-wide px-7 py-3.5 rounded-full hover:bg-[#FAF9F6] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Bize Ulaşın
                <ArrowUpRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 border border-white/15 text-white/70 text-[13px] font-medium tracking-wide px-7 py-3.5 rounded-full hover:border-white/30 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Projeleri Görün
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default QuoteCTA;
