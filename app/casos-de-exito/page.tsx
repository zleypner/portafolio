'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

// Case Studies Data
const caseStudies = [
  {
    id: 'gastromedical',
    company: 'Gastromedical CR',
    author: 'Dr. Daniel Zúñiga',
    industry: 'Salud · Clínica especializada',
    image: '/assets/yieldge/presencia-digital/gastro-hero-2.webp',
    projectUrl: 'https://gastromedicalcr.com/',
    challenge: 'Gastromedical tenía una página web que no reflejaba la calidad de su servicio. Pacientes potenciales no encontraban la clínica en Google y las consultas llegaban principalmente por recomendación directa.',
    solution: 'Diseñamos un sitio web profesional optimizado para SEO local y móvil. Implementamos formularios de contacto directos a WhatsApp y un sistema de posicionamiento orgánico enfocado en búsquedas de gastroenterología en Costa Rica.',
    quote: 'Desde que lanzamos el nuevo sitio, las consultas desde Google aumentaron significativamente. Ahora tengo pacientes que me dicen que me encontraron buscando gastroenterólogo en su zona.',
    stat: '+180%',
    statLabel: 'Más consultas desde Google',
    featured: true,
  },
  {
    id: 'physicalcare',
    company: 'Physical Care Fisioterapia',
    author: 'Lic. Enmanuel Li',
    industry: 'Salud · Fisioterapia',
    image: '/assets/yieldge/cases/image.png',
    projectUrl: 'https://www.physicalcarefisioterapia.com',
    challenge: 'La clínica de fisioterapia dependía únicamente de referencias y no tenía presencia digital. Pacientes potenciales no podían encontrar información sobre los servicios ni agendar consultas fácilmente.',
    solution: 'Creamos un sitio web profesional con información clara de servicios, integración directa con WhatsApp para consultas y un diseño que transmite profesionalismo y confianza.',
    quote: 'El sitio web nos ayudó a proyectar una imagen más profesional. Los pacientes ahora llegan más informados y el proceso de agendar citas es mucho más fluido.',
  },
  {
    id: 'bnggroup',
    company: 'BNG Group',
    author: 'Edward Barnett',
    industry: 'Retail · Consultoría',
    image: '/assets/yieldge/cases/Perfil fundador 2.png',
    projectUrl: 'https://edward-barnett.com/',
    challenge: 'BNG Group necesitaba establecer una presencia digital que reflejara su experiencia en consultoría de retail y abriera nuevas oportunidades de negocio a nivel internacional.',
    solution: 'Desarrollamos un sitio web personal y profesional que posiciona a Edward como experto en su industria, con contenido estratégico que atrae clientes potenciales del sector retail.',
    quote: 'El sitio web me ayudó a posicionarme como referente en mi industria. Ahora recibo consultas de empresas que me encontraron buscando asesoría especializada.',
  },
];

const logos = [
  { name: 'Gastromedical CR', logo: '/assets/yieldge/logos/drzuniga-logo.png', large: true },
  { name: 'Physical Care', logo: '/assets/yieldge/logos/phyclogo-removedbg.png' },
  { name: 'BNG Group', logo: '/assets/yieldge/logos/bnggroup.PNG' },
  { name: 'Construrack', logo: '/assets/yieldge/logos/construrack.png' },
  { name: '3M', logo: '/assets/yieldge/logos/3m.png' },
];

