'use client';

import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_PHONE = '50670724236';
const WHATSAPP_MESSAGE_DIAGNOSTIC = 'Hola Anwar, vi el caso de Gastromedical CR y me gustaría un diagnóstico digital para mi negocio.';

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export default function GastromedicalCaseStudy() {
  return (
    <>
      <style jsx global>{`
        :root {
          --gm-black: #0a0a0a;
          --gm-white: #fafafa;
          --gm-gray: #6b7280;
          --gm-gray-light: #f5f5f7;
          --gm-blue: #1F5CFF;
          --gm-blue-soft: #eff4ff;
          --gm-green: #25D366;
        }

        .gm-page {
          background: var(--gm-white);
          min-height: 100vh;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Navbar */
        .gm-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(250, 250, 250, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .gm-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gm-navbar-logo {
          font-family: var(--font-playfair), serif;
          font-size: 14px;
          letter-spacing: 0.2em;
          color: var(--gm-black);
          text-transform: uppercase;
          text-decoration: none;
        }

        .gm-navbar-back {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--gm-gray);
          text-decoration: none;
          transition: color 0.2s;
        }

        .gm-navbar-back:hover {
          color: var(--gm-black);
        }

        /* Hero */
        .gm-hero {
          padding: 140px 24px 80px;
          background: linear-gradient(180deg, var(--gm-gray-light) 0%, var(--gm-white) 100%);
        }

        .gm-hero-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .gm-hero-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gm-blue);
          margin-bottom: 20px;
          padding: 8px 16px;
          background: var(--gm-blue-soft);
          border-radius: 4px;
        }

        .gm-hero h1 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 400;
          line-height: 1.15;
          color: var(--gm-black);
          margin-bottom: 20px;
          max-width: 800px;
        }

        .gm-hero-subtitle {
          font-size: 18px;
          color: var(--gm-gray);
          line-height: 1.6;
          max-width: 700px;
        }

        /* Metrics Section */
        .gm-metrics {
          padding: 60px 24px;
          background: var(--gm-white);
        }

        .gm-metrics-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .gm-metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }

        @media (min-width: 640px) {
          .gm-metrics-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gm-metric-card {
          padding: 32px 24px;
          background: var(--gm-gray-light);
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .gm-metric-value {
          font-family: var(--font-playfair), serif;
          font-size: clamp(40px, 8vw, 56px);
          font-weight: 400;
          color: var(--gm-blue);
          line-height: 1;
          margin-bottom: 12px;
        }

        .gm-metric-label {
          font-size: 14px;
          color: var(--gm-gray);
          line-height: 1.4;
        }

        .gm-metrics-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px 24px;
          background: rgba(31, 92, 255, 0.05);
          border: 1px solid rgba(31, 92, 255, 0.15);
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .gm-metrics-secondary-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--gm-blue);
        }

        .gm-metrics-secondary-label {
          font-size: 15px;
          color: var(--gm-gray);
        }

        .gm-metrics-note {
          text-align: center;
          font-size: 13px;
          color: var(--gm-gray);
          font-style: italic;
        }

        /* Content Sections */
        .gm-section {
          padding: 60px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .gm-section-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .gm-section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gm-blue);
          margin-bottom: 16px;
        }

        .gm-section h2 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 400;
          color: var(--gm-black);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .gm-section p {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.7;
        }

        .gm-strategy-list {
          list-style: none;
          padding: 0;
          margin: 20px 0 0;
          display: grid;
          gap: 12px;
        }

        .gm-strategy-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: #4b5563;
          line-height: 1.5;
        }

        .gm-strategy-list li::before {
          content: '';
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          background: var(--gm-blue);
          border-radius: 50%;
          margin-top: 8px;
        }

        /* Testimonial */
        .gm-testimonial {
          padding: 80px 24px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
        }

        .gm-testimonial-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .gm-testimonial-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 32px;
        }

        .gm-testimonial-avatar {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 24px;
          border: 3px solid rgba(255, 255, 255, 0.2);
        }

        .gm-testimonial-audio {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 32px;
        }

        .gm-testimonial-audio-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
        }

        .gm-testimonial-audio-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
        }

        .gm-testimonial-author {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .gm-testimonial-role {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        /* CTA Section */
        .gm-cta {
          padding: 80px 24px;
          background: var(--gm-white);
        }

        .gm-cta-container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .gm-cta h2 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 400;
          color: var(--gm-black);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .gm-cta p {
          font-size: 16px;
          color: var(--gm-gray);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .gm-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 36px;
          background: var(--gm-green);
          color: white;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
        }

        .gm-cta-button:hover {
          background: #20bd5a;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
        }

        .gm-cta-button svg {
          width: 20px;
          height: 20px;
        }

        /* Footer */
        .gm-footer {
          padding: 40px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          text-align: center;
        }

        .gm-footer-text {
          font-size: 13px;
          color: var(--gm-gray);
        }

        .gm-footer-link {
          color: var(--gm-black);
          text-decoration: none;
        }

        .gm-footer-link:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .gm-navbar-container {
            padding: 20px 40px;
          }

          .gm-hero {
            padding: 160px 40px 100px;
          }

          .gm-metrics,
          .gm-section,
          .gm-cta {
            padding-left: 40px;
            padding-right: 40px;
          }
        }
      `}</style>

      <div className="gm-page">
        {/* Navbar */}
        <nav className="gm-navbar">
          <div className="gm-navbar-container">
            <Link href="/" className="gm-navbar-logo">Anwar Sanchez</Link>
            <Link href="/casos-de-exito" className="gm-navbar-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Casos de Éxito
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="gm-hero">
          <div className="gm-hero-container">
            <span className="gm-hero-tag">Caso de Éxito - Gastromedical CR</span>
            <h1>El 77% de los contactos digitales llegó desde Google orgánico. Sin invertir en anuncios.</h1>
            <p className="gm-hero-subtitle">
              Así fortalecimos la presencia digital de Gastromedical CR combinando posicionamiento web, contenido especializado e inteligencia artificial.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="gm-metrics">
          <div className="gm-metrics-container">
            <div className="gm-metrics-grid">
              <div className="gm-metric-card">
                <div className="gm-metric-value">77%</div>
                <p className="gm-metric-label">Contactos atribuidos a Google orgánico</p>
              </div>
              <div className="gm-metric-card">
                <div className="gm-metric-value">~17%</div>
                <p className="gm-metric-label">Contactos atribuidos a ChatGPT</p>
              </div>
              <div className="gm-metric-card">
                <div className="gm-metric-value">62,5%</div>
                <p className="gm-metric-label">Interacción con WhatsApp desde ChatGPT</p>
              </div>
            </div>

            <div className="gm-metrics-secondary">
              <span className="gm-metrics-secondary-value">4,8x</span>
              <span className="gm-metrics-secondary-label">la tasa promedio de interacción desde ChatGPT</span>
            </div>

            <p className="gm-metrics-note">Resultados de 90 días (agosto - noviembre 2026). Sin publicidad pagada.</p>
          </div>
        </section>

        {/* Challenge */}
        <section className="gm-section">
          <div className="gm-section-container">
            <span className="gm-section-label">El Desafío</span>
            <p>
              Gastromedical CR necesitaba fortalecer su presencia digital para facilitar que más personas encontraran sus servicios de gastroenterología. El objetivo era construir un canal de adquisición sostenible que complementara las recomendaciones directas.
            </p>
          </div>
        </section>

        {/* Strategy */}
        <section className="gm-section">
          <div className="gm-section-container">
            <span className="gm-section-label">La Estrategia</span>
            <p>
              Implementamos un enfoque integral que conecta tecnología, contenido y optimización para generar visibilidad donde los pacientes buscan soluciones:
            </p>
            <ul className="gm-strategy-list">
              <li>Desarrollo y optimización web orientada a conversión</li>
              <li>SEO orgánico para posicionamiento en Google</li>
              <li>AEO y GEO para visibilidad en motores de IA como ChatGPT</li>
              <li>Contenido especializado que genera confianza</li>
              <li>Optimización de conversiones y analítica digital</li>
            </ul>
          </div>
        </section>

        {/* Testimonial */}
        <section className="gm-testimonial">
          <div className="gm-testimonial-container">
            <span className="gm-testimonial-label">Testimonio del Cliente</span>

            <div className="gm-testimonial-avatar" style={{ position: 'relative' }}>
              <Image
                src="/assets/yieldge/presencia-digital/gastro-hero-2.webp"
                alt="Dr. Daniel Zuniga"
                fill
                sizes="100px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="gm-testimonial-audio">
              <div className="gm-testimonial-audio-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <p className="gm-testimonial-audio-text">Testimonio en audio/video disponible con autorización del cliente</p>
            </div>

            <p className="gm-testimonial-author">Dr. Daniel Zúñiga</p>
            <p className="gm-testimonial-role">Director Médico, Gastromedical CR</p>
          </div>
        </section>

        {/* CTA */}
        <section className="gm-cta">
          <div className="gm-cta-container">
            <h2>Tu próximo cliente podría estar buscándote en Google o ChatGPT.</h2>
            <p>
              Te ayudo a construir una presencia digital que atraiga clientes potenciales, genere confianza y convierta búsquedas en oportunidades comerciales.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGE_DIAGNOSTIC)}
              target="_blank"
              rel="noopener noreferrer"
              className="gm-cta-button"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quiero un diagnóstico digital
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="gm-footer">
          <p className="gm-footer-text">
            &copy; 2026 <Link href="/" className="gm-footer-link">Anwar Sanchez</Link>. Partner Digital.
          </p>
        </footer>
      </div>
    </>
  );
}
