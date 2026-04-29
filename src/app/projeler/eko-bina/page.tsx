import type { Metadata } from "next";
import EkoBinaHero from "@/components/projects/EkoBinaHero";
import EkoBinaAmac from "@/components/projects/EkoBinaAmac";
import EkoBinaAlanlar from "@/components/projects/EkoBinaAlanlar";
import EkoBinaEtkiIsleyis from "@/components/projects/EkoBinaEtki";
import EkoBinaAsamalarIsleyis from "@/components/projects/EkoBinaIsleyis";
import EkoBinaCTA from "@/components/projects/EkoBinaCTA";

export const metadata: Metadata = {
  title: "Eko-Bina | Sürdürülebilir Yaşam ve Eğitim Merkezi",
  description:
    "Yalova'da inşa edilen sürdürülebilir yaşam ve eğitim merkezi projesi. Kompost, sera, atölye, eğitim alanları ve kafe ile ekolojik yaşamın merkezi.",
  keywords: [
    "Yalova eko bina",
    "sürdürülebilir yaşam merkezi",
    "ekolojik bina projesi",
    "Yalova eğitim merkezi",
    "doğal yapı Yalova",
    "ekolojik mimari",
    "sürdürülebilir mimari Yalova",
  ],
  alternates: {
    canonical: "/projeler/eko-bina",
  },
  openGraph: {
    title: "Eko-Bina | Sürdürülebilir Yaşam ve Eğitim Merkezi",
    description:
      "Yalova'da inşa edilen ekolojik yaşam ve eğitim merkezi. Kompost, sera, atölye, eğitim alanları.",
    url: "/projeler/eko-bina",
  },
};

export default function EkoBinaPage() {
  return (
    <>
      <EkoBinaHero />
      <EkoBinaAmac />
      <EkoBinaAlanlar />
      <EkoBinaEtkiIsleyis />
      <EkoBinaAsamalarIsleyis />
      <EkoBinaCTA />
    </>
  );
}
