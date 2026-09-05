'use client';

import Link from 'next/link';

export default function LandingNav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="landing-nav" style={{ background: 'rgba(10, 10, 10, 0.95)' }}>
      <div className="landing-nav-container">
        <div className="landing-nav-left">
          <button onClick={() => scrollToSection('anwar')} className="landing-nav-link" style={{ color: '#ffffff' }}>
            SOBRE ANWAR
          </button>
          <button onClick={() => scrollToSection('inicios')} className="landing-nav-link" style={{ color: '#ffffff' }}>
            INICIOS
          </button>
        </div>

        <Link href="/" className="landing-nav-logo" style={{ color: '#ffffff' }}>
          ANWAR SANCHEZ
        </Link>

        <div className="landing-nav-right">
          <button onClick={() => scrollToSection('empresas')} className="landing-nav-link" style={{ color: '#ffffff' }}>
            EMPRESAS
          </button>
          <button onClick={() => scrollToSection('contacto')} className="landing-nav-link" style={{ color: '#ffffff' }}>
            CONTACTO
          </button>
        </div>
      </div>
    </nav>
  );
}
