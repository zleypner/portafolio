import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anwar Sánchez | Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer specializing in building accessible, pixel-perfect digital experiences for the web.',
};

const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        {children}
        {gaId?.startsWith('G-') && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
