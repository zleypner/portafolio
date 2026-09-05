'use client';

export default function Contacto() {
  return (
    <section id="contacto" className="landing-section contacto-section">
      <div className="contacto-overlay"></div>
      <div className="contacto-content">
        <p className="contacto-text" style={{ color: '#ffffff' }}>
          Envía tu propuesta y explica por qué<br />
          Anwar debería trabajar contigo.
        </p>
        <a href="mailto:contacto@anwarsanchez.com" className="contacto-button" style={{ color: '#ffffff', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.3)' }}>
          Contactar con Anwar
        </a>
      </div>
    </section>
  );
}
