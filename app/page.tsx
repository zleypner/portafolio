'use client';

import { useEffect } from 'react';
import LandingNav from '@/components/landing/LandingNav';
import LandingHero from '@/components/landing/LandingHero';
import Empresas from '@/components/landing/Empresas';
import SobreAnwar from '@/components/landing/SobreAnwar';
import Inicios from '@/components/landing/Inicios';
import Proposito from '@/components/landing/Proposito';
import Contacto from '@/components/landing/Contacto';
import LandingFooter from '@/components/landing/LandingFooter';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('landing-body');
    return () => {
      document.body.classList.remove('landing-body');
    };
  }, []);

  return (
    <div className="landing-page" style={{ background: '#0a0a0a', color: '#ffffff' }}>
      <LandingNav />
      <LandingHero />
      <Empresas />
      <SobreAnwar />
      <Inicios />
      <Proposito />
      <Contacto />
      <LandingFooter />
    </div>
  );
}