export default function CasosDeExito() {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --black: #0a0a0a;
          --white: #fafafa;
          --gray: #888;
          --gray-dark: #333;
          --gray-light: #f5f5f5;
          --brand: #25D366;
          --font-serif: 'Times New Roman', Georgia, serif;
        }

        .cases-page {
          background: var(--white);
          min-height: 100vh;
        }

        /* Navbar */
        .cases-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(250, 250, 250, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .cases-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cases-navbar-logo {
          font-family: var(--font-serif);
          font-size: 14px;
          letter-spacing: 0.3em;
          color: var(--black);
          text-transform: uppercase;
          text-decoration: none;
        }

        .cases-navbar-links {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cases-navbar-link {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--black);
          opacity: 0.6;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .cases-navbar-link:hover {
          opacity: 1;
        }

        /* Hero */
        .cases-hero {
          padding: 160px 40px 80px;
          text-align: center;
          background: linear-gradient(180deg, var(--gray-light) 0%, var(--white) 100%);
        }

        .cases-hero-eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 20px;
        }

        .cases-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 400;
          line-height: 1.1;
          color: var(--black);
          margin-bottom: 20px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .cases-hero-subtitle {
          font-size: 16px;
          color: var(--gray);
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .cases-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--brand);
          color: white;
          padding: 16px 32px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .cases-hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }

        /* Logo Carousel */
        .logo-section {
          padding: 60px 40px;
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .logo-section-title {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gray);
          text-align: center;
          margin-bottom: 40px;
        }

        .logo-carousel {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
        }

        .logo-item {
          height: 60px;
          display: flex;
          align-items: center;
          filter: grayscale(100%);
          opacity: 0.5;
          transition: all 0.3s;
        }

        .logo-item:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* Case Studies */
        .cases-section {
          padding: 100px 40px;
        }

        .cases-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .case-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          gap: 40px;
          padding: 50px;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.08);
          margin-bottom: 40px;
        }

        .case-card.featured {
          background: var(--gray-light);
          border: none;
        }

        @media (max-width: 900px) {
          .case-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        .case-photo-column {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .case-photo {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .case-author {
          font-family: var(--font-serif);
          font-size: 22px;
          color: var(--black);
        }

        .case-company {
          font-size: 12px;
          color: var(--gray);
        }

        .case-industry {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(0,0,0,0.05);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-dark);
        }

        .case-details-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .case-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 8px;
        }

        .case-text {
          font-size: 14px;
          line-height: 1.7;
          color: var(--gray-dark);
        }

        .case-stat {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: rgba(37, 211, 102, 0.08);
          border: 1px solid rgba(37, 211, 102, 0.2);
        }

        .case-stat-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--brand);
        }

        .case-stat-label {
          font-size: 12px;
          color: var(--gray-dark);
        }

        .case-cta-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--brand);
          color: white;
          padding: 14px 24px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .case-cta-primary:hover {
          transform: translateY(-2px);
        }

        .case-cta-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12px;
          color: var(--gray);
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .case-cta-secondary:hover {
          color: var(--black);
        }

        .case-testimonial-column {
          padding-left: 30px;
          border-left: 1px solid rgba(0,0,0,0.08);
        }

        @media (max-width: 900px) {
          .case-testimonial-column {
            padding-left: 0;
            border-left: none;
            padding-top: 30px;
            border-top: 1px solid rgba(0,0,0,0.08);
          }
        }

        .case-quote-mark {
          font-family: var(--font-serif);
          font-size: 60px;
          line-height: 1;
          color: rgba(37, 211, 102, 0.3);
        }

        .case-quote {
          font-family: var(--font-serif);
          font-size: 16px;
          font-style: italic;
          line-height: 1.7;
          color: var(--gray-dark);
          margin: 10px 0 20px;
        }

        .case-quote-author {
          font-size: 14px;
          font-weight: 600;
          color: var(--black);
        }

        .case-quote-company {
          font-size: 12px;
          color: var(--gray);
        }

        /* Method Section */
        .method-section {
          padding: 100px 40px;
          background: var(--gray-light);
        }

        .method-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          text-align: center;
          color: var(--black);
          margin-bottom: 60px;
        }

        .method-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .method-grid {
            grid-template-columns: 1fr;
          }
        }

        .method-card {
          padding: 40px;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .method-number {
          font-size: 36px;
          font-weight: 700;
          color: rgba(0,0,0,0.08);
          margin-bottom: 20px;
        }

        .method-card-title {
          font-family: var(--font-serif);
          font-size: 20px;
          color: var(--black);
          margin-bottom: 12px;
        }

        .method-card-text {
          font-size: 14px;
          line-height: 1.7;
          color: var(--gray);
        }

        /* Final CTA */
        .final-cta-section {
          padding: 100px 40px;
          background: var(--white);
        }

        .final-cta-container {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .final-cta-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        .final-cta-photo {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--white);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .final-cta-photo {
            margin: 0 auto;
          }
        }

        .final-cta-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          color: var(--black);
          margin-bottom: 15px;
        }

        .final-cta-text {
          font-size: 16px;
          line-height: 1.7;
          color: var(--gray);
          margin-bottom: 30px;
        }

        .final-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--brand);
          color: white;
          padding: 18px 36px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-bottom: 25px;
        }

        .final-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }

        .final-cta-benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .final-cta-benefits {
            justify-content: center;
          }
        }

        .final-cta-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--gray);
        }

        .final-cta-benefit svg {
          color: var(--brand);
        }

        /* Footer */
        .cases-footer {
          padding: 40px;
          text-align: center;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .cases-footer-text {
          font-size: 12px;
          color: var(--gray);
        }

        .cases-footer-link {
          color: var(--black);
          text-decoration: none;
        }

        .cases-footer-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="cases-page">
        {/* Navbar */}
        <nav className="cases-navbar">
          <div className="cases-navbar-container">
            <Link href="/" className="cases-navbar-logo">Anwar Sánchez</Link>
            <ul className="cases-navbar-links">
              <li><Link href="/" className="cases-navbar-link">Inicio</Link></li>
              <li><Link href="/casos-de-exito" className="cases-navbar-link">Casos</Link></li>
              <li><Link href="/presencia-digital" className="cases-navbar-link">Servicios</Link></li>
              <li><a href="https://wa.me/50670724236" className="cases-navbar-link">Contacto</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero */}
        <section className="cases-hero">
          <div className="cases-hero-eyebrow">· Casos de Éxito ·</div>
          <h1>Resultados reales. Sin promesas vacías.</h1>
          <p className="cases-hero-subtitle">
            Empresas en Costa Rica que ya están atrayendo más clientes desde Google.
            Sin trucos. Sin humo. Solo trabajo bien hecho.
          </p>
          <a
            href="https://wa.me/50670724236?text=Hola%20Anwar%2C%20vi%20los%20casos%20de%20%C3%A9xito%20y%20quiero%20un%20diagn%C3%B3stico%20para%20mi%20empresa."
            className="cases-hero-cta"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quiero resultados similares
          </a>
        </section>

        {/* Logo Carousel */}
        <section className="logo-section">
          <div className="logo-section-title">Empresas que confían en nosotros</div>
          <div className="logo-carousel">
            {logos.map((logo, index) => (
              <div key={logo.name} className="logo-item">
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={logo.large ? 180 : 120}
                  height={60}
                  style={{ objectFit: 'contain', maxHeight: '60px', width: 'auto' }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="cases-section">
          <div className="cases-container">
            {caseStudies.map((study) => (
              <div key={study.id} className={`case-card ${study.featured ? 'featured' : ''}`}>
                {/* Photo Column */}
                <div className="case-photo-column">
                  <div className="case-photo">
                    <Image
                      src={study.image}
                      alt={study.author}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div className="case-author">{study.author}</div>
                    <div className="case-company">{study.company}</div>
                  </div>
                  <span className="case-industry">
                    {study.industry}
                  </span>
                </div>

                {/* Details Column */}
                <div className="case-details-column">
                  <div>
                    <div className="case-label">El Desafío</div>
                    <p className="case-text">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="case-label">La Solución</div>
                    <p className="case-text">{study.solution}</p>
                  </div>

                  {study.stat && (
                    <div className="case-stat">
                      <div className="case-stat-value">{study.stat}</div>
                      <div className="case-stat-label">{study.statLabel}</div>
                    </div>
                  )}

                  <a
                    href={`https://wa.me/50670724236?text=Hola%20Anwar%2C%20vi%20el%20caso%20de%20${encodeURIComponent(study.company)}%20y%20quiero%20resultados%20similares.`}
                    className="case-cta-primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Quiero resultados similares
                  </a>
                  <a href={study.projectUrl} target="_blank" rel="noopener noreferrer" className="case-cta-secondary">
                    Ver proyecto →
                  </a>
                </div>

                {/* Testimonial Column */}
                <div className="case-testimonial-column">
                  <span className="case-quote-mark">&ldquo;</span>
                  <p className="case-quote">&ldquo;{study.quote}&rdquo;</p>
                  <div className="case-quote-author">{study.author}</div>
                  <div className="case-quote-company">{study.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Method Section */}
        <section className="method-section">
          <h2 className="method-title">Cómo trabajamos</h2>
          <div className="method-grid">
            <div className="method-card">
              <div className="method-number">01</div>
              <h3 className="method-card-title">Diagnóstico</h3>
              <p className="method-card-text">
                Analizamos tu presencia digital actual, identificamos oportunidades
                y te mostramos exactamente qué está funcionando y qué no.
              </p>
            </div>
            <div className="method-card">
              <div className="method-number">02</div>
              <h3 className="method-card-title">Implementación</h3>
              <p className="method-card-text">
                Construimos tu sitio web profesional optimizado para Google,
                con formularios de contacto y sistema de conversión integrado.
              </p>
            </div>
            <div className="method-card">
              <div className="method-number">03</div>
              <h3 className="method-card-title">Medición</h3>
              <p className="method-card-text">
                Monitoreamos resultados reales: visitas, consultas, conversiones.
                Si algo no funciona, lo ajustamos hasta que funcione.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-section">
          <div className="final-cta-container">
            <div className="final-cta-photo">
              <Image
                src="/assets/yieldge/anwar/anwar-founder.jpg"
                alt="Anwar Sánchez"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 className="final-cta-title">¿Querés resultados como estos?</h2>
              <p className="final-cta-text">
                Hablemos. En 15 minutos te muestro exactamente qué está pasando
                con tu presencia digital y qué podemos hacer para mejorarla.
              </p>
              <a
                href="https://wa.me/50670724236?text=Hola%20Anwar%2C%20me%20interesa%20un%20diagn%C3%B3stico%20gratuito."
                className="final-cta-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar diagnóstico gratuito
              </a>
              <div className="final-cta-benefits">
                <div className="final-cta-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Sin compromiso
                </div>
                <div className="final-cta-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  15 minutos
                </div>
                <div className="final-cta-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Plan concreto
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="cases-footer">
          <p className="cases-footer-text">
            © 2024 <Link href="/" className="cases-footer-link">Anwar Sánchez</Link>.
            Construyendo presencia digital que genera resultados.
          </p>
        </footer>
      </div>
    </>
  );
}
