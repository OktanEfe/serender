import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E8E4DC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/projeler/eko-bina"
          className="group bg-white rounded-3xl p-6 sm:p-8 md:p-10 flex items-end justify-between border border-[#E8E4DC] hover:border-[#1E4D3A]/20 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(30,77,58,0.12)] min-h-[170px] md:min-h-[180px]"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase mb-4 md:mb-5">
              Çalışmalarımız
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#231F20] leading-tight tracking-tight group-hover:text-[#1E4D3A] transition-colors duration-300">
              Projelerimizi
              <br />
              <span>keşfedin.</span>
            </h3>
          </div>

          <ArrowUpRight
            size={26}
            strokeWidth={1.5}
            className="text-[#9C9C94] group-hover:text-[#1E4D3A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mb-1"
          />
        </Link>

        <Link
          href="/bize-ulasin"
          className="group bg-[#1E4D3A] rounded-3xl p-6 sm:p-8 md:p-10 flex items-end justify-between min-h-[170px] md:min-h-[180px] hover:bg-[#13362A] transition-all duration-500"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.15em] text-white/40 uppercase mb-4 md:mb-5">
              İletişim
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight tracking-tight">
              Birlikte bir
              <br />
              <span>şey yapalım.</span>
            </h3>
          </div>

          <ArrowUpRight
            size={26}
            strokeWidth={1.5}
            className="text-white/50 group-hover:text-[#B7D8A6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mb-1"
          />
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E8E4DC]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <div>
          <p className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase mb-5">
            Dernek
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "Değerlerimiz", href: "/hakkimizda#degerlerimiz" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block text-[14px] text-[#5C5C56] hover:text-[#1E4D3A] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase mb-5">
            Projeler
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Eko Bina", href: "/projeler/eko-bina" },
              { label: "Tüm Projeler", href: "/projeler" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block text-[14px] text-[#5C5C56] hover:text-[#1E4D3A] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase mb-5">
            Keşfet
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Blog", href: "/blog" },
              { label: "Haberler", href: "/blog#haberler" },
              { label: "Etkinlikler", href: "/blog#etkinlikler" },
              { label: "KVKK", href: "/kvkk" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block text-[14px] text-[#5C5C56] hover:text-[#1E4D3A] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase mb-5">
            İletişim
          </p>

          <p className="text-[11px] font-medium tracking-[0.12em] text-[#9C9C94] uppercase mb-3">
            E-posta
          </p>

          <a
            href="mailto:info@serenderekolojik.com"
            className="text-[15px] sm:text-base font-normal text-[#231F20] hover:text-[#1E4D3A] transition-colors duration-300 inline-flex items-center gap-1.5 group break-all leading-relaxed"
          >
            info@serenderekolojik.com
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="text-[#9C9C94] group-hover:text-[#1E4D3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
            />
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-[1px] bg-[#9C9C94]" />
          <span className="text-[11px] font-medium tracking-[0.15em] text-[#9C9C94] uppercase">
            Serender Ekolojik Yaşam Derneği
          </span>
        </div>

        <p className="text-[12px] text-[#9C9C94]">
          © {year} Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;