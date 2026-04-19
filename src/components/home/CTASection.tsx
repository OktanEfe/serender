"use client";

import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32 font-inter">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative overflow-hidden bg-[#2D4F1E] rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-24 text-center border border-black/5 shadow-2xl shadow-[#2D4F1E]/20">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-white text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Geleceği doğayla <br /> 
              <span className="italic font-light opacity-90">birlikte inşa edelim.</span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Sürdürülebilir bir yaşam modeline geçiş yapmak ve projelerimize 
              destek olmak için ilk adımı bugün atın.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/bize-ulasin"
                className="w-full sm:w-auto px-10 py-4 bg-white text-[#2D4F1E] rounded-xl font-bold transition-all duration-300 hover:bg-[#F7F5EF] hover:scale-[1.02] active:scale-[0.98] shadow-xl"
              >
                Bize Ulaşın
              </Link>
              <Link
                href="/projeler"
                className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white rounded-xl font-bold transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
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

export default CTASection;