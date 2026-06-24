import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Kiena ana sayfa">
        <Image
          src="/assets/kiena_logo_glowyn.png"
          alt=""
          width={170}
          height={60}
          priority
        />
      </Link>

      <nav className="nav">
        <Link className="active" href="/">Ana Sayfa</Link>
        <a>Hakkımızda</a>
        <a>Çözümlerimiz</a>
        <Link href="/glowyn">Glowyn</Link>
        <a>İletişim</a>
      </nav>

      <a className="contact-btn" href="mailto:info@kiena.com.tr">
        Bize Ulaşın
      </a>
    </header>
  );
}
