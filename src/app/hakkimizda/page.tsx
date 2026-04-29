import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutVision from "@/components/about/AboutVision";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Serender Ekolojik Yaşam Derneği 2019'da Yalova'da kuruldu. Sürdürülebilir yaşam kültürünü topluma yaymak için çalışan bir sivil toplum kuruluşuyuz. Hikayemizi ve değerlerimizi öğrenin.",
  keywords: [
    "Serender derneği hakkımızda",
    "Yalova ekolojik dernek",
    "Yalova sivil toplum kuruluşu",
    "ekolojik yaşam derneği kuruluş",
    "Serender hikayesi",
  ],
  alternates: {
    canonical: "/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Serender Ekolojik Yaşam Derneği",
    description:
      "2019'da Yalova'da kurulan Serender Derneği'nin hikayesi, değerleri ve vizyonu.",
    url: "/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutValues />
      <AboutVision />
    </>
  );
}
