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
    default: 'Diseño Web para Clínicas y Negocios en Costa Rica | Anwar Sánchez',
    template: '%s | Anwar Sánchez',
  },
  description: 'Creo sitios web profesionales que aparecen en Google y convierten visitas en clientes por WhatsApp. +180% más consultas. Entrega en 2-3 semanas. Especializado en clínicas, médicos y negocios en Costa Rica.',

  keywords: [
    // Primary keywords - Diseño Web
    'diseño web Costa Rica',
    'diseño web para clínicas',
    'sitio web para médicos',
    'página web para negocios',
    'desarrollo web San José',
    'diseñador web Costa Rica',
    // Long-tail keywords - Especialidades médicas
    'diseño web para consultorio médico',
    'página web para dentistas Costa Rica',
    'sitio web para dermatólogos',
    'diseño web para gastroenterólogos',
    'web para especialistas médicos',
    'página web para fisioterapeutas',
    'sitio web para psicólogos Costa Rica',
    'diseño web para nutricionistas',
    // SEO & Marketing
    'SEO para clínicas Costa Rica',
    'SEO local San José',
    'posicionamiento web médicos',
    'marketing digital para doctores',
    'Google My Business clínicas',
    // Intent keywords
    'cuánto cuesta página web clínica',
    'mejor diseñador web para médicos',
    'cómo aparecer en Google clínica',
    'página web profesional precio',
    // Services
    'diseño web responsive',
    'sitio web con WhatsApp',
    'landing page Costa Rica',
    'tienda online Costa Rica',
    // Brand
    'Anwar Sánchez',
    'Anwar Sánchez desarrollador',
    'Anwar Sánchez Costa Rica',
    // Software & Tech
    'desarrollo de software Costa Rica',
    'software a la medida',
    'automatización empresarial',
    'inteligencia artificial negocios',
  ],

  authors: [{ name: 'Anwar Sánchez', url: 'https://anwarsanchez.com' }],
  creator: 'Anwar Sánchez',
  publisher: 'Anwar Sánchez',

  // Comprehensive Open Graph
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com',
    siteName: 'Anwar Sánchez - Diseño Web Costa Rica',
    title: 'Diseño Web para Clínicas y Negocios | +180% Más Clientes',
    description: 'Sitios web que aparecen en Google y generan clientes reales. Especializado en clínicas y negocios. WhatsApp integrado. Entrega en 2-3 semanas. Costa Rica.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 1200,
        height: 630,
        alt: 'Anwar Sánchez - Diseño Web para Clínicas y Negocios en Costa Rica',
        type: 'image/webp',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@anwarsanchez',
    creator: '@anwarsanchez',
    title: 'Diseño Web para Clínicas | +180% Más Clientes',
    description: 'Sitios web que aparecen en Google y generan clientes. SEO local, WhatsApp integrado, diseño premium. Costa Rica.',
    images: {
      url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      alt: 'Anwar Sánchez - Diseño Web Costa Rica',
    },
  },

  // Robots directives
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

  // Alternates & Canonical
  alternates: {
    canonical: 'https://anwarsanchez.com',
    languages: {
      'es-CR': 'https://anwarsanchez.com',
      'es': 'https://anwarsanchez.com',
      'x-default': 'https://anwarsanchez.com',
    },
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Manifest
  manifest: '/manifest.json',

  // Category
  category: 'technology',

  // Classification
  classification: 'Business',

  // Referrer
  referrer: 'origin-when-cross-origin',

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Additional meta tags for GEO SEO and AEO
  other: {
    // GEO tags for local SEO
    'geo.region': 'CR-SJ',
    'geo.placename': 'San José, Costa Rica',
    'geo.position': '9.9281;-84.0907',
    'ICBM': '9.9281, -84.0907',

    // Content tags
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'Spanish',
    'content-language': 'es-CR',

    // Open Graph additional
    'og:locale:alternate': 'es_ES',
    'og:country-name': 'Costa Rica',

    // Apple
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Anwar Sánchez',

    // Microsoft
    'msapplication-TileColor': '#1F5CFF',
    'msapplication-config': '/browserconfig.xml',

    // Theme
    'theme-color': '#ffffff',
    'color-scheme': 'light',

    // Business info for rich snippets
    'business:contact_data:street_address': 'San José',
    'business:contact_data:locality': 'San José',
    'business:contact_data:region': 'San José',
    'business:contact_data:postal_code': '10101',
    'business:contact_data:country_name': 'Costa Rica',

    // Verification (placeholders - replace with actual codes)
    // 'google-site-verification': 'your-google-verification-code',
    // 'msvalidate.01': 'your-bing-verification-code',

    // Pinterest
    'p:domain_verify': 'anwarsanchez.com',
  },
};

