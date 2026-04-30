import Link from "next/link";

export default function NotFound() {

  return (

    <main className="min-h-screen bg-[#FAF9F6] text-[#231F20] flex items-center justify-center px-6">

      <section className="w-full max-w-3xl text-center">

        <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-[#1E4D3A]/70 font-medium mb-6">

          404

        </span>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[0.95] mb-6">

          Aradığınız sayfa{" "}

          <span className="italic text-[#1E4D3A]">bulunamadı</span>

        </h1>

        <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed text-[#5C5C56] font-light mb-10">

          Ulaşmaya çalıştığınız içerik taşınmış, kaldırılmış ya da bağlantı yanlış olabilir.

          Ana sayfaya dönerek Serender’in içeriklerini keşfetmeye devam edebilirsiniz.

        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link

            href="/"

            className="inline-flex items-center justify-center rounded-full bg-[#1E4D3A] text-white px-7 py-3 text-[14px] font-medium tracking-wide transition-all duration-300 hover:bg-[#13362A]"

          >

            Ana Sayfaya Dön

          </Link>

          <Link

            href="/blog"

            className="inline-flex items-center justify-center rounded-full border border-[#1E4D3A] text-[#1E4D3A] px-7 py-3 text-[14px] font-medium tracking-wide transition-all duration-300 hover:bg-[#1E4D3A] hover:text-white"

          >

            Bloga Git

          </Link>

        </div>

        <div className="mt-14 mx-auto h-px w-32 bg-[#E8E4DC]" />

      </section>

    </main>

  );

}