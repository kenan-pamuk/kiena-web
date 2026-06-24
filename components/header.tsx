"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
        <Link className={pathname === "/" ? "active" : ""} href="/">
          Ana Sayfa
        </Link>

        <a href="/#about">Hakkımızda</a>
        <a href="/#solutions">Çözümlerimiz</a>

        <Link className={pathname === "/glowyn" ? "active" : ""} href="/glowyn">
          Glowyn
        </Link>

        <a href="/#contact">İletişim</a>
      </nav>

      <a className="contact-btn" href="mailto:info@kiena.com.tr">
        Bize Ulaşın
      </a>
    </header>
  );
}
