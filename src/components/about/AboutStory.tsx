import React from "react";

const milestones = [
  {
    year: "2019",
    title: "Kuruluş",
    desc: "Yalova'da bir grup çevre gönüllüsünün bir araya gelmesiyle Serender Ekolojik Yaşam Derneği kuruldu.",
  },
  {
    year: "2020",
    title: "İlk Atölyeler",
    desc: "Kompost ve permakültür alanında ilk uygulamalı eğitimler düzenlendi. Topluluk hızla büyüdü.",
  },
  {
    year: "2022",
    title: "Eğitim Merkezi",
    desc: "Çocuk ve yetişkinlere yönelik düzenli eğitim programları hayata geçirildi.",
  },
  {
    year: "2024",
    title: "Sürdürülebilir Yaşam Merkezi",
    desc: "Belediye iş birliğiyle çok yönlü bir ekolojik yaşam ve eğitim merkezi projesi başlatıldı.",
  },
];

const AboutStory = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-6 block">
            Hikayemiz
          </span>
          <h2 className="text-[#231F20] text-3xl md:text-5xl font-light leading-tight tracking-tight">
            Küçük bir adımdan<br />
            <span className="font-serif italic">büyük bir harekete.</span>
          </h2>
        </div>

        <div className="hidden md:block">

          <div className="relative flex items-center mb-10">
            <div className="absolute left-0 right-0 h-[1px] bg-[#E8E4DC]" />
            {milestones.map((item, i) => (
              <div
                key={i}
                className="relative flex-1 flex justify-center"
              >
                <div className="w-4 h-4 rounded-full border-2 border-[#004A30] bg-[#FAF9F6] relative z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#004A30]" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex mb-6">
            {milestones.map((item, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <span className="text-[#004A30] text-sm font-medium tracking-wide">
                  {item.year}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {milestones.map((item, i) => (
              <div
                key={i}
                className="flex-1 bg-white rounded-2xl p-6 border border-[#E8E4DC]"
              >
                <h3 className="text-[#231F20] text-base font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5C5C56] text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {milestones.map((item, i) => (
            <div key={i} className="flex gap-5 pb-6 border-b border-[#E8E4DC] last:border-0">
              <span className="text-[#004A30] text-sm font-medium tracking-wide w-12 flex-shrink-0 pt-0.5">
                {item.year}
              </span>
              <div>
                <h3 className="text-[#231F20] text-base font-medium mb-2">{item.title}</h3>
                <p className="text-[#5C5C56] text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
