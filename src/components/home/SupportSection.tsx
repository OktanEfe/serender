import Link from "next/link";
import { ArrowUpRight, Heart, Users, Leaf, Sprout } from "lucide-react";

const SupportSection = () => {
  return (
    <section className="w-full bg-[#1E4D3A] py-20 md:py-28 overflow-hidden relative">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B7D8A6]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#13362A]/60 rounded-full blur-[120px]" />
      </div>

      <svg className="absolute top-0 left-0 w-[300px] h-[300px] opacity-[0.04] pointer-events-none" viewBox="0 0 400 400" fill="none">
        <path d="M380 20 C380 20 200 20 60 160 C-40 260 20 380 20 380 C20 380 20 200 160 80 C260 -10 380 20 380 20Z" fill="white"/>
        <path d="M340 60 C340 60 180 60 80 180 C0 280 50 360 50 360 C50 360 40 200 140 100 C240 10 340 60 340 60Z" fill="white"/>
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase">
              Destek Ol
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
            Ekolojik geleceği<br />
            <span className="font-serif italic text-[#B7D8A6]">birlikte inşa edelim.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden group hover:bg-white/8 transition-all duration-500">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#B7D8A6]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Heart size={22} strokeWidth={1.5} className="text-[#B7D8A6]" />
                </div>
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
                  Finansal Destek
                </span>
              </div>

              <h3 className="text-white text-2xl md:text-3xl font-light leading-tight tracking-tight mb-4">
                Bağış &{" "}
                <span className="font-serif italic text-[#B7D8A6]">Yardım</span>
              </h3>

              <p className="text-white/55 text-[15px] font-light leading-relaxed mb-8 max-w-md">
                Projelerimizin büyümesi, eğitimlerimizin sürmesi ve ekolojik 
                yaşam merkezimizin hayata geçmesi için desteğinize ihtiyacımız var.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { ikon: <Leaf size={14} className="text-[#B7D8A6]" />, label: "Kompost", aciklama: "Atölyelerimiz" },
                  { ikon: <Sprout size={14} className="text-[#B7D8A6]" />, label: "Eğitim", aciklama: "Gençlik programı" },
                  { ikon: <Heart size={14} className="text-[#B7D8A6]" />, label: "Merkez", aciklama: "Eko-Bina projesi" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/8 border border-white/8 rounded-2xl p-3.5">
                    <div className="mb-2">{item.ikon}</div>
                    <p className="text-white text-[12px] font-medium mb-0.5">{item.label}</p>
                    <p className="text-white/40 text-[10px] font-light">{item.aciklama}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/bize-ulasin"
                className="group/btn inline-flex items-center gap-2 bg-[#B7D8A6] text-[#1E4D3A] text-[13px] font-medium tracking-wide px-7 py-3.5 rounded-full hover:bg-white transition-all duration-300"
              >
                Bağış Yapmak İstiyorum
                <ArrowUpRight size={15} strokeWidth={2} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden group hover:bg-white/8 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#13362A]/80 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Users size={22} strokeWidth={1.5} className="text-white/70" />
                </div>
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
                  Gönüllülük
                </span>
              </div>

              <h3 className="text-white text-2xl md:text-3xl font-light leading-tight tracking-tight mb-4">
                Ekibe{" "}
                <span className="font-serif italic text-white/70">Katıl</span>
              </h3>

              <p className="text-white/55 text-[15px] font-light leading-relaxed mb-8 max-w-md">
                Tarımdan mimariye, eğitimden tasarıma — her alanda gönüllülere 
                kapımız açık. Bilgi ve enerjinizle bu harekete katkı sağlayın.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Tarım & Bahçe", "Eğitim", "Mimarlık", "İletişim", "Fotoğrafçılık", "Yazılım"].map((alan) => (
                  <span key={alan} className="bg-white/8 border border-white/10 text-white/60 text-[11px] font-light px-3 py-1.5 rounded-full">
                    {alan}
                  </span>
                ))}
              </div>

              <Link
                href="/bize-ulasin"
                className="group/btn inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[13px] font-medium tracking-wide px-7 py-3.5 rounded-full hover:bg-white hover:text-[#1E4D3A] transition-all duration-300"
              >
                Başvuru Yap
                <ArrowUpRight size={15} strokeWidth={2} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        </div>

        

      </div>
    </section>
  );
};

export default SupportSection;
