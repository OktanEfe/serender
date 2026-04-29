const impacts = [
  {
    label: "Çevresel Katkı",
    items: ["Organik atıkların çöpe gitmesi engellenir", "Toprak verimliliği artar", "Karbon ayak izi azalır"],
    style: "dark",
  },
  {
    label: "Sosyal Katkı",
    items: ["Çocuklara erken yaşta çevre bilinci", "Yetişkinlere sürdürülebilir yaşam eğitimi", "Toplumsal farkındalık artışı"],
    style: "light",
  },
  {
    label: "Belediyeye Katkı",
    items: ["Şehir markalaşmasına örnek proje", "Sıfır atık politikalarına güçlü destek", "Halkla doğrudan temas eden sosyal proje"],
    style: "warm",
  },
];

const EkoBinaEtki = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-4 block">
            Neden Bu Proje
          </span>
          <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight">
            Üç boyutta{" "}
            <span className="font-serif italic">etki yaratıyor.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {impacts.map((impact, i) => {
            const isDark = impact.style === "dark";
            const isWarm = impact.style === "warm";

            return (
              <div
                key={i}
                className={`rounded-3xl p-8 ${
                  isDark
                    ? "bg-[#004A30]"
                    : isWarm
                    ? "bg-[#3D2B1F]"
                    : "bg-[#FAF9F6] border border-[#E8E4DC]"
                }`}
              >
                <p
                  className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 ${
                    isDark
                      ? "text-white/50"
                      : isWarm
                      ? "text-[#C4956A]/70"
                      : "text-[#5C5C56]"
                  }`}
                >
                  {impact.label}
                </p>
                <ul className="space-y-4">
                  {impact.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          isDark
                            ? "bg-white/40"
                            : isWarm
                            ? "bg-[#C4956A]/50"
                            : "bg-[#004A30]/40"
                        }`}
                      />
                      <p
                        className={`text-sm font-medium leading-relaxed ${
                          isDark
                            ? "text-white/80"
                            : isWarm
                            ? "text-[#F5E6D8]/80"
                            : "text-[#231F20]"
                        }`}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EkoBinaEtki;
