import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kiena Teknoloji',
  description: 'Yapay zekâ ve veri teknolojileriyle dijital ürünler geliştiren teknoloji şirketi.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
