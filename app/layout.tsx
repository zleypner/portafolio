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
    default: 'Anwar Sánchez | Partner Digital & Estratega de Negocios',
    template: '%s | Anwar Sánchez',
  },
  description: 'Partner Digital en Costa Rica. Estrategia, marketing y tecnología para fortalecer tu marca, atraer mejores clientes y hacer crecer tu negocio con el Método SEMILLA.',

  keywords: [
    // Primary keywords - Partner Digital
    'Partner Digital',
    'Partner Digital Costa Rica',
    'consultoría de crecimiento digital',
    'estrategia digital para empresas',
    'marketing digital para profesionales',
    // Posicionamiento y marca
    'posicionamiento de marca',
    'captación de clientes',
    'estrategia de contenido',
    'automatización empresarial',
    'tecnología para negocios',
    'crecimiento empresarial Costa Rica',
    // Método SEMILLA
    'Método SEMILLA',
    'metodología de crecimiento',
    'estrategia de negocios',
    // Servicios
    'consultoría digital',
    'marketing estratégico',
    'desarrollo web Costa Rica',
    'presencia digital',
    'conversión digital',
    // SEO & Marketing
    'SEO Costa Rica',
    'marketing digital Costa Rica',
    'estrategia de marketing',
    'atracción de clientes',
    // Brand
    'Anwar Sánchez',
    'Anwar Sánchez Partner Digital',
    'Anwar Sánchez Costa Rica',
    // Software & Tech
    'desarrollo de software Costa Rica',
    'software a la medida',
    'automatización de procesos',
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
    siteName: 'Anwar Sánchez - Partner Digital',
    title: 'Partner Digital | Estrategia de Crecimiento con el Método SEMILLA',
    description: 'Ayudo a profesionales y empresas a atraer mejores clientes, fortalecer su marca y convertir su presencia digital en oportunidades de negocio. Costa Rica.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 1200,
        height: 630,
        alt: 'Anwar Sánchez - Partner Digital en Costa Rica',
        type: 'image/webp',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@anwarsanchez',
    creator: '@anwarsanchez',
    title: 'Partner Digital | Método SEMILLA',
    description: 'Estrategia, marketing y tecnología para hacer crecer tu negocio. Método SEMILLA. Costa Rica.',
    images: {
      url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      alt: 'Anwar Sánchez - Partner Digital Costa Rica',
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
      description: 'Partner Digital en Costa Rica. Estrategia, marketing y tecnología para hacer crecer tu negocio con el Método SEMILLA.',
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
      name: 'Anwar Sánchez | Partner Digital y Estrategia de Crecimiento',
      description: 'Ayudo a profesionales y empresas a atraer mejores clientes, fortalecer su marca y convertir su presencia digital en oportunidades de negocio con el Método SEMILLA.',
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
        caption: 'Anwar Sánchez - Partner Digital y Estratega de Crecimiento',
      },
      description: 'Ingeniero de software, empresario y Partner Digital con más de 10 años de experiencia en tecnología. Creador del Método SEMILLA. Ayudo a profesionales y empresas a atraer mejores clientes, fortalecer su marca y convertir su presencia digital en oportunidades de negocio.',
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
        'https://github.com/anwarsanchez',
        'https://twitter.com/anwarsanchez',
        'https://wa.me/50670724236',
      ],
      jobTitle: 'Partner Digital & Estratega de Crecimiento',
      alumniOf: {
        '@type': 'Organization',
        name: 'Universidad de Costa Rica',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Anwar Sánchez - Partner Digital',
        url: 'https://anwarsanchez.com',
      },
      knowsAbout: [
        'Estrategia Digital',
        'Desarrollo de Software',
        'Marketing Digital',
        'Posicionamiento de Marca',
        'Método SEMILLA',
        'Automatización Empresarial',
        'Inteligencia Artificial',
        'Next.js',
        'React',
        'TypeScript',
        'Captación de Clientes',
        'Optimización de Conversiones',
      ],
      knowsLanguage: ['es', 'en'],
      nationality: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      award: '+10 años de experiencia en tecnología',
    },

    // ProfessionalService / LocalBusiness Schema
    {
      '@type': 'ProfessionalService',
      '@id': 'https://anwarsanchez.com/#business',
      name: 'Anwar Sánchez - Partner Digital',
      alternateName: 'Método SEMILLA',
      image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      logo: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      url: 'https://anwarsanchez.com',
      telephone: '+50670724236',
      email: 'hola@anwarsanchez.com',
      description: 'Partner Digital en Costa Rica. Estrategia, marketing y tecnología para fortalecer tu marca, atraer mejores clientes y hacer crecer tu negocio con el Método SEMILLA.',
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
        'https://wa.me/50670724236',
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
        telephone: '+50670724236',
        contactType: 'sales',
        availableLanguage: ['Spanish', 'English'],
        areaServed: 'CR',
        contactOption: 'TollFree',
      },
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/50670724236?text=Hola%20Anwar%2C%20me%20interesa%20un%20sitio%20web',
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
          name: 'Consulta sobre crecimiento digital',
        },
      },
    },

    // Service Schema with Offers
    {
      '@type': 'Service',
      '@id': 'https://anwarsanchez.com/#service',
      name: 'Partner Digital - Método SEMILLA',
      alternateName: 'Estrategia de Crecimiento Digital',
      description: 'Servicio integral de estrategia digital para profesionales y empresas. Incluye diagnóstico de negocio, posicionamiento de marca, estrategias de contenido y marketing, optimización de conversión y tecnología aplicada al crecimiento.',
      provider: { '@id': 'https://anwarsanchez.com/#business' },
      serviceType: 'Consultoría de Crecimiento Digital',
      serviceOutput: 'Estrategia personalizada de crecimiento',
      areaServed: [
        { '@type': 'Country', name: 'Costa Rica' },
        { '@type': 'City', name: 'San José' },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Profesionales independientes, empresas de servicios, negocios en crecimiento',
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
        name: 'Servicios del Método SEMILLA',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Estrategia y Posicionamiento',
              description: 'Definimos una dirección clara para fortalecer tu marca, diferenciarte de la competencia y conectar con los clientes correctos.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Contenido y Marketing',
              description: 'Desarrollamos estrategias de comunicación y atracción para generar confianza y nuevas oportunidades comerciales.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Conversión y Crecimiento',
              description: 'Mejoramos los canales y procesos que conectan a tus clientes potenciales con tu negocio.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tecnología y Automatización',
              description: 'Implementamos soluciones digitales que simplifican procesos, ahorran tiempo y mejoran la eficiencia.',
            },
          },
        ],
      },
      termsOfService: 'https://anwarsanchez.com/privacy',
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/50670724236?text=Hola%20Anwar%2C%20me%20interesa%20un%20sitio%20web',
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
          name: '¿Qué es un Partner Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un Partner Digital es más que un proveedor de servicios. Es un socio estratégico que entiende tu negocio, identifica oportunidades de crecimiento y conecta estrategia, marketing y tecnología para que cada acción tenga un propósito claro.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es el Método SEMILLA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es una metodología de cuatro etapas que desarrollé para ayudar a profesionales y empresas a construir las bases de un crecimiento sostenible: Estrategia, Posicionamiento, Atracción y Conversión.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Para qué tipo de negocios trabaja Anwar Sánchez?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trabajo con profesionales independientes, clínicas, empresas de servicios y negocios que quieren atraer mejores clientes, fortalecer su posicionamiento y convertir su presencia digital en oportunidades reales de negocio.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo es el proceso de trabajo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Comenzamos con una conversación para entender tu negocio, tus objetivos y tus desafíos. A partir de ahí, definimos una estrategia personalizada y trabajamos juntos en su implementación.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Garantiza resultados específicos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No prometo resultados garantizados porque cada negocio es diferente. Lo que sí garantizo es un trabajo estratégico, profesional y orientado a generar valor real para tu negocio.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué trabajar con Anwar Sánchez en lugar de una agencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Conmigo trabajás directo. Sin vendedores, sin intermediarios. Eso significa mejor comunicación, mayor compromiso con tu proyecto y una visión integrada de estrategia, marketing y tecnología.',
          },
        },
      ],
    },

    // HowTo Schema for Featured Snippets - Método SEMILLA
    {
      '@type': 'HowTo',
      '@id': 'https://anwarsanchez.com/#howto',
      name: 'Cómo hacer crecer tu negocio con el Método SEMILLA',
      description: 'Metodología de 4 etapas para construir las bases de un crecimiento digital sostenible.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Sembrar - Estrategia',
          text: 'Analizamos tu negocio y definimos una estrategia clara para conectar tu valor con los clientes correctos.',
          url: 'https://anwarsanchez.com/#metodo',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Cultivar - Posicionamiento',
          text: 'Fortalecemos tu propuesta de valor, diferenciación y comunicación para que las personas correctas te elijan.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Crecer - Atracción',
          text: 'Desarrollamos estrategias de contenido, marketing y tecnología para aumentar tu visibilidad y generar confianza.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Cosechar - Conversión',
          text: 'Optimizamos tus canales digitales para convertir la atención en oportunidades comerciales reales.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'WhatsApp' },
        { '@type': 'HowToTool', name: 'Consulta estratégica' },
      ],
    },

    // ItemList - Case Studies / Portfolio
    {
      '@type': 'ItemList',
      '@id': 'https://anwarsanchez.com/#cases',
      name: 'Casos de Éxito - Partner Digital',
      description: 'Resultados reales de profesionales y empresas que han aplicado estrategia y tecnología para fortalecer su presencia digital',
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
      name: 'Anwar Sánchez - Partner Digital',
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
