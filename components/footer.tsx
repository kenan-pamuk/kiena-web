import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
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
            Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini
            şekillendiriyoruz.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Şirket</h4>
          <a href="/#about">Hakkımızda</a>
          <a href="/#about">Misyonumuz</a>
          <a href="/#about">Değerlerimiz</a>
          <a href="/#contact">Kariyer</a>
        </div>

        <div className="footer-col">
          <h4>Çözümlerimiz</h4>
          <a href="/#solutions">Yapay Zekâ</a>
          <a href="/#solutions">Veri Analitiği</a>
          <a href="/#solutions">Mobil Uygulamalar</a>
          <a href="/#solutions">Danışmanlık</a>
        </div>

        <div className="footer-col">
          <h4>Glowyn</h4>
          <Link href="/glowyn">Glowyn Nedir?</Link>
          <Link href="/glowyn">Özellikleri</Link>
          <Link href="/glowyn">Yakında</Link>
          <Link href="/glowyn">S.S.S.</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>İletişim</h4>
          <a href="mailto:hello@kiena.com.tr">✉ hello@kiena.com.tr</a>
          <span>⌖ İstanbul, Türkiye</span>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Kiena. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
