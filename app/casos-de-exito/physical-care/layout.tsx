import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Caso de Éxito: Physical Care Fisioterapia | 91% Nuevas Audiencias',
  description: 'Cómo ayudamos a Physical Care Fisioterapia a alcanzar nuevas audiencias con estrategia digital. 91% usuarios nuevos, 36% tráfico orgánico, 48,7% tasa de interacción. Resultados verificables.',
  keywords: [
    'caso de éxito marketing digital Costa Rica',
    'SEO para fisioterapeutas',
    'marketing digital para clínicas Costa Rica',
    'diseño web para clínicas',
    'marketing para profesionales de salud',
    'estrategias para atraer clientes desde Google',
    'posicionamiento de clínicas en buscadores',
    'consultoría digital Costa Rica',
    'fisioterapia Costa Rica',
    'rehabilitación deportiva marketing',
    'Partner Digital Costa Rica',
  ],
  authors: [{ name: 'Anwar Sánchez', url: 'https://anwarsanchez.com' }],
  openGraph: {
    type: 'article',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com/casos-de-exito/physical-care',
    title: 'Physical Care Fisioterapia: 91% Nuevas Audiencias con Estrategia Digital',
    description: '91% usuarios nuevos. 36% tráfico orgánico. 48,7% tasa de interacción. Una presencia digital que llega a nuevas audiencias.',
    siteName: 'Anwar Sánchez - Partner Digital',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/cases/image.webp',
        width: 1200,
        height: 630,
        alt: 'Caso de Éxito Physical Care Fisioterapia - 91% usuarios nuevos - Anwar Sánchez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caso de Éxito: Physical Care Fisioterapia | Anwar Sánchez',
    description: '91% usuarios nuevos, 36% tráfico orgánico, 48,7% interacción. Estrategia digital verificable.',
    creator: '@anwarsanchez',
  },
  alternates: {
    canonical: 'https://anwarsanchez.com/casos-de-exito/physical-care',
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
      '@id': 'https://anwarsanchez.com/casos-de-exito/physical-care/#article',
      headline: '91% de Usuarios Nuevos: Una Presencia Digital que Llega a Nuevas Audiencias',
      description: 'Caso de éxito: cómo ayudamos a Physical Care Fisioterapia a atraer nuevas audiencias con estrategia de visibilidad digital y contenido.',
      author: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
        jobTitle: 'Partner Digital',
        description: 'Especialista en estrategia digital, SEO y marketing para clínicas',
      },
      datePublished: '2026-11-22',
      dateModified: '2026-11-22',
      publisher: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://anwarsanchez.com/casos-de-exito/physical-care',
      },
      about: {
        '@type': 'Thing',
        name: 'Marketing Digital para Clínicas de Fisioterapia',
      },
    },
    {
      '@type': 'CaseStudy',
      '@id': 'https://anwarsanchez.com/casos-de-exito/physical-care/#casestudy',
      name: 'Physical Care Fisioterapia - Caso de Éxito en Captación de Nuevas Audiencias',
      description: 'Estrategia digital que logró 91% de usuarios nuevos y 48,7% de tasa de interacción orgánica en 28 días',
      about: {
        '@type': 'MedicalBusiness',
        name: 'Physical Care Fisioterapia',
        url: 'https://www.physicalcarefisioterapia.com',
        medicalSpecialty: 'Physical Therapy',
      },
      provider: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
        url: 'https://anwarsanchez.com',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://anwarsanchez.com/#digital-visibility-service',
      name: 'Estrategia de Visibilidad Digital',
      provider: {
        '@type': 'Person',
        name: 'Anwar Sánchez',
      },
      serviceType: 'Marketing Digital',
      areaServed: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      description: 'Estrategia digital enfocada en visibilidad orgánica, contenido y posicionamiento para clínicas y profesionales de salud.',
    },
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://www.physicalcarefisioterapia.com/#organization',
      name: 'Physical Care Fisioterapia',
      url: 'https://www.physicalcarefisioterapia.com',
      medicalSpecialty: 'Physical Therapy',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CR',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://anwarsanchez.com/casos-de-exito/physical-care/#breadcrumb',
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
          name: 'Physical Care Fisioterapia',
          item: 'https://anwarsanchez.com/casos-de-exito/physical-care',
        },
      ],
    },
  ],
};

export default function PhysicalCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="physical-care-schema"
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
