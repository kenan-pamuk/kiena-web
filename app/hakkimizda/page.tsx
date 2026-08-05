import type { Metadata } from "next";

import Header from "../../components/header";
import AboutHero from "../../components/about/AboutHero";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Kiena, yapay zekâ ve veri teknolojileriyle insan odaklı dijital ürünler geliştiren yenilikçi bir teknoloji şirketidir.",
};

export default function HakkimizdaPage() {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <Header />

        <main className="about-main">
          <AboutHero />

          {/*
            Sonraki bölümler burada, Glowyn sayfasındaki yapı korunarak
            parça parça eklenecek:

            <AboutMission />
            <AboutVision />
            <AboutValues />
            <AboutGlowyn />
            <AboutContact />
          */}
        </main>
      </div>
    </div>
  );
}
