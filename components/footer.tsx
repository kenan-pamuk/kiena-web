export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>Kiena</h2>
          <p>
            Yapay zekâ, veri teknolojileri ve modern yazılım çözümleriyle
            dijital ürünler geliştiriyoruz.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Kurumsal</h3>
            <a href="/">Ana Sayfa</a>
            <a href="/about">Hakkımızda</a>
            <a href="/references">Referanslar</a>
          </div>

          <div>
            <h3>Hizmetler</h3>
            <a href="/services">Yazılım Geliştirme</a>
            <a href="/services">Yapay Zekâ</a>
            <a href="/services">Veri Çözümleri</a>
          </div>

          <div>
            <h3>İletişim</h3>
            <a href="mailto:hello@kiena.com.tr">hello@kiena.com.tr</a>
            <span>İstanbul, Türkiye</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Kiena. Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
