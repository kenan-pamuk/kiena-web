const steps = [
  {
    number: "1",
    title: "Seninle Sohbet Eder",
    description: "İhtiyaçlarını anlamak için seninle konuşur.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 14h40a8 8 0 0 1 8 8v19a8 8 0 0 1-8 8H31L18 58l2-9h-8a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8Z" />
        <circle cx="23" cy="31" r="2.2" />
        <circle cx="32" cy="31" r="2.2" />
        <circle cx="41" cy="31" r="2.2" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Seni Tanır",
    description: "Alışkanlıklarını öğrenir, seni daha iyi tanır.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 7v50M22 11c-7 1-11 7-10 14-5 3-6 11-2 16-1 8 6 14 13 12 3 5 9 6 13 3M42 11c7 1 11 7 10 14 5 3 6 11 2 16 1 8-6 14-13 12-3 5-9 6-13 3" />
        <path d="M22 20c6 0 10 4 10 10M42 20c-6 0-10 4-10 10M20 39c7 0 12 4 12 11M44 39c-7 0-12 4-12 11" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Öneriler Oluşturur",
    description: "Sana özel planlar, öneriler ve hatırlatmalar sunar.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 6a19 19 0 0 0-12 34c3 2 4 6 4 9h16c0-3 1-7 4-9A19 19 0 0 0 32 6Z" />
        <path d="M25 55h14M27 60h10M32 1v4M8 13l4 4M56 13l-4 4M2 32h6M56 32h6" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Hayatını Kolaylaştırır",
    description: "Zamanını daha verimli kullanmanı ve hayatını iyileştirmeni sağlar.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="25" />
        <circle cx="23" cy="26" r="2" />
        <circle cx="41" cy="26" r="2" />
        <path d="M20 39c3 6 9 9 12 9s9-3 12-9" />
      </svg>
    ),
  },
];

export default function GlowynHowItWorks() {
  return (
    <section
      id="nasil-calisir"
      className="glowyn-how-it-works"
      aria-labelledby="glowyn-how-title"
    >
      <h2 id="glowyn-how-title" className="glowyn-section-title">
        <span>Glowyn Nasıl</span> Çalışır?
      </h2>

      <div className="glowyn-how-grid">
        {steps.map((step, index) => (
          <div className="glowyn-how-step-wrap" key={step.number}>
            <article className="glowyn-how-step">
              <div className="glowyn-how-icon">{step.icon}</div>

              <span className="glowyn-how-top-number" aria-hidden="true">
                {step.number}
              </span>

              <div className="glowyn-how-heading">
                <span className="glowyn-how-number">{step.number}</span>
                <h3>{step.title}</h3>
              </div>

              <p>{step.description}</p>
            </article>

            {index < steps.length - 1 && (
              <span className="glowyn-how-arrow" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
