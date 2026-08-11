import type { Metadata } from "next";

import Header from "../../components/header";
import AboutHero from "../../components/about/AboutHero";
import AboutMission from "../../components/about/AboutMission";
import AboutVision from "../../components/about/AboutVision";
import AboutValues from "../../components/about/AboutValues";
import AboutGlowyn from "../../components/about/AboutGlowyn";
import GlowynNewsletter from "../../components/glowyn/GlowynNewsletter";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Kiena, yapay zekâ ve veri teknolojileriyle insan odaklı dijital ürünler geliştiren yenilikçi bir teknoloji şirketidir.",
};

export default function HakkimizdaPage() {
  return (
    <div className="glowyn-page">
      <div className="glowyn-background" aria-hidden="true">
        <div className="glowyn-background-orb glowyn-background-orb-left" />
        <div className="glowyn-background-orb glowyn-background-orb-right" />
        <div className="glowyn-background-grid" />
      </div>

      <div className="glowyn-page-container">
        <Header />

        <main className="glowyn-main">
          <AboutHero />
          <AboutMission />
          <AboutVision />
          <AboutValues />
          <AboutGlowyn />
          <GlowynNewsletter />
        </main>
      </div>
    </div>
  );
}
