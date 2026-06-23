"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glowyn",
};

const modules = [
  {
    icon: "💬",
    title: "AI Asistan",
    items: ["Sohbet et", "Sesli görüş", "Günlük öneriler", "Hatırlatmalar"],
    image: "/assets/phone-mock.png",
  },
  {
    icon: "📅",
    title: "Planım",
    items: ["Takvim", "Görevler", "Hatırlatıcılar", "Hedefler"],
    image: "/assets/phone-mock.png",
  },
  {
    icon: "🥗",
    title: "Yemeğim",
    items: ["Tarif önerileri", "Günlük yemek planı", "Kilerim"],
    image: "/assets/phone-mock.png",
  },
  {
    icon: "👗",
    title: "Keşfet",
    items: ["Kombin önerileri", "Makyaj önerileri", "Yakındaki mekanlar", "Trend içerikler"],
    image: "/assets/phone-mock.png",
  },
];

const howItWorks = [
  ["💬", "Seninle Sohbet Eder", "İhtiyaçlarını anlamak için seninle konuşur."],
  ["🧠", "Seni Tanır", "Alışkanlıklarını öğrenir, seni daha iyi tanır."],
  ["💡", "Öneriler Oluşturur", "Sana özel planlar, öneriler ve hatırlatmalar sunar."],
  ["😊", "Hayatını Kolaylaştırır", "Zamanını daha verimli kullanmanı sağlar."],
];

const day = [
  ["☀️", "Sabah", "Bugünkü planını ve hava durumunu sunar."],
  ["🍴", "Öğle", "Evdeki malzemelere göre yemek önerir."],
  ["👚", "Akşam", "Akşam için kombin önerisi sunar."],
  ["🌙", "Gece", "Yarınki planlarını hatırlatır."],
];

const coming = [
  ["🧥", "Kombinim", "Dolabını dijitalleştir, sana özel kombin önerileri al."],
  ["💄", "Makyajım", "Tarzına uygun makyaj önerileri ve ürün tavsiyeleri al."],
  ["🎙️", "Sesli Glowyn", "Glowyn ile sesli konuş, derdini anlat."],
  ["✅", "Rutinlerim", "Günlük rutinlerini oluştur ve takip et."],
  ["📊", "Analizlerim", "Alışkanlıklarını analiz et, gelişimini görselleştir."],
];

