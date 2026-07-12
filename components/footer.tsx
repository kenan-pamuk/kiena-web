import Link from "next/link";

function KienaLogo() {
  return (
    <Link href="/" className="kiena-footer-logo" aria-label="Kiena ana sayfa">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="kiena-footer-gradient-1"
            x1="3"
            y1="4"
            x2="25"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E553FF" />
            <stop offset="1" stopColor="#7137FF" />
          </linearGradient>

          <linearGradient
            id="kiena-footer-gradient-2"
            x1="7"
            y1="17"
            x2="28"
            y2="27"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A42FF" />
            <stop offset="1" stopColor="#435BFF" />
          </linearGradient>
        </defs>

        <path
          d="M3.5 5.25H17.35L10.3 14.7H3.5L8.45 9.97L3.5 5.25Z"
          fill="url(#kiena-footer-gradient-1)"
        />

        <path
          d="M3.5 16.45H10.4L18.2 26.75H3.5L8.65 21.6L3.5 16.45Z"
          fill="url(#kiena-footer-gradient-2)"
        />

        <path
          d="M11.1 15.45L18.65 5.25H28.5L20.55 15.45H11.1Z"
          fill="#A33EFF"
        />

        <path
          d="M11.1 16.15H20.55L28.5 26.75H18.65L11.1 16.15Z"
          fill="#6946FF"
        />
      </svg>

      <span>KIENA</span>
    </Link>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.2 7.9a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 19.7h3V9.1h-3v10.6ZM9 9.1h2.9v1.5h.1c.4-.8 1.4-1.8 3.1-1.8 3.3 0 3.9 2.1 3.9 5v5.9h-3v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.3H9V9.1Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
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
      <circle cx="17.3" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.2 4h3.6l4 5.3L17.3 4h1.5l-5.3 6.3L19.2 20h-3.6l-4.4-5.8L6.3 20H4.8l5.7-6.8L5.2 4Zm2.7 1.3 8.4 13.4h1.2L9.1 5.3H7.9Z"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.2 7.1a2.7 2.7 0 0 0-1.9-1.9C16.7 4.8 12 4.8 12 4.8s-4.7 0-6.3.4a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 3.4 12a28 28 0 0 0 .4 4.9 2.7 2.7 0 0 0 1.9 1.9c1.6.4 6.3.4 6.3.4s4.7 0 6.3-.4a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .4-4.9 28 28 0 0 0-.4-4.9ZM10.3 15.2V8.8l5.3 3.2-5.3 3.2Z"
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
        strokeWidth="1.6"
      />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
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
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9"
        r="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Misyonumuz", href: "/hakkimizda#misyonumuz" },
  { label: "Değerlerimiz", href: "/hakkimizda#degerlerimiz" },
  { label: "Kariyer", href: "/kariyer" },
];

const solutionLinks = [
  { label: "Yapay Zekâ", href: "/cozumlerimiz#yapay-zeka" },
  { label: "Veri Analitiği", href: "/cozumlerimiz#veri-analitigi" },
  { label: "Mobil Uygulamalar", href: "/cozumlerimiz#mobil-uygulamalar" },
  { label: "Danışmanlık", href: "/cozumlerimiz#danismanlik" },
];

const glowynLinks = [
  { label: "Glowyn Nedir?", href: "/glowyn" },
  { label: "Özellikleri", href: "/glowyn#ozellikler" },
  { label: "Yakında", href: "/glowyn#yakinda" },
  { label: "S.S.S.", href: "/glowyn#sss" },
];

