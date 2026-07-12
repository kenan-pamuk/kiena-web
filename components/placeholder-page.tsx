type PlaceholderPageProps = {
  title: string;
  anchors?: string[];
};

export default function PlaceholderPage({
  title,
  anchors = [],
}: PlaceholderPageProps) {
  return (
    <main className="placeholder-page">
      <div className="placeholder-page-glow placeholder-page-glow-one" />
      <div className="placeholder-page-glow placeholder-page-glow-two" />

      {anchors.map((anchor) => (
        <span
          key={anchor}
          id={anchor}
          className="placeholder-page-anchor"
          aria-hidden="true"
        />
      ))}

      <section className="placeholder-page-card">
        <h1>{title}</h1>
      </section>
    </main>
  );
}
