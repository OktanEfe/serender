import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const post = {
  slug: "surdurulebilir-mimari",
  type: "blog",
  date: "12 Mart 2026",
  category: "Mimari",
  title: "Sürdürülebilir Mimari ve Ekolojik Yapıların Geleceği",
  excerpt: "Geleneksel yapı tekniklerini modern mühendislik ile birleştirerek karbon ayak izimizi nasıl sıfırlarız?",
  image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=90",
  content: [
    "Sürdürülebilir mimari, yalnızca çevreye duyarlı malzeme seçiminden ibaret değildir. Yapının bulunduğu iklim, topoğrafya, yerel malzeme kaynakları ve topluluk ihtiyaçlarını bütünsel olarak değerlendiren bir yaklaşımı gerektirir.",
    "Serender olarak bu yaklaşımı benimseyerek, her projemizde önce dinliyoruz: toprağı, suyu, rüzgarı ve güneşi. Ardından yapıyı bu verilerle şekillendiriyoruz. Geleneksel Anadolu mimarisinin pasif iklim kontrolü tekniklerini modern malzemelerle harmanlayarak hem kültürel mirasa sahip çıkıyor hem de enerji verimliliğini maksimize ediyoruz.",
    "Ekolojik yapı tasarımında en kritik konu, yapının kullanım ömrü boyunca çevreye etki hesabıdır. Bir yapının inşaat aşamasındaki karbon ayak izi, tüm yaşam döngüsünün yalnızca %20'sini oluşturur. Asıl fark, ısıtma, soğutma ve aydınlatma için harcanan enerjide ortaya çıkar.",
    "Bu nedenle tasarım aşamasında pasif güneş ısıtması, doğal havalandırma, toprak örtüsü yalıtımı ve su hasadı sistemlerini entegre etmek; uzun vadede hem maliyeti hem de çevresel etkiyi dramatik biçimde azaltır.",
    "Serender'in Sürdürülebilir Yaşam Merkezi projesi de bu ilkeler üzerine inşa ediliyor. Yapıda kullanılacak her malzeme yerel kaynaklı, her sistem doğayla uyumlu ve her mekan topluluk katılımını teşvik edecek biçimde tasarlanıyor.",
  ],
};

const relatedPosts = [
  {
    id: 2,
    slug: "permakultur-yasam",
    date: "05 Mart 2026",
    category: "Permakültür",
    title: "Permakültür: Doğanın Kendi Döngüsünde Yaşam",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  },
  {
    id: 9,
    slug: "sifir-atik-rehberi",
    date: "15 Şubat 2026",
    category: "Rehber",
    title: "Sıfır Atık Yaşama Geçiş: Adım Adım Rehber",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
  },
];

export default function BlogSlugPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full pb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                {post.category}
              </span>
              <time className="text-white/60 text-[11px] font-medium tracking-wide uppercase">
                {post.date}
              </time>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="w-full bg-[#FAF9F6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

            {/* Makale */}
            <article>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5C5C56] hover:text-[#231F20] transition-colors mb-10"
              >
                <ArrowLeft size={14} strokeWidth={1.5} />
                Tüm Yazılar
              </Link>

              <p className="text-[#231F20] text-xl md:text-2xl font-light leading-relaxed mb-10 border-l-2 border-[#004A30] pl-6 italic">
                {post.excerpt}
              </p>

              <div className="space-y-6">
                {post.content.map((para, i) => (
                  <p key={i} className="text-[#5C5C56] text-base md:text-lg font-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#E8E4DC] flex items-center gap-3">
                <span className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase">
                  Serender Ekolojik Yaşam Derneği
                </span>
                <div className="w-4 h-[1px] bg-[#E8E4DC]" />
                <time className="text-[11px] font-medium tracking-[0.1em] text-[#9C9C94] uppercase">
                  {post.date}
                </time>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="bg-[#004A30] rounded-3xl p-7 text-white">
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-4">
                  Topluluğa Katıl
                </p>
                <p className="text-white font-light text-base leading-relaxed mb-6">
                  Ekolojik yaşam yolculuğunda birlikte ilerliyoruz.
                </p>
                <Link
                  href="/bize-ulasin"
                  className="group inline-flex items-center gap-2 bg-white text-[#004A30] text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-[#FAF9F6] transition-all duration-300"
                >
                  İletişime Geç
                  <ArrowUpRight size={13} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-[#E8E4DC]">
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#9C9C94] uppercase mb-5">
                  Projelerimiz
                </p>
                <p className="text-[#5C5C56] text-sm font-light leading-relaxed mb-5">
                  Sürdürülebilir Yaşam ve Eğitim Merkezi projemiz hakkında detaylı bilgi alın.
                </p>
                <Link
                  href="/projeler"
                  className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#004A30] hover:text-[#003623] transition-colors"
                >
                  Projeleri Gör
                  <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* İlgili Yazılar */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="text-[#231F20] text-2xl md:text-3xl font-light tracking-tight mb-10">
            İlgili <span className="font-serif italic">yazılar</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedPosts.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group bg-[#FAF9F6] rounded-3xl overflow-hidden border border-[#E8E4DC] hover:border-[#004A30]/15 transition-all duration-500 hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex gap-5 p-4"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={p.image} alt={p.title} fill className="object-cover" unoptimized />
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="text-[10px] font-medium tracking-[0.15em] text-[#004A30] uppercase">{p.category}</span>
                  <h3 className="text-[#231F20] text-sm font-medium leading-snug group-hover:text-[#004A30] transition-colors">
                    {p.title}
                  </h3>
                  <time className="text-[11px] text-[#9C9C94]">{p.date}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
