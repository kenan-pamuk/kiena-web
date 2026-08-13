const modules = [
  {
    title: "AI Asistan",
    items: ["Sohbet et", "Sesli görüş", "Günlük öneriler", "Hatırlatmalar"],
    image: "/glowyn/modules/ai-assistant.png",
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
    title: "Planım",
    items: ["Takvim", "Görevler", "Hatırlatıcılar", "Hedefler"],
    image: "/glowyn/modules/planim.png",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="13" width="48" height="43" rx="7" />
        <path d="M18 7v12M46 7v12M8 25h48" />
        <path d="M19 35h6M30 35h6M41 35h6M19 45h6M30 45h6M41 45h6" />
      </svg>
    ),
  },
  {
    title: "Yemeğim",
    items: ["Tarif önerileri", "Günlük yemek planı", "Kilerim"],
    image: "/glowyn/modules/yemegim.png",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 29h48l-5 23H13L8 29Z" />
        <path d="M14 29c3-9 9-14 18-14s15 5 18 14M24 15c-4-7 1-12 7-9M36 15c3-7 10-8 14-3" />
        <path d="M21 39h22M18 47h28" />
      </svg>
    ),
  },
  {
    title: "Keşfet",
    items: [
      "Kombin önerileri",
      "Makyaj önerileri",
      "Yakındaki mekanlar",
      "Trend içerikler",
    ],
    image: "/glowyn/modules/kesfet.webp",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 8h20l-2 12 10 9-7 27H21l-7-27 10-9-2-12Z" />
        <path d="M24 20h16M21 56l11-15 11 15" />
      </svg>
    ),
  },
];

export default function GlowynModules() {
  return (
    <section
      id="ozellikler"
      className="glowyn-modules"
      aria-labelledby="glowyn-modules-title"
    >
      <h2 id="glowyn-modules-title" className="glowyn-section-title">
        <span>Glowyn&apos;in Ana</span> Modülleri
      </h2>

      <div className="glowyn-modules-grid">
        {modules.map((module) => (
          <article className="glowyn-module-card" key={module.title}>
            <div className="glowyn-module-header">
              <div className="glowyn-module-icon">{module.icon}</div>

              <div className="glowyn-module-copy">
                <h3>{module.title}</h3>

                <ul>
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glowyn-module-preview">
              <img
                src={module.image}
                alt={`${module.title} mobil uygulama ekranı`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
