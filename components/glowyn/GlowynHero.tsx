import Image from "next/image";
import Link from "next/link";

export default function GlowynHero() {
  return (
    <section className="glowyn-hero" aria-labelledby="glowyn-hero-title">
      <div className="glowyn-hero-content">
        <div className="glowyn-hero-copy">
          <p className="glowyn-hero-eyebrow">
            Yapay zekâ ile geleceği şekillendiriyoruz
          </p>

          <h1 id="glowyn-hero-title" className="glowyn-hero-title">
            Glowyn ile
            <br />
            hayatın{" "}
            <span className="glowyn-hero-gradient-text">
              seninle
              <br />
              uyum içinde.
            </span>
          </h1>

          <p className="glowyn-hero-description">
            Glowyn, planlamadan beslenmeye, stil önerilerinden günlük keşiflere
            kadar yaşamının her alanında sana eşlik eden yapay zekâ destekli
            kişisel yaşam asistanındır.
          </p>

          <div className="glowyn-hero-actions">
            <Link
              href="#bekleme-listesi"
              className="glowyn-hero-button glowyn-hero-button-primary"
            >
              <span>Bekleme Listesine Katıl</span>

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="#nasil-calisir"
              className="glowyn-hero-button glowyn-hero-button-secondary"
            >
              <span>Glowyn’i Keşfet</span>

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 4V19M6.5 13.5L12 19L17.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
