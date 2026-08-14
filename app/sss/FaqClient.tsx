"use client";

import { FormEvent, useState } from "react";
import styles from "./sss.module.css";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FaqItem[] = [
  {
    question: "1. Glowyn nedir?",
    answer: (
      <>
        Glowyn, günlük yaşamını kolaylaştırmak için tasarlanan yapay zekâ
        destekli kişisel yaşam asistanıdır. Planlamadan beslenmeye, günlük
        önerilerden keşiflere kadar farklı alanlarda sana eşlik eder.
      </>
    ),
  },
  {
    question: "2. Glowyn neler yapabilir?",
    answer: (
      <>
        Glowyn; günlük planlarını düzenlemene, yemek ve tarif fikirleri
        bulmana, ihtiyaçlarına uygun öneriler almana ve günlük yaşamındaki
        küçük kararları daha kolay vermene yardımcı olur. Yeni özelliklerle
        yetenekleri zaman içinde gelişmeye devam eder.
      </>
    ),
  },
  {
    question: "3. Glowyn nasıl çalışır?",
    answer: (
      <>
        Seninle etkileşim kurar, tercihlerini ve ihtiyaçlarını anlamaya çalışır
        ve bu bilgiler doğrultusunda sana özel öneriler oluşturur. Kullandıkça
        deneyimin daha kişisel hale gelmesi hedeflenir.
      </>
    ),
  },
  {
    question:
      "4. Glowyn beni nasıl tanır ve kişiselleştirilmiş öneriler sunar?",
    answer: (
      <>
        Glowyn, uygulama içinde paylaştığın tercihlerden ve etkileşimlerinden
        yararlanarak sana daha uygun öneriler sunmayı amaçlar. Böylece herkese
        aynı önerileri sunmak yerine deneyimini ihtiyaçlarına göre
        kişiselleştirebilir.
      </>
    ),
  },
  {
    question: "5. Kişisel verilerim güvende mi?",
    answer: (
      <>
        Kullanıcı gizliliği ve kişisel verilerin korunması Glowyn için
        önemlidir. Kişisel veriler, yürürlükteki mevzuata ve ilgili gizlilik
        politikalarımıza uygun şekilde işlenir ve korunur. Ayrıntılı bilgiye{" "}
        <a href="/legal/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</a> ve{" "}
        <a href="/legal/gizlilik-politikasi">Gizlilik Politikası</a> üzerinden
        ulaşabilirsin.
      </>
    ),
  },
  {
    question: "6. Glowyn ücretsiz olacak mı?",
    answer: (
      <>
        Glowyn&apos;in kullanım ve üyelik seçeneklerine ilişkin detayları
        lansmana yaklaştığımızda paylaşacağız. Güncellemeleri web sitemiz ve
        sosyal medya hesaplarımız üzerinden takip edebilirsin.
      </>
    ),
  },
  {
    question: "7. Glowyn hangi cihazlarda kullanılabilecek?",
    answer: (
      <>
        Glowyn&apos;i mobil cihazlarda kullanıma sunmayı planlıyoruz.
        Desteklenen platformlar ve teknik gereksinimlerle ilgili detayları
        lansman öncesinde duyuracağız.
      </>
    ),
  },
  {
    question: "8. Glowyn ne zaman yayınlanacak?",
    answer: (
      <>
        Glowyn&apos;in geliştirme çalışmaları devam ediyor. Yayın tarihi
        netleştiğinde web sitemiz ve sosyal medya hesaplarımız üzerinden
        duyuracağız.
      </>
    ),
  },
];

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      className={styles.sparkle}
      aria-hidden="true"
    >
      <path
        d="M20 3C21.5 13.5 26.5 18.5 37 20C26.5 21.5 21.5 26.5 20 37C18.5 26.5 13.5 21.5 3 20C13.5 18.5 18.5 13.5 20 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9.7 9.4a2.5 2.5 0 0 1 4.8.9c0 2-2.5 2.2-2.5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      className={styles.headset}
      aria-hidden="true"
    >
      <path
        d="M17 41V33C17 20.3 27.3 10 40 10s23 10.3 23 23v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <rect
        x="11"
        y="37"
        width="11"
        height="22"
        rx="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <rect
        x="58"
        y="37"
        width="11"
        height="22"
        rx="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M63 59c-2 8-8 11-17 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <rect
        x="36"
        y="66"
        width="12"
        height="6"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [contactOpen, setContactOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const toggleFaq = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  async function handleContactSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    setSending(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Mesaj gönderilemedi.");
      }

      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className={styles.page}>
      <div
        className={styles.ambientOne}
        aria-hidden="true"
      />

      <div
        className={styles.ambientTwo}
        aria-hidden="true"
      />

      <section className={styles.faqSection}>
        <div className={styles.heading}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <QuestionIcon />
            </span>

            SSS
          </div>

          <h1>MERAK ETTİKLERİN</h1>

          <p>Glowyn hakkında sıkça sorulanlar.</p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`${styles.faqItem} ${
                  isOpen ? styles.faqItemOpen : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.faqButton}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionLeft}>
                    <SparkleIcon />

                    <span className={styles.questionText}>
                      {item.question}
                    </span>
                  </span>

                  <span className={styles.toggle}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    isOpen
                      ? styles.answerWrapperOpen
                      : ""
                  }`}
                >
                  <div className={styles.answerInner}>
                    <div className={styles.answerRow}>
                      <div className={styles.answer}>
                        {item.answer}
                      </div>

                      <img
                        src="/assets/yanit.png"
                        alt=""
                        className={styles.answerIcon}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section className={styles.contactCard}>
          <div className={styles.contactTop}>
            <div className={styles.contactIconBox}>
              <HeadsetIcon />
            </div>

            <div className={styles.contactCopy}>
              <h2>
                Aradığın{" "}
                <span>cevabı bulamadın mı?</span>
              </h2>

              <p>Bize ulaş, yardımcı olalım.</p>
            </div>

            <button
              type="button"
              className={styles.contactButton}
              onClick={() => {
                setContactOpen((current) => !current);
                setStatus("idle");
              }}
            >
              Bize Ulaş
              <span>→</span>
            </button>
          </div>

          <div
            className={`${styles.contactFormWrapper} ${
              contactOpen
                ? styles.contactFormWrapperOpen
                : ""
            }`}
          >
            <div className={styles.contactFormInner}>
              <form
                className={styles.contactForm}
                onSubmit={handleContactSubmit}
              >
                <div className={styles.field}>
                  <label htmlFor="contactEmail">
                    E-posta adresin
                  </label>

                  <input
                    id="contactEmail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contactMessage">
                    Mesajın
                  </label>

                  <textarea
                    id="contactMessage"
                    name="message"
                    placeholder="Glowyn hakkında sormak istediğini buraya yaz..."
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    rows={5}
                    maxLength={3000}
                    required
                  />

                  <div className={styles.counter}>
                    {message.length} / 3000
                  </div>
                </div>

                <div className={styles.formBottom}>
                  <div className={styles.statusArea}>
                    {status === "success" && (
                      <p className={styles.success}>
                        ✓ Mesajın bize ulaştı. Teşekkür
                        ederiz.
                      </p>
                    )}

                    {status === "error" && (
                      <p className={styles.error}>
                        Mesaj gönderilemedi. Lütfen
                        alanları kontrol edip tekrar
                        deneyin.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={styles.sendButton}
                    disabled={sending}
                  >
                    {sending
                      ? "Gönderiliyor..."
                      : "Mesajı Gönder"}

                    {!sending && <span>→</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
