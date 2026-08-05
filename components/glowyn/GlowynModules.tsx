import Image from "next/image";

const modules = [
  {
    title: "AI Asistan",
    items: ["Sohbet et", "Sesli görüş", "Günlük öneriler", "Hatırlatmalar"],
    image: "/glowyn/modules/ai-assistant.webp",
    icon: "💬",
  },
  {
    title: "Planım",
    items: ["Takvim", "Görevler", "Hatırlatıcılar", "Hedefler"],
    image: "/glowyn/modules/planim.webp",
    icon: "🗓️",
  },
  {
    title: "Yemeğim",
    items: ["Tarif önerileri", "Günlük yemek planı", "Kilerim"],
    image: "/glowyn/modules/yemegim.webp",
    icon: "🥗",
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
    icon: "👗",
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
              <div className="glowyn-module-icon" aria-hidden="true">
                {module.icon}
              </div>

              <div>
                <h3>{module.title}</h3>

                <ul>
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glowyn-module-phone">
              <Image
                src={module.image}
                alt={`${module.title} mobil uygulama ekranı`}
                width={220}
                height={210}
                className="glowyn-module-phone-image"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
