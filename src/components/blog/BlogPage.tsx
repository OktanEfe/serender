"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type TabType = "hepsi" | "blog" | "haber" | "etkinlik";

const posts = [
  {
    id: 1,
    slug: "surdurulebilir-mimari",
    type: "blog" as TabType,
    date: "12 Mart 2026",
    category: "Mimari",
    title: "Sürdürülebilir Mimari ve Ekolojik Yapıların Geleceği",
    excerpt: "Geleneksel yapı tekniklerini modern mühendislik ile birleştirerek karbon ayak izimizi nasıl sıfırlarız?",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    id: 2,
    slug: "permakultur-yasam",
    type: "blog" as TabType,
    date: "05 Mart 2026",
    category: "Permakültür",
    title: "Permakültür: Doğanın Kendi Döngüsünde Yaşam",
    excerpt: "Bahçenizde veya balkonunuzda uygulayabileceğiniz temel permakültür prensipleriyle sürdürülebilir bir yaşam.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  },
  {
    id: 3,
    slug: "ekolojik-turizm",
    type: "blog" as TabType,
    date: "28 Şubat 2026",
    category: "Turizm",
    title: "Yerel Kalkınma ve Ekolojik Turizm Rotaları",
    excerpt: "Kırsal alanlardaki doğal dokuyu bozmadan toplumsal fayda sağlayan turizm modellerini inceliyoruz.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    id: 4,
    slug: "kompost-egitimi-haberi",
    type: "haber" as TabType,
    date: "20 Mart 2026",
    category: "Duyuru",
    title: "Serender'den Yalova'ya Kompost Eğitimi",
    excerpt: "Yalova Belediyesi iş birliğiyle düzenlenen kompost eğitimine 200'den fazla vatandaş katıldı.",
    image: "https://images.unsplash.com/photo-1542601906897-ecd1e9ca0b58?w=800&q=80",
  },
  {
    id: 5,
    slug: "belediye-protokol",
    type: "haber" as TabType,
    date: "10 Mart 2026",
    category: "Haber",
    title: "Belediye ile Sürdürülebilir Yaşam Merkezi Protokolü İmzalandı",
    excerpt: "Serender Ekolojik Yaşam Derneği ile Yalova Belediyesi arasında önemli bir iş birliği anlaşması imzalandı.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 6,
    slug: "dogal-boya-atolyesi",
    type: "etkinlik" as TabType,
    date: "25 Nisan 2026",
    category: "Atölye",
    title: "Doğal Boya Atölyesi",
    excerpt: "Bitkisel boyalarla tekstil boyama üzerine uygulamalı bir atölye çalışması. Katılım ücretsizdir.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 7,
    slug: "cocuk-doga-kampi",
    type: "etkinlik" as TabType,
    date: "10 Mayıs 2026",
    category: "Etkinlik",
    title: "Çocuklar İçin Doğa Kampı",
    excerpt: "7-12 yaş arası çocuklara yönelik ekolojik farkındalık ve doğa keşfi kampı Yalova ormanlarında başlıyor.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
  },
  {
    id: 8,
    slug: "kompost-workshop",
    type: "etkinlik" as TabType,
    date: "3 Mayıs 2026",
    category: "Workshop",
    title: "Evde Kompost Kurma Workshop'u",
    excerpt: "Kendi kompostunuzu nasıl kurarsınız? Uzman eğitmenlerle uygulamalı bir gün geçirin.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: 9,
    slug: "sifir-atik-rehberi",
    type: "blog" as TabType,
    date: "15 Şubat 2026",
    category: "Rehber",
    title: "Sıfır Atık Yaşama Geçiş: Adım Adım Rehber",
    excerpt: "Günlük hayatınızda atığı minimuma indirmek için pratik ipuçları ve başlangıç noktaları.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
  },
];

const tabs = [
  { key: "hepsi", label: "Tümü" },
  { key: "blog", label: "Blog" },
  { key: "haber", label: "Haberler" },
  { key: "etkinlik", label: "Etkinlikler" },
];

const typeLabel: Record<string, string> = {
  blog: "Blog",
  haber: "Haber",
  etkinlik: "Etkinlik",
};

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("hepsi");

  const filtered = activeTab === "hepsi"
    ? posts
    : posts.filter((p) => p.type === activeTab);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-[#004A30] overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0F6A4A]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#003623]/50 rounded-full blur-[100px]" />
        </div>
        <svg className="absolute top-0 right-0 w-[320px] h-[320px] opacity-[0.05] pointer-events-none" viewBox="0 0 400 400" fill="none">
          <path d="M380 20 C380 20 200 20 60 160 C-40 260 20 380 20 380 C20 380 20 200 160 80 C260 -10 380 20 380 20Z" fill="white"/>
          <path d="M340 60 C340 60 180 60 80 180 C0 280 50 360 50 360 C50 360 40 200 140 100 C240 10 340 60 340 60Z" fill="white"/>
        </svg>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase mb-8 block">
            <span className="w-6 h-[1px] bg-white/20" />
            İçerik
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6">
            Ekolojik<br />
            <span className="font-semibold">Notlar</span>
          </h1>
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
            Blog yazıları, haberler ve etkinlikler — ekolojik yaşam dünyasından her şey.
          </p>
        </div>
      </section>

      {/* Tab + İçerik */}
      <section className="w-full bg-[#FAF9F6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          {/* Tab Menü */}
          <div className="flex items-center gap-2 mb-12 bg-white rounded-full p-1.5 w-fit border border-[#E8E4DC]">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabType)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-[#004A30] text-white shadow-sm"
                    : "text-[#5C5C56] hover:text-[#231F20]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8E4DC] hover:border-[#004A30]/15 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col"
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
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-[#004A30] text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="bg-[#004A30]/80 backdrop-blur-sm text-white text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
                      {typeLabel[post.type]}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 gap-3">
                  <time className="text-[11px] font-medium tracking-[0.1em] text-[#9C9C94] uppercase">
                    {post.date}
                  </time>
                  <h3 className="text-[#231F20] text-lg font-medium leading-snug group-hover:text-[#004A30] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[#5C5C56] text-[14px] font-light leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-3 flex items-center gap-1.5 text-[13px] font-medium text-[#231F20] group-hover:text-[#004A30] transition-colors duration-200">
                    Devamını Oku
                    <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#9C9C94] text-base font-light">Bu kategoride henüz içerik yok.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default BlogPage;
