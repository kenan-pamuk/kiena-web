import Image from 'next/image';
import Link from 'next/link';
import Header from "../components/header";

const features = [
  ['▣', 'Yapay Zekâ Odaklı', 'Akıllı algoritmalarla veriye dayalı çözümler sunarız.'],
  ['◇', 'Güvenli & Şeffaf', 'Veri güvenliği ve şeffaflık ilkelerimizle çalışırız.'],
  ['▯', 'Mobil Deneyim', 'Kullanıcı odaklı tasarım ile dijital deneyimi taşırız.'],
  ['✣', 'Sürekli Gelişim', 'Yenilikçi bakış açımızla ihtiyaçları takip ederiz.']
];

const cards = [
   [
    "/assets/asistan.png",
    "AI Asistan",
    "Glowyn ile yazışın, konuşun, öneriler alın ve günlük hayatınızda akıllı destek alın."
  ],
   [
    "/assets/takvim.png",
    "Planım",
    "Takviminizi yönetin, hedeflerinizi belirleyin, hatırlatıcılarla planlı yaşayın."
  ],
   [
    "/assets/yemek.png",
    "Yemeğim",
    "Günlük yemek önerileri alın, beslenmenizi planlayın ve kilerinizi yönetin."
  ],  
  ['♕', 'Keşfet', 'Kombin ve makyaj önerileri alın, yakınınızdaki merkezleri keşfedin.']
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">YAPAY ZEKÂ İLE GELECEĞİ ŞEKİLLENDİRİYORUZ</p>
          <h1>Akıllı çözümlerle hayatı kolaylaştırıyor, <span>değeri artırıyoruz.</span></h1>
          <p className="lead">Kiena, yapay zekâ ve veri teknolojileriyle dijital ürünler geliştiren bir teknoloji şirketidir.</p>
          <div className="hero-actions"><a className="primary">Kiena'yı Keşfedin <b>→</b></a><Link href="/glowyn" className="secondary">Glowyn'i İnceleyin ✨</Link></div>
        </div>
        <div className="hero-visual">
          <Image src="/assets/hero-orb.png" alt="Glowyn AI karakteri" width={435} height={380} priority />
        </div>
      </section>

      <section className="feature-bar">
        {features.map(([icon,title,text]) => <article key={title} className="feature"><div className="icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </section>

      <section className="glowyn-panel" id="glowyn">
        <div className="glowyn-intro"><p className="eyebrow">GLOWYN</p><h2>AI destekli kişisel yaşam asistanınız.</h2><p>Glowyn ile planlarınızı düzenleyin, beslenmenizi yönetin, stilinizi keşfedin ve hayatınızı tek bir uygulamada kolaylaştırın.</p><Image className="phone" src="/assets/phone-mock.png" alt="Glowyn mobil uygulama ekranı" width={295} height={310}/></div>
        <div className="card-grid">
  {cards.map(([icon, title, text]) => (
    <article key={title} className="glow-card">
      <div className="big-icon">
        {icon.startsWith("/") ? (
          <Image
            src={icon}
            alt={title}
            width={140}
            height={140}
            className="glow-card-image"
          />
        ) : (
          icon
        )}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <a>
          Keşfet <span>→</span>
        </a>
      </div>
    </article>
  ))}
</div>
      </section>

      <section className="newsletter"><Image src="/assets/glow-face.png" alt="Glowyn maskotu" width={190} height={185}/><div><h2>Glowyn’den<br/> ilk sen haberdar ol!</h2><p>Yeniliklerden, beta testlerinden ve özel fırsatlardan ilk sen haberdar ol.</p></div><form><input type="email" placeholder="E-posta adresinizi girin"/><button>Haber Ver</button><small>🔒 Bilgileriniz güvendedir. İstediğiniz zaman abonelikten çıkabilirsiniz.</small></form></section>
    </main>
  );
}
