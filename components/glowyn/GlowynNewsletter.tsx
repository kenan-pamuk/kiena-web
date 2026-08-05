"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function GlowynNewsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Lütfen e-posta adresinizi girin.");
      return;
    }

    setMessage(
      "Teşekkürler! Bekleme listesi bağlantısı hazır olduğunda kaydınız alınacak."
    );
  }

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
        className="glowyn-newsletter-image"
      />

      <div className="glowyn-newsletter-copy">
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

      <form onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor="glowyn-newsletter-email">
          E-posta adresiniz
        </label>

        <input
          id="glowyn-newsletter-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setMessage("");
          }}
          placeholder="E-posta adresinizi girin"
          autoComplete="email"
          required
        />

        <button type="submit">
          Haber Ver
          <span aria-hidden="true">→</span>
        </button>

        <small>
          <span aria-hidden="true">🔒</span>
          Bilgileriniz güvendedir. İstediğiniz zaman abonelikten
          çıkabilirsiniz.
        </small>

        {message && (
          <p className="glowyn-newsletter-message" role="status">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
