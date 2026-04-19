import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#004A30] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F6A4A]/25 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#003623]/50 rounded-full blur-[120px]" />
      </div>

      {/* Botanik SVG İllüstrasyon — Sağ Taraf */}
      <svg
        className="absolute right-0 top-0 h-full w-[55%] opacity-[0.12] pointer-events-none"
        viewBox="0 0 600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Ana dal */}
        <path d="M300 900 C300 900 295 700 310 580 C325 460 280 380 300 260 C315 160 340 80 340 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>

        {/* Sol büyük yaprak grubu */}
        <path d="M300 580 C300 580 180 540 120 460 C80 400 100 320 160 300 C220 280 280 340 300 580Z" fill="white" fillOpacity="0.6"/>
        <path d="M300 580 C280 500 240 440 200 400" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>

        {/* Sağ büyük yaprak grubu */}
        <path d="M310 480 C310 480 430 430 490 350 C530 290 510 210 450 195 C390 180 330 240 310 480Z" fill="white" fillOpacity="0.5"/>
        <path d="M310 480 C330 400 370 340 420 300" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>

        {/* Sol orta yaprak */}
        <path d="M295 380 C295 380 190 350 150 280 C120 220 145 155 195 145 C245 135 285 195 295 380Z" fill="white" fillOpacity="0.45"/>
        <path d="M295 380 C275 310 255 255 230 215" stroke="white" strokeWidth="0.8" strokeOpacity="0.35"/>

        {/* Sağ üst yaprak */}
        <path d="M315 300 C315 300 420 260 460 185 C490 125 465 65 415 58 C365 50 320 110 315 300Z" fill="white" fillOpacity="0.4"/>
        <path d="M315 300 C330 235 355 180 385 145" stroke="white" strokeWidth="0.8" strokeOpacity="0.3"/>

        {/* Küçük yaprakçıklar sol */}
        <path d="M290 260 C290 260 230 240 205 195 C185 160 200 120 230 115 C260 110 285 150 290 260Z" fill="white" fillOpacity="0.35"/>

        {/* Küçük yaprakçıklar sağ */}
        <path d="M320 200 C320 200 385 175 405 130 C420 95 400 60 370 58 C340 56 320 90 320 200Z" fill="white" fillOpacity="0.3"/>

        {/* Dal dalcıkları */}
        <path d="M305 680 C305 680 240 660 210 625" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M308 650 C308 650 370 625 395 585" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M302 750 C302 750 255 740 230 710" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
        <path d="M305 720 C305 720 345 705 365 675" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>

        {/* Tohum/çiçek detayları */}
        <circle cx="340" cy="20" r="6" fill="white" fillOpacity="0.4"/>
        <circle cx="340" cy="20" r="12" stroke="white" strokeOpacity="0.2" strokeWidth="1" fill="none"/>
        <circle cx="195" cy="145" r="4" fill="white" fillOpacity="0.35"/>
        <circle cx="450" cy="195" r="4" fill="white" fillOpacity="0.3"/>

        {/* Arka planda büyük organik şekil */}
        <path d="M450 800 C450 800 580 700 590 560 C600 420 520 340 480 300 C560 380 580 480 560 580 C540 680 480 760 450 800Z" fill="white" fillOpacity="0.03"/>
      </svg>

      {/* Sol alt köşe yaprak detayı */}
      <svg
        className="absolute left-0 bottom-0 w-[220px] h-[220px] opacity-[0.07] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 200 C0 200 60 160 100 100 C130 55 120 10 120 10 C120 10 100 70 60 110 C20 150 0 200 0 200Z" fill="white"/>
        <path d="M0 160 C0 160 40 130 70 85 C90 55 85 20 85 20 C85 20 70 55 45 85 C15 120 0 160 0 160Z" fill="white"/>
      </svg>

      {/* İçerik */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase mb-10 block">
            <span className="w-6 h-[1px] bg-white/20" />
            Hakkımızda
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-white leading-[1.02] tracking-tight mb-10">
            Doğayla<br />
            <span className="font-semibold">birlikte</span><br />
            <span className="font-light italic text-white/55">var olmak.</span>
          </h1>

          <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
            Serender, ekolojik yaşamı bir tercih değil bir sorumluluk olarak
            benimseyen insanların bir araya geldiği yerdir.
          </p>

          <div className="mt-16 pt-8 border-t border-white/8 grid grid-cols-3 gap-10 max-w-md">
            {[
              { value: "2019", label: "Kuruluş" },
              { value: "500+", label: "Gönüllü" },
              { value: "12+", label: "Proje" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-extralight text-white tracking-tight mb-1">{stat.value}</p>
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/35 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
