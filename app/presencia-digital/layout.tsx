import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Diseño Web para Clínicas y Profesionales de Salud | Anwar Sánchez',
  description: 'Diseño sitios web profesionales para clínicas, médicos y especialistas en Costa Rica. SEO local incluido, integración con WhatsApp, optimizado para convertir visitas en pacientes. +180% más consultas en 4 meses.',
  keywords: [
    'diseño web para clínicas',
    'sitio web para médicos',
    'diseño web Costa Rica',
    'SEO para clínicas',
    'página web profesional',
    'diseño web salud',
    'marketing digital médico',
    'web para doctores',
    'presencia digital clínicas',
    'Anwar Sánchez',
  ],
  authors: [{ name: 'Anwar Sánchez', url: 'https://anwarsanchez.com' }],
  creator: 'Anwar Sánchez',
  publisher: 'Anwar Sánchez',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com/presencia-digital',
    siteName: 'Anwar Sánchez',
    title: 'Diseño Web para Clínicas | Sitios que Generan Pacientes',
    description: 'Diseño sitios web que aparecen en Google y convierten visitas en consultas por WhatsApp. Especializado en clínicas y profesionales de salud en Costa Rica.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 1200,
        height: 630,
        alt: 'Anwar Sánchez - Diseño Web para Clínicas',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web para Clínicas | Anwar Sánchez',
    description: 'Sitios web que aparecen en Google y generan pacientes. SEO local, WhatsApp integrado, diseño premium.',
    images: ['https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp'],
    creator: '@anwarsanchez',
  },

  // Robots
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

  // Alternates
  alternates: {
    canonical: 'https://anwarsanchez.com/presencia-digital',
  },

  // Category
  category: 'technology',
};

// Structured Data for SEO, GEO (AI search), and AEO (Answer engines)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization/Person
    {
      '@type': 'Person',
      '@id': 'https://anwarsanchez.com/#person',
      name: 'Anwar Sánchez',
      url: 'https://anwarsanchez.com',
      image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      description: 'Desarrollador web y consultor de marketing digital especializado en clínicas y profesionales de salud en Costa Rica.',
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
      ],
      jobTitle: 'Desarrollador Web & Consultor Digital',
      worksFor: {
        '@type': 'Organization',
        name: 'Anwar Sánchez',
      },
      knowsAbout: [
        'Diseño web',
        'SEO local',
        'Marketing digital',
        'Desarrollo de software',
        'Inteligencia artificial',
      ],
    },

    // Service
    {
      '@type': 'Service',
      '@id': 'https://anwarsanchez.com/presencia-digital/#service',
      name: 'Diseño Web para Clínicas y Profesionales de Salud',
      description: 'Servicio de diseño y desarrollo de sitios web profesionales para clínicas, médicos y especialistas. Incluye SEO local, integración con WhatsApp, diseño responsive y optimización para conversión.',
      provider: {
        '@id': 'https://anwarsanchez.com/#person',
      },
      serviceType: 'Diseño y Desarrollo Web',
      areaServed: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Diseño Web',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Diseño premium personalizado',
              description: 'Diseño único desde cero, sin plantillas, adaptado a la identidad de cada clínica.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO local incluido',
              description: 'Optimización técnica para aparecer en búsquedas locales de Google.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Integración WhatsApp',
              description: 'Botón de contacto directo para que los pacientes agenden citas fácilmente.',
            },
          },
        ],
      },
    },

    // WebPage
    {
      '@type': 'WebPage',
      '@id': 'https://anwarsanchez.com/presencia-digital/#webpage',
      url: 'https://anwarsanchez.com/presencia-digital',
      name: 'Diseño Web para Clínicas y Profesionales de Salud | Anwar Sánchez',
      description: 'Diseño sitios web profesionales para clínicas, médicos y especialistas en Costa Rica. SEO local incluido, integración con WhatsApp, optimizado para convertir visitas en pacientes.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://anwarsanchez.com/#website',
        url: 'https://anwarsanchez.com',
        name: 'Anwar Sánchez',
        publisher: {
          '@id': 'https://anwarsanchez.com/#person',
        },
      },
      about: {
        '@id': 'https://anwarsanchez.com/presencia-digital/#service',
      },
      author: {
        '@id': 'https://anwarsanchez.com/#person',
      },
    },

    // FAQ Page - Important for AEO (Answer Engine Optimization)
    {
      '@type': 'FAQPage',
      '@id': 'https://anwarsanchez.com/presencia-digital/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un sitio web para clínica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El precio depende de cuántas páginas y funcionalidades necesite. No hay paquetes genéricos porque cada clínica es diferente. Después de una consulta inicial, se proporciona un precio exacto sin sorpresas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma crear un sitio web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una landing page toma aproximadamente 1 semana. Un sitio completo de 5+ páginas toma 2-3 semanas. Siempre se proporciona una fecha clara antes de empezar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Garantizan aparecer primero en Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, nadie puede garantizar eso honestamente. Lo que sí se garantiza es que el sitio estará técnicamente optimizado para SEO, con contenido relevante para cada tratamiento que ofrece la clínica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si no me gusta el diseño?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Se rehace hasta que quede satisfecho. No se publica nada que el cliente no apruebe.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito pagar mantenimiento mensual?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No es obligatorio. El sitio es 100% propiedad del cliente. Se ofrece un plan opcional de mantenimiento para hosting y actualizaciones, pero el cliente puede manejarlo por su cuenta.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué trabajar con Anwar Sánchez y no con una agencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El cliente trabaja directamente con el desarrollador. Sin vendedores, sin account managers, sin intermediarios. Esto significa mejor comunicación, entregas más rápidas y generalmente mejor precio.',
          },
        },
      ],
    },

    // HowTo - For AEO (featured snippets)
    {
      '@type': 'HowTo',
      '@id': 'https://anwarsanchez.com/presencia-digital/#howto',
      name: 'Cómo obtener un sitio web profesional para tu clínica',
      description: 'Proceso simple de 3 pasos para obtener un sitio web que genera pacientes.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Llamada de 15 minutos',
          text: 'Hablamos de tu clínica, tus pacientes y qué necesitas. Sin pitch de ventas.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Propuesta de diseño',
          text: 'Te muestro cómo se vería tu sitio. Apruebas o pedimos cambios.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Publicación en 1-3 semanas',
          text: 'Tu sitio sale al aire optimizado para Google. Empiezas a recibir consultas.',
        },
      ],
      totalTime: 'P3W',
    },

    // Review/Testimonial
    {
      '@type': 'Review',
      '@id': 'https://anwarsanchez.com/presencia-digital/#review',
      author: {
        '@type': 'Person',
        name: 'Dr. Daniel Zúñiga',
        jobTitle: 'Director Médico',
        worksFor: {
          '@type': 'MedicalOrganization',
          name: 'Gastromedical CR',
        },
      },
      reviewBody: 'Antes casi todo llegaba por referidos. Hoy hay semanas en que la mitad de las consultas vienen del sitio — y por fin se ve como la clínica que somos.',
      itemReviewed: {
        '@id': 'https://anwarsanchez.com/presencia-digital/#service',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
    },

    // LocalBusiness for GEO
    {
      '@type': 'ProfessionalService',
      '@id': 'https://anwarsanchez.com/#business',
      name: 'Anwar Sánchez - Diseño Web',
      image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      url: 'https://anwarsanchez.com',
      telephone: '+506-8333-5408',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CR',
        addressRegion: 'San José',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.9281,
        longitude: -84.0907,
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      sameAs: [
        'https://wa.me/50683335408',
      ],
    },
  ],
};

export default function PresenciaDigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
