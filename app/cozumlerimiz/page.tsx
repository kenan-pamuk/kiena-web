import type { Metadata } from "next";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Çözümlerimiz | Kiena",
};

export default function Page() {
  return (
    <>
      <div className="page-shell placeholder-page-shell">
        <Header />

        <main className="placeholder-page">
          <div className="placeholder-page-glow placeholder-page-glow-one" />
          <div className="placeholder-page-glow placeholder-page-glow-two" />

          <span id="yapay-zeka" className="placeholder-page-anchor" aria-hidden="true" />
          <span id="veri-analitigi" className="placeholder-page-anchor" aria-hidden="true" />
          <span id="mobil-uygulamalar" className="placeholder-page-anchor" aria-hidden="true" />
          <span id="danismanlik" className="placeholder-page-anchor" aria-hidden="true" />

          <section className="placeholder-page-card">
            <h1>Çözümlerimiz</h1>
          </section>
        </main>
      </div>
    </>
  );
}
