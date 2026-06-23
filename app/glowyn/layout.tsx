import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glowyn",
  description: "Glowyn AI destekli kişisel yaşam asistanı",
};

export default function GlowynLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
