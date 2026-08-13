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
    "Kiena Bilişim Teknolojileri",
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
      name: "Kiena Bilişim Teknolojileri Ltd. Şti.",
    },
  ],

  creator: "Kiena",
  publisher: "Kiena Bilişim Teknolojileri Ltd. Şti.",

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
