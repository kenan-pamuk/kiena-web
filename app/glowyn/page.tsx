"use client";

import Link from "next/link";

const modules = [
  ["💬", "AI Asistan", "Glowyn ile konuşun, yazışın ve günlük hayatınız için akıllı öneriler alın."],
  ["📅", "Planım", "Takvim, hedef, yapılacaklar ve hatırlatıcılarınızı tek yerden yönetin."],
  ["🥗", "Yemeğim", "Buzdolabı, kiler ve beslenme alışkanlıklarınıza göre yemek önerileri alın."],
  ["✨", "Stilim", "Kombin, makyaj ve bakım önerileriyle kişisel stilinizi keşfedin."],
  ["📍", "Keşfet", "Yakınınızdaki restoran, etkinlik ve yaşam alanlarını keşfedin."],
  ["🛒", "Listem", "Alışveriş listenizi otomatik oluşturun ve ihtiyaçlarınızı takip edin."]
];

const steps = [
  ["01", "Profilini oluştur", "Yaşam tarzını, hedeflerini ve tercihlerini Glowyn’e anlat."],
  ["02", "Günlük planını al", "Glowyn gününü analiz eder ve sana özel öneriler üretir."],
  ["03", "Hayatını kolaylaştır", "Plan, yemek, stil ve alışveriş süreçlerini tek uygulamada yönet."]
];

