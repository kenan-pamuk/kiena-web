import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kiena.com.tr"),

  title: {
    default: "Kiena | Yapay Zekâ ve Dijital Ürünler",
    template: "%s | Kiena",
  },

  description:
    "Kiena, yapay zekâ ve veri teknolojileriyle yenilikçi dijital ürünler geliştiren teknoloji şirketidir. Kiena'nın yapay zekâ destekli yaşam asistanı Glowyn ile tanışın.",

  keywords: [
    "Kiena",
    "kiena",
    "Kiena Bilişim",
    "Kiena Bilişim Sistemleri",
    "Kiena Bilişim Sistemleri Limited Şirketi",
    "Glowyn",
    "glowyn",
    "Glowyn AI",
    "yapay zeka",
    "yapay zekâ",
    "yapay zeka asistanı",
    "yapay zekâ asistanı",
    "AI asistan",
    "dijital yaşam asistanı",
    "kişisel yapay zeka asistanı",
    "teknoloji şirketi",
    "dijital ürünler",
  ],

  authors: [
    {
      name: "KİENA BİLİŞİM SİSTEMLERİ LİMİTED ŞİRKETİ",
    },
  ],

  creator: "Kiena",
  publisher: "KİENA BİLİŞİM SİSTEMLERİ LİMİTED ŞİRKETİ",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.kiena.com.tr",
    siteName: "Kiena",
    title: "Kiena | Yapay Zekâ ve Dijital Ürünler",
    description:
      "Kiena, yapay zekâ ve veri teknolojileriyle yenilikçi dijital ürünler geliştirir. Yapay zekâ destekli yaşam asistanı Glowyn ile tanışın.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kiena | Yapay Zekâ ve Dijital Ürünler",
    description:
      "Kiena, yapay zekâ ve veri teknolojileriyle yenilikçi dijital ürünler geliştirir. Glowyn ile tanışın.",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.kiena.com.tr/#organization",
  name: "Kiena",
  legalName: "KİENA BİLİŞİM SİSTEMLERİ LİMİTED ŞİRKETİ",
  url: "https://www.kiena.com.tr",
  logo: "https://www.kiena.com.tr/icon.png",
  description:
    "Kiena, yapay zekâ ve veri teknolojileriyle yenilikçi dijital ürünler geliştiren teknoloji şirketidir.",
  brand: {
    "@type": "Brand",
    name: "Kiena",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.kiena.com.tr/#website",
  url: "https://www.kiena.com.tr",
  name: "Kiena",
  publisher: {
    "@id": "https://www.kiena.com.tr/#organization",
  },
  inLanguage: "tr-TR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        {children}
        <Footer />
      </body>
    </html>
  );
}
