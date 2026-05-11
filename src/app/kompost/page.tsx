import type { Metadata } from "next";
import KompostPage from "@/components/kompost/KompostPage";

export const metadata: Metadata = {
  title: "Kompost Nedir? | Kompost Türleri ve Yapımı",
  description:
    "Sıcak kompost, soğuk kompost, bokashi ve solucan kompostu. Kompost nedir, nasıl yapılır? Serender Ekolojik Yaşam Derneği rehberi.",
  keywords: [
    "kompost nedir",
    "kompost nasıl yapılır",
    "sıcak kompost",
    "soğuk kompost",
    "bokashi",
    "solucan kompostu",
    "vermikompost",
    "Yalova kompost atölyesi",
    "organik tarım",
  ],
  alternates: { canonical: "/kompost" },
  openGraph: {
    title: "Kompost Türleri ve Yapımı | Serender",
    description:
      "4 farklı kompost yöntemi: sıcak, soğuk, bokashi ve solucan kompostu. Adım adım yapım rehberi.",
    url: "/kompost",
  },
};

export default function Page() {
  return <KompostPage />;
}
