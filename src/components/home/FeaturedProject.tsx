import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-3 block">
            Öne Çıkan Proje
          </span>
          <h2 className="text-[#231F20] text-2xl md:text-4xl font-light leading-tight tracking-tight">
            Şu an üzerinde{" "}
            <span className="font-serif italic">çalıştığımız.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[500px]">
            <Image
              src="/images/ekobina/ekobina.png"
              alt="Sürdürülebilir Yaşam ve Eğitim Merkezi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7D8A6] animate-pulse" />
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase">
                  Devam Eden Proje
                </span>
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-light leading-tight tracking-tight">
                Sürdürülebilir<br />
                <span className="font-semibold">Yaşam &</span>{" "}
                <span className="font-light italic text-[#B7D8A6]">Eğitim Merkezi</span>
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-[#E8E4DC] flex-1">
              <p className="text-[#5C5C56] text-base font-light leading-relaxed mb-8">
                Atıkların doğaya kazandırıldığı, çocuklar ve yetişkinler için
                uygulamalı eğitimlerin verildiği, ekolojik yaşam bilincinin
                yaygınlaştırıldığı çok yönlü bir sürdürülebilir yaşam merkezi.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "%100", label: "Doğal Malzeme" },
                  { value: "Sıfır", label: "Atık Politikası" },
                  { value: "5+", label: "Faaliyet Alanı" },
                  { value: "2024", label: "Başlangıç" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 border border-[#E8E4DC]">
                    <p className="text-xl font-light text-[#231F20] tracking-tight mb-1">{s.value}</p>
                    <p className="text-[10px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Kompost", "Sera", "Eğitim", "Atölye", "Kafe"].map((tag) => (
                  <span key={tag} className="bg-[#1E4D3A]/8 text-[#1E4D3A] text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/projeler/eko-bina"
                className="group inline-flex items-center gap-2 bg-[#1E4D3A] text-white text-[13px] font-medium tracking-wide px-6 py-3 rounded-full hover:bg-[#13362A] transition-all duration-300"
              >
                Projeyi İncele
                <ArrowUpRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-[#1E4D3A] rounded-3xl p-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-1">
                  İnşaat Durumu
                </p>
                <p className="text-white font-light text-lg">
                  Planlama aşamasında
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                <span className="w-2 h-2 bg-[#B7D8A6] rounded-full animate-pulse" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
