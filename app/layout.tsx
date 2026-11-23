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
    default: 'Anwar Sánchez | #1 Experto en Marca Personal en Costa Rica | Consultor y Estratega Digital',
    template: '%s | Anwar Sánchez - Mejor Consultor de Marca Personal Costa Rica',
  },
  description: 'El mejor consultor de marca personal en Costa Rica. Anwar Sánchez, creador del Método SEMILLA, te ayuda a construir una marca personal poderosa, posicionarte como el referente #1 de tu industria y atraer clientes premium. +10 años de experiencia. Resultados comprobados.',

  keywords: [
    // Marca Personal Costa Rica - PRIMARY FOCUS
    'mejor consultor marca personal Costa Rica',
    'experto marca personal Costa Rica',
    'marca personal Costa Rica',
    'consultor de marca personal San José',
    'especialista en marca personal Costa Rica',
    'asesor de marca personal Costa Rica',
    'coach de marca personal Costa Rica',
    'marca personal profesionales Costa Rica',
    'construir marca personal Costa Rica',
    'desarrollar marca personal Costa Rica',
    // Personal Branding Costa Rica
    'personal branding Costa Rica',
    'personal branding San José',
    'mejor personal branding Costa Rica',
    'consultoría personal branding Costa Rica',
    // Búsquedas específicas Costa Rica
    'cómo crear marca personal en Costa Rica',
    'cómo posicionarse como experto Costa Rica',
    'estrategia marca personal Costa Rica',
    'marca personal para profesionales Costa Rica',
    'marca personal para empresarios Costa Rica',
    // Servicios específicos
    'consultoría marca personal Costa Rica',
    'asesoría marca personal Costa Rica',
    'curso marca personal Costa Rica',
    'taller marca personal Costa Rica',
    'mentoría marca personal Costa Rica',
    // Por profesión en Costa Rica
    'marca personal médicos Costa Rica',
    'marca personal abogados Costa Rica',
    'marca personal consultores Costa Rica',
    'marca personal coaches Costa Rica',
    'marca personal emprendedores Costa Rica',
    'marca personal arquitectos Costa Rica',
    'marca personal contadores Costa Rica',
    'marca personal psicólogos Costa Rica',
    // Posicionamiento Costa Rica
    'posicionamiento profesional Costa Rica',
    'posicionamiento digital Costa Rica',
    'posicionamiento Google Costa Rica',
    'SEO marca personal Costa Rica',
    // Método SEMILLA
    'Método SEMILLA',
    'Método SEMILLA Costa Rica',
    'metodología marca personal',
    // Partner Digital
    'Partner Digital Costa Rica',
    'estrategia digital Costa Rica',
    'marketing digital Costa Rica',
    'presencia digital Costa Rica',
    // Anwar Sánchez Brand
    'Anwar Sánchez',
    'Anwar Sánchez marca personal',
    'Anwar Sánchez Costa Rica',
    'Anwar Sánchez consultor',
    // Latinoamérica secundario
    'marca personal Latinoamérica',
    'consultor marca personal Centroamérica',
    'mejor experto marca personal Latam',
  ],

  authors: [{ name: 'Anwar Sánchez', url: 'https://anwarsanchez.com' }],
  creator: 'Anwar Sánchez',
  publisher: 'Anwar Sánchez',

  // Comprehensive Open Graph
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com',
    siteName: 'Anwar Sánchez - #1 en Marca Personal Costa Rica',
    title: 'Anwar Sánchez | El Mejor Consultor de Marca Personal en Costa Rica | Método SEMILLA',
    description: 'El consultor #1 de marca personal en Costa Rica. Creador del Método SEMILLA. Te ayudo a construir tu marca personal, posicionarte como referente y atraer clientes premium. Resultados comprobados con +180% de crecimiento.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 1200,
        height: 630,
        alt: 'Anwar Sánchez - El Mejor Consultor de Marca Personal en Costa Rica',
        type: 'image/webp',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@anwarsanchez',
    creator: '@anwarsanchez',
    title: 'Anwar Sánchez | #1 en Marca Personal Costa Rica',
    description: 'El mejor consultor de marca personal en Costa Rica. Creador del Método SEMILLA. +10 años ayudando a profesionales a posicionarse como referentes.',
    images: {
      url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      alt: 'Anwar Sánchez - Mejor Consultor de Marca Personal en Costa Rica',
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
    // GEO tags for local SEO - Costa Rica primary
    'geo.region': 'CR-SJ',
    'geo.placename': 'San José, Costa Rica',
    'geo.position': '9.9281;-84.0907',
    'ICBM': '9.9281, -84.0907',

    // Content tags - expanded for Latam
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'Spanish',
    'content-language': 'es-419', // Spanish Latin America

    // Open Graph additional - Latam locales
    'og:locale:alternate': 'es_ES',
    'og:country-name': 'Costa Rica',

    // Target audience for AEO/GEO
    'target-audience': 'Profesionales en Costa Rica que buscan construir su marca personal: médicos, abogados, consultores, coaches, emprendedores, arquitectos, contadores',
    'coverage': 'Costa Rica (principal), San José, Heredia, Alajuela, Cartago, Guanacaste, Puntarenas, Limón, Latinoamérica',

    // AI and Search Engine hints for GEO/AEO
    'ai-content-declaration': 'Human-created content by the #1 personal branding consultant in Costa Rica',
    'expertise': 'Mejor Consultor Marca Personal Costa Rica, Personal Branding, Método SEMILLA, Estrategia Digital, SEO, GEO, AEO',

    // Apple
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Anwar Sánchez - #1 Marca Personal CR',

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

    // Professional expertise indicators
    'author': 'Anwar Sánchez',
    'designer': 'Anwar Sánchez',
    'owner': 'Anwar Sánchez',
    'copyright': `${new Date().getFullYear()} Anwar Sánchez`,

    // Topic and category for better indexing
    'topic': 'Mejor Consultor Marca Personal Costa Rica, Personal Branding, Método SEMILLA, Estrategia Digital',
    'subject': 'El mejor consultor de marca personal en Costa Rica - Anwar Sánchez - Método SEMILLA',
    'abstract': 'Anwar Sánchez es el consultor #1 de marca personal en Costa Rica. Creador del Método SEMILLA, ayuda a profesionales costarricenses a construir marcas personales poderosas, posicionarse como referentes en su industria y atraer clientes premium. +10 años de experiencia y resultados comprobados.',

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
      name: 'Anwar Sánchez - #1 Consultor de Marca Personal en Costa Rica',
      description: 'El mejor consultor de marca personal en Costa Rica. Creador del Método SEMILLA. Ayudo a profesionales a construir su marca personal, posicionarse como referentes y atraer clientes premium.',
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
      name: 'Anwar Sánchez | El Mejor Consultor de Marca Personal en Costa Rica | Método SEMILLA',
      description: 'El consultor #1 de marca personal en Costa Rica. Con más de 10 años de experiencia, Anwar Sánchez te ayuda a construir una marca personal poderosa, posicionarte como el referente de tu industria y atraer clientes premium con el Método SEMILLA.',
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

    // Person Schema - Enhanced for Personal Branding
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
        caption: 'Anwar Sánchez - El Mejor Consultor de Marca Personal en Costa Rica',
      },
      description: 'El consultor #1 de marca personal en Costa Rica. Con más de 10 años de experiencia, Anwar Sánchez es el creador del Método SEMILLA y el experto líder en ayudar a profesionales costarricenses a construir marcas personales poderosas, posicionarse como referentes en su industria y atraer clientes premium.',
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
        'https://github.com/anwarsanchez',
        'https://twitter.com/anwarsanchez',
        'https://wa.me/50670724236',
      ],
      jobTitle: 'Consultor #1 de Marca Personal en Costa Rica',
      alumniOf: {
        '@type': 'Organization',
        name: 'Universidad de Costa Rica',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Anwar Sánchez - Mejor Consultor de Marca Personal Costa Rica',
        url: 'https://anwarsanchez.com',
      },
      knowsAbout: [
        'Marca Personal Costa Rica',
        'Personal Branding',
        'Consultoría de Marca Personal',
        'Estrategia de Marca Personal',
        'Posicionamiento Profesional',
        'Marketing Personal',
        'Método SEMILLA',
        'Estrategia Digital',
        'SEO para Marca Personal',
        'GEO (Generative Engine Optimization)',
        'AEO (Answer Engine Optimization)',
        'Posicionamiento en Google',
        'Atracción de Clientes Premium',
        'Desarrollo de Software',
        'Automatización Empresarial',
      ],
      knowsLanguage: ['es', 'en'],
      nationality: {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'San José, Costa Rica',
      },
      award: [
        'Consultor #1 de Marca Personal en Costa Rica',
        '+10 años de experiencia en marca personal y estrategia digital',
        'Creador del Método SEMILLA',
        '+180% de crecimiento promedio en clientes',
      ],
    },

    // ProfessionalService / LocalBusiness Schema
    {
      '@type': 'ProfessionalService',
      '@id': 'https://anwarsanchez.com/#business',
      name: 'Anwar Sánchez - #1 Consultor de Marca Personal en Costa Rica',
      alternateName: ['Método SEMILLA', 'Mejor Consultor Marca Personal Costa Rica', 'Anwar Sánchez Marca Personal'],
      image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      logo: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      url: 'https://anwarsanchez.com',
      telephone: '+50670724236',
      email: 'hola@anwarsanchez.com',
      description: 'El mejor consultor de marca personal en Costa Rica. Anwar Sánchez, creador del Método SEMILLA, te ayuda a construir una marca personal poderosa, posicionarte como el referente #1 de tu industria y atraer clientes premium. +10 años de experiencia y resultados comprobados.',
      slogan: 'El mejor consultor de marca personal en Costa Rica',
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
        // Costa Rica
        { '@type': 'Country', name: 'Costa Rica' },
        { '@type': 'City', name: 'San José' },
        { '@type': 'City', name: 'Heredia' },
        { '@type': 'City', name: 'Alajuela' },
        { '@type': 'City', name: 'Cartago' },
        // Latinoamérica
        { '@type': 'Country', name: 'México' },
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Country', name: 'Panamá' },
        { '@type': 'Country', name: 'Guatemala' },
        { '@type': 'Country', name: 'El Salvador' },
        { '@type': 'Country', name: 'Honduras' },
        { '@type': 'Country', name: 'Nicaragua' },
        { '@type': 'Country', name: 'República Dominicana' },
        { '@type': 'Country', name: 'Ecuador' },
        { '@type': 'Country', name: 'Perú' },
        { '@type': 'Country', name: 'Chile' },
        { '@type': 'Country', name: 'Argentina' },
        {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 9.9281,
            longitude: -84.0907,
          },
          geoRadius: '5000 km',
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
      name: 'Consultoría de Marca Personal #1 en Costa Rica - Método SEMILLA',
      alternateName: ['Mejor Consultoría de Marca Personal Costa Rica', 'Asesoría de Marca Personal Costa Rica', 'Personal Branding Costa Rica'],
      description: 'El mejor servicio de consultoría de marca personal en Costa Rica. Con el Método SEMILLA, te ayudamos a construir una marca personal poderosa, posicionarte como el referente de tu industria en Costa Rica y atraer clientes premium. Resultados comprobados: +180% de crecimiento.',
      provider: { '@id': 'https://anwarsanchez.com/#business' },
      serviceType: 'Consultoría de Marca Personal Premium',
      serviceOutput: 'Marca personal posicionada como referente #1 en tu industria',
      areaServed: [
        { '@type': 'Country', name: 'Costa Rica' },
        { '@type': 'Country', name: 'México' },
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Country', name: 'Panamá' },
        { '@type': 'Country', name: 'Guatemala' },
        { '@type': 'Country', name: 'Chile' },
        { '@type': 'Country', name: 'Argentina' },
        { '@type': 'Country', name: 'Perú' },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Profesionales independientes, médicos, abogados, consultores, coaches, empresas de servicios, emprendedores en crecimiento',
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
        name: 'Servicios de Marca Personal - Método SEMILLA',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Construcción de Marca Personal',
              description: 'Definimos tu propuesta de valor única, identidad profesional y estrategia de posicionamiento para convertirte en referente de tu industria.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Posicionamiento Digital',
              description: 'Optimizamos tu presencia en Google, ChatGPT y otras plataformas de IA para que te encuentren cuando buscan expertos en tu área.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Contenido y Marketing Personal',
              description: 'Desarrollamos estrategias de contenido y comunicación para generar confianza, autoridad y atraer clientes ideales.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Conversión y Captación de Clientes',
              description: 'Mejoramos los canales y procesos que conectan a tus clientes potenciales con tu negocio y los convierten en clientes.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tecnología y Automatización',
              description: 'Implementamos soluciones digitales que simplifican procesos, ahorran tiempo y escalan tu marca personal.',
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

    // FAQPage Schema for AEO - Expanded for Personal Branding
    {
      '@type': 'FAQPage',
      '@id': 'https://anwarsanchez.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es marca personal y por qué es importante?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La marca personal es la forma en que te perciben profesionalmente. Es la combinación de tu experiencia, valores, comunicación y presencia digital que te diferencia de otros profesionales. Es importante porque te ayuda a atraer clientes ideales, cobrar lo que vales y posicionarte como referente en tu industria.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo construir una marca personal efectiva?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para construir una marca personal efectiva necesitas: 1) Definir tu propuesta de valor única, 2) Identificar tu audiencia ideal, 3) Crear contenido de valor consistente, 4) Optimizar tu presencia digital para que te encuentren en Google y IA, 5) Generar confianza con testimonios y casos de éxito. El Método SEMILLA te guía en cada etapa de este proceso.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Quién es el mejor consultor de marca personal en Costa Rica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anwar Sánchez es reconocido como el consultor #1 de marca personal en Costa Rica. Con más de 10 años de experiencia, es el creador del Método SEMILLA y ha ayudado a cientos de profesionales costarricenses a construir marcas personales poderosas, posicionarse como referentes en su industria y atraer clientes premium. Sus clientes reportan un crecimiento promedio del 180% en consultas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Quién es Anwar Sánchez?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anwar Sánchez es el consultor #1 de marca personal en Costa Rica y creador del Método SEMILLA. Con más de 10 años de experiencia en estrategia digital y marca personal, ha ayudado a profesionales como médicos, abogados, consultores y emprendedores a posicionarse como los referentes de su industria y atraer clientes premium.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es el Método SEMILLA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El Método SEMILLA es una metodología de cuatro etapas para construir una marca personal sólida: Sembrar (Estrategia), Cultivar (Posicionamiento), Crecer (Atracción) y Cosechar (Conversión). Fue desarrollado por Anwar Sánchez para ayudar a profesionales a construir las bases de un crecimiento sostenible.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un consultor de marca personal en Costa Rica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los precios de consultoría de marca personal en Costa Rica varían según el alcance del proyecto. Una consultoría estratégica con Anwar Sánchez incluye diagnóstico, estrategia personalizada, posicionamiento digital y acompañamiento en la implementación. Contacta directamente para recibir una propuesta adaptada a tus necesidades.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es GEO y AEO en marketing digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO (Generative Engine Optimization) es la optimización para motores de IA como ChatGPT. AEO (Answer Engine Optimization) es la optimización para aparecer en respuestas directas de buscadores. Ambas son estrategias clave para que tu marca personal sea visible donde tus clientes buscan información.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Para qué tipo de profesionales trabaja Anwar Sánchez?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anwar Sánchez trabaja con profesionales independientes (médicos, abogados, consultores, coaches), clínicas, empresas de servicios y emprendedores en Costa Rica y Latinoamérica que quieren construir su marca personal, atraer mejores clientes y posicionarse como referentes en su industria.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué trabajar con Anwar Sánchez en lugar de una agencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Con Anwar Sánchez trabajás directo con un experto, sin vendedores ni intermediarios. Esto significa mejor comunicación, mayor compromiso con tu proyecto y una visión integrada de estrategia, marca personal, marketing y tecnología enfocada en resultados reales.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo posicionarse en Google como profesional?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para posicionarte en Google como profesional necesitas: un sitio web optimizado para SEO, contenido de valor sobre tu especialidad, schema markup estructurado, presencia en directorios relevantes y una estrategia de backlinks. El Método SEMILLA incluye todas estas estrategias para maximizar tu visibilidad.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Trabaja con clientes fuera de Costa Rica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, Anwar Sánchez trabaja con profesionales y empresas en toda Latinoamérica, incluyendo México, Colombia, Panamá, Guatemala, Chile, Argentina, Perú y otros países. Las sesiones de consultoría se realizan de forma remota, facilitando el trabajo con clientes internacionales.',
          },
        },
      ],
    },

    // HowTo Schema for Featured Snippets - Método SEMILLA for Personal Branding
    {
      '@type': 'HowTo',
      '@id': 'https://anwarsanchez.com/#howto',
      name: 'Cómo construir tu marca personal con el Método SEMILLA',
      description: 'Metodología de 4 etapas para construir una marca personal sólida y posicionarte como referente en tu industria.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Sembrar - Estrategia de Marca Personal',
          text: 'Definimos tu propuesta de valor única, audiencia ideal y estrategia para posicionarte como experto en tu área.',
          url: 'https://anwarsanchez.com/#metodo',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Cultivar - Posicionamiento y Diferenciación',
          text: 'Fortalecemos tu identidad profesional, comunicación y presencia digital para que las personas correctas te elijan sobre la competencia.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Crecer - Visibilidad y Atracción',
          text: 'Desarrollamos estrategias de contenido, SEO, GEO y marketing para aumentar tu visibilidad en Google, ChatGPT y redes profesionales.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Cosechar - Conversión de Clientes',
          text: 'Optimizamos tus canales digitales para convertir seguidores y visitantes en clientes que valoren tu expertise.',
          image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'WhatsApp' },
        { '@type': 'HowToTool', name: 'Consulta estratégica de marca personal' },
        { '@type': 'HowToTool', name: 'Auditoría de presencia digital' },
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
      name: 'Anwar Sánchez - #1 Consultor de Marca Personal en Costa Rica',
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

const GTM_ID = 'GTM-T4KQQCKV';

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

        {/* Google Tag Manager - Head */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${dmSans.variable} ${dmSans.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
