import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const kompostTurleri = [
  {
    id: "01",
    slug: "sicak",
    baslik: "Sıcak Kompost",
    sure: "3–6 ay",
    zorluk: "Orta",
    ozet: "Yüksek sıcaklıkta hızlı ayrışma. Düzenli havalandırma ve nem kontrolü gerektirir. Yabani ot tohumlarını ve patojenleri yok eder.",
    detay: "55–65°C'ye ulaşan iç sıcaklığıyla en hızlı kompostlama yöntemidir. Sir Albert Howard'ın Indore yöntemi bu tekniğin temelini oluşturur. Karbon-azot oranı yaklaşık 30:1 olmalıdır.",
    malzemeler: ["Kuru yaprak & sap (karbon)", "Mutfak atıkları (azot)", "Bahçe atıkları", "Su"],
    image: "/kompost/sicak-kompost.webp",
  },
  {
    id: "02",
    slug: "soguk",
    baslik: "Soğuk Kompost",
    sure: "6–24 ay",
    zorluk: "Kolay",
    ozet: "Müdahalesiz, doğal ayrışma süreci. Sabırlı bahçıvanlar için ideal. Bir köşeye atıp bekleme yeterlidir.",
    detay: "En basit yöntemdir. Karıştırma veya sıcaklık takibi gerekmez. Yavaş olgunlaşır ancak işgücü gerektirmez. Küçük bahçeler için mükemmeldir.",
    malzemeler: ["Her türlü organik atık", "Bahçe artıkları", "Yapraklar", "Toprak serpme"],
    image: "/kompost/soguk-kompost.webp",
  },
  {
    id: "03",
    slug: "bokashi",
    baslik: "Bokashi",
    sure: "2–4 hafta",
    zorluk: "Kolay",
    ozet: "Japon fermentasyon yöntemi. Et ve süt ürünleri dahil tüm mutfak atıklarını işler. Şehir hayatı için en pratik çözüm.",
    detay: "Profesör Teruo Higa'nın 1980'lerde geliştirdiği bu yöntemde Etkili Mikroorganizmalar (EM) kullanılır. Hava almayan kapalı bir kovada gerçekleşir, koku yapmaz.",
    malzemeler: ["Tüm mutfak atıkları", "Et & süt ürünleri", "EM-1 bokashi kepeği", "Kapalı kova"],
    image: "/kompost/bokashi-kompost.webp",
  },
  {
    id: "04",
    slug: "solucan",
    baslik: "Solucan Kompostu",
    sure: "4–8 hafta",
    zorluk: "Orta",
    ozet: "Kırmızı Kaliforniya solucanlarıyla üretilen en besleyici kompost türü. Klasik komposttan 5–10 kat daha zengindir.",
    detay: "Eisenia fetida solucanları organik atığı sindirir. Elde edilen solucan dışkısı enzimler, hormonlar ve faydalı bakteriler içerir. Apartman dairesinde bile yapılabilir.",
    malzemeler: ["Sebze & meyve kabukları", "Kahve telvesi", "Ezilmiş yumurta kabuğu", "Kırmızı solucan"],
    image: "/kompost/solucan-kompost.webp",
  },
];

const kompostSureci = [
  {
    no: "01",
    baslik: "Topla",
    aciklama: "Organik atıkları bir araya getir. Mutfak artıkları, yapraklar, kahve telvesi gibi malzemeleri topla.",
    image: "/kompostyap%C4%B1m%C4%B1/topla.png",
  },
  {
    no: "02",
    baslik: "Yığın Oluştur",
    aciklama: "Malzemeleri üst üste katmanlar halinde yerleştir ve karıştır.",
    image: "/kompostyap%C4%B1m%C4%B1/y%C4%B1g%C4%B1nolustur.png",
  },
  {
    no: "03",
    baslik: "Nemlendir",
    aciklama: "Kompost yığını nemli kalmalı, ama sulu olmamalı. Gerektiğinde su ekle.",
    image: "/kompostyap%C4%B1m%C4%B1/nemlendir.png",
  },
  {
    no: "04",
    baslik: "Havalandır",
    aciklama: "Karışımı belirli aralıklarla çevir. Böylece oksijen alır ve ayrışma hızlanır.",
    image: "/kompostyap%C4%B1m%C4%B1/havaland%C4%B1r.png",
  },
  {
    no: "05",
    baslik: "Olgunlaştır",
    aciklama: "Kompost olgunlaşınca koyu renkli, kokusuz ve gevşek bir yapıya kavuşur.",
    image: "/kompostyap%C4%B1m%C4%B1/olgunlast%C4%B1r.png",
  },
  {
    no: "06",
    baslik: "Uygula",
    aciklama: "Olgunlaşmış kompostu toprağa karıştır veya bitkilerin dibine uygula.",
    image: "/kompostyap%C4%B1m%C4%B1/uygula.png",
  },
];

