const upcomingFeatures = [
  {
    title: "Kombinim",
    description: "Dolabını dijitalleştir, sana özel kombin önerileri al.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8c0 6 7 7 7 13 0 4-3 7-7 7s-7-3-7-7" />
        <path d="M32 28 10 45h44L32 28Z" />
      </svg>
    ),
  },
  {
    title: "Makyajım",
    description: "Tarzına uygun makyaj önerileri ve ürün tavsiyeleri al.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M23 8h18v12H23zM20 20h24v36H20z" />
        <path d="M27 8V3h10v5M25 31h14M25 39h14" />
      </svg>
    ),
  },
  {
    title: "Sesli Glowyn",
    description: "Glowyn ile sesli konuş, derdini anlat, öneri al.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 32h6M18 22v20M26 14v36M34 8v48M42 16v32M50 23v18M58 29v6" />
      </svg>
    ),
  },
  {
    title: "Rutinlerim",
    description: "Günlük rutinlerini oluştur, alışkanlıklarını takip et.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="10" width="40" height="46" rx="6" />
        <path d="M22 10V6M42 10V6M20 24l5 5 9-10M20 40l5 5 9-10M39 26h7M39 42h7" />
      </svg>
    ),
  },
  {
    title: "Analizlerim",
    description: "Alışkanlıklarını analiz et, gelişimini görselleştir.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 54V34h10v20M27 54V22h10v32M44 54V10h10v44" />
        <path d="M8 54h48" />
      </svg>
    ),
  },
];

export default function GlowynComingSoon() {
  return (
    <section
      id="yakinda"
      className="glowyn-coming-soon"
      aria-labelledby="glowyn-coming-soon-title"
    >
      <h2 id="glowyn-coming-soon-title" className="glowyn-section-title">
        <span>Yakında</span> Sizinle
      </h2>

      <div className="glowyn-coming-soon-grid">
        {upcomingFeatures.map((feature) => (
          <article className="glowyn-coming-soon-card" key={feature.title}>
            <div className="glowyn-coming-soon-icon">{feature.icon}</div>

            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
