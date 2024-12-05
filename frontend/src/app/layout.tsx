import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rcmn.church'),
  title: {
    template: '%s | Revival Center Minnesota',
    default: 'Revival Center Minnesota',
  },
  description: 'Revival Center Minnesota is a vibrant, multicultural church committed to spreading the love and hope of Jesus Christ. Join us for worship, fellowship, and community service.',
  keywords: ['church', 'minnesota', 'revival', 'christian', 'worship', 'community', 'faith'],
  authors: [{ name: 'Revival Center Minnesota' }],
  creator: 'Revival Center Minnesota',
  publisher: 'Revival Center Minnesota',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/favicon_io/favicon.ico',
    shortcut: '/assets/favicon_io/favicon.ico',
    apple: '/assets/favicon_io/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rcmn.church',
    title: 'Revival Center Minnesota',
    description: 'A vibrant, multicultural church spreading the love and hope of Jesus Christ',
    siteName: 'Revival Center Minnesota',
    images: [
      {
        url: '/assets/icons/new-placeholder.svg',
        width: 800,
        height: 600,
        alt: 'Revival Center Minnesota',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revival Center Minnesota',
    description: 'A vibrant, multicultural church spreading the love and hope of Jesus Christ',
    images: ['/assets/icons/new-placeholder.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
