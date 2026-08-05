import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.8c.55 5.1 3.15 7.7 8.25 8.25-5.1.55-7.7 3.15-8.25 8.25-.55-5.1-3.15-7.7-8.25-8.25C8.85 10.5 11.45 7.9 12 2.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OrbitIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="6" fill="currentColor" />

      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        transform="rotate(60 32 32)"
      />

      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        transform="rotate(120 32 32)"
      />
    </svg>
  );
}

export default function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="about-hero-background" aria-hidden="true">
        <span className="about-hero-orb about-hero-orb-one" />
        <span className="about-hero-orb about-hero-orb-two" />
        <span className="about-hero-grid-effect" />
      </div>

      <div className="about-hero-copy">
        <div className="about-hero-eyebrow">
          <span className="about-hero-eyebrow-line" />
          <span>Hakkımızda</span>
        </div>

        <h1 id="about-hero-title">
          Yapay zekâ ile
          <br />
          geleceği
          <br />
          <span>şekillendiriyoruz.</span>
        </h1>

        <p className="about-hero-description">
          Kiena, yapay zekâ ve veri teknolojilerini insan odaklı dijital
          deneyimlere dönüştüren yenilikçi bir teknoloji şirketidir.
        </p>

        <p className="about-hero-description about-hero-description-secondary">
          İlk ürünümüz Glowyn ile insanların günlük yaşamlarını daha planlı,
          verimli ve keyifli hâle getirmeyi hedefliyoruz.
        </p>

        <div className="about-hero-actions">
          <Link href="/glowyn" className="about-hero-primary-button">
            <span>Glowyn&apos;i Keşfedin</span>

            <span className="about-hero-button-icon">
              <ArrowIcon />
            </span>
          </Link>

          <Link
            href="/hakkimizda#misyonumuz"
            className="about-hero-secondary-button"
          >
            <span>Bizi Daha Yakından Tanıyın</span>

            <span className="about-hero-sparkle">
              <SparkleIcon />
            </span>
          </Link>
        </div>

        <div className="about-hero-trust">
          <div className="about-hero-trust-icon">
            <OrbitIcon />
          </div>

          <div>
            <strong>İnsan odaklı teknoloji</strong>
            <span>Akıllı, güvenli ve sürdürülebilir dijital ürünler.</span>
          </div>
        </div>
      </div>

      <div className="about-hero-visual" aria-hidden="true">
        <div className="about-hero-visual-glow" />

        <Image
          src="/assets/hero-orb.png"
          alt=""
          width={435}
          height={380}
          className="about-hero-image"
          priority
        />
      </div>
    </section>
  );
}
