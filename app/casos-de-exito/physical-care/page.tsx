'use client';

import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_PHONE = '50670724236';
const WHATSAPP_MESSAGE_CTA = 'Hola Anwar, vi el caso de éxito de Physical Care Fisioterapia y me gustaría conocer cómo podrías ayudarme a mejorar la visibilidad digital y conseguir más oportunidades de clientes para mi negocio.';

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export default function PhysicalCareCaseStudy() {
  return (
    <>
      <style jsx global>{`
        :root {
          --pc-black: #0a0a0a;
          --pc-white: #fafafa;
          --pc-gray: #6b7280;
          --pc-gray-light: #f5f5f7;
          --pc-blue: #1F5CFF;
          --pc-blue-soft: #eff4ff;
          --pc-green: #25D366;
          --pc-teal: #0d9488;
          --pc-teal-soft: #f0fdfa;
        }

        .pc-page {
          background: var(--pc-white);
          min-height: 100vh;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Navbar */
        .pc-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(250, 250, 250, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .pc-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .pc-navbar-logo {
          font-family: var(--font-playfair), serif;
          font-size: 14px;
          letter-spacing: 0.2em;
          color: var(--pc-black);
          text-transform: uppercase;
          text-decoration: none;
        }

        .pc-navbar-back {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--pc-gray);
          text-decoration: none;
          transition: color 0.2s;
        }

        .pc-navbar-back:hover {
          color: var(--pc-black);
        }

        /* Hero */
        .pc-hero {
          padding: 140px 24px 80px;
          background: linear-gradient(180deg, var(--pc-gray-light) 0%, var(--pc-white) 100%);
        }

        .pc-hero-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .pc-hero-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--pc-blue);
          margin-bottom: 20px;
          padding: 8px 16px;
          background: var(--pc-blue-soft);
          border-radius: 4px;
        }

        .pc-hero h1 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 400;
          line-height: 1.15;
          color: var(--pc-black);
          margin-bottom: 24px;
          max-width: 850px;
        }

        .pc-hero-subtitle {
          font-size: 18px;
          color: var(--pc-gray);
          line-height: 1.7;
          max-width: 750px;
        }

        /* Metrics Section - Premium Cards */
        .pc-metrics {
          padding: 80px 24px;
          background: var(--pc-white);
        }

        .pc-metrics-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .pc-metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }

        @media (min-width: 640px) {
          .pc-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .pc-metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .pc-metric-card {
          padding: 32px 24px;
          background: linear-gradient(135deg, var(--pc-gray-light) 0%, #ffffff 100%);
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .pc-metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--pc-blue) 0%, #3b82f6 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pc-metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .pc-metric-card:hover::before {
          opacity: 1;
        }

        .pc-metric-value {
          font-family: var(--font-playfair), serif;
          font-size: clamp(44px, 8vw, 64px);
          font-weight: 400;
          color: var(--pc-blue);
          line-height: 1;
          margin-bottom: 8px;
        }

        .pc-metric-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--pc-black);
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .pc-metric-label {
          font-size: 14px;
          color: var(--pc-gray);
          line-height: 1.5;
        }

        /* Methodology Note */
        .pc-methodology {
          margin-top: 40px;
          padding: 24px;
          background: rgba(31, 92, 255, 0.04);
          border: 1px solid rgba(31, 92, 255, 0.1);
          border-radius: 12px;
        }

        .pc-methodology-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--pc-blue);
          margin-bottom: 12px;
        }

        .pc-methodology-text {
          font-size: 14px;
          color: var(--pc-gray);
          line-height: 1.7;
        }

        .pc-methodology-text strong {
          color: #4b5563;
          font-weight: 500;
        }

        /* Content Sections */
        .pc-section {
          padding: 80px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .pc-section-alt {
          background: var(--pc-gray-light);
        }

        .pc-section-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .pc-section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--pc-blue);
          margin-bottom: 16px;
        }

        .pc-section h2 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 400;
          color: var(--pc-black);
          margin-bottom: 24px;
          line-height: 1.25;
        }

        .pc-section p {
          font-size: 17px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .pc-section p:last-child {
          margin-bottom: 0;
        }

        /* Strategy Pillars */
        .pc-pillars {
          display: grid;
          gap: 20px;
          margin-top: 32px;
        }

        @media (min-width: 768px) {
          .pc-pillars {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pc-pillar {
          padding: 28px 24px;
          background: white;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .pc-pillar-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--pc-blue-soft);
          color: var(--pc-blue);
          font-size: 14px;
          font-weight: 700;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .pc-pillar h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--pc-black);
          margin-bottom: 8px;
        }

        .pc-pillar p {
          font-size: 15px;
          color: var(--pc-gray);
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* Results Highlight */
        .pc-results-highlight {
          padding: 32px;
          background: linear-gradient(135deg, rgba(31, 92, 255, 0.08) 0%, rgba(31, 92, 255, 0.02) 100%);
          border-radius: 16px;
          border-left: 4px solid var(--pc-blue);
          margin-top: 32px;
        }

        .pc-results-highlight p {
          font-size: 16px;
          color: #374151;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .pc-results-highlight strong {
          color: var(--pc-blue);
          font-weight: 600;
        }

        /* Opportunity Section */
        .pc-opportunity {
          padding: 80px 24px;
          background: var(--pc-teal-soft);
          border-top: 1px solid rgba(13, 148, 136, 0.1);
        }

        .pc-opportunity-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .pc-opportunity h2 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 400;
          color: var(--pc-black);
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .pc-opportunity p {
          font-size: 17px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .pc-opportunity-highlight {
          font-size: 18px;
          font-weight: 500;
          color: var(--pc-teal);
          font-style: italic;
        }

        /* Closing Section */
        .pc-closing {
          padding: 100px 24px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
          text-align: center;
        }

        .pc-closing-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .pc-closing h2 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .pc-closing p {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        /* CTA Button */
        .pc-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px 40px;
          background: var(--pc-green);
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
        }

        .pc-cta-primary:hover {
          background: #20bd5a;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(37, 211, 102, 0.45);
        }

        .pc-cta-primary svg {
          width: 22px;
          height: 22px;
        }

        .pc-cta-subtext {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 20px;
          font-style: italic;
        }

        /* Author Section */
        .pc-author {
          padding: 60px 24px;
          background: var(--pc-white);
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .pc-author-container {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .pc-author-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--pc-gray-light);
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .pc-author-info h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--pc-black);
          margin-bottom: 4px;
        }

        .pc-author-info p {
          font-size: 14px;
          color: var(--pc-gray);
          margin-bottom: 0;
        }

        /* Footer */
        .pc-footer {
          padding: 40px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          text-align: center;
        }

        .pc-footer-text {
          font-size: 13px;
          color: var(--pc-gray);
        }

        .pc-footer-link {
          color: var(--pc-black);
          text-decoration: none;
        }

        .pc-footer-link:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .pc-navbar-container {
            padding: 20px 40px;
          }

          .pc-hero {
            padding: 160px 40px 100px;
          }

          .pc-metrics,
          .pc-section,
          .pc-opportunity,
          .pc-closing,
          .pc-author {
            padding-left: 40px;
            padding-right: 40px;
          }
        }
      `}</style>

      <div className="pc-page">
        {/* Navbar */}
        <nav className="pc-navbar">
          <div className="pc-navbar-container">
            <Link href="/" className="pc-navbar-logo">Anwar Sanchez</Link>
            <Link href="/casos-de-exito" className="pc-navbar-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Casos de Exito
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="pc-hero">
          <div className="pc-hero-container">
            <span className="pc-hero-tag">Caso de Exito · Physical Care Fisioterapia</span>
            <h1>91% de usuarios nuevos: una presencia digital que llega a nuevas audiencias.</h1>
            <p className="pc-hero-subtitle">
              Como una estrategia de visibilidad digital, contenido y posicionamiento organico ayudo a Physical Care Fisioterapia a atraer nuevos visitantes y generar oportunidades para conectar con personas interesadas en sus servicios.
            </p>
          </div>
        </section>

        {/* Premium Metrics */}
        <section className="pc-metrics">
          <div className="pc-metrics-container">
            <div className="pc-metrics-grid">
              <div className="pc-metric-card">
                <div className="pc-metric-value">91%</div>
                <p className="pc-metric-title">Nuevas audiencias</p>
                <p className="pc-metric-label">Proporcion reportada de usuarios nuevos durante el periodo analizado</p>
              </div>

              <div className="pc-metric-card">
                <div className="pc-metric-value">36%</div>
                <p className="pc-metric-title">Trafico organico</p>
                <p className="pc-metric-label">De las sesiones provino de busquedas organicas, sin anuncios</p>
              </div>

              <div className="pc-metric-card">
                <div className="pc-metric-value">48,7%</div>
                <p className="pc-metric-title">Interaccion organica</p>
                <p className="pc-metric-label">Tasa de interaccion registrada por el trafico de buscadores</p>
              </div>

              <div className="pc-metric-card">
                <div className="pc-metric-value">+86%</div>
                <p className="pc-metric-title">Contenido destacado</p>
                <p className="pc-metric-label">Mayor tiempo de interaccion del articulo destacado vs promedio general</p>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="pc-methodology">
              <p className="pc-methodology-title">Nota metodologica</p>
              <p className="pc-methodology-text">
                <strong>Periodo de analisis:</strong> 25 de octubre al 21 de noviembre de 2026 (28 dias). <strong>Fuente:</strong> Google Analytics 4. Estos indicadores describen adquisicion e interaccion; no ventas, citas ni clientes confirmados.
              </p>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="pc-section">
          <div className="pc-section-container">
            <span className="pc-section-label">El Desafio</span>
            <h2>Una clinica puede ofrecer excelentes servicios, pero si las personas no encuentran esa informacion cuando buscan soluciones, esta perdiendo oportunidades.</h2>
            <p>
              Physical Care Fisioterapia contaba con profesionales capacitados y tecnologia especializada en rehabilitacion. Sin embargo, necesitaba fortalecer su presencia digital para facilitar que mas personas descubrieran sus servicios, su experiencia y sus soluciones.
            </p>
            <p>
              El objetivo era construir las bases para que pacientes potenciales pudieran encontrar la clinica en el momento exacto en que buscaban ayuda con sus necesidades de fisioterapia y rehabilitacion.
            </p>
          </div>
        </section>

        {/* Strategy */}
        <section className="pc-section pc-section-alt">
          <div className="pc-section-container">
            <span className="pc-section-label">Nuestra Estrategia</span>
            <h2>Implementamos una estrategia enfocada en tres pilares</h2>
            <p>
              Combinamos optimizacion web, contenido informativo y experiencia de usuario para aumentar la visibilidad donde los pacientes buscan soluciones:
            </p>

            <div className="pc-pillars">
              <div className="pc-pillar">
                <span className="pc-pillar-num">1</span>
                <h3>Visibilidad digital</h3>
                <p>Optimizacion de la estructura web y contenido enfocado en busquedas relacionadas con fisioterapia y rehabilitacion.</p>
              </div>

              <div className="pc-pillar">
                <span className="pc-pillar-num">2</span>
                <h3>Autoridad y confianza</h3>
                <p>Desarrollo de contenido informativo que permite a los visitantes conocer la experiencia, servicios y especializacion de la clinica.</p>
              </div>

              <div className="pc-pillar">
                <span className="pc-pillar-num">3</span>
                <h3>Experiencia y conversion</h3>
                <p>Organizacion de servicios, informacion comercial y llamadas a la accion para facilitar el contacto desde el sitio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="pc-section">
          <div className="pc-section-container">
            <span className="pc-section-label">Los Resultados</span>
            <h2>Una linea base solida para seguir optimizando la captacion digital</h2>
            <p>
              Durante los primeros 28 dias analizados, el sitio registro una proporcion del <strong>91% de usuarios nuevos</strong>, mostrando su capacidad para alcanzar audiencias adicionales que antes no conocian la clinica.
            </p>
            <p>
              El <strong>36% de las sesiones</strong> provino de busquedas organicas, mientras que este canal registro una <strong>tasa de interaccion del 48,7%</strong>. Esto indica que las personas que llegan desde buscadores muestran interes real en el contenido.
            </p>

            <div className="pc-results-highlight">
              <p>
                El contenido tambien demostro su importancia: el articulo destacado sobre capacitacion a instituciones deportivas consiguio un tiempo promedio de interaccion aproximadamente <strong>86% superior al promedio general del sitio</strong>.
              </p>
            </div>

            <p style={{ marginTop: '24px' }}>
              Ademas, Costa Rica concentro la mayor participacion de la audiencia relevante, con un <strong>58% de usuarios</strong> y el <strong>75,7% de las sesiones con interaccion</strong> reportadas. Esto confirma que el trafico local esta siendo alcanzado efectivamente.
            </p>
          </div>
        </section>

        {/* Opportunity */}
        <section className="pc-opportunity">
          <div className="pc-opportunity-container">
            <span className="pc-section-label">Que significa para un negocio</span>
            <h2>No basta con tener una pagina web</h2>
            <p>
              Una estrategia digital debe ayudarte a ser descubierto por las personas correctas, comunicar por que deberian confiar en vos y facilitar que den el siguiente paso.
            </p>
            <p>
              Physical Care muestra como la visibilidad organica y el contenido pueden contribuir a construir ese recorrido.
            </p>
            <p className="pc-opportunity-highlight">
              El siguiente objetivo sera medir cuantas de esas visitas se convierten en contactos comerciales reales.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="pc-closing">
          <div className="pc-closing-container">
            <h2>Tu negocio puede estar perdiendo oportunidades simplemente porque las personas correctas todavia no te encuentran.</h2>
            <p>
              No necesitas solamente mas publicaciones o una pagina web bonita. Necesitas una estrategia que conecte visibilidad, confianza y conversion.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGE_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-cta-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quiero atraer mas clientes a mi negocio
            </a>
            <p className="pc-cta-subtext">Hablemos de como mejorar tu presencia digital y convertir mas visitas en oportunidades comerciales.</p>
          </div>
        </section>

        {/* Author */}
        <section className="pc-author">
          <div className="pc-author-container">
            <div className="pc-author-avatar">
              <Image
                src="/assets/headshots/no-bg/Bearded Man in White Shirt Cutout.png"
                alt="Anwar Sanchez"
                fill
                sizes="64px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="pc-author-info">
              <h3>Anwar Sanchez</h3>
              <p>Partner Digital · Estrategia, Marketing y Tecnologia</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pc-footer">
          <p className="pc-footer-text">
            &copy; 2026 <Link href="/" className="pc-footer-link">Anwar Sanchez</Link>. Partner Digital.
          </p>
        </footer>
      </div>
    </>
  );
}
