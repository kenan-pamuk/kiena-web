import type { Metadata } from "next";

import Header from "../../components/header";

import GlowynHero from "../../components/glowyn/GlowynHero";
import GlowynHowItWorks from "../../components/glowyn/GlowynHowItWorks";
import GlowynModules from "../../components/glowyn/GlowynModules";
import GlowynDay from "../../components/glowyn/GlowynDay";
import GlowynComingSoon from "../../components/glowyn/GlowynComingSoon";
import GlowynNewsletter from "../../components/glowyn/GlowynNewsletter";

export const metadata: Metadata = {
  title: "Glowyn – Yapay Zekâ Destekli Yaşam Asistanı",

  description:
    "Glowyn, günlük yaşamınızı kolaylaştıran yapay zekâ destekli kişisel yaşam asistanıdır. Planlama, beslenme, stil, günlük rutinler ve kişiselleştirilmiş önerilerle hayatınızı daha akıllı yönetin.",

  keywords: [
    "Glowyn",
    "glowyn",
    "Glowyn AI",
    "Glowyn yapay zeka",
    "Glowyn yapay zekâ",
    "yapay zeka asistanı",
    "yapay zekâ asistanı",
    "AI asistan",
    "kişisel yapay zeka asistanı",
    "kişisel yapay zekâ asistanı",
    "yaşam asistanı",
    "dijital yaşam asistanı",
    "yapay zeka yaşam asistanı",
    "Kiena",
    "kiena",
  ],

  alternates: {
    canonical: "/glowyn",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.kiena.com.tr/glowyn",
    siteName: "Kiena",
    title: "Glowyn – Yapay Zekâ Destekli Yaşam Asistanı",
    description:
      "Glowyn, planlama, beslenme, stil ve günlük yaşamınızı kolaylaştıran yapay zekâ destekli kişisel yaşam asistanıdır.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Glowyn – Yapay Zekâ Destekli Yaşam Asistanı",
    description:
      "Glowyn, günlük yaşamınızı kolaylaştıran yapay zekâ destekli kişisel yaşam asistanıdır.",
  },
};

const glowynJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.kiena.com.tr/glowyn#softwareapplication",

  name: "Glowyn",
  url: "https://www.kiena.com.tr/glowyn",

  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",

  description:
    "Glowyn, planlama, beslenme, stil, günlük rutinler ve kişiselleştirilmiş öneriler sunan yapay zekâ destekli kişisel yaşam asistanıdır.",

  creator: {
    "@type": "Organization",
    "@id": "https://www.kiena.com.tr/#organization",
    name: "Kiena",
    legalName: "KİENA BİLİŞİM SİSTEMLERİ LİMİTED ŞİRKETİ",
    url: "https://www.kiena.com.tr",
  },

  publisher: {
    "@type": "Organization",
    "@id": "https://www.kiena.com.tr/#organization",
    name: "Kiena",
  },

  brand: {
    "@type": "Brand",
    name: "Glowyn",
  },

  inLanguage: "tr-TR",
};

export default function GlowynPage() {
  return (
    <div className="glowyn-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(glowynJsonLd),
        }}
      />

      <div className="glowyn-background" aria-hidden="true">
        <div className="glowyn-background-orb glowyn-background-orb-left" />
        <div className="glowyn-background-orb glowyn-background-orb-right" />
        <div className="glowyn-background-grid" />
      </div>

      <div className="glowyn-page-container">
        <Header />

        <main className="glowyn-main">
          <GlowynHero />
          <GlowynHowItWorks />
          <GlowynModules />
          <GlowynDay />
          <GlowynComingSoon />
          <GlowynNewsletter />
        </main>
      </div>
    </div>
  );
}
