const characters = [
  {
    name: "Mutlu",
    emoji: "😊",
    image: "/glowyn/characters/mutlu.webp",
  },
  {
    name: "Düşünen",
    emoji: "🤔",
    image: "/glowyn/characters/dusunen.webp",
  },
  {
    name: "Şaşkın",
    emoji: "😮",
    image: "/glowyn/characters/saskin.webp",
  },
  {
    name: "Kutlama",
    emoji: "🎉",
    image: "/glowyn/characters/kutlama.webp",
  },
  {
    name: "Üzgün",
    emoji: "😔",
    image: "/glowyn/characters/uzgun.webp",
  },
];

export default function GlowynCharacters() {
  return (
    <section
      className="glowyn-characters"
      aria-labelledby="glowyn-characters-title"
    >
      <h2 id="glowyn-characters-title" className="glowyn-section-title">
        <span>Glowyn</span> Karakteri
      </h2>

      <div className="glowyn-characters-grid">
        {characters.map((character) => (
          <article className="glowyn-character-card" key={character.name}>
            <div className="glowyn-character-image-wrap">
              <img
                src={character.image}
                alt={`Glowyn ${character.name.toLocaleLowerCase("tr-TR")} ifadesi`}
                loading="lazy"
              />
            </div>

            <h3>{character.name}</h3>
            <span aria-hidden="true">{character.emoji}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
