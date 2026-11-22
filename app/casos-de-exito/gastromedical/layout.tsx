import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Caso de Éxito: Gastromedical CR | De Google y ChatGPT a Oportunidades de Negocio',
  description: 'Cómo ayudamos a una clínica especializada a convertir búsquedas en Google y ChatGPT en oportunidades reales de negocio. 77% de captación orgánica, 62,5% de conversión desde ChatGPT. Sin publicidad pagada.',
  keywords: [
    'caso de éxito marketing digital Costa Rica',
    'SEO para clínicas Costa Rica',
    'cómo conseguir clientes desde Google',
    'posicionamiento en ChatGPT',
    'conversión web a WhatsApp',
    'estrategias de captación de clientes',
    'consultoría de marketing digital Costa Rica',
    'AEO Answer Engine Optimization',
    'GEO Generative Engine Optimization',
    'marketing digital para médicos',
    'SEO gastroenterología',
    'Partner Digital Costa Rica',
  ],
  authors: [{ name: 'Anwar Sánchez', url: 'https://anwarsanchez.com' }],
  openGraph: {
    type: 'article',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com/casos-de-exito/gastromedical',
    title: 'Gastromedical CR: De Búsquedas en Google y ChatGPT a Oportunidades Reales',
    description: '77% de captación orgánica. 62,5% de conversión desde ChatGPT. 4,8x mayor intención de contacto. Sin publicidad pagada. Resultados reales en 90 días.',
    siteName: 'Anwar Sánchez - Partner Digital',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/presencia-digital/gastro-hero-2.webp',
        width: 1200,
        height: 630,
        alt: 'Caso de Éxito Gastromedical CR - 77% captación orgánica - Anwar Sánchez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caso de Éxito: Gastromedical CR | Anwar Sánchez',
    description: '77% captación orgánica, 62,5% conversión desde ChatGPT. Sin anuncios pagados.',
    creator: '@anwarsanchez',
  },
  alternates: {
    canonical: 'https://anwarsanchez.com/casos-de-exito/gastromedical',
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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://anwarsanchez.com/casos-de-exito/gastromedical/#article',
      headline: 'De Búsquedas en Google y ChatGPT a Oportunidades Reales de Negocio',
      description: 'Caso de éxito: cómo ayudamos a Gastromedical CR a convertir búsquedas relevantes en acciones de contacto por WhatsApp, sin depender de anuncios pagados.',
      author: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
        jobTitle: 'Partner Digital',
        description: 'Especialista en estrategia digital, SEO, AEO y GEO',
      },
      datePublished: '2026-11-18',
      dateModified: '2026-11-22',
      publisher: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://anwarsanchez.com/casos-de-exito/gastromedical',
      },
      about: {
        '@type': 'Thing',
        name: 'Marketing Digital y SEO para Clínicas',
      },
    },
    {
      '@type': 'CaseStudy',
      '@id': 'https://anwarsanchez.com/casos-de-exito/gastromedical/#casestudy',
      name: 'Gastromedical CR - Caso de Éxito en Captación Orgánica',
      description: 'Estrategia digital que logró 77% de captación orgánica y 62,5% de conversión desde ChatGPT en 90 días',
      about: {
        '@type': 'MedicalOrganization',
        name: 'Gastromedical CR',
        url: 'https://gastromedicalcr.com',
        medicalSpecialty: 'Gastroenterology',
      },
      provider: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://anwarsanchez.com/#digital-strategy-service',
      name: 'Estrategia Digital y Posicionamiento',
      provider: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
      },
      serviceType: 'Marketing Digital',
      areaServed: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      description: 'Estrategia digital enfocada en visibilidad, confianza y conversión para negocios que buscan generar oportunidades comerciales desde Google y herramientas de IA.',
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
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://anwarsanchez.com/casos-de-exito/gastromedical/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://anwarsanchez.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Casos de Éxito',
          item: 'https://anwarsanchez.com/casos-de-exito',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gastromedical CR',
          item: 'https://anwarsanchez.com/casos-de-exito/gastromedical',
        },
      ],
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
