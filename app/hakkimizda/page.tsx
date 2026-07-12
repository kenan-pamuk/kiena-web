import type { Metadata } from "next";
import PlaceholderPage from "../../components/placeholder-page";

export const metadata: Metadata = {
  title: "Hakkımızda",
};

export default function Page() {
  return <PlaceholderPage title="Hakkımızda" anchors={["misyonumuz", "degerlerimiz"]} />;
}
