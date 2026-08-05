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

export default function AboutHero() {
  return (
    <section
      className="hero about-hero"
      aria-labelledby="about-hero-title"
    >
      <div className="about-hero-copy">
        <p className="eyebrow">HAKKIMIZDA</p>

        <h1 id="about-hero-title">
          Yapay zekâ ile geleceği
          <br />
          <span>şekillendiriyoruz.</span>
        </h1>

        <p className="lead">
          Kiena, yapay zekâ ve veri teknolojilerini insan odaklı dijital
          deneyimlere dönüştüren yenilikçi bir teknoloji şirketidir.
        </p>

        <p className="lead">
          İlk ürünümüz Glowyn ile insanların günlük yaşamlarını daha planlı,
          verimli ve keyifli hâle getirmeyi hedefliyoruz.
        </p>

        <div className="hero-actions">
          <Link href="/glowyn" className="primary">
            Glowyn&apos;i Keşfedin
            <span className="about-hero-arrow">
              <ArrowIcon />
            </span>
          </Link>

          <Link href="/hakkimizda#misyonumuz" className="secondary">
            Bizi Daha Yakından Tanıyın
          </Link>
        </div>
      </div>

      <div className="hero-visual about-hero-visual" aria-hidden="true">
        <Image
          src="/assets/hero-orb.png"
          alt=""
          width={435}
          height={380}
          priority
        />
      </div>
    </section>
  );
}
