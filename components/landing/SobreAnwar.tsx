'use client';

import Image from 'next/image';

export default function SobreAnwar() {
  return (
    <section id="anwar" className="landing-section sobre-anwar-section" style={{ background: '#0a0a0a' }}>
      <div className="sobre-anwar-container">
        <div className="sobre-anwar-content">
          <h2 className="sobre-anwar-title" style={{ color: '#ffffff' }}>ANWAR</h2>
          <div className="sobre-anwar-text">
            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Anwar Sanchez es un reconocido experto en software, inteligencia artificial y crecimiento digital, especializado en construir sistemas que transforman operaciones y marketing, logrando que las empresas generen más resultados con menos esfuerzo y mayor control.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Ha colaborado con emprendedores y marcas de distintos sectores, ayudándolos a automatizar procesos, escalar su presencia digital y recuperar el control de su tiempo y sus ingresos.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Además, ha desarrollado soluciones que combinan tecnología y estrategia para que los negocios dejen de depender del trabajo manual y empiecen a crecer de forma inteligente y sostenible.
            </p>
          </div>
        </div>
        <div className="sobre-anwar-image-container">
          <Image
            src="/anwar-about.jpg"
            alt="Anwar Sanchez"
            width={500}
            height={700}
            className="sobre-anwar-image"
          />
        </div>
      </div>
    </section>
  );
}
