import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B1A]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center">
              {/* Header'da kullandığın logo ile aynı yolu kullan */}
              <Image
                src="/logo.png"
                alt="Kiena"
                width={130}
                height={34}
                priority
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini
              şekillendiriyoruz.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-md border border-white/10 p-2 transition hover:border-violet-500 hover:text-violet-400"
              >
                <Linkedin size={16} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="rounded-md border border-white/10 p-2 transition hover:border-violet-500 hover:text-violet-400"
              >
                <Instagram size={16} />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="rounded-md border border-white/10 p-2 transition hover:border-violet-500 hover:text-violet-400"
              >
                <Twitter size={16} />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                className="rounded-md border border-white/10 p-2 transition hover:border-violet-500 hover:text-violet-400"
              >
                <Youtube size={16} />
              </Link>
            </div>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Şirket</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  Hakkımızda
                </Link>
              </li>

              <li>
                <Link href="/mission" className="hover:text-white">
                  Misyonumuz
                </Link>
              </li>

              <li>
                <Link href="/values" className="hover:text-white">
                  Değerlerimiz
                </Link>
              </li>

              <li>
                <Link href="/career" className="hover:text-white">
                  Kariyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Çözümler */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Çözümlerimiz</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/solutions/ai" className="hover:text-white">
                  Yapay Zekâ
                </Link>
              </li>

              <li>
                <Link href="/solutions/data" className="hover:text-white">
                  Veri Analitiği
                </Link>
              </li>

              <li>
                <Link href="/solutions/mobile" className="hover:text-white">
                  Mobil Uygulamalar
                </Link>
              </li>

              <li>
                <Link href="/solutions/consulting" className="hover:text-white">
                  Danışmanlık
                </Link>
              </li>
            </ul>
          </div>

          {/* Glowyn */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Glowyn</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/glowyn" className="hover:text-white">
                  Glowyn Nedir?
                </Link>
              </li>

              <li>
                <Link href="/glowyn/features" className="hover:text-white">
                  Özellikleri
                </Link>
              </li>

              <li>
                <Link href="/glowyn" className="hover:text-white">
                  Yakında
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-white">
                  S.S.S.
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="mb-5 font-semibold text-white">İletişim</h3>

            <div className="space-y-4 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <Mail size={17} className="text-violet-400" />
                <a
                  href="mailto:hello@kiena.com"
                  className="hover:text-white"
                >
                  hello@kiena.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-violet-400" />
                <span>İstanbul, Türkiye</span>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 Kiena Teknoloji A.Ş. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
