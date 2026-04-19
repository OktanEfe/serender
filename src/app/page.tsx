import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ValuesSection from "@/components/home/ValuesSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import BlogPreview from "@/components/home/BlogPreview";
import QuoteSection from "@/components/home/QuoteSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ValuesSection />
      <FeaturedProject />
      <BlogPreview />
      <QuoteSection />
    </main>
  );
}