import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="hero glowyn-hero"
      aria-labelledby="about-hero-title"
    >
      <div className="hero-copy glowyn-hero-copy">
        <p className="eyebrow">YAPAY ZEKÂ İLE GELECEĞİ ŞEKİLLENDİRİYORUZ</p>

        <h1 id="about-hero-title">
          Teknolojiyi insan için
          <span> anlamlı hâle getiriyoruz.</span>
        </h1>

        <p className="lead">
          Kiena, yapay zekâ ve veri teknolojilerini insan odaklı dijital
          deneyimlere dönüştüren yenilikçi bir teknoloji şirketidir.
        </p>

        <div className="hero-actions">
          <Link href="/glowyn" className="primary glowyn-primary">
            Glowyn&apos;i Keşfedin
            <b aria-hidden="true">→</b>
          </Link>

          <Link href="#misyonumuz" className="secondary glowyn-secondary">
            Bizi Daha Yakından Tanıyın
            <span className="glowyn-discover-icon" aria-hidden="true">
              ↓
            </span>
          </Link>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
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
