import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "AI Asistan",
    href: "/glowyn",
    src: "/assets/asistan.png",
  },
  {
    title: "Planım",
    href: "/glowyn",
    src: "/assets/takvim.png",
  },
  {
    title: "Yemeğim",
    href: "/glowyn",
    src: "/assets/yemek.png",
  },
  {
    title: "Keşfet",
    href: "/glowyn",
    src: "/assets/kesfet.png",
  },
];

export default function AboutGlowyn() {
  return (
    <section className="about-glowyn">
      <h2>GLOWYN İLE TANIŞIN</h2>

      <div className="about-glowyn__grid">
        {items.map((item) => (
          <Link href={item.href} className="about-glowyn__card" key={item.title}>
            <Image
              src={item.src}
              width={82}
              height={82}
              alt=""
              className="about-glowyn__icon"
            />

            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
