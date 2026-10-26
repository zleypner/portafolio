import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Diseño Web para Clínicas y Médicos en Costa Rica | Anwar Sánchez',
  description: 'Creo sitios web profesionales para clínicas, médicos y especialistas que aparecen en Google y convierten visitas en pacientes por WhatsApp. +180% más consultas. Entrega en 2-3 semanas. Sin plantillas.',

  keywords: [
    // Primary keywords
    'diseño web para clínicas',
    'sitio web para médicos',
    'diseño web Costa Rica',
    'página web para clínicas',
    // Long-tail keywords
    'diseño web para consultorio médico',
    'página web para dentistas Costa Rica',
    'sitio web para dermatólogos',
    'diseño web para gastroenterólogos',
    'web para especialistas médicos',
    'página web para fisioterapeutas',
    // SEO related
    'SEO para clínicas Costa Rica',
    'posicionamiento web médicos',
    'marketing digital para doctores',
    // Local
    'diseñador web San José',
    'desarrollo web Costa Rica',
    // Brand
    'Anwar Sánchez desarrollador',
    // Intent keywords
    'cuánto cuesta página web clínica',
    'mejor diseñador web para médicos',
    'cómo aparecer en Google clínica',
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
    title: 'Diseño Web para Clínicas | +180% Más Pacientes',
    description: 'Sitios web que aparecen en Google y generan pacientes reales. Especializado en clínicas y profesionales de salud. WhatsApp integrado. Entrega en 2-3 semanas.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 1200,
        height: 630,
        alt: 'Anwar Sánchez - Diseño Web para Clínicas en Costa Rica',
        type: 'image/webp',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@anwarsanchez',
    creator: '@anwarsanchez',
    title: 'Diseño Web para Clínicas | +180% Más Pacientes',
    description: 'Sitios web que aparecen en Google y generan pacientes. SEO local, WhatsApp integrado, diseño premium. Costa Rica.',
    images: {
      url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      alt: 'Anwar Sánchez - Diseño Web para Clínicas',
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Alternates & Languages
  alternates: {
    canonical: 'https://anwarsanchez.com/presencia-digital',
    languages: {
      'es-CR': 'https://anwarsanchez.com/presencia-digital',
      'es': 'https://anwarsanchez.com/presencia-digital',
    },
  },

  // Verification
  verification: {
    google: 'google-site-verification-code', // Replace with actual code
  },

  // Category
  category: 'technology',

  // Additional meta
  other: {
    'geo.region': 'CR-SJ',
    'geo.placename': 'San José, Costa Rica',
    'geo.position': '9.9281;-84.0907',
    'ICBM': '9.9281, -84.0907',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'og:locale:alternate': 'es_ES',
  },
};

// Comprehensive Structured Data for SEO, GEO, and AEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // BreadcrumbList - Navigation path
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://anwarsanchez.com/presencia-digital/#breadcrumb',
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
          name: 'Servicios',
          item: 'https://anwarsanchez.com/presencia-digital',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Diseño Web para Clínicas',
          item: 'https://anwarsanchez.com/presencia-digital',
        },
      ],
    },

    // Person with enhanced details
    {
      '@type': 'Person',
      '@id': 'https://anwarsanchez.com/#person',
      name: 'Anwar Sánchez',
      givenName: 'Anwar',
      familyName: 'Sánchez',
      url: 'https://anwarsanchez.com',
      image: {
        '@type': 'ImageObject',
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 800,
        height: 800,
        caption: 'Anwar Sánchez - Desarrollador Web',
      },
      description: 'Desarrollador web y consultor de marketing digital con más de 15 años de experiencia. Especializado en crear sitios web para clínicas y profesionales de salud que generan pacientes reales.',
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
        'https://github.com/anwarsanchez',
        'https://twitter.com/anwarsanchez',
        'https://wa.me/50683335408',
      ],
      jobTitle: 'Desarrollador Web & Consultor de Marketing Digital',
      alumniOf: {
        '@type': 'Organization',
        name: 'Universidad de Costa Rica',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Anwar Sánchez Digital',
        url: 'https://anwarsanchez.com',
      },
      knowsAbout: [
        'Diseño Web',
        'Desarrollo de Software',
        'SEO Local',
        'Marketing Digital',
        'Inteligencia Artificial',
        'UX/UI Design',
        'Next.js',
        'React',
        'TypeScript',
        'Diseño Web para Clínicas',
      ],
      knowsLanguage: ['es', 'en'],
      nationality: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
    },

    // Service with AggregateRating and detailed offers
    {
      '@type': 'Service',
      '@id': 'https://anwarsanchez.com/presencia-digital/#service',
      name: 'Diseño Web para Clínicas y Profesionales de Salud',
      alternateName: 'Páginas Web para Médicos',
      description: 'Servicio completo de diseño y desarrollo de sitios web profesionales para clínicas, médicos, dentistas, dermatólogos, fisioterapeutas y otros especialistas de salud. Incluye SEO local para aparecer en Google, integración con WhatsApp para agendar citas, diseño responsive optimizado para móviles, y entrega en 2-3 semanas.',
      provider: {
        '@id': 'https://anwarsanchez.com/#person',
      },
      serviceType: 'Diseño y Desarrollo Web',
      serviceOutput: 'Sitio web profesional optimizado para SEO',
      areaServed: [
        {
          '@type': 'Country',
          name: 'Costa Rica',
        },
        {
          '@type': 'City',
          name: 'San José',
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Profesionales de salud, médicos, clínicas, consultorios',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '12',
        reviewCount: '12',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Diseño Web para Clínicas',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Diseño Premium Personalizado',
              description: 'Diseño único desde cero, sin plantillas genéricas. Cada sitio refleja la identidad y nivel profesional de la clínica.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Página por Especialidad',
              description: 'Cada servicio o tratamiento tiene su propia página optimizada para posicionar en Google.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Local Incluido',
              description: 'Configuración técnica completa para aparecer cuando busquen tu especialidad en tu zona.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WhatsApp Integrado',
              description: 'Botón de contacto directo para que los pacientes agenden citas con un solo clic.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Versión en Inglés',
              description: 'Opción de sitio bilingüe para atraer pacientes de turismo médico.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Optimizado para Móvil',
              description: 'Diseño responsive que funciona perfectamente en celulares, donde más del 70% de los pacientes buscan.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '100% Propiedad del Cliente',
              description: 'El código, diseño y dominio son completamente del cliente. Sin ataduras.',
            },
          },
        ],
      },
      termsOfService: 'https://anwarsanchez.com/privacy',
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/50683335408?text=Hola%20Anwar%2C%20me%20interesa%20un%20sitio%20web%20para%20mi%20cl%C3%ADnica',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Consulta de Diseño Web',
        },
      },
    },

    // WebPage with speakable for voice search
    {
      '@type': 'WebPage',
      '@id': 'https://anwarsanchez.com/presencia-digital/#webpage',
      url: 'https://anwarsanchez.com/presencia-digital',
      name: 'Diseño Web para Clínicas y Médicos en Costa Rica | Anwar Sánchez',
      description: 'Creo sitios web profesionales para clínicas y médicos que aparecen en Google y generan pacientes. +180% más consultas en 4 meses.',
      inLanguage: 'es',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://anwarsanchez.com/#website',
        url: 'https://anwarsanchez.com',
        name: 'Anwar Sánchez',
        description: 'Software, IA y Crecimiento Digital',
        publisher: {
          '@id': 'https://anwarsanchez.com/#person',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://anwarsanchez.com/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      about: {
        '@id': 'https://anwarsanchez.com/presencia-digital/#service',
      },
      author: {
        '@id': 'https://anwarsanchez.com/#person',
      },
      breadcrumb: {
        '@id': 'https://anwarsanchez.com/presencia-digital/#breadcrumb',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      },
      datePublished: '2024-01-01T00:00:00+00:00',
      dateModified: new Date().toISOString(),
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.pd-hero h1', '.pd-hero-subtitle', '.pd-stat-value'],
      },
    },

    // FAQPage for AEO
    {
      '@type': 'FAQPage',
      '@id': 'https://anwarsanchez.com/presencia-digital/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un sitio web para clínica en Costa Rica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El precio varía según las páginas y funcionalidades que necesite. No manejamos paquetes genéricos porque cada clínica es diferente. Después de una llamada de 15 minutos, proporcionamos un precio exacto sin sorpresas ni costos ocultos. El sitio es 100% propiedad del cliente.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma crear un sitio web para consultorio médico?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una landing page toma aproximadamente 1 semana. Un sitio completo de 5 o más páginas toma entre 2 y 3 semanas. Siempre proporcionamos una fecha de entrega clara antes de comenzar el proyecto.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Garantizan que mi clínica aparecerá primero en Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nadie puede garantizar el primer puesto en Google honestamente. Lo que sí garantizamos es que el sitio estará técnicamente optimizado para SEO, con contenido relevante para cada tratamiento, estructura correcta, velocidad de carga óptima y configuración de Google Business Profile.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si no me gusta el diseño del sitio web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rehacemos el diseño hasta que quede completamente satisfecho. No publicamos nada que el cliente no apruebe. Trabajamos con revisiones ilimitadas en la fase de diseño.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito pagar mantenimiento mensual por mi página web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No es obligatorio. El sitio web es 100% propiedad del cliente incluyendo código, diseño y dominio. Ofrecemos un plan opcional de mantenimiento para hosting y actualizaciones, pero el cliente puede manejarlo por su cuenta si lo prefiere.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué contratar a Anwar Sánchez en lugar de una agencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trabajas directamente conmigo, sin vendedores, account managers ni intermediarios. Esto significa comunicación directa, entregas más rápidas, mejor calidad y generalmente mejor precio. Tengo más de 15 años de experiencia en desarrollo de software y más de 100 proyectos completados.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué resultados puedo esperar con un nuevo sitio web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nuestros clientes han visto incrementos de hasta 180% en consultas de pacientes en 4 meses. Por ejemplo, Gastromedical CR pasó de recibir pacientes principalmente por referidos a obtener la mitad de sus consultas desde Google, sin publicidad pagada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El sitio web incluye integración con WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, todos nuestros sitios incluyen botón de WhatsApp integrado. Los pacientes pueden contactar con un solo clic, sin formularios complicados. Es la forma más efectiva de convertir visitas en citas reales.',
          },
        },
      ],
    },

    // HowTo for featured snippets
    {
      '@type': 'HowTo',
      '@id': 'https://anwarsanchez.com/presencia-digital/#howto',
      name: 'Cómo obtener un sitio web profesional para tu clínica',
      description: 'Proceso simple de 3 pasos para obtener un sitio web que aparece en Google y genera pacientes reales para tu consultorio médico.',
      totalTime: 'P3W',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: 'Consultar',
      },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Llamada de diagnóstico gratuita',
          text: 'Agendamos una llamada de 15 minutos donde hablamos de tu clínica, tus pacientes ideales y qué necesitas. Sin pitch de ventas, solo entender tu situación.',
          url: 'https://wa.me/50683335408',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Propuesta de diseño personalizada',
          text: 'Te muestro exactamente cómo se vería tu sitio web con un mockup personalizado. Apruebas el diseño o pedimos los cambios necesarios antes de continuar.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Publicación y optimización',
          text: 'Tu sitio sale al aire completamente optimizado para Google en 1-3 semanas. Configuramos analytics, Google Business Profile y empiezas a recibir consultas.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
      ],
      tool: [
        {
          '@type': 'HowToTool',
          name: 'WhatsApp',
        },
        {
          '@type': 'HowToTool',
          name: 'Llamada de video',
        },
      ],
    },

    // ItemList - Case Studies
    {
      '@type': 'ItemList',
      '@id': 'https://anwarsanchez.com/presencia-digital/#cases',
      name: 'Casos de Éxito - Diseño Web para Clínicas',
      description: 'Resultados reales de clínicas y profesionales de salud que han trabajado con Anwar Sánchez',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'Gastromedical CR',
            description: 'Clínica de gastroenterología que aumentó sus consultas en 180% en 4 meses',
            url: 'https://gastromedicalcr.com',
            author: {
              '@id': 'https://anwarsanchez.com/#person',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'CreativeWork',
            name: 'Physical Care Fisioterapia',
            description: 'Centro de fisioterapia que incrementó pacientes en 120%',
            url: 'https://www.physicalcarefisioterapia.com',
            author: {
              '@id': 'https://anwarsanchez.com/#person',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'BNG Group',
            description: 'Empresa retail que duplicó sus leads calificados',
            url: 'https://edward-barnett.com',
            author: {
              '@id': 'https://anwarsanchez.com/#person',
            },
          },
        },
      ],
    },

    // Review with detailed rating
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
          url: 'https://gastromedicalcr.com',
        },
      },
      datePublished: '2024-06-01',
      reviewBody: 'Antes casi todo llegaba por referidos. Hoy hay semanas en que la mitad de las consultas vienen del sitio — y por fin se ve como la clínica que somos. El proceso fue muy profesional y Anwar entendió exactamente lo que necesitábamos.',
      itemReviewed: {
        '@id': 'https://anwarsanchez.com/presencia-digital/#service',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
    },

    // LocalBusiness / ProfessionalService
    {
      '@type': 'ProfessionalService',
      '@id': 'https://anwarsanchez.com/#business',
      name: 'Anwar Sánchez - Diseño Web y Marketing Digital',
      alternateName: 'Anwar Sánchez Digital',
      image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      logo: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      url: 'https://anwarsanchez.com',
      telephone: '+50683335408',
      email: 'hola@anwarsanchez.com',
      description: 'Servicios de diseño web, desarrollo de software y marketing digital para clínicas y profesionales de salud en Costa Rica.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'San José',
        addressLocality: 'San José',
        addressRegion: 'San José',
        postalCode: '10101',
        addressCountry: 'CR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.9281,
        longitude: -84.0907,
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'Costa Rica',
        },
        {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 9.9281,
            longitude: -84.0907,
          },
          geoRadius: '100 km',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'USD, CRC',
      paymentAccepted: 'Transferencia bancaria, PayPal',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
        'https://github.com/anwarsanchez',
        'https://wa.me/50683335408',
      ],
      hasOfferCatalog: {
        '@id': 'https://anwarsanchez.com/presencia-digital/#service',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
      review: {
        '@id': 'https://anwarsanchez.com/presencia-digital/#review',
      },
      founder: {
        '@id': 'https://anwarsanchez.com/#person',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+50683335408',
        contactType: 'sales',
        availableLanguage: ['Spanish', 'English'],
        areaServed: 'CR',
      },
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/50683335408',
          inLanguage: 'es',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
            'http://schema.org/IOSPlatform',
            'http://schema.org/AndroidPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Consulta gratuita de diseño web',
        },
      },
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
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
