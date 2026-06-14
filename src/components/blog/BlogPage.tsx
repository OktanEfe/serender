"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { posts } from "@/data/posts";

type Etkinlik = {
  id: number;
  baslik: string;
  klasor: string;
  fotograflar: string[];
};

const etkinlikler: Etkinlik[] = [
  {
    id: 1,
    baslik: "Öğrenciler ile Kompost Yapımı",
    klasor: "etkinlik1",
    fotograflar: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
  },
  {
    id: 2,
    baslik: "Kompost Eğitimi",
    klasor: "etkinlik2",
    fotograflar: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
  },
  {
    id: 3,
    baslik: "Çalıca Gülkent Ortaokulu Çınarcık Öğrencileri ile Kompost Eğitimi",
    klasor: "etkinlik3",
    fotograflar: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
  },
  {
    id: 4,
    baslik: "Gülderman Çiftliğine Öğrenciler ile Ziyaret",
    klasor: "etkinlik4",
    fotograflar: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
  },
];

function fotoSrc(klasor: string, dosya: string) {
  return `/${klasor}/${dosya}`;
}

const BlogPage = () => {
  const [aktifSekme, setAktifSekme] = useState<"blog" | "etkinlik">("blog");
  const [acikEtkinlik, setAcikEtkinlik] = useState<Etkinlik | null>(null);
  const [aktifFoto, setAktifFoto] = useState(0);

  const kapat = useCallback(() => {
    setAcikEtkinlik(null);
    setAktifFoto(0);
  }, []);

  const onceki = useCallback(() => {
    if (!acikEtkinlik) return;
    setAktifFoto((f) => (f - 1 + acikEtkinlik.fotograflar.length) % acikEtkinlik.fotograflar.length);
  }, [acikEtkinlik]);

  const sonraki = useCallback(() => {
    if (!acikEtkinlik) return;
    setAktifFoto((f) => (f + 1) % acikEtkinlik.fotograflar.length);
  }, [acikEtkinlik]);

  useEffect(() => {
    if (!acikEtkinlik) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") kapat();
      if (e.key === "ArrowLeft") onceki();
      if (e.key === "ArrowRight") sonraki();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [acikEtkinlik, kapat, onceki, sonraki]);

  const acEtkinlik = (etkinlik: Etkinlik) => {
    setAcikEtkinlik(etkinlik);
    setAktifFoto(0);
  };

  return (
    <>
      <section className="relative w-full bg-[#1E4D3A] overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0F6A4A]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#13362A]/50 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase mb-8">
            <span className="w-6 h-[1px] bg-white/20" />
            İçerik
          </span>

          <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6">
            Ekolojik
            <br />
            <span className="font-semibold">Notlar</span>
          </h1>

          <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
            Toprak, tohum, su ve topluluk üzerine yazılar — ekolojik yaşam dünyasından her şey.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FAF9F6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-10">
            <button
              onClick={() => setAktifSekme("blog")}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                aktifSekme === "blog"
                  ? "bg-[#1E4D3A] text-white"
                  : "bg-white border border-[#E8E4DC] text-[#5C5C56] hover:border-[#1E4D3A]/30"
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setAktifSekme("etkinlik")}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                aktifSekme === "etkinlik"
                  ? "bg-[#1E4D3A] text-white"
                  : "bg-white border border-[#E8E4DC] text-[#5C5C56] hover:border-[#1E4D3A]/30"
              }`}
            >
              Etkinlik
            </button>
          </div>

          {/* Blog Grid */}
          {aktifSekme === "blog" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#E8E4DC] hover:border-[#1E4D3A]/15 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#1E4D3A] text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 gap-3">
                      <time className="text-[11px] font-medium tracking-[0.1em] text-[#9C9C94] uppercase">
                        {post.date}
                      </time>
                      <h3 className="text-[#231F20] text-lg font-medium leading-snug group-hover:text-[#1E4D3A] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-[#5C5C56] text-[14px] font-light leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="pt-3 flex items-center gap-1.5 text-[13px] font-medium text-[#231F20] group-hover:text-[#1E4D3A] transition-colors duration-200">
                        Devamını Oku
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {posts.length === 0 && (
                <div className="text-center py-24">
                  <p className="text-[#9C9C94] text-base font-light">Henüz içerik yok.</p>
                </div>
              )}
            </>
          )}

          {/* Etkinlik Grid */}
          {aktifSekme === "etkinlik" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {etkinlikler.map((etkinlik) => (
                <button
                  key={etkinlik.id}
                  onClick={() => acEtkinlik(etkinlik)}
                  className="group text-left bg-white rounded-3xl overflow-hidden border border-[#E8E4DC] hover:border-[#1E4D3A]/15 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={fotoSrc(etkinlik.klasor, etkinlik.fotograflar[0])}
                      alt={etkinlik.baslik}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full">
                        {etkinlik.fotograflar.length} fotoğraf
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#231F20] text-lg font-medium leading-snug group-hover:text-[#1E4D3A] transition-colors duration-300">
                      {etkinlik.baslik}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Galeri Modal */}
      {acikEtkinlik && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          onClick={kapat}
        >
          {/* Üst bar */}
          <div
            className="flex items-center justify-between px-6 py-4 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-white/50 text-[11px] font-medium tracking-[0.2em] uppercase mb-1">Etkinlik</p>
              <h2 className="text-white text-lg font-medium leading-snug">{acikEtkinlik.baslik}</h2>
            </div>
            <button
              onClick={kapat}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          {/* Ana fotoğraf */}
          <div
            className="flex-1 relative flex items-center justify-center min-h-0 px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-4xl max-h-full">
              <Image
                src={fotoSrc(acikEtkinlik.klasor, acikEtkinlik.fotograflar[aktifFoto])}
                alt={`${acikEtkinlik.baslik} - ${aktifFoto + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {acikEtkinlik.fotograflar.length > 1 && (
              <>
                <button
                  onClick={onceki}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button
                  onClick={sonraki}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail şeridi */}
          <div
            className="flex-shrink-0 px-6 py-4 flex gap-2 overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {acikEtkinlik.fotograflar.map((foto, idx) => (
              <button
                key={idx}
                onClick={() => setAktifFoto(idx)}
                className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all duration-200 ${
                  idx === aktifFoto
                    ? "ring-2 ring-white ring-offset-2 ring-offset-transparent"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={fotoSrc(acikEtkinlik.klasor, foto)}
                  alt={`${idx + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
