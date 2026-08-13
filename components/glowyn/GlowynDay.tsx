const moments = [
  {
    title: "Sabah",
    quote: "Günaydın! Bugün 3 toplantın var ve hava güneşli.",
    image: "/glowyn/day/sabah.png",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="10" />
        <path d="M32 5v9M32 50v9M5 32h9M50 32h9M13 13l7 7M44 44l7 7M51 13l-7 7M20 44l-7 7" />
      </svg>
    ),
  },
  {
    title: "Öğle",
    quote: "Evdeki malzemelerle pratik bir makarna yapabilirsin.",
    image: "/glowyn/day/ogle.png",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M14 8v20M22 8v20M14 18h8M18 28v28M42 8v48M50 8c0 12-2 18-8 20" />
      </svg>
    ),
  },
  {
    title: "Akşam",
    quote: "Bu akşam için bu kombini tam sana göre olabilir.",
    image: "/glowyn/day/aksam.png",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8c0 6 7 7 7 13 0 4-3 7-7 7s-7-3-7-7" />
        <path d="M32 28 10 45h44L32 28Z" />
      </svg>
    ),
  },
  {
    title: "Gece",
    quote: "Yarınki planlarını gözden geçirmeyi unutma.",
    image: "/glowyn/day/gece.png",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M44 8a24 24 0 1 0 12 42A22 22 0 0 1 44 8Z" />
      </svg>
    ),
  },
];

export default function GlowynDay() {
  return (
    <section
      className="glowyn-day"
      aria-labelledby="glowyn-day-title"
    >
      <h2 id="glowyn-day-title" className="glowyn-section-title">
        <span>Glowyn ile</span> Bir Gün
      </h2>

      <div className="glowyn-day-timeline" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="glowyn-day-grid">
        {moments.map((moment) => (
          <article className="glowyn-day-card" key={moment.title}>
            <div className="glowyn-day-heading">
              <div className="glowyn-day-icon">{moment.icon}</div>

              <div>
                <h3>{moment.title}</h3>
                <p>“{moment.quote}”</p>
              </div>
            </div>

            <div className="glowyn-day-preview">
              <img
                src={moment.image}
                alt={`${moment.title} için Glowyn mobil uygulama ekranı`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