export default function GlowynPage() {
  return (
    <main className="glowynPage">
      <header className="header">
        <Link href="/" className="brand">
          <span className="brandIcon">K</span>
          <span>KIENA</span>
        </Link>

        <nav className="nav">
          <Link href="/">Ana Sayfa</Link>
          <a>Özellikler</a>
          <a>Nasıl Çalışır?</a>
          <a>Bekleme Listesi</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">GLOWYN</p>
          <h1>
            AI destekli <br />
            <span>kişisel yaşam asistanınız.</span>
          </h1>
          <p className="lead">
            Glowyn; planlama, beslenme, stil, alışveriş ve günlük yaşam önerilerini
            tek bir akıllı uygulamada birleştirir.
          </p>

          <div className="actions">
            <a href="#waitlist" className="primary">Bekleme Listesine Katıl</a>
            <Link href="/" className="secondary">Kiena’ya Dön</Link>
          </div>
        </div>

        <div className="heroVisual">
          <div className="orb">
            <div className="face">✨</div>
          </div>
          <div className="floatingCard cardOne">Bugünkü planın hazır</div>
          <div className="floatingCard cardTwo">3 yemek önerisi bulundu</div>
          <div className="floatingCard cardThree">Stil önerin oluşturuldu</div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow center">NASIL ÇALIŞIR?</p>
        <h2>Glowyn hayatınızı üç adımda kolaylaştırır.</h2>

        <div className="steps">
          {steps.map(([no, title, text]) => (
            <article className="step" key={title}>
              <strong>{no}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section modules">
        <p className="eyebrow center">ANA MODÜLLER</p>
        <h2>Günlük yaşamınız için akıllı modüller.</h2>

        <div className="grid">
          {modules.map(([icon, title, text]) => (
            <article className="module" key={title}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dayPanel">
        <div>
          <p className="eyebrow">GLOWYN İLE BİR GÜN</p>
          <h2>Sabah planından akşam önerilerine kadar yanınızda.</h2>
          <p>
            Glowyn sabah takviminizi düzenler, öğlen yemek önerir, gün içinde
            alışveriş listenizi günceller ve akşam için stil veya etkinlik önerileri sunar.
          </p>
        </div>

        <div className="timeline">
          <div><b>08:30</b><span>Günlük plan oluşturuldu</span></div>
          <div><b>12:15</b><span>Yemek önerisi hazırlandı</span></div>
          <div><b>17:45</b><span>Alışveriş listesi güncellendi</span></div>
          <div><b>20:00</b><span>Akşam önerileri sunuldu</span></div>
        </div>
      </section>

      <section id="waitlist" className="waitlist">
        <div className="miniOrb">✨</div>
        <h2>Glowyn yakında sizinle.</h2>
        <p>Beta süreci, yeni özellikler ve özel duyurulardan ilk siz haberdar olun.</p>

        <form>
          <input type="email" placeholder="E-posta adresinizi girin" />
          <button type="button">Haber Ver</button>
        </form>

        <small>🔒 Bilgileriniz güvendedir. İstediğiniz zaman abonelikten çıkabilirsiniz.</small>
      </section>

      <footer className="footer">
        <Link href="/" className="brand">
          <span className="brandIcon">K</span>
          <span>KIENA</span>
        </Link>
        <p>© 2024 Kiena Teknoloji. Tüm hakları saklıdır.</p>
      </footer>

      <style jsx>{`
        .glowynPage {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(217, 70, 239, 0.25), transparent 34%),
            radial-gradient(circle at top right, rgba(99, 102, 241, 0.25), transparent 32%),
            #050816;
          color: white;
          overflow: hidden;
          padding: 28px;
        }

        .header {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .brandIcon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #d946ef, #6366f1);
          box-shadow: 0 0 28px rgba(217, 70, 239, 0.65);
        }

        .nav {
          display: flex;
          gap: 28px;
        }

        .nav a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
        }

        .hero {
          max-width: 1180px;
          margin: 70px auto 40px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        .eyebrow {
          color: #f0abfc;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .center {
          text-align: center;
        }

        h1 {
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -4px;
          margin: 0;
        }

        h1 span,
        h2 span {
          background: linear-gradient(90deg, #f472b6, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .lead {
          max-width: 650px;
          color: #cbd5e1;
          font-size: 21px;
          line-height: 1.7;
          margin: 28px 0 0;
        }

        .actions {
          display: flex;
          gap: 16px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .primary,
        .secondary {
          padding: 16px 24px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 700;
        }

        .primary {
          color: white;
          background: linear-gradient(135deg, #d946ef, #7c3aed);
          box-shadow: 0 18px 42px rgba(124, 58, 237, 0.42);
        }

        .secondary {
          color: white;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
        }

        .heroVisual {
          position: relative;
          min-height: 520px;
          display: grid;
          place-items: center;
        }

        .orb {
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 35% 25%, rgba(255,255,255,0.95), transparent 8%),
            radial-gradient(circle at center, #f9a8d4 0%, #a855f7 36%, #4f46e5 70%, #111827 100%);
          box-shadow:
            0 0 55px rgba(217,70,239,0.85),
            0 0 120px rgba(99,102,241,0.55);
          display: grid;
          place-items: center;
          border: 8px solid rgba(255,255,255,0.12);
        }

        .face {
          font-size: 92px;
          filter: drop-shadow(0 0 25px rgba(255,255,255,0.8));
        }

        .floatingCard {
          position: absolute;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(16px);
          color: #e2e8f0;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .cardOne { top: 60px; left: 10px; }
        .cardTwo { right: 0; top: 210px; }
        .cardThree { left: 40px; bottom: 70px; }

        .section {
          max-width: 1180px;
          margin: 90px auto 0;
        }

        .section h2,
        .dayPanel h2,
        .waitlist h2 {
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.08;
          text-align: center;
          margin: 0 0 34px;
          letter-spacing: -2px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .step,
        .module {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 28px;
          padding: 28px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .step strong {
          color: #f0abfc;
          font-size: 34px;
        }

        .step h3,
        .module h3 {
          font-size: 22px;
          margin: 18px 0 10px;
        }

        .step p,
        .module p,
        .dayPanel p,
        .waitlist p,
        .footer p {
          color: #cbd5e1;
          line-height: 1.7;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-size: 26px;
          background: linear-gradient(135deg, rgba(217,70,239,0.28), rgba(99,102,241,0.28));
        }

        .dayPanel {
          max-width: 1180px;
          margin: 95px auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: center;
          padding: 42px;
          border-radius: 36px;
          background:
            linear-gradient(135deg, rgba(217,70,239,0.18), rgba(99,102,241,0.12)),
            rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.13);
        }

        .dayPanel h2 {
          text-align: left;
        }

        .timeline {
          display: grid;
          gap: 14px;
        }

        .timeline div {
          display: flex;
          gap: 18px;
          padding: 18px;
          border-radius: 20px;
          background: rgba(2, 6, 23, 0.42);
          border: 1px solid rgba(255,255,255,0.09);
        }

        .timeline b {
          color: #f0abfc;
        }

        .timeline span {
          color: #e2e8f0;
        }

        .waitlist {
          max-width: 900px;
          margin: 95px auto 0;
          text-align: center;
          padding: 55px;
          border-radius: 40px;
          background:
            radial-gradient(circle at top, rgba(244,114,182,0.28), transparent 45%),
            rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .miniOrb {
          width: 98px;
          height: 98px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin: 0 auto 20px;
          font-size: 42px;
          background: linear-gradient(135deg, #f472b6, #7c3aed);
          box-shadow: 0 0 70px rgba(217,70,239,0.8);
        }

        form {
          margin: 28px auto 14px;
          display: flex;
          max-width: 620px;
          gap: 12px;
        }

        input {
          flex: 1;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(2,6,23,0.5);
          color: white;
          border-radius: 16px;
          padding: 17px 18px;
          outline: none;
        }

        button {
          border: 0;
          border-radius: 16px;
          padding: 17px 24px;
          color: white;
          font-weight: 800;
          background: linear-gradient(135deg, #d946ef, #7c3aed);
          cursor: pointer;
        }

        small {
          color: #94a3b8;
        }

        .footer {
          max-width: 1180px;
          margin: 70px auto 0;
          padding: 30px 0;
          border-top: 1px solid rgba(255,255,255,0.12);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 900px) {
          .nav {
            display: none;
          }

          .hero,
          .dayPanel {
            grid-template-columns: 1fr;
          }

          .steps,
          .grid {
            grid-template-columns: 1fr;
          }

          .heroVisual {
            min-height: 420px;
          }

          .orb {
            width: 300px;
            height: 300px;
          }

          form {
            flex-direction: column;
          }

          .footer {
            flex-direction: column;
            gap: 14px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
