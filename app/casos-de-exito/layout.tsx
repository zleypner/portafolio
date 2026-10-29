import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Casos de Éxito | Resultados Reales de Clientes en Costa Rica',
  description: 'Empresas en Costa Rica que aumentaron sus clientes con presencia digital profesional. Gastromedical CR +180% consultas. Physical Care +120% pacientes. Resultados reales, sin trucos.',
  keywords: [
    'casos de éxito marketing digital',
    'resultados SEO Costa Rica',
    'clientes diseño web',
    'testimonios marketing digital',
    'portfolio desarrollo web',
    'casos éxito consultoría digital',
    'resultados reales SEO',
    'clientes satisfechos Costa Rica',
    'éxito presencia digital',
    'Gastromedical CR',
    'Physical Care Fisioterapia',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com/casos-de-exito',
    title: 'Casos de Éxito | +180% Más Clientes desde Google',
    description: 'Resultados reales de empresas en Costa Rica. Sin promesas vacías, solo trabajo bien hecho.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/presencia-digital/gastro-hero-2.webp',
        width: 1200,
        height: 630,
        alt: 'Casos de Éxito - Anwar Sánchez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito | Anwar Sánchez',
    description: 'Resultados reales: +180% consultas desde Google para clínicas en Costa Rica.',
  },
  alternates: {
    canonical: 'https://anwarsanchez.com/casos-de-exito',
  },
  other: {
    'geo.region': 'CR-SJ',
    'geo.placename': 'San José, Costa Rica',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://anwarsanchez.com/casos-de-exito/#webpage',
      url: 'https://anwarsanchez.com/casos-de-exito',
      name: 'Casos de Éxito | Resultados Reales de Clientes',
      description: 'Empresas en Costa Rica que aumentaron sus clientes con presencia digital profesional.',
      isPartOf: { '@id': 'https://anwarsanchez.com/#website' },
      author: { '@id': 'https://anwarsanchez.com/#person' },
      inLanguage: 'es',
      datePublished: '2024-01-01T00:00:00+00:00',
      dateModified: new Date().toISOString(),
    },
    {
      '@type': 'ItemList',
      '@id': 'https://anwarsanchez.com/casos-de-exito/#casestudies',
      name: 'Casos de Éxito - Proyectos de Diseño Web',
      description: 'Portfolio de proyectos completados con resultados medibles',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Article',
            headline: 'Gastromedical CR: +180% consultas desde Google',
            description: 'Clínica de gastroenterología que pasó de depender de referidos a obtener la mitad de sus consultas desde Google.',
            author: { '@id': 'https://anwarsanchez.com/#person' },
            url: 'https://gastromedicalcr.com',
            datePublished: '2024-06-01',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Article',
            headline: 'Physical Care Fisioterapia: Presencia profesional',
            description: 'Centro de fisioterapia que proyecta imagen profesional y facilita el agendado de citas.',
            author: { '@id': 'https://anwarsanchez.com/#person' },
            url: 'https://www.physicalcarefisioterapia.com',
            datePublished: '2024-03-01',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Article',
            headline: 'BNG Group: Posicionamiento como experto',
            description: 'Consultor de retail que ahora recibe consultas de empresas que lo encontraron buscando asesoría especializada.',
            author: { '@id': 'https://anwarsanchez.com/#person' },
            url: 'https://edward-barnett.com',
            datePublished: '2024-02-01',
          },
        },
      ],
    },
    {
      '@type': 'Review',
      '@id': 'https://anwarsanchez.com/casos-de-exito/#review1',
      author: {
        '@type': 'Person',
        name: 'Dr. Daniel Zúñiga',
        jobTitle: 'Director Médico',
        worksFor: {
          '@type': 'MedicalOrganization',
          name: 'Gastromedical CR',
        },
      },
      datePublished: '2024-06-01',
      reviewBody: 'Desde que lanzamos el nuevo sitio, las consultas desde Google aumentaron significativamente. Ahora tengo pacientes que me dicen que me encontraron buscando gastroenterólogo en su zona.',
      itemReviewed: {
        '@type': 'Service',
        name: 'Diseño Web y SEO',
        provider: { '@id': 'https://anwarsanchez.com/#person' },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      '@type': 'Review',
      '@id': 'https://anwarsanchez.com/casos-de-exito/#review2',
      author: {
        '@type': 'Person',
        name: 'Lic. Enmanuel Li',
        jobTitle: 'Director',
        worksFor: {
          '@type': 'MedicalBusiness',
          name: 'Physical Care Fisioterapia',
        },
      },
      datePublished: '2024-03-01',
      reviewBody: 'El sitio web nos ayudó a proyectar una imagen más profesional. Los pacientes ahora llegan más informados y el proceso de agendar citas es mucho más fluido.',
      itemReviewed: {
        '@type': 'Service',
        name: 'Diseño Web',
        provider: { '@id': 'https://anwarsanchez.com/#person' },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      '@type': 'Review',
      '@id': 'https://anwarsanchez.com/casos-de-exito/#review3',
      author: {
        '@type': 'Person',
        name: 'Edward Barnett',
        jobTitle: 'Consultor de Retail',
        worksFor: {
          '@type': 'Organization',
          name: 'BNG Group',
        },
      },
      datePublished: '2024-02-01',
      reviewBody: 'El sitio web me ayudó a posicionarme como referente en mi industria. Ahora recibo consultas de empresas que me encontraron buscando asesoría especializada.',
      itemReviewed: {
        '@type': 'Service',
        name: 'Marca Personal y Diseño Web',
        provider: { '@id': 'https://anwarsanchez.com/#person' },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      '@type': 'AggregateRating',
      '@id': 'https://anwarsanchez.com/casos-de-exito/#rating',
      itemReviewed: {
        '@type': 'Service',
        name: 'Servicios de Diseño Web y Marketing Digital',
        provider: { '@id': 'https://anwarsanchez.com/#person' },
      },
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '12',
      reviewCount: '12',
    },
    {
      '@type': 'HowTo',
      '@id': 'https://anwarsanchez.com/casos-de-exito/#howto',
      name: 'Cómo trabajamos para lograr estos resultados',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Diagnóstico',
          text: 'Analizamos tu presencia digital actual, identificamos oportunidades y te mostramos exactamente qué está funcionando y qué no.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Implementación',
          text: 'Construimos tu sitio web profesional optimizado para Google, con formularios de contacto y sistema de conversión integrado.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Medición',
          text: 'Monitoreamos resultados reales: visitas, consultas, conversiones. Si algo no funciona, lo ajustamos hasta que funcione.',
        },
      ],
    },
  ],
};

export default function CasosDeExitoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="casos-exito-schema"
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
