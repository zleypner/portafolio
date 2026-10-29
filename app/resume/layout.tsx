import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CV y Experiencia Profesional | Ingeniero de Software',
  description: 'Anwar Sánchez - Ingeniero de software con más de 15 años de experiencia en desarrollo web, inteligencia artificial y marketing digital. Portfolio y trayectoria profesional.',
  keywords: [
    'Anwar Sánchez CV',
    'ingeniero de software Costa Rica',
    'desarrollador web experiencia',
    'portfolio desarrollador',
    'curriculum desarrollador',
    'experiencia profesional tecnología',
    'consultor tecnología Costa Rica',
  ],
  openGraph: {
    type: 'profile',
    locale: 'es_CR',
    url: 'https://anwarsanchez.com/resume',
    title: 'Anwar Sánchez | CV y Experiencia Profesional',
    description: 'Ingeniero de software con más de 15 años de experiencia.',
    images: [
      {
        url: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
        width: 800,
        height: 800,
        alt: 'Anwar Sánchez - Ingeniero de Software',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Anwar Sánchez | CV',
    description: 'Ingeniero de software con más de 15 años de experiencia.',
  },
  alternates: {
    canonical: 'https://anwarsanchez.com/resume',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://anwarsanchez.com/resume/#webpage',
      url: 'https://anwarsanchez.com/resume',
      name: 'CV y Experiencia Profesional | Anwar Sánchez',
      description: 'Portfolio y trayectoria profesional de Anwar Sánchez',
      isPartOf: { '@id': 'https://anwarsanchez.com/#website' },
      mainEntity: { '@id': 'https://anwarsanchez.com/#person' },
      inLanguage: 'es',
      dateModified: new Date().toISOString(),
    },
    {
      '@type': 'Person',
      '@id': 'https://anwarsanchez.com/resume/#person',
      name: 'Anwar Sánchez',
      givenName: 'Anwar',
      familyName: 'Sánchez',
      url: 'https://anwarsanchez.com',
      image: 'https://anwarsanchez.com/assets/yieldge/anwar/anwar-founder.webp',
      description: 'Ingeniero de software y emprendedor con más de 15 años de experiencia en desarrollo de software, inteligencia artificial y marketing digital.',
      jobTitle: 'Ingeniero de Software & Consultor Digital',
      sameAs: [
        'https://www.linkedin.com/in/anwarsanchez',
        'https://github.com/anwarsanchez',
      ],
      knowsAbout: [
        'Software Development',
        'Artificial Intelligence',
        'Web Development',
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'Python',
        'Machine Learning',
        'Digital Marketing',
        'SEO',
        'UX/UI Design',
      ],
      knowsLanguage: ['es', 'en'],
      nationality: { '@type': 'Country', name: 'Costa Rica' },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Universidad de Costa Rica',
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Software Engineer',
        occupationalCategory: '15-1252',
        skills: [
          'Full-stack Development',
          'System Architecture',
          'AI/ML Implementation',
          'Digital Strategy',
        ],
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Anwar Sánchez Digital',
        url: 'https://anwarsanchez.com',
      },
    },
  ],
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="resume-schema"
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
