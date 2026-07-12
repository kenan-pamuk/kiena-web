import type { Metadata } from "next";
import PlaceholderPage from "../../components/placeholder-page";

export const metadata: Metadata = {
  title: "Çözümlerimiz | Kiena",
};

export default function Page() {
  return <PlaceholderPage title="Çözümlerimiz" anchors={["yapay-zeka", "veri-analitigi", "mobil-uygulamalar", "danismanlik"]} />;
}
