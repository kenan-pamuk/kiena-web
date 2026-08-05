export default function AboutMission() {
  return (
    <section className="about-mission">
      <div className="about-mission__container">
        <div className="about-mission__card">
          <div className="about-mission__glow about-mission__glow--left" />
          <div className="about-mission__glow about-mission__glow--right" />

          <div className="about-mission__content">
            <div className="about-mission__main">
              <div className="about-mission__target" aria-hidden="true">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="43"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="5"
                  />

                  <circle
                    cx="35"
                    cy="43"
                    r="13"
                    stroke="currentColor"
                    strokeWidth="5"
                  />

                  <circle cx="35" cy="43" r="3.5" fill="currentColor" />

                  <path
                    d="M35 43L58 20"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M53 12H68V27"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M54 26L68 12"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="about-mission__text">
                <span className="about-mission__eyebrow">
                  MİSYONUMUZ
                </span>

                <h2>
                  Teknolojiyi, insanların günlük yaşamını kolaylaştıran, daha
                  verimli ve daha{" "}
                  <span>anlamlı</span> hâle getiren çözümlere dönüştürmek.
                </h2>

                <p>
                  Yapay zekâ ve veri teknolojilerinin gücünü kullanarak,
                  insanların hayatına değer katıyor; her gün daha iyi bir yaşam
                  için çalışıyoruz.
                </p>
              </div>
            </div>

            <div className="about-mission__divider" />

            <div className="about-mission__benefits">
              <article className="about-mission__benefit">
                <div
                  className="about-mission__benefit-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5"
                      y="7"
                      width="22"
                      height="20"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <path
                      d="M10 4V10M22 4V10M10 14H22M10 19H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3>Daha planlı bir yaşam</h3>
                  <p>
                    Akıllı çözümlerimizle zamanı doğru yönetmenize yardımcı
                    oluyoruz.
                  </p>
                </div>
              </article>

              <article className="about-mission__benefit">
                <div
                  className="about-mission__benefit-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 26V17M13 26V10M19 26V14M25 26V6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M5 26H27"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3>Daha verimli bir gün</h3>
                  <p>
                    Teknoloji ile günlük işlerinizi kolaylaştırır,
                    verimliliğinizi artırırız.
                  </p>
                </div>
              </article>

              <article className="about-mission__benefit">
                <div
                  className="about-mission__benefit-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 27S6 21 6 13C6 9.3 8.3 7 11.5 7C13.5 7 15.1 8.1 16 9.7C16.9 8.1 18.5 7 20.5 7C23.7 7 26 9.3 26 13C26 21 16 27 16 27Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3>Daha iyi bir sen</h3>
                  <p>
                    Sağlıklı, dengeli ve keyifli bir yaşam için yanınızdayız.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
