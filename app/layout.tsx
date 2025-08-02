import type { Metadata } from 'next';
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://media-copy.vercel.app/'),
  title: {
    template: '%s | 模写修行メディアのコーディング',
    default: '模写修行メディアのコーディング',
  },
  description:
    '模写修行メディアのコーディングをNext.js＋ヘッドレスCMSで作成したサイトです。',
  openGraph: {
    title: '模写修行メディアのコーディング',
    description:
      '模写修行メディアのコーディングをNext.js＋ヘッドレスCMSで作成したサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://media-copy.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