// Comprehensive Structured Data for SEO, GEO, and AEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite Schema
    {
      '@type': 'WebSite',
      '@id': 'https://anwarsanchez.com/#website',
      url: 'https://anwarsanchez.com',
      name: 'Anwar Sánchez',
      description: 'Diseño Web, Software e IA para Clínicas y Negocios en Costa Rica',
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

    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://anwarsanchez.com/#webpage',
      url: 'https://anwarsanchez.com',
      name: 'Diseño Web para Clínicas y Negocios en Costa Rica | Anwar Sánchez',
      description: 'Creo sitios web profesionales que aparecen en Google y generan clientes. +180% más consultas en 4 meses.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://anwarsanchez.com/#website' },
      about: { '@id': 'https://anwarsanchez.com/#service' },
      author: { '@id': 'https://anwarsanchez.com/#person' },
      breadcrumb: { '@id': 'https://anwarsanchez.com/#breadcrumb' },
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

    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://anwarsanchez.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://anwarsanchez.com',
        },
      ],
    },

    // Person Schema - Enhanced
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
        caption: 'Anwar Sánchez - Desarrollador Web y Consultor Digital',
      },
      description: 'Desarrollador web y consultor de marketing digital con más de 15 años de experiencia. Especializado en crear sitios web para clínicas, negocios y profesionales que generan clientes reales a través de Google.',
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
        'Google My Business',
        'Optimización de Conversiones',
      ],
      knowsLanguage: ['es', 'en'],
      nationality: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      award: '+100 proyectos completados',
    },

    // ProfessionalService / LocalBusiness Schema
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
      description: 'Servicios de diseño web, desarrollo de software y marketing digital para clínicas, médicos y negocios en Costa Rica. Sitios web que aparecen en Google y generan clientes reales.',
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
        { '@type': 'Country', name: 'Costa Rica' },
        { '@type': 'City', name: 'San José' },
        { '@type': 'City', name: 'Heredia' },
        { '@type': 'City', name: 'Alajuela' },
        { '@type': 'City', name: 'Cartago' },
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
      paymentAccepted: 'Transferencia bancaria, PayPal, SINPE Móvil',
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '15',
        bestRating: '5',
        worstRating: '1',
      },
      founder: { '@id': 'https://anwarsanchez.com/#person' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+50683335408',
        contactType: 'sales',
        availableLanguage: ['Spanish', 'English'],
        areaServed: 'CR',
        contactOption: 'TollFree',
      },
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/50683335408?text=Hola%20Anwar%2C%20me%20interesa%20un%20sitio%20web',
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

    // Service Schema with Offers
    {
      '@type': 'Service',
      '@id': 'https://anwarsanchez.com/#service',
      name: 'Diseño Web para Clínicas y Negocios',
      alternateName: 'Páginas Web Profesionales',
      description: 'Servicio completo de diseño y desarrollo de sitios web profesionales para clínicas, médicos, negocios y profesionales. Incluye SEO local para aparecer en Google, integración con WhatsApp, diseño responsive optimizado para móviles, y entrega en 2-3 semanas.',
      provider: { '@id': 'https://anwarsanchez.com/#business' },
      serviceType: 'Diseño y Desarrollo Web',
      serviceOutput: 'Sitio web profesional optimizado para SEO',
      areaServed: [
        { '@type': 'Country', name: 'Costa Rica' },
        { '@type': 'City', name: 'San José' },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Clínicas, médicos, negocios, profesionales independientes',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '15',
        reviewCount: '15',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Diseño Web',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Diseño Premium Personalizado',
              description: 'Diseño único desde cero, sin plantillas genéricas. Cada sitio refleja la identidad y nivel profesional del negocio.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Página por Servicio/Especialidad',
              description: 'Cada servicio o tratamiento tiene su propia página optimizada para posicionar en Google.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Local Incluido',
              description: 'Configuración técnica completa para aparecer cuando busquen su servicio en su zona.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WhatsApp Integrado',
              description: 'Botón de contacto directo para que los clientes contacten con un solo clic.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Versión en Inglés',
              description: 'Opción de sitio bilingüe para atraer clientes internacionales.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Optimizado para Móvil',
              description: 'Diseño responsive que funciona perfectamente en celulares, donde más del 70% de los usuarios buscan.',
            },
          },
        ],
      },
      termsOfService: 'https://anwarsanchez.com/privacy',
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/50683335408?text=Hola%20Anwar%2C%20me%20interesa%20un%20sitio%20web',
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

    // FAQPage Schema for AEO
    {
      '@type': 'FAQPage',
      '@id': 'https://anwarsanchez.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un sitio web en Costa Rica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El precio varía según las páginas y funcionalidades que necesite. No manejamos paquetes genéricos porque cada negocio es diferente. Después de una llamada de 15 minutos, proporcionamos un precio exacto sin sorpresas ni costos ocultos. El sitio es 100% propiedad del cliente.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma crear un sitio web profesional?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una landing page toma aproximadamente 1 semana. Un sitio completo de 5 o más páginas toma entre 2 y 3 semanas. Siempre proporcionamos una fecha de entrega clara antes de comenzar el proyecto.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Garantizan que mi negocio aparecerá primero en Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nadie puede garantizar el primer puesto en Google honestamente. Lo que sí garantizamos es que el sitio estará técnicamente optimizado para SEO, con contenido relevante para cada servicio, estructura correcta, velocidad de carga óptima y configuración de Google Business Profile.',
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
            text: 'Nuestros clientes han visto incrementos de hasta 180% en consultas en 4 meses. Por ejemplo, Gastromedical CR pasó de recibir clientes principalmente por referidos a obtener la mitad de sus consultas desde Google, sin publicidad pagada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El sitio web incluye integración con WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, todos nuestros sitios incluyen botón de WhatsApp integrado. Los clientes pueden contactar con un solo clic, sin formularios complicados. Es la forma más efectiva de convertir visitas en contactos reales.',
          },
        },
      ],
    },

    // HowTo Schema for Featured Snippets
    {
      '@type': 'HowTo',
      '@id': 'https://anwarsanchez.com/#howto',
      name: 'Cómo obtener un sitio web profesional para tu negocio',
      description: 'Proceso simple de 3 pasos para obtener un sitio web que aparece en Google y genera clientes reales.',
      totalTime: 'P3W',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Llamada de diagnóstico gratuita',
          text: 'Agendamos una llamada de 15 minutos donde hablamos de tu negocio, tus clientes ideales y qué necesitas. Sin pitch de ventas, solo entender tu situación.',
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
        { '@type': 'HowToTool', name: 'WhatsApp' },
        { '@type': 'HowToTool', name: 'Llamada de video' },
      ],
    },

    // ItemList - Case Studies / Portfolio
    {
      '@type': 'ItemList',
      '@id': 'https://anwarsanchez.com/#cases',
      name: 'Casos de Éxito - Diseño Web',
      description: 'Resultados reales de clínicas y negocios que han trabajado con Anwar Sánchez',
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
            author: { '@id': 'https://anwarsanchez.com/#person' },
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
            author: { '@id': 'https://anwarsanchez.com/#person' },
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
            author: { '@id': 'https://anwarsanchez.com/#person' },
          },
        },
      ],
    },

    // Review Schema
    {
      '@type': 'Review',
      '@id': 'https://anwarsanchez.com/#review',
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
      itemReviewed: { '@id': 'https://anwarsanchez.com/#service' },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
    },

    // Organization Schema
    {
      '@type': 'Organization',
      '@id': 'https://anwarsanchez.com/#organization',
      name: 'Anwar Sánchez Digital',
      url: 'https://anwarsanchez.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 800,
        height: 800,
      },
      founder: { '@id': 'https://anwarsanchez.com/#person' },
      foundingDate: '2010',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San José',
        addressRegion: 'San José',
        addressCountry: 'CR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+506-8333-5408',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'English'],
      },
      areaServed: { '@type': 'Country', name: 'Costa Rica' },
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
        'https://github.com/anwarsanchez',
      ],
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
        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Google Analytics */}
        {GA_ID?.startsWith('G-') && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${playfairDisplay.variable} ${dmSans.variable} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}
