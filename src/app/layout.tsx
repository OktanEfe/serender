import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://www.serenderekolojik.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Serender Ekolojik Yaşam Derneği | Yalova",
    template: "%s | Serender Ekolojik Yaşam Derneği",
  },

  description:
    "Yalova merkezli ekolojik yaşam derneği. Sürdürülebilir yaşam, permakültür, kompost eğitimleri, ekolojik bina projeleri ve doğa dostu atölyeler. 2019'dan beri Yalova'da.",

  keywords: [
    "Yalova ekolojik yaşam derneği",
    "Yalova sürdürülebilir yaşam",
    "Yalova permakültür",
    "Yalova kompost eğitimi",
    "ekolojik bina Yalova",
    "Serender derneği",
    "Yalova çevre derneği",
    "Yalova doğa dostu yaşam",
    "permakültür eğitimi",
    "kompost atölyesi",
    "ekolojik yaşam Türkiye",
    "sürdürülebilir mimari",
    "tohum koruma",
    "agrohomeopati",
    "yağmur hasadı",
    "okul bahçeleri",
    "Yalova sivil toplum kuruluşu",
    "ekolojik yaşam derneği",
  ],

  authors: [{ name: "Serender Ekolojik Yaşam Derneği" }],
  creator: "Serender Ekolojik Yaşam Derneği",
  publisher: "Serender Ekolojik Yaşam Derneği",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Serender Ekolojik Yaşam Derneği",
    title: "Serender Ekolojik Yaşam Derneği | Yalova",
    description:
      "Yalova merkezli ekolojik yaşam derneği. Sürdürülebilir yaşam, permakültür, kompost eğitimleri ve ekolojik bina projeleri.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Serender Ekolojik Yaşam Derneği",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Serender Ekolojik Yaşam Derneği | Yalova",
    description:
      "Yalova'da sürdürülebilir yaşam, permakültür, kompost eğitimleri ve ekolojik bina projeleri.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    // Google Search Console doğrulama kodu eklenince buraya:
    // google: "abcdefg123456",
  },

  category: "ekoloji, sürdürülebilirlik, çevre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        {/* Schema.org JSON-LD — Google için rich snippet */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Serender Ekolojik Yaşam Derneği",
              alternateName: "Serender",
              url: SITE_URL,
              logo: `${SITE_URL}/images/SERENDER.svg`,
              description:
                "Yalova merkezli ekolojik yaşam derneği. Sürdürülebilir yaşam, permakültür ve ekolojik bina projeleri.",
              foundingDate: "2019",
              foundingLocation: {
                "@type": "Place",
                name: "Yalova, Türkiye",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Yalova",
                addressRegion: "Yalova",
                addressCountry: "TR",
              },
              email: "info@serenderekolojik.com",
              telephone: "+90-532-574-02-35",
              sameAs: ["https://instagram.com/serenderekolojikyasam"],
              areaServed: {
                "@type": "Place",
                name: "Yalova",
              },
              knowsAbout: [
                "Permakültür",
                "Kompost",
                "Sürdürülebilir Yaşam",
                "Ekolojik Mimari",
                "Tohum Koruma",
                "Agrohomeopati",
                "Yağmur Hasadı",
                "Okul Bahçeleri",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
