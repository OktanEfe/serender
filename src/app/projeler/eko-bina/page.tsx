import EkoBinaHero from "@/components/projects/EkoBinaHero";
import EkoBinaAmac from "@/components/projects/EkoBinaAmac";
import EkoBinaAlanlar from "@/components/projects/EkoBinaAlanlar";
import EkoBinaEtki from "@/components/projects/EkoBinaEtki";
import EkoBinaIsleyis from "@/components/projects/EkoBinaIsleyis";
import EkoBinaCTA from "@/components/projects/EkoBinaCTA";

export const metadata = {
  title: "Sürdürülebilir Yaşam & Eğitim Merkezi — Serender",
  description: "Atıkların doğaya kazandırıldığı, uygulamalı eğitimlerin verildiği çok yönlü ekolojik yaşam merkezi projesi.",
};

export default function EkoBinaPage() {
  return (
    <>
      <EkoBinaHero />
      <EkoBinaAmac />
      <EkoBinaAlanlar />
      <EkoBinaEtki />
      <EkoBinaIsleyis />
      <EkoBinaCTA />
    </>
  );
}
