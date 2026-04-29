import type { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";

export const metadata: Metadata = {
  title: "Blog & Ekolojik Notlar",
  description:
    "Kompost, permakültür, tohum koruma, agrohomeopati, yağmur hasadı, okul bahçeleri ve daha fazlası. Ekolojik yaşam ve sürdürülebilirlik üzerine yazılar.",
  keywords: [
    "ekolojik blog",
    "permakültür yazıları",
    "kompost rehberi",
    "tohum koruma",
    "agrohomeopati",
    "sürdürülebilir yaşam blog",
    "Yalova ekolojik blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Ekolojik Notlar | Serender",
    description:
      "Kompost, permakültür, tohum koruma ve sürdürülebilirlik üzerine yazılar.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  return <BlogPage />;
}