export default function KompostPage() {
  return (
    <main className="w-full bg-white">

      <section className="relative w-full min-h-[70vh] bg-[#FAF9F6] flex items-end overflow-hidden pt-32 pb-20">
        <svg className="absolute top-0 right-0 w-[360px] h-[360px] opacity-[0.05] pointer-events-none" viewBox="0 0 400 400" fill="none">
          <path d="M380 20 C380 20 200 20 60 160 C-40 260 20 380 20 380 C20 380 20 200 160 80 C260 -10 380 20 380 20Z" fill="#1E4D3A"/>
          <path d="M340 60 C340 60 180 60 80 180 C0 280 50 360 50 360 C50 360 40 200 140 100 C240 10 340 60 340 60Z" fill="#1E4D3A"/>
        </svg>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-10 bg-[#1E4D3A]/30" />
                <span className="text-[10px] font-medium tracking-[0.3em] text-[#1E4D3A] uppercase">Toprak Bilimi</span>
              </div>
              <h1 className="text-[#231F20] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.0] tracking-tight mb-8">
                Kompost
                <span className="font-serif italic text-[#1E4D3A] block mt-2">nedir?</span>
              </h1>
              <p className="text-[#5C5C56] text-lg font-light leading-relaxed max-w-lg">
                Organik atıkların milyarlarca mikroorganizma tarafından parçalanarak
                koyu, canlı ve besleyici bir toprağa dönüştüğü doğal bir süreçtir.
                Atık değil, <span className="text-[#1E4D3A] font-medium">kaynak</span>.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden">
                <Image src="/kompost/kompost-hero.webp" alt="Kompost sistemi" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D3A]/30 to-transparent" />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-[#E8E4DC] grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { deger: "4", birim: "Yöntem", aciklama: "farklı kompost türü" },
              { deger: "%100", birim: "Doğal", aciklama: "kimyasal içermez" },
              { deger: "5–10×", birim: "Daha Zengin", aciklama: "solucan komposta göre" },
              { deger: "∞", birim: "Döngü", aciklama: "atık yok, kaynak var" },
            ].map((s) => (
              <div key={s.birim}>
                <p className="text-[#1E4D3A] text-3xl font-light tracking-tight mb-1">{s.deger}</p>
                <p className="text-[#231F20] text-sm font-medium mb-0.5">{s.birim}</p>
                <p className="text-[#9C9C94] text-[11px] font-light">{s.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-6 block">Temel Bilgi</span>
              <h2 className="text-[#231F20] text-3xl md:text-4xl font-light leading-tight tracking-tight mb-8">
                Toprağın kendi<br />
                <span className="font-serif italic">kendini yenilemesi.</span>
              </h2>
              <p className="text-[#5C5C56] text-base font-light leading-relaxed mb-6">
                Modern organik tarımın kurucusu Sir Albert Howard, 1940&apos;ta yayımladığı
                <em> An Agricultural Testament</em> kitabında toprağın, bitkinin, hayvanın
                ve insanın sağlığını tek ve bölünmez bir bütün olarak tanımladı.
              </p>
              <p className="text-[#5C5C56] text-base font-light leading-relaxed mb-8">
                Kompost bu bütünlüğün somut pratiğidir. Mutfaktan çıkan her organik
                atığın çöpe değil toprağa dönmesi, bu zincirin devam etmesi demektir.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Toprak sağlığı", "Karbon tutma", "Azot döngüsü", "Biyoçeşitlilik"].map((tag) => (
                  <span key={tag} className="bg-[#1E4D3A]/8 text-[#1E4D3A] text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { baslik: "C:N Oranı", deger: "30:1", aciklama: "İdeal karbon-azot dengesi" },
                { baslik: "Sıcaklık", deger: "55–65°C", aciklama: "Sıcak kompostta" },
                { baslik: "Nem", deger: "%40–60", aciklama: "Islak sünger kıvamı" },
                { baslik: "Süre", deger: "2 hf–2 yıl", aciklama: "Yönteme göre değişir" },
              ].map((bilgi) => (
                <div key={bilgi.baslik} className="bg-[#FAF9F6] rounded-2xl p-5 border border-[#E8E4DC]">
                  <p className="text-[10px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase mb-2">{bilgi.baslik}</p>
                  <p className="text-[#1E4D3A] text-2xl font-light tracking-tight mb-1">{bilgi.deger}</p>
                  <p className="text-[#5C5C56] text-[12px] font-light">{bilgi.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF9F6] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-14 md:mb-20">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-4 block">Yöntemler</span>
            <h2 className="text-[#231F20] text-3xl md:text-5xl font-light leading-tight tracking-tight">
              4 farklı kompost,<br />
              <span className="font-serif italic">4 farklı yaşam biçimi.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kompostTurleri.map((tur) => (
              <div key={tur.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8E4DC]">
                <div className="relative h-40">
                  <Image src={tur.image} alt={tur.baslik} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full">{tur.sure}</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full">{tur.zorluk}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#231F20] text-lg font-medium tracking-tight mb-2">{tur.baslik}</h3>
                  <p className="text-[#5C5C56] text-[13px] font-light leading-relaxed mb-4">{tur.ozet}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tur.malzemeler.map((m) => (
                      <span key={m} className="bg-[#FAF9F6] border border-[#E8E4DC] text-[#5C5C56] text-[11px] font-light px-2.5 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YENİ YAPIM AŞAMALARI */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#1E4D3A]/70 uppercase mb-4 block">Uygulama</span>
              <h2 className="text-[#231F20] text-3xl md:text-5xl font-light leading-tight tracking-tight">
                Adım adım<br />
                <span className="font-serif italic">kompost yapımı.</span>
              </h2>
            </div>
            <p className="text-[#5C5C56] text-sm font-light leading-relaxed max-w-xs md:pb-1">
              Hangi yöntemi seçerseniz seçin, temel ilkeler aynıdır. Başlamak için büyük bir bahçeye ihtiyacınız yok.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {kompostSureci.map((adim) => (
              <div key={adim.no} className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E8E4DC]">
                <div className="relative h-44">
                  <Image
                    src={adim.image}
                    alt={adim.baslik}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xl font-extralight text-[#1E4D3A]/25 leading-none">{adim.no}</span>
                    <h3 className="text-[#231F20] text-sm font-semibold tracking-tight">{adim.baslik}</h3>
                  </div>
                  <p className="text-[#5C5C56] text-[12px] font-light leading-relaxed">{adim.aciklama}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-[180px]">
              <Image src="/kompost/kompost-asamalar.webp" alt="Kompost malzemeleri" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D3A]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/60 text-[10px] font-medium tracking-[0.2em] uppercase mb-1">İpucu</p>
                <p className="text-white text-[13px] font-light leading-relaxed">
                  Islak sünger kıvamı — ne çok kuru ne çok ıslak.
                </p>
              </div>
            </div>

            <div className="bg-[#1E4D3A] rounded-2xl p-5">
              <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-3">Önemli Not</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Sıcak & Bokashi", icerik: "Et, süt, pişmiş yemek ✓" },
                  { label: "Soğuk & Solucan", icerik: "Yalnızca bitkisel atık ✓" },
                ].map((kural) => (
                  <div key={kural.label} className="bg-white/10 rounded-xl p-3">
                    <p className="text-[#B7D8A6] text-[10px] font-medium tracking-[0.1em] uppercase mb-1">{kural.label}</p>
                    <p className="text-white/70 text-[12px] font-light">{kural.icerik}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF9F6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-[#1E4D3A] rounded-3xl px-8 sm:px-12 md:px-20 py-14 md:py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#B7D8A6]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase mb-6 block">Atölye</span>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight mb-5">
                Kompost atölyemize<br />
                <span className="font-serif italic text-[#B7D8A6]">katılmak ister misiniz?</span>
              </h2>
              <p className="text-white/55 text-base font-light leading-relaxed max-w-md mx-auto mb-10">
                Serender&apos;in uygulamalı kompost eğitimlerinde teoriden pratiğe, kendiniz deneyimleyin.
              </p>
              <Link href="/bize-ulasin"
                className="group inline-flex items-center gap-2 bg-white text-[#1E4D3A] text-[13px] font-medium tracking-wide px-8 py-4 rounded-full hover:bg-[#FAF9F6] transition-all duration-300">
                Bize Ulaşın
                <ArrowUpRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
