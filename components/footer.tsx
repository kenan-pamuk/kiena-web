import Link from "next/link";
import Image from "next/image";

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
    <Link href="/" className="kiena-footer-logo" aria-label="Kiena ana sayfa">
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

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.32 7.82a1.76 1.76 0 1 0 0-3.52 1.76 1.76 0 0 0 0 3.52ZM3.78 19.5h3.08V9.18H3.78V19.5ZM9.1 9.18h2.96v1.4h.04c.41-.78 1.42-1.7 2.92-1.7 3.13 0 3.71 2.06 3.71 4.74v5.88h-3.08v-5.21c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.3H9.1V9.18Z"
      />
    </svg>
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

      <circle cx="17.4" cy="6.7" r="1.05" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.1 4h3.75l4.02 5.38L17.43 4H19l-5.42 6.43L19.35 20h-3.74l-4.48-5.96L6.08 20H4.5l5.91-7.02L5.1 4Zm2.82 1.3 8.44 13.4h1.18L9.1 5.3H7.92Z"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 7.15a2.7 2.7 0 0 0-1.9-1.91C16.88 4.8 12 4.8 12 4.8s-4.88 0-6.55.44a2.7 2.7 0 0 0-1.9 1.91A27.7 27.7 0 0 0 3.1 12c0 1.62.15 3.23.45 4.85a2.7 2.7 0 0 0 1.9 1.91c1.67.44 6.55.44 6.55.44s4.88 0 6.55-.44a2.7 2.7 0 0 0 1.9-1.91c.3-1.62.45-3.23.45-4.85s-.15-3.23-.45-4.85ZM10.25 15.4V8.6L15.9 12l-5.65 3.4Z"
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
            <Link href={link.href}>{link.label}</Link>
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
  {
    label: "Kariyer",
    href: "/kariyer",
  },
];

const solutionLinks: FooterLink[] = [
  {
    label: "Yapay Zekâ",
    href: "/cozumlerimiz#yapay-zeka",
  },
  {
    label: "Veri Analitiği",
    href: "/cozumlerimiz#veri-analitigi",
  },
  {
    label: "Mobil Uygulamalar",
    href: "/cozumlerimiz#mobil-uygulamalar",
  },
  {
    label: "Danışmanlık",
    href: "/cozumlerimiz#danismanlik",
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
  return (
    <footer id="contact" className="kiena-footer">
      <div className="kiena-footer-container">
        <div className="kiena-footer-panel">
          <div className="kiena-footer-light kiena-footer-light-left" />
          <div className="kiena-footer-light kiena-footer-light-right" />

          <div className="kiena-footer-grid">
            <div className="kiena-footer-brand">
              <KienaLogo />

              <p className="kiena-footer-description">
                Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini
                şekillendiriyoruz.
              </p>

              <div className="kiena-footer-socials">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="https://www.instagram.com/heyglowyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <XIcon />
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>

            <FooterColumn title="Şirket" links={companyLinks} />

            <FooterColumn title="Çözümlerimiz" links={solutionLinks} />

            <FooterColumn title="Glowyn" links={glowynLinks} />

            <div 
              className="kiena-footer-column kiena-footer-contact">
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

        <p className="kiena-footer-copyright">
          © 2026 Kiena Bilişim Teknolojileri Ltd.Şti. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
