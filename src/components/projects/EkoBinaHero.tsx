import Image from "next/image";

const EkoBinaHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-end bg-[#004A30] overflow-hidden pb-20 pt-32">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0F6A4A]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003623]/50 rounded-full blur-[120px]" />
      </div>

      {/* Desktop — sağda fotoğraf */}
      <div className="absolute right-0 top-0 w-[48%] h-full hidden lg:block">
        <Image
          src="/images/ekobina/ekobina.png"
          alt="Sürdürülebilir Yaşam ve Eğitim Merkezi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004A30] via-[#004A30]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004A30]/50 via-transparent to-transparent" />
      </div>

      {/* Mobil — tam arka plan fotoğraf */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/ekobina/ekobina.png"
          alt="Sürdürülebilir Yaşam ve Eğitim Merkezi"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#004A30]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004A30]/90 via-[#004A30]/50 to-[#004A30]/30" />
      </div>

      <svg className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.07]" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0 50 C200 10 400 90 600 50 C800 10 1000 90 1200 50 L1200 100 L0 100Z" fill="white">
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M0 50 C200 10 400 90 600 50 C800 10 1000 90 1200 50 L1200 100 L0 100Z;M0 65 C200 30 400 70 600 45 C800 20 1000 75 1200 60 L1200 100 L0 100Z;M0 50 C200 10 400 90 600 50 C800 10 1000 90 1200 50 L1200 100 L0 100Z"
          />
        </path>
        <path d="M0 70 C150 40 350 90 550 65 C750 40 950 90 1200 70 L1200 100 L0 100Z" fill="white" fillOpacity="0.5">
          <animate attributeName="d" dur="11s" repeatCount="indefinite"
            values="M0 70 C150 40 350 90 550 65 C750 40 950 90 1200 70 L1200 100 L0 100Z;M0 60 C150 85 350 45 550 75 C750 100 950 45 1200 60 L1200 100 L0 100Z;M0 70 C150 40 350 90 550 65 C750 40 950 90 1200 70 L1200 100 L0 100Z"
          />
        </path>
      </svg>

      <svg className="absolute top-0 right-[45%] w-[180px] h-[300px] opacity-[0.06] pointer-events-none hidden lg:block" viewBox="0 0 180 300" fill="none">
        <path d="M90 300 C90 300 88 200 94 140 C100 80 82 50 90 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M90 180 C90 180 40 160 20 120 C5 90 20 55 50 50 C75 46 88 90 90 180Z" fill="white" fillOpacity="0.5"/>
        <path d="M94 130 C94 130 140 110 155 75 C165 50 150 20 125 18 C100 16 94 60 94 130Z" fill="white" fillOpacity="0.4"/>
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase mb-8 block">
          <span className="w-6 h-[1px] bg-white/20" />
          Serender Projesi
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tight mb-8 max-w-2xl">
          <span className="font-light block">Sürdürülebilir</span>
          <span className="font-semibold block">Yaşam &</span>
          <span className="font-light italic text-white/60 block">Eğitim Merkezi</span>
        </h1>
        <p className="text-white/55 text-lg font-light leading-relaxed max-w-md mb-12">
          Atıkların doğaya kazandırıldığı, uygulamalı eğitimlerin verildiği
          ve ekolojik yaşam bilincinin yaygınlaştırıldığı çok yönlü bir merkez.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Kompost", "Permakültür", "Eğitim", "Atölye", "Ekolojik Kafe"].map((tag) => (
            <span key={tag} className="border border-white/15 text-white/55 text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
          {[
            { value: "%100", label: "Doğal Malzeme" },
            { value: "Sıfır", label: "Atık Politikası" },
            { value: "5+", label: "Faaliyet Alanı" },
            { value: "5", label: "Uygulama Aşaması" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-light text-white tracking-tight mb-1">{s.value}</p>
              <p className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EkoBinaHero;
