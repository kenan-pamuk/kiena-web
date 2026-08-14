import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Glowyn",
  description:
    "Glowyn hakkında merak edilenler. Glowyn nedir, nasıl çalışır, hangi özellikleri sunar, kişisel veriler nasıl korunur ve ne zaman yayınlanacak?",
  alternates: {
    canonical: "/sss",
  },
};

export default function SSSPage() {
  return <FaqClient />;
}