export default function Footer() {
  return (
    <footer className="kiena-footer">
      <div className="kiena-footer-shell">
        <div className="kiena-footer-glow kiena-footer-glow-left" />
        <div className="kiena-footer-glow kiena-footer-glow-right" />

        <div className="kiena-footer-grid">
          <div className="kiena-footer-brand">
            <KienaLogo />

            <p className="kiena-footer-description">
              Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini
              şekillendiriyoruz.
            </p>

            <div className="kiena-socials">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <XIcon />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <FooterColumn title="Şirket" links={companyLinks} />

          <FooterColumn title="Çözümlerimiz" links={solutionLinks} />

          <FooterColumn title="Glowyn" links={glowynLinks} />

          <div className="kiena-footer-column kiena-footer-contact">
            <h3>İletişim</h3>

            <a href="mailto:hello@kiena.com" className="kiena-contact-row">
              <span className="kiena-contact-icon">
                <MailIcon />
              </span>

              <span>hello@kiena.com</span>
            </a>

            <div className="kiena-contact-row">
              <span className="kiena-contact-icon">
                <LocationIcon />
              </span>

              <span>İstanbul, Türkiye</span>
            </div>
          </div>
        </div>
      </div>

      <p className="kiena-footer-copyright">
        © 2026 Kiena Teknoloji A.Ş. Tüm hakları saklıdır.
      </p>

      <style jsx>{`
        .kiena-footer {
          width: 100%;
          padding: 0 48px 18px;
          background: transparent;
          font-family: inherit;
        }

        .kiena-footer-shell {
          position: relative;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 30px 38px 27px;
          overflow: hidden;
          border: 1px solid rgba(97, 112, 176, 0.14);
          border-radius: 18px;
          background:
            linear-gradient(
              105deg,
              rgba(8, 12, 31, 0.98) 0%,
              rgba(6, 10, 26, 0.99) 45%,
              rgba(7, 12, 31, 0.98) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.015),
            0 14px 45px rgba(0, 0, 0, 0.16);
        }

        .kiena-footer-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.15;
        }

        .kiena-footer-glow-left {
          left: -120px;
          bottom: -130px;
          width: 270px;
          height: 220px;
          background: #7238ff;
        }

        .kiena-footer-glow-right {
          top: -170px;
          right: -100px;
          width: 310px;
          height: 250px;
          background: #204dff;
          opacity: 0.1;
        }

        .kiena-footer-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns:
            minmax(230px, 1.45fr)
            minmax(120px, 0.82fr)
            minmax(145px, 1fr)
            minmax(120px, 0.82fr)
            minmax(190px, 1.15fr);
          gap: 38px;
          align-items: start;
        }

        .kiena-footer-brand {
          min-width: 0;
        }

        .kiena-footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          text-decoration: none;
        }

        .kiena-footer-logo span {
          padding-top: 1px;
          font-size: 21px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 4px;
        }

        .kiena-footer-description {
          max-width: 235px;
          margin: 18px 0 0;
          color: rgba(226, 228, 241, 0.68);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;
        }

        .kiena-socials {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 17px;
        }

        .kiena-socials a {
          display: inline-flex;
          width: 29px;
          height: 29px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.88);
          background: rgba(255, 255, 255, 0.025);
          text-decoration: none;
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .kiena-socials a:hover {
          color: #e452ff;
          border-color: rgba(211, 70, 255, 0.56);
          background: rgba(168, 56, 255, 0.1);
          box-shadow: 0 0 14px rgba(170, 55, 255, 0.18);
          transform: translateY(-2px);
        }

        .kiena-socials svg {
          width: 15px;
          height: 15px;
        }

        .kiena-footer-column h3 {
          margin: 3px 0 19px;
          color: rgba(255, 255, 255, 0.94);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.2;
        }

        .kiena-footer-column ul {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .kiena-footer-column li {
          margin: 0;
          padding: 0;
        }

        .kiena-footer-column a {
          color: rgba(214, 217, 232, 0.68);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
          text-decoration: none;
          transition:
            color 160ms ease,
            text-shadow 160ms ease;
        }

        .kiena-footer-column a:hover {
          color: #efb2ff;
          text-shadow: 0 0 12px rgba(215, 75, 255, 0.25);
        }

        .kiena-footer-contact {
          min-width: 190px;
        }

        .kiena-contact-row {
          display: flex;
          align-items: center;
          gap: 11px;
          min-height: 27px;
          margin-bottom: 14px;
          color: rgba(214, 217, 232, 0.7);
          font-size: 13px;
          line-height: 1.4;
          text-decoration: none;
        }

        .kiena-contact-icon {
          display: inline-flex;
          flex: 0 0 20px;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          color: #d343ff;
        }

        .kiena-contact-icon svg {
          width: 20px;
          height: 20px;
        }

        a.kiena-contact-row:hover {
          color: #efb2ff;
        }

        .kiena-footer-copyright {
          width: 100%;
          max-width: 1280px;
          margin: 12px auto 0;
          color: rgba(181, 185, 207, 0.48);
          font-size: 11px;
          font-weight: 400;
          line-height: 1.5;
          text-align: center;
        }

        @media (max-width: 1100px) {
          .kiena-footer-grid {
            grid-template-columns: 1.4fr 1fr 1fr;
            row-gap: 38px;
          }

          .kiena-footer-contact {
            min-width: 0;
          }
        }

        @media (max-width: 760px) {
          .kiena-footer {
            padding: 0 18px 18px;
          }

          .kiena-footer-shell {
            padding: 28px 25px 25px;
            border-radius: 16px;
          }

          .kiena-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px 25px;
          }

          .kiena-footer-brand {
            grid-column: 1 / -1;
          }

          .kiena-footer-description {
            max-width: 290px;
          }

          .kiena-footer-contact {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 480px) {
          .kiena-footer {
            padding-right: 13px;
            padding-left: 13px;
          }

          .kiena-footer-shell {
            padding: 26px 21px 24px;
          }

          .kiena-footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .kiena-footer-brand,
          .kiena-footer-contact {
            grid-column: auto;
          }

          .kiena-footer-column h3 {
            margin-bottom: 15px;
          }

          .kiena-footer-column ul {
            gap: 11px;
          }

          .kiena-footer-logo span {
            font-size: 19px;
          }
        }
      `}</style>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

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
