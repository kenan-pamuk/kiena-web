import type { Metadata } from "next";

import Header from "../../components/header";

import GlowynHero from "../../components/glowyn/GlowynHero";
import GlowynHowItWorks from "../../components/glowyn/GlowynHowItWorks";
import GlowynModules from "../../components/glowyn/GlowynModules";
import GlowynDay from "../../components/glowyn/GlowynDay";
import GlowynCharacters from "../../components/glowyn/GlowynCharacters";
import GlowynComingSoon from "../../components/glowyn/GlowynComingSoon";
import GlowynNewsletter from "../../components/glowyn/GlowynNewsletter";

export const metadata: Metadata = {
  title: "Glowyn",
  description:
    "Glowyn; planlama, beslenme, stil önerileri ve günlük yaşamını kolaylaştıran yapay zekâ destekli kişisel yaşam asistanıdır.",
};

export default function GlowynPage() {
  return (
    <div className="glowyn-page">
      <div className="glowyn-background" aria-hidden="true">
        <div className="glowyn-background-orb glowyn-background-orb-left" />
        <div className="glowyn-background-orb glowyn-background-orb-right" />
        <div className="glowyn-background-grid" />
      </div>

      {/* Ortak Header */}
      <Header />

      {/* Sayfa İçeriği */}
      <main className="glowyn-page-container glowyn-main">
        <GlowynHero />

        <GlowynHowItWorks />

        <GlowynModules />

        <GlowynDay />

        <GlowynCharacters />

        <GlowynComingSoon />

        <GlowynNewsletter />
      </main>

      {/* Footer EKLENMİYOR.
          Çünkü layout.tsx tarafından zaten gösteriliyor. */}
    </div>
  );
}
