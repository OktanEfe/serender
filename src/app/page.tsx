import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ValuesSection from "@/components/home/ValuesSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import BlogPreview from "@/components/home/BlogPreview";
import QuoteCTA from "@/components/home/QuoteSection";

export const metadata: Metadata = {
  title: "Anasayfa",
  description:
    "Yalova'da ekolojik yaşamı destekleyen Serender Derneği. Sürdürülebilir yaşam, permakültür, kompost eğitimleri ve ekolojik bina projeleriyle Yalova'da doğa dostu bir geleceği inşa ediyoruz.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Serender Ekolojik Yaşam Derneği | Yalova",
    description:
      "Yalova'da sürdürülebilir yaşam, permakültür ve ekolojik bina projeleri.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ValuesSection />
      <FeaturedProject />
      <BlogPreview />
      <QuoteCTA />
    </>
  );
}
