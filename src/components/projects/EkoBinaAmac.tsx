import Image from "next/image";

const EkoBinaAmac = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-6 block">
              Projenin Amacı
            </span>
            <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight mb-8">
              Çok yönlü bir<br />
              <span className="font-serif italic">sürdürülebilir yaşam merkezi.</span>
            </h2>
            <p className="text-[#5C5C56] text-base font-light leading-relaxed mb-5">
              Serender Ekolojik Yaşam Derneği olarak amacımız; atıkların doğaya
              kazandırıldığı, çocuklar ve yetişkinler için uygulamalı eğitimlerin
              verildiği, ekolojik yaşam bilincinin yaygınlaştırıldığı çok yönlü
              bir sürdürülebilir yaşam merkezi kurmaktır.
            </p>
            <p className="text-[#5C5C56] text-base font-light leading-relaxed">
              Bu proje ile belediyenin çevre politikalarına katkı sağlanması
              ve örnek bir model oluşturulması hedeflenmektedir.
            </p>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image src="/images/ekobina/ekobina5.png" alt="Merkez genel görünüm" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EkoBinaAmac;
