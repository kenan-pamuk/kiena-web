import type { Metadata } from "next";

import Header from "../../components/header";
import Footer from "../../components/footer";
import AboutHero from "../../components/about/AboutHero";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Kiena, yapay zekâ ve veri teknolojileriyle insan odaklı dijital ürünler geliştiren yenilikçi bir teknoloji şirketidir.",
};

export default function HakkimizdaPage() {
  return (
    <div className="about-page">
      <div className="about-page-background" aria-hidden="true">
        <span className="about-page-background-orb about-page-background-orb-left" />
        <span className="about-page-background-orb about-page-background-orb-right" />
      </div>

      <div className="about-page-container">
        <Header />

        <main className="about-main">
          <AboutHero />

          {/*
            Sonraki aşamalarda buraya sırasıyla eklenecek:

            <AboutMission />
            <AboutVision />
            <AboutValues />
            <AboutGlowyn />
            <AboutContact />
          */}
        </main>
      </div>

      <Footer />
    </div>
  );
}
