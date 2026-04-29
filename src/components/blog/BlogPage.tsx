"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/posts";

const BlogPage = () => {
  return (
    <>
      <section className="relative w-full bg-[#004A30] overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0F6A4A]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#003623]/50 rounded-full blur-[100px]" />
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

      {/* Content */}
      <section className="w-full bg-[#FAF9F6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
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

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#004A30] text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                      {post.category}
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
              <p className="text-[#9C9C94] text-base font-light">
                Henüz içerik yok.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;