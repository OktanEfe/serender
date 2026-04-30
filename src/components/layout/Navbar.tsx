"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Blog", href: "/blog" },
  { name: "Eko-Bina", href: "/projeler/eko-bina" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8E4DC] shadow-[0_1px_20px_-8px_rgba(0,0,0,0.08)]"
            : "bg-[#FAF9F6] border-b border-[#E8E4DC]/60"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-500 h-[84px] ${
            scrolled ? "md:h-[95px]" : "md:h-[125px]"
          }`}
        >
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
            aria-label="Serender Anasayfa"
          >
            <img
              src="/SERENDER2.png"
              alt="Serender Ekolojik Yaşam Derneği"
              className="hidden md:block w-auto object-contain transition-all duration-500"
              style={{
                height: scrolled ? "180px" : "280px",
              }}
            />


            <img
              src="/SERENDER2.png"
              alt="Serender Ekolojik Yaşam Derneği"
              className="block md:hidden w-auto object-contain"
              style={{ height: "150px" }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] tracking-wide transition-colors duration-300 group ${
                  pathname === link.href
                    ? "text-[#1E4D3A] font-medium"
                    : "text-[#5C5C56] font-normal hover:text-[#231F20]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1px] bg-[#1E4D3A] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/bize-ulasin"
              className="hidden md:inline-flex items-center border border-[#1E4D3A] text-[#1E4D3A] text-[13px] font-medium tracking-wide px-5 py-2 rounded-full hover:bg-[#1E4D3A] hover:text-white transition-all duration-300"
            >
              İletişime Geç
            </Link>

            <button
              className="md:hidden p-2 -mr-1 text-[#231F20] hover:text-[#1E4D3A] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menüyü aç/kapat"
            >
              {isOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <Menu size={22} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[998] md:hidden transition-all duration-400 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#231F20]/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-[#FAF9F6] shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[84px] border-b border-[#E8E4DC]">
            <img
              src="/SERENDER2.png"
              alt="Serender"
              className="w-auto object-contain"
              style={{ height: "140px" }}
            />

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-1 text-[#5C5C56] hover:text-[#231F20] transition-colors flex-shrink-0"
              aria-label="Menüyü kapat"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-col px-6 pt-8 flex-1 gap-0">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[15px] py-4 border-b border-[#E8E4DC]/60 transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#1E4D3A] font-medium"
                    : "text-[#231F20] font-normal hover:text-[#1E4D3A]"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="px-6 pb-10 pt-6">
            <Link
              href="/bize-ulasin"
              onClick={() => setIsOpen(false)}
              className="block w-full border border-[#1E4D3A] text-[#1E4D3A] text-center text-[14px] font-medium tracking-wide py-3.5 rounded-full hover:bg-[#1E4D3A] hover:text-white transition-all duration-300"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;