import type { Metadata } from "next";
import Header from "../../components/header";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Glowyn",
  description:
    "Glowyn hakkında sıkça sorulan sorular. Glowyn nedir, nasıl çalışır, neler yapabilir ve ne zaman yayınlanacak?",
  alternates: {
    canonical: "/sss",
  },
};

export default function SSSPage() {
  return (
    <>
      <Header />
      <FaqClient />
    </>
  );
}
