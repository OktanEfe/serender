const stages = [
  { num: "01", title: "Proje Onayı", desc: "Alan tahsisi ve resmi onay süreçleri" },
  { num: "02", title: "Mimari Planlama", desc: "Ekolojik tasarım ve mühendislik" },
  { num: "03", title: "Altyapı & Kurulum", desc: "İnşaat ve sistem kurulumları" },
  { num: "04", title: "Pilot Eğitimler", desc: "İlk atölye ve eğitim programları" },
  { num: "05", title: "Tam Kapasite", desc: "Merkez tam faaliyete geçiş" },
];

const model = [
  { label: "Arazi", value: "Belediye tarafından tahsis" },
  { label: "Yapı & İşletme", value: "Dernek tarafından hibe ve desteklerle" },
  { label: "Eğitimler", value: "Uzmanlar ve gönüllüler tarafından" },
  { label: "Gelir", value: "Atölye, ekolojik ürün satışı ve kafe işletmesi" },
];

const EkoBinaAsamalarIsleyis = () => {
  return (
    <section className="relative w-full bg-[#F5EFE6] py-24 md:py-36 overflow-hidden">

      <svg className="absolute bottom-0 left-0 w-[320px] h-[320px] opacity-[0.07] pointer-events-none" viewBox="0 0 320 320" fill="none">
        <path d="M10 310 C10 310 160 260 230 150 C290 55 240 10 240 10 C240 10 225 100 165 190 C90 290 10 310 10 310Z" fill="#004A30"/>
        <path d="M10 260 C10 260 130 215 190 120 C238 44 200 12 200 12 C200 12 190 90 135 175 C68 270 10 260 10 260Z" fill="#004A30"/>
      </svg>

      <svg className="absolute top-0 right-0 w-[260px] h-[260px] opacity-[0.06] pointer-events-none" viewBox="0 0 300 300" fill="none">
        <path d="M290 10 C290 10 160 10 70 110 C0 190 30 285 30 285 C30 285 25 165 115 85 C198 12 290 10 290 10Z" fill="#004A30"/>
        <path d="M260 45 C260 45 150 45 80 135 C20 208 48 268 48 268 C48 268 38 165 115 98 C198 28 260 45 260 45Z" fill="#004A30"/>
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/60 uppercase mb-4 block">
                Uygulama Aşamaları
              </span>
              <h2 className="text-[#231F20] text-3xl md:text-5xl font-light leading-tight tracking-tight">
                5 adımda{" "}
                <span className="font-serif italic">hayata geçiyor.</span>
              </h2>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-5 gap-0">
            {stages.map((stage, i) => (
              <div key={i}>
                <p className="text-[80px] font-extralight text-[#004A30]/20 leading-none mb-4 -mt-2">
                  {stage.num}
                </p>
                <h3 className="text-[#231F20] text-base font-semibold mb-2 tracking-tight">
                  {stage.title}
                </h3>
                <p className="text-[#5C5C56] text-[13px] font-light leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:hidden">
            {stages.map((stage, i) => (
              <div key={i} className="flex gap-6 py-6 border-b border-[#004A30]/10 last:border-0">
                <p className="text-[42px] font-extralight text-[#004A30]/25 leading-none flex-shrink-0 w-16">
                  {stage.num}
                </p>
                <div className="pt-1">
                  <h3 className="text-[#231F20] text-base font-semibold mb-1">{stage.title}</h3>
                  <p className="text-[#5C5C56] text-[13px] font-light leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-[1px] bg-[#004A30]/15" />
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#004A30]/40 uppercase flex-shrink-0">
            İşleyiş Modeli
          </span>
          <div className="flex-1 h-[1px] bg-[#004A30]/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div>
            <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight mb-4">
              Kendi kendini
              <br />
              <span className="font-serif italic">sürdüren bir yapı.</span>
            </h2>
            <p className="text-[#5C5C56] text-base font-light leading-relaxed max-w-sm">
              Arazi, yapı ve eğitim süreçleri farklı paydaşlar tarafından
              yürütülerek proje sürdürülebilir bir modele kavuşuyor.
            </p>
          </div>

          <div className="flex flex-col mt-8 md:mt-0">
            {model.map((item, i) => (
              <div key={i} className="flex items-start justify-between py-5 border-b border-[#004A30]/10 last:border-0">
                <span className="text-[11px] font-semibold tracking-[0.15em] text-[#004A30]/60 uppercase w-32 flex-shrink-0 pt-0.5">
                  {item.label}
                </span>
                <p className="text-[#231F20] text-sm font-light leading-relaxed text-right">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EkoBinaAsamalarIsleyis;
