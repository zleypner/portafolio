import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anwarsanchez.com'),
  title: {
    default: 'Anwar Sánchez | Software, IA y Crecimiento Digital en Costa Rica',
    template: '%s | Anwar Sánchez',
  },
  description: 'Ayudo a emprendedores y empresas en Costa Rica a construir presencia digital, software a la medida e inteligencia artificial que generan confianza, oportunidades y ventas reales.',
  keywords: [
    'desarrollo web Costa Rica',
    'software a la medida',
    'inteligencia artificial',
    'marketing digital',
    'presencia digital',
    'consultor tecnología',
    'diseño web San José',
    'automatización empresarial',
    'marca personal',
    'Anwar Sánchez',
  ],
  authors: [{ name: 'Anwar Sánchez', url: 'https://anwarsanchez.com' }],
  creator: 'Anwar Sánchez',
  publisher: 'Anwar Sánchez',
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com',
    siteName: 'Anwar Sánchez',
    title: 'Anwar Sánchez | Software, IA y Crecimiento Digital',
    description: 'Presencia digital, software e inteligencia artificial para emprendedores y empresas en Costa Rica.',
    images: [
      {
        url: '/assets/yieldge/anwar/anwar-founder.webp',
        width: 1200,
        height: 630,
        alt: 'Anwar Sánchez - Software, IA y Crecimiento Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anwarsanchez',
    creator: '@anwarsanchez',
    title: 'Anwar Sánchez | Software, IA y Crecimiento Digital',
    description: 'Presencia digital, software e inteligencia artificial para emprendedores y empresas.',
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
  alternates: {
    canonical: 'https://anwarsanchez.com',
    languages: {
      'es-CR': 'https://anwarsanchez.com',
      'es': 'https://anwarsanchez.com',
    },
  },
  other: {
    'geo.region': 'CR-SJ',
    'geo.placename': 'San José, Costa Rica',
    'geo.position': '9.9281;-84.0907',
    'ICBM': '9.9281, -84.0907',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://anwarsanchez.com/#website',
      url: 'https://anwarsanchez.com',
      name: 'Anwar Sánchez',
      description: 'Software, IA y Crecimiento Digital',
      publisher: { '@id': 'https://anwarsanchez.com/#person' },
      inLanguage: 'es',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://anwarsanchez.com/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://anwarsanchez.com/#person',
      name: 'Anwar Sánchez',
      givenName: 'Anwar',
      familyName: 'Sánchez',
      url: 'https://anwarsanchez.com',
      image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      description: 'Ingeniero de software, emprendedor y consultor especializado en presencia digital, desarrollo de software e inteligencia artificial para empresas en Costa Rica.',
      jobTitle: 'Ingeniero de Software & Consultor Digital',
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
        'https://github.com/anwarsanchez',
        'https://wa.me/50670724236',
      ],
      knowsAbout: [
        'Desarrollo de Software',
        'Inteligencia Artificial',
        'Marketing Digital',
        'SEO',
        'Diseño Web',
        'Automatización',
        'Next.js',
        'React',
        'TypeScript',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Anwar Sánchez Digital',
        url: 'https://anwarsanchez.com',
      },
      nationality: { '@type': 'Country', name: 'Costa Rica' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://anwarsanchez.com/#organization',
      name: 'Anwar Sánchez Digital',
      url: 'https://anwarsanchez.com',
      logo: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      founder: { '@id': 'https://anwarsanchez.com/#person' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San José',
        addressRegion: 'San José',
        addressCountry: 'CR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+506-7072-4236',
        contactType: 'sales',
        availableLanguage: ['Spanish', 'English'],
      },
      areaServed: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
    },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {GA_ID?.startsWith('G-') && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="beforeInteractive"
            />
            <Script
              id="gtag-init"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${playfairDisplay.variable} ${dmSans.variable} ${dmSans.className}`}>{children}</body>
    </html>
  );
}