export default function GlowynPage() {
  return (
    <main className="glowyn">
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="brandMark">K</span>
          <span>KIENA</span>
        </Link>

        <nav>
          <Link href="/">Ana Sayfa</Link>
          <a href="#how">Hakkımızda</a>
          <a href="#modules">Çözümlerimiz</a>
          <a className="active" href="#glowyn">Glowyn</a>
          <a href="#contact">İletişim</a>
        </nav>

        <a className="contact" href="mailto:hello@kiena.com">Bize Ulaşın</a>
      </header>

      <section className="hero" id="glowyn">
        <div className="heroText">
          <p className="eyebrow">YAPAY ZEKÂ İLE GELECEĞİ ŞEKİLLENDİRİYORUZ</p>
          <h1>
            Glowyn ile <br />
            hayatın <span>seninle uyum içinde.</span>
          </h1>
          <p>
            Glowyn, planlamadan beslenmeye, stil önerilerinden günlük keşiflere kadar
            yaşamının her alanında sana eşlik eden yapay zeka destekli kişisel yaşam asistanındır.
          </p>

          <div className="buttons">
            <a href="#waitlist" className="primary">Bekleme Listesine Katıl →</a>
            <a href="#modules" className="secondary">Glowyn’i Keşfet ↓</a>
          </div>
        </div>

        <div className="heroImage">
          <Image src="/assets/hero-orb.png" alt="Glowyn karakteri" width={560} height={500} priority />
          <div className="bubble">Merhaba! 👋<br />Ben Glowyn.</div>
        </div>
      </section>

      <section className="panel" id="how">
        <h2>GLOWYN NASIL ÇALIŞIR?</h2>
        <div className="howGrid">
          {howItWorks.map(([icon, title, text], i) => (
            <article key={title}>
              <div className="bigIcon">{icon}</div>
              <span>{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel" id="modules">
        <h2>GLOWYN’İN ANA MODÜLLERİ</h2>
        <div className="moduleGrid">
          {modules.map((m) => (
            <article className="module" key={m.title}>
              <div className="moduleTitle">
                <span>{m.icon}</span>
                <h3>{m.title}</h3>
              </div>
              <ul>
                {m.items.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <Image src={m.image} alt={m.title} width={210} height={260} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>GLOWYN İLE BİR GÜN</h2>
        <div className="dayGrid">
          {day.map(([icon, title, text]) => (
            <article key={title}>
              <div>{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <Image src="/assets/phone-mock.png" alt={title} width={190} height={230} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel characters">
        <h2>GLOWYN KARAKTERİ</h2>
        {["Mutlu", "Düşünen", "Şaşkın", "Kutlama", "Üzgün"].map((x) => (
          <div key={x}>
            <Image src="/assets/glow-face.png" alt={x} width={120} height={120} />
            <strong>{x}</strong>
          </div>
        ))}
      </section>

      <section className="panel">
        <h2>YAKINDA SİZİNLE</h2>
        <div className="comingGrid">
          {coming.map(([icon, title, text]) => (
            <article key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="waitlist" id="waitlist">
        <Image src="/assets/glow-face.png" alt="Glowyn" width={150} height={150} />
        <div>
          <h2>Glowyn’den ilk sen haberdar ol!</h2>
          <p>Yeniliklerden, beta testlerinden ve özel fırsatlardan ilk sen haberdar ol.</p>
        </div>
        <form>
          <input placeholder="Ad Soyad" />
          <input placeholder="E-posta adresiniz" />
          <button type="button">Bekleme Listesine Katıl →</button>
          <small>🔒 Bilgileriniz güvendedir.</small>
        </form>
      </section>

      <footer className="footer" id="contact">
        <div>
          <Link href="/" className="brand">
            <span className="brandMark">K</span>
            <span>KIENA</span>
          </Link>
          <p>Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini şekillendiriyoruz.</p>
        </div>

        <div><h4>Şirket</h4><a>Hakkımızda</a><a>Misyonumuz</a><a>Değerlerimiz</a><a>İletişim</a></div>
        <div><h4>Çözümlerimiz</h4><a>Yapay Zekâ Çözümleri</a><a>Mobil Uygulamalar</a><a>Veri ve Analitik</a></div>
        <div><h4>Glowyn</h4><a>Glowyn Nedir?</a><a>Özellikleri</a><a>Yakında</a></div>
        <div><h4>İletişim</h4><a href="mailto:hello@kiena.com">hello@kiena.com</a><a>İstanbul, Türkiye</a></div>
      </footer>

      <style jsx>{`
        .glowyn {
          min-height: 100vh;
          background: #030615;
          color: #fff;
          padding: 24px 64px;
          font-family: Arial, sans-serif;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1320px;
          margin: auto;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 6px;
          font-size: 24px;
        }

        .brandMark {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(135deg, #d946ef, #2563eb);
        }

        nav {
          display: flex;
          gap: 44px;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-size: 15px;
        }

        nav .active {
          color: #ff4df8;
          border-bottom: 2px solid #ff4df8;
          padding-bottom: 16px;
        }

        .contact {
          color: white;
          text-decoration: none;
          border: 1px solid #e879f9;
          border-radius: 999px;
          padding: 14px 32px;
        }

        .hero {
          max-width: 1320px;
          margin: 50px auto 28px;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          align-items: center;
        }

        .eyebrow {
          color: #e879f9;
          font-size: 15px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        h1 {
          font-size: 60px;
          line-height: 1.08;
          margin: 20px 0;
        }

        h1 span {
          background: linear-gradient(90deg, #ff4df8, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .heroText p:last-of-type {
          max-width: 480px;
          line-height: 1.7;
          color: #fff;
          font-size: 18px;
        }

        .buttons {
          display: flex;
          gap: 24px;
          margin-top: 28px;
        }

        .primary,
        .secondary {
          text-decoration: none;
          color: white;
          border-radius: 10px;
          padding: 18px 28px;
          font-weight: 700;
        }

        .primary {
          background: linear-gradient(135deg, #a855f7, #2563eb);
        }

        .secondary {
          border: 1px solid #7e22ce;
        }

        .heroImage {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .heroImage img {
          max-width: 100%;
          height: auto;
        }

        .bubble {
          position: absolute;
          right: 40px;
          top: 80px;
          background: linear-gradient(135deg, rgba(37,99,235,.75), rgba(126,34,206,.75));
          border: 1px solid #a855f7;
          padding: 22px 34px;
          border-radius: 12px;
          font-size: 22px;
          font-weight: 700;
        }

        .panel {
          max-width: 1320px;
          margin: 22px auto;
          border: 1px solid rgba(59,130,246,.22);
          background: rgba(7, 12, 35, .78);
          border-radius: 12px;
          padding: 22px;
        }

        .panel h2 {
          text-align: center;
          color: #e879f9;
          font-size: 20px;
          margin: 0 0 18px;
        }

        .howGrid,
        .moduleGrid,
        .dayGrid,
        .comingGrid {
          display: grid;
          gap: 22px;
        }

        .howGrid {
          grid-template-columns: repeat(4, 1fr);
        }

        .howGrid article {
          text-align: center;
        }

        .bigIcon {
          font-size: 58px;
          filter: drop-shadow(0 0 16px #a855f7);
        }

        .howGrid span {
          display: inline-grid;
          place-items: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #312e81;
          margin: 8px 0;
        }

        .howGrid h3,
        .module h3,
        .dayGrid h3,
        .comingGrid h3 {
          margin: 8px 0;
        }

        .howGrid p,
        .module li,
        .dayGrid p,
        .comingGrid p,
        .footer p,
        .footer a {
          color: #d6d9e8;
          font-size: 14px;
          line-height: 1.6;
        }

        .moduleGrid,
        .dayGrid {
          grid-template-columns: repeat(4, 1fr);
        }

        .module,
        .dayGrid article {
          border: 1px solid rgba(168,85,247,.28);
          border-radius: 10px;
          padding: 22px;
          overflow: hidden;
          min-height: 365px;
          background: rgba(4, 8, 27, .75);
        }

        .moduleTitle {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 24px;
        }

        .moduleTitle span,
        .dayGrid article > div,
        .comingGrid span {
          font-size: 42px;
          filter: drop-shadow(0 0 15px #ec4899);
        }

        .module img,
        .dayGrid img {
          margin-top: 24px;
          width: 100%;
          height: auto;
        }

        .dayGrid article {
          min-height: 335px;
        }

        .characters {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          text-align: center;
          align-items: center;
        }

        .characters h2 {
          grid-column: 1 / -1;
        }

        .characters div {
          display: grid;
          justify-items: center;
          gap: 8px;
        }

        .comingGrid {
          grid-template-columns: repeat(5, 1fr);
        }

        .comingGrid article {
          display: flex;
          gap: 14px;
          padding: 18px;
          border: 1px solid rgba(168,85,247,.22);
          border-radius: 10px;
          background: rgba(5, 10, 30, .75);
        }

        .waitlist {
          max-width: 1320px;
          margin: 22px auto;
          border: 1px solid rgba(59,130,246,.22);
          background: rgba(7, 12, 35, .86);
          border-radius: 12px;
          padding: 24px 42px;
          display: grid;
          grid-template-columns: 180px 1fr 1.35fr;
          align-items: center;
          gap: 30px;
        }

        .waitlist h2 {
          font-size: 31px;
          margin: 0 0 12px;
        }

        .waitlist form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        input {
          background: rgba(2, 6, 23, .85);
          border: 1px solid rgba(59,130,246,.28);
          border-radius: 8px;
          color: white;
          padding: 18px;
        }

        button {
          grid-column: 2;
          background: linear-gradient(135deg, #a855f7, #2563eb);
          color: white;
          border: 0;
          border-radius: 8px;
          font-weight: 700;
          padding: 18px;
        }

        small {
          color: #aab0c0;
        }

        .footer {
          max-width: 1320px;
          margin: 22px auto 0;
          border: 1px solid rgba(59,130,246,.22);
          background: rgba(7, 12, 35, .86);
          border-radius: 12px;
          padding: 26px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.2fr 1fr 1fr;
          gap: 30px;
        }

        .footer div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer a {
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .glowyn {
            padding: 20px;
          }

          nav {
            display: none;
          }

          .hero,
          .waitlist,
          .footer {
            grid-template-columns: 1fr;
          }

          .howGrid,
          .moduleGrid,
          .dayGrid,
          .comingGrid,
          .characters {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 44px;
          }

          .bubble {
            position: static;
            margin-top: 16px;
          }

          .waitlist form {
            grid-template-columns: 1fr;
          }

          button {
            grid-column: auto;
          }
        }
      `}</style>
    </main>
  );
}
