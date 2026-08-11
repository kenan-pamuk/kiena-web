import Image from "next/image";
import Link from "next/link";

import Header from "../components/header";

const features = [
  [
    "▣",
    "Yapay Zekâ Odaklı",
    "Akıllı algoritmalarla veriye dayalı çözümler sunarız.",
  ],
  [
    "◇",
    "Güvenli & Şeffaf",
    "Veri güvenliği ve şeffaflık ilkelerimizle çalışırız.",
  ],
  [
    "▯",
    "Mobil Deneyim",
    "Kullanıcı odaklı tasarım ile dijital deneyimi taşırız.",
  ],
  [
    "✣",
    "Sürekli Gelişim",
    "Yenilikçi bakış açımızla ihtiyaçları takip ederiz.",
  ],
];

const cards = [
  [
    "/assets/asistan.png",
    "AI Asistan",
    "Glowyn ile yazışın, konuşun, öneriler alın ve günlük hayatınızda akıllı destek alın.",
  ],
  [
    "/assets/takvim.png",
    "Planım",
    "Takviminizi yönetin, hedeflerinizi belirleyin, hatırlatıcılarla planlı yaşayın.",
  ],
  [
    "/assets/yemek.png",
    "Yemeğim",
    "Günlük yemek önerileri alın, beslenmenizi planlayın ve kilerinizi yönetin.",
  ],
  [
    "/assets/kesfet.png",
    "Keşfet",
    "Kombin ve makyaj önerileri alın, yakınınızdaki merkezleri keşfedin.",
  ],
];

export default function Home() {
  return (
    <div className="glowyn-page home-page">
      <div className="glowyn-background" aria-hidden="true">
        <div className="glowyn-background-orb glowyn-background-orb-left" />
        <div className="glowyn-background-orb glowyn-background-orb-right" />
        <div className="glowyn-background-grid" />
      </div>

      <div className="glowyn-page-container">
        <Header />

        <main className="glowyn-main home-main">
          <section className="hero glowyn-hero">
            <div className="hero-copy glowyn-hero-copy">
              <p className="eyebrow">
                YAPAY ZEKÂ İLE GELECEĞİ ŞEKİLLENDİRİYORUZ
              </p>

              <h1>
                Akıllı çözümlerle hayatı kolaylaştırıyor,
                <span> değeri artırıyoruz.</span>
              </h1>

              <p className="lead">
                Kiena, yapay zekâ ve veri teknolojileriyle dijital ürünler
                geliştiren bir teknoloji şirketidir.
              </p>

              <div className="hero-actions">
                <Link href="/hakkimizda" className="primary glowyn-primary">
                  Kiena&apos;yı Keşfedin <b>→</b>
                </Link>

                <Link href="/glowyn" className="secondary glowyn-secondary">
                  Glowyn&apos;i İnceleyin
                  <span className="glowyn-discover-icon" aria-hidden="true">
                    ✨
                  </span>
                </Link>
              </div>
            </div>

            <div className="hero-visual glowyn-hero-visual" aria-hidden="true">
              <div className="glowyn-hero-visual-glow" />

              <Image
                src="/assets/hero-orb.png"
                alt=""
                width={435}
                height={380}
                className="glowyn-hero-image"
                priority
              />
            </div>
          </section>

          <section className="feature-bar">
            {features.map(([icon, title, text]) => (
              <article key={title} className="feature">
                <div className="icon">{icon}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="glowyn-panel" id="glowyn">
            <div className="glowyn-intro">
              <p className="eyebrow">GLOWYN</p>
              <h2>AI destekli kişisel yaşam asistanınız.</h2>
              <p>
                Glowyn ile planlarınızı düzenleyin, beslenmenizi yönetin,
                stilinizi keşfedin ve hayatınızı tek bir uygulamada
                kolaylaştırın.
              </p>

              <Image
                className="phone"
                src="/assets/phone-mock.png"
                alt="Glowyn mobil uygulama ekranı"
                width={295}
                height={310}
              />
            </div>
            
            <div className="card-grid">
              {cards.map(([icon, title, text]) => (
                <article key={title} className="glow-card">
                  <div className="big-icon">
                    <Image
                      src={icon}
                      alt={title}
                      width={100}
                      height={100}
                      className="glow-card-image"
                    />
                  </div>
            
                  <div className="glow-card-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>            
          </section>

          <section className="newsletter">
            <Image
              src="/assets/glow-face.png"
              alt="Glowyn maskotu"
              width={190}
              height={185}
            />

            <div>
              <h2>
                Glowyn’den
                <br /> ilk sen haberdar ol!
              </h2>
              <p>
                Yeniliklerden, beta testlerinden ve özel fırsatlardan ilk sen
                haberdar ol.
              </p>
            </div>

            <form>
              <input type="email" placeholder="E-posta adresinizi girin" />
              <button type="submit">Haber Ver</button>
              <small>
                🔒 Bilgileriniz güvendedir. İstediğiniz zaman abonelikten
                çıkabilirsiniz.
              </small>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
