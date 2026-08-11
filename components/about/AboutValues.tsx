const values = [
  {
    title: "İnsan Odaklılık",
    description:
      "Teknolojiyi, insanların ihtiyaçlarını anlamak ve hayatlarını iyileştirmek için geliştiririz.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="24" cy="23" r="8" />
        <circle cx="40" cy="23" r="8" />
        <circle cx="32" cy="17" r="8" />
        <path d="M10 49c1-10 7-15 14-15s13 5 14 15" />
        <path d="M26 49c1-11 7-17 14-17s13 6 14 17" />
      </svg>
    ),
  },
  {
    title: "Güven ve Gizlilik",
    description:
      "Veri güvenliği ve gizliliği en önemli önceliğimizdir. Kullanıcılarımızın verilerine saygı duyarız.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 6 51 13v15c0 14-8 24-19 30C21 52 13 42 13 28V13Z" />
      </svg>
    ),
  },
  {
    title: "Sürekli Gelişim",
    description:
      "Öğrenir, gelişir ve yenilikçi çözümlerle geleceği şekillendiririz.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 50 26 34l10 9 18-25" />
        <path d="M42 18h12v12" />
        <path d="M12 53h42" />
      </svg>
    ),
  },
  {
    title: "Yenilikçilik",
    description:
      "Sınırları zorlar, yaratıcılığı teşvik eder ve fark yaratan teknolojiler üretiriz.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 7a19 19 0 0 0-12 34c3 2 4 6 4 9h16c0-3 1-7 4-9A19 19 0 0 0 32 7Z" />
        <path d="M25 56h14M32 1v4M7 17l5 3M57 17l-5 3M4 34h6M54 34h6" />
      </svg>
    ),
  },
];

export default function AboutValues() {
  return (
    <section className="about-values" id="degerlerimiz">
      <h2>DEĞERLERİMİZ</h2>

      <div className="about-values__grid">
        {values.map((value) => (
          <article className="about-values__card" key={value.title}>
            <div className="about-values__icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
