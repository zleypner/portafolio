import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Crecimiento Digital | Estrategia de Marketing y Presencia Online',
  description: 'Construyo presencia digital que genera confianza, no solo visitas. Estrategia de marketing digital, SEO y desarrollo web para empresas en Costa Rica que quieren resultados reales.',
  keywords: [
    'crecimiento digital Costa Rica',
    'marketing digital',
    'estrategia digital',
    'consultor marketing',
    'presencia digital empresas',
    'SEO Costa Rica',
    'desarrollo web estratégico',
    'consultoría digital San José',
    'marketing de confianza',
    'resultados reales marketing',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com/crecimiento-digital',
    title: 'Crecimiento Digital | Presencia que Genera Confianza',
    description: 'Marketing digital enfocado en resultados reales. Sin promesas vacías, solo trabajo bien hecho.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 1200,
        height: 630,
        alt: 'Anwar Sánchez - Crecimiento Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crecimiento Digital | Anwar Sánchez',
    description: 'Presencia digital que genera confianza, no solo visitas.',
  },
  alternates: {
    canonical: 'https://anwarsanchez.com/crecimiento-digital',
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
      '@id': 'https://anwarsanchez.com/crecimiento-digital/#webpage',
      url: 'https://anwarsanchez.com/crecimiento-digital',
      name: 'Crecimiento Digital | Estrategia de Marketing y Presencia Online',
      description: 'Construyo presencia digital que genera confianza, no solo visitas.',
      isPartOf: { '@id': 'https://anwarsanchez.com/#website' },
      author: { '@id': 'https://anwarsanchez.com/#person' },
      inLanguage: 'es',
      datePublished: '2024-01-01T00:00:00+00:00',
      dateModified: new Date().toISOString(),
    },
    {
      '@type': 'Service',
      '@id': 'https://anwarsanchez.com/crecimiento-digital/#service',
      name: 'Consultoría de Crecimiento Digital',
      description: 'Estrategia de marketing digital y presencia online enfocada en generar confianza y resultados reales para empresas.',
      provider: { '@id': 'https://anwarsanchez.com/#person' },
      serviceType: 'Marketing Digital y Consultoría',
      areaServed: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://anwarsanchez.com/crecimiento-digital/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un proyecto de marketing digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende del proyecto. No tengo paquetes genéricos porque cada negocio es diferente. Después de hablar, te doy un número exacto. Si no está en tu presupuesto, te lo digo de frente.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma ver resultados?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un sitio web típico: 2-4 semanas. Proyectos más complejos dependen del alcance. No prometo fechas que no puedo cumplir.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Garantizas resultados en marketing digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No garantizo "X leads en Y días" porque eso sería mentir. Lo que garantizo es trabajo de calidad, transparencia total, y optimización basada en datos reales.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Trabajas con cualquier tipo de negocio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Trabajo con negocios donde sé que puedo aportar valor. Si después de hablar creo que no soy la persona correcta para tu proyecto, te lo digo. Prefiero rechazar trabajo que hacer algo mediocre.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué trabajar contigo y no con una agencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las agencias tienen estructura de costos que pagar. Conmigo trabajas directo, sin intermediarios. Eso significa mejor comunicación, más flexibilidad, y generalmente mejor precio por el mismo (o mejor) resultado.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://anwarsanchez.com/crecimiento-digital/#howto',
      name: 'Cómo trabajamos en un proyecto de crecimiento digital',
      description: 'Proceso de 4 pasos para construir presencia digital que genera confianza.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Conversación inicial',
          text: 'Hablamos sobre tu negocio, tus clientes, y qué está funcionando (o no). Sin pitch de ventas, solo diagnóstico real.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Estrategia y propuesta',
          text: 'Si tiene sentido trabajar juntos, te presento exactamente qué haré, cuánto cuesta, y qué resultados esperar. Sin sorpresas.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Ejecución',
          text: 'Construyo. Tú revisas. Iteramos hasta que quede bien. Sin deadlines imposibles ni trabajo apresurado.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Entrega y medición',
          text: 'Lanzamos. Medimos lo que importa. Optimizamos basado en datos reales, no en corazonadas.',
        },
      ],
    },
  ],
};

export default function CrecimientoDigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="crecimiento-digital-schema"
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
