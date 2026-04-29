"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/posts";

const BlogPreview = () => {
  const previewPosts = posts.slice(0, 3);

  return (
    <section className="w-full bg-[#FAF9F6] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#004A30]/70 uppercase mb-3 block">
              Dergi & Haberler
            </span>
            <h2 className="text-[#231F20] text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
              Ekolojik{" "}
              <span className="font-serif italic font-normal">Notlar</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#5C5C56] hover:text-[#231F20] transition-colors duration-200"
          >
            Tüm Yazıları Gör
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {previewPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E4DC] hover:border-[#004A30]/15 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
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

              <div className="p-7 flex flex-col flex-1 gap-3">
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
      </div>
    </section>
  );
};

export default BlogPreview;