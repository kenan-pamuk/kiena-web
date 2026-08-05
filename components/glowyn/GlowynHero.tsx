import Image from "next/image";
import Link from "next/link";

export default function GlowynHero() {
  return (
    <section
      className="hero glowyn-hero"
      aria-labelledby="glowyn-hero-title"
    >
      <div className="hero-copy glowyn-hero-copy">
        <p className="eyebrow">
          YAPAY ZEKÂ İLE GELECEĞİ ŞEKİLLENDİRİYORUZ
        </p>

        <h1 id="glowyn-hero-title">
          Glowyn ile hayatın{" "}
          <span>seninle uyum içinde.</span>
        </h1>

        <p className="lead">
          Glowyn, planlamadan beslenmeye, stil önerilerinden günlük keşiflere
          kadar yaşamının her alanında sana eşlik eden yapay zekâ destekli
          kişisel yaşam asistanındır.
        </p>

        <div className="hero-actions">
          <Link href="#bekleme-listesi" className="primary glowyn-primary">
            Bekleme Listesine Katıl
            <b aria-hidden="true">→</b>
          </Link>

          <Link href="#nasil-calisir" className="secondary glowyn-secondary">
            Glowyn&apos;i Keşfet
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
