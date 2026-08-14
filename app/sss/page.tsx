import type { Metadata } from "next";

import Header from "../../components/header";
import FaqClient from "./FaqClient";
import styles from "./sss.module.css";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Glowyn",
  description:
    "Glowyn hakkında sıkça sorulan sorular. Glowyn nedir, nasıl çalışır, neler yapabilir ve ne zaman yayınlanacak?",
  alternates: {
    canonical: "/sss",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.kiena.com.tr/sss",
    siteName: "Kiena",
    title: "Sıkça Sorulan Sorular | Glowyn",
    description:
      "Glowyn hakkında merak ettiklerin ve sıkça sorulan sorular.",
  },
};

export default function SSSPage() {
  return (
    <div className={`glowyn-page ${styles.sssPage}`}>
      <div className="glowyn-background" aria-hidden="true">
        <div className="glowyn-background-orb glowyn-background-orb-left" />
        <div className="glowyn-background-orb glowyn-background-orb-right" />
        <div className="glowyn-background-grid" />
      </div>

      <div className="glowyn-page-container">
        <Header />
        <FaqClient />
      </div>
    </div>
  );
}
