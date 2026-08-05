import Image from "next/image";
import Link from "next/link";

export default function GlowynHero() {
  return (
    <section className="glowyn-hero" aria-labelledby="glowyn-hero-title">
      <div className="glowyn-hero-content">
        <div className="glowyn-hero-copy">
          <p className="eyebrow">
            YAPAY ZEKÂ İLE GELECEĞİ ŞEKİLLENDİRİYORUZ
          </p>

          <h1 id="glowyn-hero-title" className="glowyn-home-style-title">
            Glowyn ile hayatın{" "}
            <span>seninle uyum içinde.</span>
          </h1>

          <p className="lead glowyn-home-style-lead">
            Glowyn, planlamadan beslenmeye, stil önerilerinden günlük keşiflere
            kadar yaşamının her alanında sana eşlik eden yapay zekâ destekli
            kişisel yaşam asistanındır.
          </p>

          <div className="hero-actions glowyn-home-style-actions">
            <Link
              href="#bekleme-listesi"
              className="primary glowyn-home-primary"
            >
              Bekleme Listesine Katıl
              <b aria-hidden="true">→</b>
            </Link>

            <Link
              href="#nasil-calisir"
              className="secondary glowyn-home-secondary"
            >
              Glowyn’i Keşfet
              <span className="glowyn-button-arrow" aria-hidden="true">
                ↓
              </span>
            </Link>
          </div>
        </div>

        <div className="glowyn-hero-visual" aria-hidden="true">
          <div className="glowyn-hero-visual-glow" />

          <Image
            src="/glowyn/glowyn-hero.webp"
            alt=""
            width={860}
            height={660}
            priority
            className="glowyn-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
