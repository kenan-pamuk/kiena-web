import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro?: string[];
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  intro = [],
  sections,
}: LegalPageProps) {
  return (
    <section className="legal-page">
      <div className="legal-page__glow legal-page__glow--left" />
      <div className="legal-page__glow legal-page__glow--right" />

      <div className="legal-page__header">
        <span className="legal-page__eyebrow">{eyebrow}</span>

        <h1>{title}</h1>

        <div className="legal-page__intro">
          {intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="legal-page__body">
        {sections.map((section) => (
          <section
            className="legal-page__section"
            key={section.title}
          >
            <h2>{section.title}</h2>

            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <div className="legal-page__footer">
        <Link href="/">← Ana Sayfaya Dön</Link>

        <Link href="/#contact">İletişim →</Link>
      </div>
    </section>
  );
}
