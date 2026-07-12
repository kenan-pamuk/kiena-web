import type { Metadata } from "next";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Kariyer | Kiena",
};

export default function Page() {
  return (
    <>
      <div className="page-shell placeholder-page-shell">
        <Header />

        <main className="placeholder-page">
          <div className="placeholder-page-glow placeholder-page-glow-one" />
          <div className="placeholder-page-glow placeholder-page-glow-two" />



          <section className="placeholder-page-card">
            <h1>Kariyer</h1>
          </section>
        </main>
      </div>
    </>
  );
}
