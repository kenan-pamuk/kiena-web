"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function GlowynNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/glowyn-notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Gönderim başarısız.");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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

      <form onSubmit={handleSubmit}>
        {status !== "success" && (
          <>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresinizi girin"
              aria-label="E-posta adresinizi girin"
              autoComplete="email"
              required
              disabled={status === "loading"}
            />

            <button
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Gönderiliyor..." : "Haber Ver"}
            </button>
          </>
        )}

        {status === "success" && (
          <div
            className="newsletter-success"
            role="status"
            aria-live="polite"
          >
            Teşekkürler! Seni haberdar edeceğiz ✓
          </div>
        )}

        {status === "error" && (
          <div
            className="newsletter-error"
            role="alert"
          >
            Bir sorun oluştu. Lütfen tekrar deneyin.
          </div>
        )}

        <small>
          🔒 Bilgileriniz güvendedir. İstediğiniz zaman abonelikten
          çıkabilirsiniz.
        </small>
      </form>
    </section>
  );
}
