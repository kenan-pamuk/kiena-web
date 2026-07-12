import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#060816]">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div>

            <Link href="/">
              <Image
                src="/logo.png"
                alt="Kiena"
                width={135}
                height={34}
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Yapay zekâ ve veri teknolojileriyle
              dijital dünyanın geleceğini
              şekillendiriyoruz.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="social-btn"
              >
                in
              </a>

              <a
                href="#"
                className="social-btn"
              >
                ig
              </a>

              <a
                href="#"
                className="social-btn"
              >
                X
              </a>

              <a
                href="#"
                className="social-btn"
              >
                ▶
              </a>

            </div>

          </div>

          {/* Şirket */}

          <div>

            <h3 className="footer-title">
              Şirket
            </h3>

            <ul className="footer-list">

              <li><Link href="/about">Hakkımızda</Link></li>
              <li><Link href="/mission">Misyonumuz</Link></li>
              <li><Link href="/values">Değerlerimiz</Link></li>
              <li><Link href="/career">Kariyer</Link></li>

            </ul>

          </div>

          {/* Çözümler */}

          <div>

            <h3 className="footer-title">
              Çözümlerimiz
            </h3>

            <ul className="footer-list">

              <li><Link href="#">Yapay Zekâ</Link></li>
              <li><Link href="#">Veri Analitiği</Link></li>
              <li><Link href="#">Mobil Uygulamalar</Link></li>
              <li><Link href="#">Danışmanlık</Link></li>

            </ul>

          </div>

          {/* Glowyn */}

          <div>

            <h3 className="footer-title">
              Glowyn
            </h3>

            <ul className="footer-list">

              <li><Link href="#">Glowyn Nedir?</Link></li>
              <li><Link href="#">Özellikleri</Link></li>
              <li><Link href="#">Yakında</Link></li>
              <li><Link href="#">S.S.S.</Link></li>

            </ul>

          </div>

          {/* İletişim */}

          <div>

            <h3 className="footer-title">
              İletişim
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <div className="flex items-center gap-3">

                <span className="text-violet-400">
                  ✉
                </span>

                hello@kiena.com

              </div>

              <div className="flex items-center gap-3">

                <span className="text-violet-400">
                  📍
                </span>

                İstanbul, Türkiye

              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6">

          <p className="text-center text-sm text-gray-500">
            © 2026 Kiena Teknoloji A.Ş. Tüm hakları saklıdır.
          </p>

        </div>

      </div>
    </footer>
  );
}
