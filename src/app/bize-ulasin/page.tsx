import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Serender Ekolojik Yaşam Derneği ile iletişime geçin. Yalova merkezimiz, e-posta, telefon ve sosyal medya kanallarımız. Üyelik, gönüllülük, bağış ve iş birliği için yazın.",
  keywords: [
    "Serender iletişim",
    "Yalova ekolojik dernek iletişim",
    "Serender üyelik",
    "ekolojik dernek bağış",
    "Yalova gönüllülük",
  ],
  alternates: {
    canonical: "/bize-ulasin",
  },
  openGraph: {
    title: "İletişim | Serender Ekolojik Yaşam Derneği",
    description: "Yalova'daki Serender Derneği ile iletişime geçin.",
    url: "/bize-ulasin",
  },
};

export default function BizeUlasinPage() {
  return <ContactPage />;
}
