import React from "react";

const milestones = [
  {
    year: "2019",
    title: "Kuruluş",
    desc: "Yalova'da bir grup çevre gönüllüsünün bir araya gelmesiyle Serender Ekolojik Yaşam Derneği kuruldu.",
    badge: "İlk adım",
  },
  {
    year: "2020",
    title: "İlk Atölyeler",
    desc: "Kompost ve permakültür alanında ilk uygulamalı eğitimler düzenlendi. Topluluk hızla büyüdü.",
    badge: "Topluluk",
  },
  {
    year: "2022",
    title: "Eğitim Merkezi",
    desc: "Çocuk ve yetişkinlere yönelik düzenli eğitim programları hayata geçirildi.",
    badge: "Eğitim",
  },
  {
    year: "2024",
    title: "Sürdürülebilir Yaşam Merkezi",
    desc: "Belediye iş birliğiyle çok yönlü bir ekolojik yaşam ve eğitim merkezi projesi başlatıldı.",
    badge: "Vizyon",
  },
];

const AboutStory = () => {
  return (
    <section className="relative w-full bg-[#FAF9F6] py-24 md:py-36 overflow-hidden">

      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#B7D8A6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#1E4D3A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <div className="max-w-2xl">
            <span className="text-[10px] font-medium tracking-[0.3em] text-[#1E4D3A] uppercase mb-6 block">
              <span className="inline-block w-6 h-[1px] bg-[#1E4D3A] align-middle mr-3" />
              Hikayemiz
            </span>
            <h2 className="text-[#231F20] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">
              Küçük bir<br />
              adımdan,{" "}
              <span className="font-serif italic text-[#5C5C56]">büyük</span><br />
              <span className="font-medium text-[#1E4D3A]">bir harekete.</span>
            </h2>
          </div>

          <div className="md:text-right">
            <p className="text-[10px] font-medium tracking-[0.25em] text-[#9C9C94] uppercase mb-3">
              Beş yıllık yolculuk
            </p>
            <p className="text-[#1E4D3A] text-2xl md:text-3xl font-light tracking-tight">
              <span className="font-serif italic">2019</span>
              <span className="text-[#9C9C94] mx-3">/</span>
              <span className="font-serif italic">2024</span>
            </p>
          </div>
        </div>

        <div className="hidden md:block relative">

          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full pointer-events-none"
            width="200"
            viewBox="0 0 200 1200"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M100 0 C 40 200, 160 400, 100 600 C 40 800, 160 1000, 100 1200"
              stroke="#1E4D3A"
              strokeWidth="1"
              strokeOpacity="0.18"
              strokeDasharray="4 6"
            />
          </svg>

          <div className="relative space-y-24 lg:space-y-32">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`grid grid-cols-12 gap-6 items-center ${
                    isLeft ? "" : "direction-rtl"
                  }`}
                >
                  <div
                    className={`col-span-5 ${
                      isLeft ? "" : "col-start-8"
                    }`}
                  >
                    <div className={isLeft ? "text-right pr-8" : "text-left pl-8"}>

                      <p className="text-[#1E4D3A] text-7xl lg:text-8xl font-extralight tracking-tight leading-none mb-4">
                        {item.year}
                      </p>

                      <span className="inline-block bg-[#1E4D3A]/8 text-[#1E4D3A] text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-5">
                        {item.badge}
                      </span>

                      <h3 className="text-[#231F20] text-xl lg:text-2xl font-medium tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#5C5C56] text-[15px] font-light leading-relaxed max-w-md ml-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-2 col-start-6 flex flex-col items-center justify-center relative">
                    <div className="relative w-14 h-14 rounded-full bg-[#FAF9F6] border-[1.5px] border-[#1E4D3A] flex items-center justify-center z-10">
                      <span className="text-[#1E4D3A] text-xs font-medium tracking-[0.1em]">
                        0{i + 1}
                      </span>
                      <span className="absolute inset-0 rounded-full border border-[#1E4D3A]/30 animate-ping" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8 md:hidden">
          {milestones.map((item, i) => (
            <div key={i} className="relative pl-8 pb-8 border-b border-[#E8E4DC] last:border-0 last:pb-0">

              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#1E4D3A]" />
              {i < milestones.length - 1 && (
                <div className="absolute left-[5px] top-5 bottom-0 w-[1px] bg-[#1E4D3A]/15" />
              )}

              <div className="flex items-baseline gap-3 mb-3">
                <p className="text-[#1E4D3A] text-3xl font-extralight tracking-tight">
                  {item.year}
                </p>
                <span className="bg-[#1E4D3A]/8 text-[#1E4D3A] text-[9px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-[#231F20] text-base font-medium mb-2">{item.title}</h3>
              <p className="text-[#5C5C56] text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
