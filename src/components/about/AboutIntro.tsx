import React from "react";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="w-full bg-white py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full max-w-[380px] aspect-square">
              <div className="absolute inset-0 bg-white rounded-full blur-[100px]" />
              <Image
                src="/images/SERENDER.svg"
                alt="Serender Ekolojik Yaşam Derneği"
                width={340}
                height={340}
                className="relative z-10 object-contain w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px]"
              />
            </div>
          </div>

          {/* Metin */}
          <div>
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-6 block">
              Kim Olduğumuz
            </span>

            <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight mb-8">
              Toprağın hafızasını<br />
              <span className="font-serif italic">geleceğe taşıyoruz.</span>
            </h2>

            <div className="space-y-5">
              <p className="text-[#5C5C56] text-base font-light leading-relaxed">
                Serender Ekolojik Yaşam Derneği, sürdürülebilir yaşam kültürünü
                toplumun her kesimine ulaştırmak amacıyla 2019 yılında Yalova&apos;da
                kurulmuş bir sivil toplum kuruluşudur.
              </p>
              <p className="text-[#5C5C56] text-base font-light leading-relaxed">
                Komposttan permakültüre, ekolojik mimariden atölye eğitimlerine
                kadar geniş bir yelpazede faaliyet göstererek hem bireysel hem de
                toplumsal dönüşüme katkı sağlıyoruz.
              </p>
              <p className="text-[#5C5C56] text-base font-light leading-relaxed">
                Doğayı korumak bir tercih değil, bir sorumluluktur. Biz bu
                sorumluluğu topluca üstlenmek için buradayız.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
