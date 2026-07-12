import type { Metadata } from "next";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Hakkımızda",
};

export default function Page() {
  return (
    <>
      <div className="page-shell placeholder-page-shell">
        <Header />

        <main className="placeholder-page">
          <div className="placeholder-page-glow placeholder-page-glow-one" />
          <div className="placeholder-page-glow placeholder-page-glow-two" />

          <span id="misyonumuz" className="placeholder-page-anchor" aria-hidden="true" />
          <span id="degerlerimiz" className="placeholder-page-anchor" aria-hidden="true" />

          <section className="placeholder-page-card">
            <h1>Hakkımızda</h1>
          </section>
        </main>
      </div>
    </>
  );
}
