import type { Metadata } from 'next';
import './globals.css';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Kiena',
    template: '%s | Kiena',
  },
  description:
    'Yapay zekâ ve veri teknolojileriyle dijital ürünler geliştiren teknoloji şirketi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
