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

    setMessage("Teşekkürler! E-posta adresiniz kaydedildi.");
  }

  return (
    <section
      id="bekleme-listesi"
      className="glowyn-newsletter"
      aria-labelledby="glowyn-newsletter-title"
    >
      <div className="glowyn-newsletter-avatar">
        <Image
          src="/assets/glow-face.png"
          alt="Glowyn"
          width={220}
          height={220}
          priority={false}
        />
      </div>

      <div className="glowyn-newsletter-copy">
        <h2 id="glowyn-newsletter-title">
          Glowyn&apos;den
          <br />
          ilk sen <span>haberdar ol!</span>
        </h2>

        <p>
          Yeniliklerden, beta testlerinden ve özel fırsatlardan ilk sen haberdar
          ol.
        </p>
      </div>

      <form className="glowyn-newsletter-form" onSubmit={handleSubmit} noValidate>
        <div className="glowyn-newsletter-fields">
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
          </button>
        </div>

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
