import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Anwar Sánchez Digital. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://anwarsanchez.com/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
