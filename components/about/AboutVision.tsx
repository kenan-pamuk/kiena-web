import Image from "next/image";
export default function AboutVision() {
  return (
    <section className="about-vision" id="vizyonumuz">
      <div className="about-vision__content">
        <div className="about-vision__text">
          <span className="about-vision__eyebrow">VİZYONUMUZ</span>

          <h2>
            Yapay zekâ destekli kişisel yaşam teknolojilerinde{" "}
            <span>global</span> ölçekte tercih edilen bir marka olmak.
          </h2>

          <p>
            Yenilikçi çözümlerimizle, insanların hayatlarını daha planlı,
            sağlıklı, verimli ve keyifli hale getirerek geleceğin yaşam
            standartlarını bugünden inşa ediyoruz.
          </p>
        </div>

        <div className="about-vision__art" aria-hidden="true">
  <Image
    src="/assets/about-vision.png"
    alt=""
    fill
    sizes="(max-width: 980px) 100vw, 58vw"
    className="about-vision__image"
  />
</div>
        
      </div>
    </section>
  );
}
