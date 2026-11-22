'use client';

import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_PHONE = '50670724236';
const WHATSAPP_MESSAGE_CTA = 'Hola Anwar, vi el caso de éxito de Gastromedical y me gustaría saber cómo podemos mejorar la visibilidad y la captación de clientes de mi negocio.';

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
          margin-bottom: 24px;
          max-width: 850px;
        }

        .gm-hero-subtitle {
          font-size: 18px;
          color: var(--gm-gray);
          line-height: 1.7;
          max-width: 750px;
        }

        /* Metrics Section - Premium Cards */
        .gm-metrics {
          padding: 80px 24px;
          background: var(--gm-white);
        }

        .gm-metrics-container {
          max-width: 1100px;
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
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .gm-metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gm-metric-card {
          padding: 32px 24px;
          background: linear-gradient(135deg, var(--gm-gray-light) 0%, #ffffff 100%);
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .gm-metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--gm-blue) 0%, #3b82f6 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gm-metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .gm-metric-card:hover::before {
          opacity: 1;
        }

        .gm-metric-value {
          font-family: var(--font-playfair), serif;
          font-size: clamp(44px, 8vw, 64px);
          font-weight: 400;
          color: var(--gm-blue);
          line-height: 1;
          margin-bottom: 8px;
        }

        .gm-metric-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--gm-black);
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .gm-metric-label {
          font-size: 14px;
          color: var(--gm-gray);
          line-height: 1.5;
        }

        /* Methodology Note */
        .gm-methodology {
          margin-top: 40px;
          padding: 24px;
          background: rgba(31, 92, 255, 0.04);
          border: 1px solid rgba(31, 92, 255, 0.1);
          border-radius: 12px;
        }

        .gm-methodology-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gm-blue);
          margin-bottom: 12px;
        }

        .gm-methodology-text {
          font-size: 14px;
          color: var(--gm-gray);
          line-height: 1.7;
        }

        .gm-methodology-text strong {
          color: #4b5563;
          font-weight: 500;
        }

        /* Content Sections */
        .gm-section {
          padding: 80px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .gm-section-alt {
          background: var(--gm-gray-light);
        }

        .gm-section-container {
          max-width: 800px;
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
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 400;
          color: var(--gm-black);
          margin-bottom: 24px;
          line-height: 1.25;
        }

        .gm-section p {
          font-size: 17px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .gm-section p:last-child {
          margin-bottom: 0;
        }

        /* Strategy Pillars */
        .gm-pillars {
          display: grid;
          gap: 20px;
          margin-top: 32px;
        }

        @media (min-width: 768px) {
          .gm-pillars {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gm-pillar {
          padding: 28px 24px;
          background: white;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .gm-pillar-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--gm-blue-soft);
          color: var(--gm-blue);
          font-size: 14px;
          font-weight: 700;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .gm-pillar h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--gm-black);
          margin-bottom: 8px;
        }

        .gm-pillar p {
          font-size: 15px;
          color: var(--gm-gray);
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* Results Highlight */
        .gm-results-highlight {
          padding: 32px;
          background: linear-gradient(135deg, rgba(31, 92, 255, 0.08) 0%, rgba(31, 92, 255, 0.02) 100%);
          border-radius: 16px;
          border-left: 4px solid var(--gm-blue);
          margin-top: 32px;
        }

        .gm-results-highlight p {
          font-size: 16px;
          color: #374151;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .gm-results-highlight strong {
          color: var(--gm-blue);
          font-weight: 600;
        }

        /* Closing Section */
        .gm-closing {
          padding: 100px 24px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
          text-align: center;
        }

        .gm-closing-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .gm-closing h2 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .gm-closing p {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        /* CTA Button */
        .gm-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px 40px;
          background: var(--gm-green);
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
        }

        .gm-cta-primary:hover {
          background: #20bd5a;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(37, 211, 102, 0.45);
        }

        .gm-cta-primary svg {
          width: 22px;
          height: 22px;
        }

        .gm-cta-subtext {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 20px;
          font-style: italic;
        }

        /* Author Section */
        .gm-author {
          padding: 60px 24px;
          background: var(--gm-white);
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .gm-author-container {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .gm-author-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--gm-gray-light);
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .gm-author-info h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--gm-black);
          margin-bottom: 4px;
        }

        .gm-author-info p {
          font-size: 14px;
          color: var(--gm-gray);
          margin-bottom: 0;
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
          .gm-closing,
          .gm-author {
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
              Casos de Exito
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="gm-hero">
          <div className="gm-hero-container">
            <span className="gm-hero-tag">Caso de Exito · Gastromedical CR</span>
            <h1>De busquedas en Google y ChatGPT a oportunidades reales de negocio.</h1>
            <p className="gm-hero-subtitle">
              Como ayudamos a una clinica especializada en Costa Rica a fortalecer su presencia digital y convertir busquedas relevantes en acciones de contacto por WhatsApp, sin depender de anuncios pagados.
            </p>
          </div>
        </section>

        {/* Premium Metrics */}
        <section className="gm-metrics">
          <div className="gm-metrics-container">
            <div className="gm-metrics-grid">
              <div className="gm-metric-card">
                <div className="gm-metric-value">77%</div>
                <p className="gm-metric-title">Captacion organica</p>
                <p className="gm-metric-label">De los contactos medidos se atribuyo a Google organico</p>
              </div>

              <div className="gm-metric-card">
                <div className="gm-metric-value">62,5%</div>
                <p className="gm-metric-title">Conversion desde ChatGPT</p>
                <p className="gm-metric-label">De las visitas atribuidas a ChatGPT genero un clic en WhatsApp</p>
              </div>

              <div className="gm-metric-card">
                <div className="gm-metric-value">~4,8x</div>
                <p className="gm-metric-title">Mayor intencion de contacto</p>
                <p className="gm-metric-label">La tasa de conversion desde ChatGPT fue aproximadamente 4,8 veces la tasa general</p>
              </div>

              <div className="gm-metric-card">
                <div className="gm-metric-value">0</div>
                <p className="gm-metric-title">Inversion publicitaria</p>
                <p className="gm-metric-label">Los resultados analizados no dependieron de campanas pagadas</p>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="gm-methodology">
              <p className="gm-methodology-title">Nota metodologica</p>
              <p className="gm-methodology-text">
                <strong>Periodo de analisis:</strong> 20 de agosto al 17 de noviembre de 2026 (90 dias). <strong>Fuente:</strong> Google Analytics 4. <strong>Definicion de conversion:</strong> clic en el boton de WhatsApp como accion medible de intencion de contacto. Los clics en WhatsApp no representan conversaciones confirmadas, citas agendadas ni clientes adquiridos.
              </p>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="gm-section">
          <div className="gm-section-container">
            <span className="gm-section-label">El Desafio</span>
            <h2>Tener experiencia profesional no garantiza que los clientes potenciales te encuentren en internet.</h2>
            <p>
              Gastromedical CR necesitaba una presencia digital capaz de comunicar confianza, mejorar su visibilidad en buscadores y facilitar que las personas interesadas pudieran contactar directamente con la clinica.
            </p>
            <p>
              El objetivo era construir un canal de adquisicion sostenible que complementara las recomendaciones directas, permitiendo que pacientes potenciales encontraran la clinica en el momento exacto en que buscaban soluciones a sus necesidades de salud.
            </p>
          </div>
        </section>

        {/* Strategy */}
        <section className="gm-section gm-section-alt">
          <div className="gm-section-container">
            <span className="gm-section-label">Nuestra Estrategia</span>
            <h2>Implementamos una estrategia digital enfocada en tres pilares</h2>
            <p>
              Combinamos tecnologia, contenido y optimizacion para generar visibilidad donde los pacientes buscan soluciones:
            </p>

            <div className="gm-pillars">
              <div className="gm-pillar">
                <span className="gm-pillar-num">1</span>
                <h3>Posicionamiento</h3>
                <p>Estructura y contenido orientados a facilitar el descubrimiento mediante busquedas relevantes en Google y herramientas de IA.</p>
              </div>

              <div className="gm-pillar">
                <span className="gm-pillar-num">2</span>
                <h3>Confianza</h3>
                <p>Experiencia web profesional, contenido informativo y comunicacion clara de los servicios para generar credibilidad.</p>
              </div>

              <div className="gm-pillar">
                <span className="gm-pillar-num">3</span>
                <h3>Conversion</h3>
                <p>Llamadas a la accion estrategicas hacia WhatsApp y medicion mediante Google Analytics 4 para optimizar resultados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="gm-section">
          <div className="gm-section-container">
            <span className="gm-section-label">Los Resultados</span>
            <h2>Visibilidad, confianza y conversion conectadas en una misma estrategia digital</h2>
            <p>
              En un periodo de 90 dias, el 77% de los contactos medidos se atribuyo a busquedas organicas en Google. Esto demuestra el potencial de aparecer en el momento exacto en que un paciente potencial busca servicios de gastroenterologia.
            </p>
            <p>
              Ademas, aproximadamente 1 de cada 6 contactos medidos provino de visitantes referidos desde ChatGPT. Este dato refleja la creciente importancia de optimizar no solo para buscadores tradicionales, sino tambien para herramientas de inteligencia artificial.
            </p>

            <div className="gm-results-highlight">
              <p>
                Lo mas interesante fue la tasa de conversion a clic en WhatsApp: el trafico referido desde ChatGPT alcanzo un <strong>62,5%</strong>, aproximadamente <strong>4,8 veces la tasa general del sitio</strong>. Esto sugiere que las personas que llegan desde ChatGPT tienen una intencion de contacto significativamente mayor.
              </p>
            </div>

            <p style={{ marginTop: '24px' }}>
              Estos resultados muestran el potencial de conectar visibilidad, confianza y conversion dentro de una misma estrategia digital, sin depender de inversion publicitaria.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="gm-closing">
          <div className="gm-closing-container">
            <h2>Tu sitio web no deberia limitarse a recibir visitas. Deberia ayudarte a generar oportunidades de negocio.</h2>
            <p>
              No se trata solamente de aparecer en Google o ChatGPT. Se trata de que las personas correctas encuentren tu negocio, comprendan su valor y tengan un camino sencillo para contactarte.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGE_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="gm-cta-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quiero resultados como estos
            </a>
            <p className="gm-cta-subtext">Descubramos que oportunidades esta perdiendo tu negocio en Google, ChatGPT y tu sitio web.</p>
          </div>
        </section>

        {/* Author */}
        <section className="gm-author">
          <div className="gm-author-container">
            <div className="gm-author-avatar">
              <Image
                src="/assets/headshots/no-bg/Bearded Man in White Shirt Cutout.png"
                alt="Anwar Sanchez"
                fill
                sizes="64px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gm-author-info">
              <h3>Anwar Sanchez</h3>
              <p>Partner Digital · Estrategia, Marketing y Tecnologia</p>
            </div>
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
