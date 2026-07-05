import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />

      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Kiena Ana Sayfa">
            <Image
              src="/assets/kiena_logo_glowyn.png"
              alt="Kiena"
              width={170}
              height={60}
            />
          </Link>

          <p>
            Yapay zekâ, veri teknolojileri ve modern yazılım çözümleriyle
            kurumların dijital dönüşümünü hızlandıran yenilikçi teknoloji
            şirketidir.
          </p>

          <div className="footer-badge">AI Powered by Kiena</div>
        </div>

        <div className="footer-highlight">
          <span>Yeni Ürün</span>
          <h3>Glowyn</h3>
          <p>
            Yapay zekâ destekli yaşam, stil ve kişisel asistan deneyimi.
          </p>
          <Link href="/glowyn">Glowyn’i keşfet</Link>
        </div>

        <div className="footer-links">
          <div>
            <h3>Kurumsal</h3>
            <Link href="/">Ana Sayfa</Link>
            <a href="/#about">Hakkımızda</a>
            <a href="/#solutions">Çözümlerimiz</a>
            <a href="/#contact">İletişim</a>
          </div>

          <div>
            <h3>Çözümler</h3>
            <a href="/#solutions">Yazılım Geliştirme</a>
            <a href="/#solutions">Yapay Zekâ</a>
            <a href="/#solutions">Veri Teknolojileri</a>
            <Link href="/glowyn">Glowyn</Link>
          </div>

          <div>
            <h3>İletişim</h3>
            <a href="mailto:hello@kiena.com.tr">hello@kiena.com.tr</a>
            <span>İstanbul, Türkiye</span>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="GitHub">gh</a>
              <a href="#" aria-label="X">x</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Kiena. Tüm hakları saklıdır.</span>
        <span>Modern software. Intelligent products.</span>
      </div>
    </footer>
  );
}
