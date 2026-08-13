"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

function KienaLogo() {
  return (
    <Link
      href="/"
      className="kiena-footer-logo"
      aria-label="Kiena ana sayfa"
    >
      <Image
        src="/assets/kiena_logo_glowyn.png"
        alt="Kiena"
        width={170}
        height={60}
        priority
      />
    </Link>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1.05"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.7 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
      />

      <path
        d="m4.5 7 7.5 6 7.5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s7-6.25 7-12a7 7 0 1 0-14 0c0 5.75 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="9"
        r="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
      />
    </svg>
  );
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="kiena-footer-column">
      <h3>{title}</h3>

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const companyLinks: FooterLink[] = [
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    label: "Misyonumuz",
    href: "/hakkimizda#misyonumuz",
  },
  {
    label: "Değerlerimiz",
    href: "/hakkimizda#degerlerimiz",
  },
];

const glowynLinks: FooterLink[] = [
  {
    label: "Glowyn Nedir?",
    href: "/glowyn",
  },
  {
    label: "Özellikleri",
    href: "/glowyn#ozellikler",
  },
  {
    label: "Yakında",
    href: "/glowyn#yakinda",
  },
  {
    label: "S.S.S.",
    href: "/glowyn#sss",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer id="contact" className="kiena-footer">
      <div className="kiena-footer-container">
        <div className="kiena-footer-panel">
          <div
            className="kiena-footer-light kiena-footer-light-left"
            aria-hidden="true"
          />

          <div
            className="kiena-footer-light kiena-footer-light-right"
            aria-hidden="true"
          />

          <div className="kiena-footer-grid">
            <div className="kiena-footer-brand">
              <KienaLogo />

              <p className="kiena-footer-description">
                Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini
                şekillendiriyoruz.
              </p>

              <div className="kiena-footer-socials">
                <a
                  href="https://www.instagram.com/heyglowyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.facebook.com/p/Glowyn-AI-61591561779098/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>

            <FooterColumn
              title="Şirket"
              links={companyLinks}
            />

            <FooterColumn
              title="Glowyn"
              links={glowynLinks}
            />

            <div className="kiena-footer-column kiena-footer-contact">
              <h3>İletişim</h3>

              <a
                href="mailto:hello@kiena.com"
                className="kiena-footer-contact-row"
              >
                <span className="kiena-footer-contact-icon">
                  <MailIcon />
                </span>

                <span>hello@kiena.com</span>
              </a>

              <div className="kiena-footer-contact-row">
                <span className="kiena-footer-contact-icon">
                  <LocationIcon />
                </span>

                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="kiena-footer-bottom">
          <p className="kiena-footer-copyright">
            © 2026 Kiena Bilişim Teknolojileri Ltd. Şti. Tüm hakları saklıdır.
          </p>

          <nav
            className="kiena-footer-legal"
            aria-label="Yasal belgeler"
          >
            <Link
              href="/legal/gizlilik-politikasi"
              className={
                pathname === "/legal/gizlilik-politikasi"
                  ? "kiena-footer-legal-link active"
                  : "kiena-footer-legal-link"
              }
            >
              Gizlilik Politikası
            </Link>

            <span aria-hidden="true">•</span>

            <Link
              href="/legal/kullanim-kosullari"
              className={
                pathname === "/legal/kullanim-kosullari"
                  ? "kiena-footer-legal-link active"
                  : "kiena-footer-legal-link"
              }
            >
              Kullanım Koşulları
            </Link>

            <span aria-hidden="true">•</span>

            <Link
              href="/legal/kvkk-aydinlatma-metni"
              className={
                pathname === "/legal/kvkk-aydinlatma-metni"
                  ? "kiena-footer-legal-link active"
                  : "kiena-footer-legal-link"
              }
            >
              KVKK Aydınlatma Metni
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
