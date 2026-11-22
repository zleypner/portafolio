import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Caso de Éxito: Gastromedical CR | 77% de Contactos desde Google Orgánico',
  description: 'Cómo Gastromedical CR logró que el 77% de sus contactos digitales llegaran desde Google orgánico y un 17% desde ChatGPT. Sin inversión en anuncios pagados.',
  keywords: [
    'caso de éxito SEO',
    'Gastromedical CR',
    'posicionamiento Google',
    'SEO médico Costa Rica',
    'AEO ChatGPT',
    'marketing digital salud',
    'resultados SEO orgánico',
    'gastroenterología Costa Rica',
  ],
  openGraph: {
    type: 'article',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com/casos-de-exito/gastromedical',
    title: 'Gastromedical CR: 77% de Contactos desde Google Orgánico',
    description: 'Resultados reales en 90 días. Sin publicidad pagada. Posicionamiento en Google y ChatGPT.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/presencia-digital/gastro-hero-2.webp',
        width: 1200,
        height: 630,
        alt: 'Caso de Éxito Gastromedical CR - Anwar Sánchez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caso de Éxito: Gastromedical CR',
    description: '77% de contactos desde Google orgánico. Sin anuncios pagados.',
  },
  alternates: {
    canonical: 'https://anwarsanchez.com/casos-de-exito/gastromedical',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://anwarsanchez.com/casos-de-exito/gastromedical/#article',
      headline: 'Gastromedical CR: 77% de Contactos Digitales desde Google Orgánico',
      description: 'Caso de éxito de posicionamiento digital para clínica de gastroenterología en Costa Rica.',
      author: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
      },
      datePublished: '2026-11-18',
      dateModified: new Date().toISOString(),
      publisher: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://anwarsanchez.com/casos-de-exito/gastromedical',
      },
    },
    {
      '@type': 'Review',
      '@id': 'https://anwarsanchez.com/casos-de-exito/gastromedical/#review',
      author: {
        '@type': 'Person',
        name: 'Dr. Daniel Zúñiga',
        jobTitle: 'Director Médico',
        worksFor: {
          '@type': 'MedicalOrganization',
          name: 'Gastromedical CR',
          url: 'https://gastromedicalcr.com',
        },
      },
      itemReviewed: {
        '@type': 'Service',
        name: 'Estrategia Digital y SEO',
        provider: {
          '@type': 'Person',
          name: 'Anwar Sánchez',
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      '@type': 'MedicalOrganization',
      '@id': 'https://gastromedicalcr.com/#organization',
      name: 'Gastromedical CR',
      url: 'https://gastromedicalcr.com',
      medicalSpecialty: 'Gastroenterology',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CR',
      },
    },
  ],
};

export default function GastromedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="gastromedical-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
