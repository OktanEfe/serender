import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Link
            href="/projeler"
            className="group bg-white rounded-3xl p-8 md:p-10 flex items-end justify-between border border-[#E8E4DC] hover:border-[#1E4D3A]/20 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,74,48,0.12)] min-h-[180px]"
          >
            <div>
              <p className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase mb-5">
                Çalışmalarımız
              </p>
              <h3 className="text-3xl font-light text-[#231F20] leading-tight tracking-tight group-hover:text-[#1E4D3A] transition-colors duration-300">
                Projelerimizi<br />
                <span className="font-serif italic">keşfedin.</span>
              </h3>
            </div>
            <ArrowUpRight size={24} strokeWidth={1.5} className="text-[#9C9C94] group-hover:text-[#1E4D3A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mb-1" />
          </Link>

          <Link
            href="/bize-ulasin"
            className="group bg-[#1E4D3A] rounded-3xl p-8 md:p-10 flex items-end justify-between min-h-[180px] hover:bg-[#13362A] transition-all duration-500"
          >
            <div>
              <p className="text-[11px] font-medium tracking-[0.15em] text-white/40 uppercase mb-5">
                Topluluğa Katıl
              </p>
              <h3 className="text-3xl font-light text-white leading-tight tracking-tight">
                Aramıza<br />
                <span className="font-serif italic">katılın.</span>
              </h3>
            </div>
            <ArrowUpRight size={24} strokeWidth={1.5} className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mb-1" />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;
