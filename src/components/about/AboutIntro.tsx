import React from "react";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="relative w-full bg-white py-24 md:py-36 overflow-hidden">

      <svg
        className="absolute top-0 left-0 w-[420px] h-[420px] opacity-[0.04] pointer-events-none -translate-x-1/3 -translate-y-1/4"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M380 20 C380 20 200 20 60 160 C-40 260 20 380 20 380 C20 380 20 200 160 80 C260 -10 380 20 380 20Z"
          fill="#1E4D3A"
        />
        <path
          d="M340 60 C340 60 180 60 80 180 C0 280 50 360 50 360 C50 360 40 200 140 100 C240 10 340 60 340 60Z"
          fill="#1E4D3A"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-[320px] h-[320px] opacity-[0.04] pointer-events-none translate-x-1/4 translate-y-1/4"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 280 C20 280 200 280 280 120 C340 0 220 20 220 20 C220 20 280 140 160 220 C60 290 20 280 20 280Z"
          fill="#1E4D3A"
        />
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">

        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col items-center lg:items-start lg:sticky lg:top-32">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">

              <div className="absolute inset-0 bg-[#B7D8A6]/10 rounded-full blur-[80px]" />

              <Image
                src="/SERENDER.svg"
                alt="Serender Ekolojik Yaşam Derneği"
                width={720}
                height={720}
                className="relative z-10 object-contain w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px]"
              />
            </div>

            
          </div>

          <div className="lg:col-span-7 lg:pt-4">

            <h2 className="text-[#231F20] text-3xl md:text-5xl lg:text-[3.25rem] font-light leading-[1.15] tracking-tight mb-12 md:mb-16">
              Toprağın hafızasını<br />
              <span className="font-serif italic text-[#5C5C56]">geleceğe</span>{" "}
              <span className="text-[#1E4D3A] font-medium">taşıyoruz.</span>
            </h2>

            <p className="text-[#231F20] text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12 border-l-2 border-[#1E4D3A] pl-6">
              Serender Ekolojik Yaşam Derneği, sürdürülebilir yaşam kültürünü
              toplumun her kesimine ulaştırmak amacıyla 2019 yılında
              Yalova&apos;da kurulmuş bir sivil toplum kuruluşudur.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#1E4D3A]/70 uppercase mb-4">
                  Ne Yapıyoruz
                </p>
                <p className="text-[#5C5C56] text-[15px] font-light leading-relaxed">
                  Komposttan permakültüre, ekolojik mimariden atölye eğitimlerine
                  kadar geniş bir yelpazede faaliyet göstererek hem bireysel hem
                  de toplumsal dönüşüme katkı sağlıyoruz.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#1E4D3A]/70 uppercase mb-4">
                  Neden Buradayız
                </p>
                <p className="text-[#5C5C56] text-[15px] font-light leading-relaxed">
                  Doğayı korumak bir tercih değil, bir sorumluluktur.
                  Biz bu sorumluluğu topluca üstlenmek için buradayız.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8 border-t border-[#E8E4DC]">
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#9C9C94] uppercase">
                — Serender Manifestomuz
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
