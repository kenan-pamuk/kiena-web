import Image from "next/image";

export default function GlowynNewsletter() {
  return (
    <section
      id="bekleme-listesi"
      className="newsletter"
      aria-labelledby="glowyn-newsletter-title"
    >
      <Image
        src="/assets/glow-face.png"
        alt="Glowyn maskotu"
        width={220}
        height={220}
      />

      <div>
        <h2 id="glowyn-newsletter-title">
          Glowyn’den
          <br />
          <span>ilk sen haberdar ol!</span>
        </h2>

        <p>
          Yeniliklerden, beta testlerinden ve özel fırsatlardan ilk sen haberdar
          ol.
        </p>
      </div>

      <form>
        <input
          type="email"
          name="email"
          placeholder="E-posta adresinizi girin"
          aria-label="E-posta adresinizi girin"
          autoComplete="email"
          required
        />

        <button type="submit">Haber Ver</button>

        <small>
          🔒 Bilgileriniz güvendedir. İstediğiniz zaman abonelikten
          çıkabilirsiniz.
        </small>
      </form>
    </section>
  );
}
