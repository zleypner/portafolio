'use client';

import Link from 'next/link';

export default function CrecimientoDigitalPage() {
  return (
    <>
      <style jsx global>{`
        .cd-page {
          background: var(--black);
          color: var(--white);
          min-height: 100vh;
        }

        .cd-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #111;
        }

        .cd-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cd-navbar-logo {
          font-family: var(--font-serif);
          font-size: 14px;
          letter-spacing: 0.2em;
          color: var(--white);
          text-transform: uppercase;
          text-decoration: none;
        }

        .cd-navbar-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .cd-navbar-link {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray);
          text-decoration: none;
          transition: color 0.2s;
        }

        .cd-navbar-link:hover {
          color: var(--white);
        }

        .cd-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 40px 80px;
        }

        .cd-hero-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cd-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 40px;
        }

        .cd-hero h1 em {
          font-style: italic;
        }

        .cd-hero-text {
          font-size: 17px;
          line-height: 1.9;
          color: var(--gray);
          margin-bottom: 20px;
          max-width: 600px;
        }

        .cd-hero-text strong {
          color: var(--white);
        }

        .cd-cta-group {
          display: flex;
          gap: 15px;
          margin-top: 40px;
        }

        .cd-btn {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 18px 30px;
          border: 1px solid var(--white);
          background: transparent;
          color: var(--white);
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .cd-btn:hover {
          background: var(--white);
          color: var(--black);
        }

        .cd-btn-solid {
          background: var(--white);
          color: var(--black);
        }

        .cd-btn-solid:hover {
          background: transparent;
          color: var(--white);
        }

        .cd-divider {
          height: 1px;
          background: #222;
          max-width: 800px;
          margin: 0 auto;
        }

        .cd-section {
          padding: 100px 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .cd-section-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 25px;
        }

        .cd-section-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 30px;
        }

        .cd-section-text {
          font-size: 16px;
          line-height: 1.9;
          color: var(--gray);
          margin-bottom: 20px;
        }

        .cd-section-text strong {
          color: var(--white);
        }

        .cd-contrast {
          background: #050505;
          padding: 100px 40px;
        }

        .cd-contrast-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cd-contrast-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 50px;
        }

        .cd-contrast-column h3 {
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #333;
        }

        .cd-contrast-column.against h3 {
          color: #888;
        }

        .cd-contrast-column.for h3 {
          color: var(--white);
        }

        .cd-contrast-list {
          list-style: none;
        }

        .cd-contrast-list li {
          padding: 12px 0;
          color: var(--gray);
          font-size: 15px;
          border-bottom: 1px solid #1a1a1a;
        }

        .cd-contrast-list li:last-child {
          border-bottom: none;
        }

        .cd-process-list {
          margin-top: 50px;
        }

        .cd-process-item {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 25px;
          padding: 35px 0;
          border-bottom: 1px solid #222;
        }

        .cd-process-item:last-child {
          border-bottom: none;
        }

        .cd-process-number {
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--gray);
        }

        .cd-process-content h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--white);
        }

        .cd-process-content p {
          font-size: 15px;
          color: var(--gray);
          line-height: 1.7;
        }

        .cd-results {
          background: #050505;
          padding: 100px 40px;
        }

        .cd-results-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cd-result-card {
          background: #0a0a0a;
          border: 1px solid #222;
          padding: 40px;
          margin-top: 30px;
        }

        .cd-result-card h3 {
          font-family: var(--font-serif);
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 15px;
        }

        .cd-result-card p {
          font-size: 15px;
          color: var(--gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .cd-result-metric {
          display: inline-block;
          font-size: 13px;
          letter-spacing: 0.1em;
          padding: 10px 18px;
          border: 1px solid #333;
          color: var(--white);
          margin-top: 10px;
        }

        .cd-quote {
          border-left: 1px solid #444;
          padding-left: 25px;
          margin: 40px 0;
          font-style: italic;
          color: #999;
          font-size: 17px;
          line-height: 1.8;
        }

        .cd-quote-author {
          font-style: normal;
          color: var(--gray);
          font-size: 13px;
          margin-top: 15px;
        }

        .cd-faq {
          padding: 100px 40px;
        }

        .cd-faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cd-faq-item {
          border-bottom: 1px solid #222;
        }

        .cd-faq-question {
          width: 100%;
          padding: 25px 0;
          background: transparent;
          border: none;
          color: var(--white);
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: inherit;
        }

        .cd-faq-question:hover {
          color: #ccc;
        }

        .cd-faq-icon {
          font-size: 20px;
          color: var(--gray);
        }

        .cd-faq-answer {
          padding-bottom: 25px;
          color: var(--gray);
          font-size: 15px;
          line-height: 1.8;
          display: none;
        }

        .cd-faq-item.active .cd-faq-answer {
          display: block;
        }

        .cd-faq-item.active .cd-faq-icon {
          transform: rotate(45deg);
        }

        .cd-final-cta {
          background: #050505;
          padding: 100px 40px;
        }

        .cd-final-cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cd-final-cta h2 {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 25px;
        }

        .cd-final-cta p {
          font-size: 16px;
          color: var(--gray);
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .cd-footer {
          text-align: center;
          padding: 40px;
          border-top: 1px solid #111;
          font-size: 12px;
          color: #444;
        }

        @media (max-width: 768px) {
          .cd-navbar-container {
            padding: 20px;
          }
          .cd-navbar-links {
            display: none;
          }
          .cd-hero {
            padding: 120px 20px 60px;
          }
          .cd-section {
            padding: 80px 20px;
          }
          .cd-contrast {
            padding: 80px 20px;
          }
          .cd-contrast-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cd-process-item {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .cd-process-number {
            font-size: 18px;
          }
          .cd-results {
            padding: 80px 20px;
          }
          .cd-result-card {
            padding: 30px 20px;
          }
          .cd-faq {
            padding: 80px 20px;
          }
          .cd-final-cta {
            padding: 80px 20px;
          }
          .cd-cta-group {
            flex-direction: column;
          }
          .cd-btn {
            text-align: center;
          }
        }
      `}</style>

      <div className="cd-page">
        <nav className="cd-navbar">
          <div className="cd-navbar-container">
            <Link href="/" className="cd-navbar-logo">Anwar</Link>
            <ul className="cd-navbar-links">
              <li><a href="#proceso" className="cd-navbar-link">Proceso</a></li>
              <li><a href="#resultados" className="cd-navbar-link">Resultados</a></li>
              <li><a href="#preguntas" className="cd-navbar-link">Preguntas</a></li>
              <li><a href="https://wa.me/50683335408?text=Hola%2C%20vi%20tu%20página%20de%20crecimiento%20digital." target="_blank" rel="noopener noreferrer" className="cd-navbar-link">Contactar</a></li>
            </ul>
          </div>
        </nav>

        <section className="cd-hero">
          <div className="cd-hero-container">
            <h1>Construyo presencia digital que genera <em>confianza</em>, no solo visitas.</h1>
            <p className="cd-hero-text">
              La mayoría optimiza para likes y visitas. Eso está mal. <strong>Optimizo para confianza.</strong>
            </p>
            <p className="cd-hero-text">
              Si solo persigues métricas de vanidad, el día que cambie el algoritmo, nadie te buscará. Pero si construyes una marca con credibilidad real, tu audiencia te encontrará.
            </p>
            <p className="cd-hero-text">
              <strong>La confianza se acumula. Las visitas no.</strong>
            </p>
            <div className="cd-cta-group">
              <a href="https://wa.me/50683335408?text=Hola%2C%20vi%20tu%20página%20de%20crecimiento%20digital." target="_blank" rel="noopener noreferrer" className="cd-btn cd-btn-solid">Hablemos</a>
              <a href="#proceso" className="cd-btn">Ver cómo trabajo</a>
            </div>
          </div>
        </section>

        <div className="cd-divider"></div>

        <section className="cd-section">
          <p className="cd-section-label">El problema</p>
          <h2 className="cd-section-title">Tu sitio web probablemente no refleja quién eres realmente.</h2>
          <p className="cd-section-text">
            Muchas empresas excelentes tienen presencia digital mediocre. No porque no les importe, sino porque <strong>nadie les ha mostrado cómo hacerlo bien.</strong>
          </p>
          <p className="cd-section-text">
            El resultado: clientes potenciales que te buscan en Google, llegan a tu sitio, y se van porque no encontraron lo que necesitaban. O peor, ni siquiera te encuentran.
          </p>
          <p className="cd-section-text">
            <strong>Eso tiene solución.</strong> Pero no con plantillas genéricas ni promesas de "viralidad".
          </p>
        </section>

        <section className="cd-contrast">
          <div className="cd-contrast-container">
            <p className="cd-section-label">Mi enfoque</p>
            <h2 className="cd-section-title">Copiar mata la confianza. El contraste genera demanda.</h2>

            <div className="cd-contrast-grid">
              <div className="cd-contrast-column against">
                <h3>Lo que no hago</h3>
                <ul className="cd-contrast-list">
                  <li>Prometer resultados mágicos en 30 días</li>
                  <li>Usar plantillas genéricas para todos</li>
                  <li>Optimizar solo para likes y visitas</li>
                  <li>Decir que "cualquier negocio puede volverse viral"</li>
                  <li>Trabajar con quien sea por facturar</li>
                  <li>Esconderme detrás de un equipo de ventas</li>
                </ul>
              </div>
              <div className="cd-contrast-column for">
                <h3>Lo que sí hago</h3>
                <ul className="cd-contrast-list">
                  <li>Construir presencia que genera confianza real</li>
                  <li>Diseñar basado en quién eres, no en tendencias</li>
                  <li>Optimizar para conversiones y credibilidad</li>
                  <li>Ser honesto sobre qué funciona y qué no</li>
                  <li>Trabajar solo con proyectos donde puedo aportar</li>
                  <li>Atenderte directamente, sin intermediarios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="cd-section" id="proceso">
          <p className="cd-section-label">Proceso</p>
          <h2 className="cd-section-title">Cómo trabajo</h2>
          <p className="cd-section-text">
            Sin procesos complicados ni jerga innecesaria. Esto es lo que pasa cuando trabajamos juntos.
          </p>

          <div className="cd-process-list">
            <div className="cd-process-item">
              <div className="cd-process-number">01</div>
              <div className="cd-process-content">
                <h3>Conversación inicial</h3>
                <p>Hablamos sobre tu negocio, tus clientes, y qué está funcionando (o no). Sin pitch de ventas, solo diagnóstico real.</p>
              </div>
            </div>
            <div className="cd-process-item">
              <div className="cd-process-number">02</div>
              <div className="cd-process-content">
                <h3>Estrategia y propuesta</h3>
                <p>Si tiene sentido trabajar juntos, te presento exactamente qué haré, cuánto cuesta, y qué resultados esperar. Sin sorpresas.</p>
              </div>
            </div>
            <div className="cd-process-item">
              <div className="cd-process-number">03</div>
              <div className="cd-process-content">
                <h3>Ejecución</h3>
                <p>Construyo. Tú revisas. Iteramos hasta que quede bien. Sin deadlines imposibles ni trabajo apresurado.</p>
              </div>
            </div>
            <div className="cd-process-item">
              <div className="cd-process-number">04</div>
              <div className="cd-process-content">
                <h3>Entrega y medición</h3>
                <p>Lanzamos. Medimos lo que importa. Optimizamos basado en datos reales, no en corazonadas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cd-results" id="resultados">
          <div className="cd-results-container">
            <p className="cd-section-label">Resultados</p>
            <h2 className="cd-section-title">Trabajo que habla por sí mismo.</h2>
            <p className="cd-section-text">
              No tengo cientos de clientes. Tengo pocos, pero con resultados reales.
            </p>

            <div className="cd-result-card">
              <h3>Gastromedical CR</h3>
              <p>Clínica de gastroenterología que dependía casi exclusivamente de referidos. Rediseñamos su sitio web con SEO local real, no trucos.</p>
              <p>Resultado: en 4 meses, la mitad de sus nuevos pacientes llegaban desde Google. Sin publicidad pagada.</p>
              <span className="cd-result-metric">+180% consultas web</span>
            </div>

            <blockquote className="cd-quote">
              <p>"Antes casi todo llegaba por referidos. Hoy hay semanas en que la mitad de las consultas vienen del sitio."</p>
              <p className="cd-quote-author">— Dr. Daniel Zúñiga, Director Médico</p>
            </blockquote>

            <p className="cd-section-text" style={{ marginTop: '30px' }}>
              <strong>¿El secreto?</strong> No hay secreto. Solo trabajo bien hecho, enfocado en lo que realmente mueve la aguja.
            </p>
          </div>
        </section>

        <div className="cd-divider"></div>

        <section className="cd-faq" id="preguntas">
          <div className="cd-faq-container">
            <p className="cd-section-label">Preguntas</p>
            <h2 className="cd-section-title">Lo que probablemente estás pensando</h2>

            <div className="cd-faq-item">
              <button className="cd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Cuánto cuesta?
                <span className="cd-faq-icon">+</span>
              </button>
              <div className="cd-faq-answer">
                Depende del proyecto. No tengo paquetes genéricos porque cada negocio es diferente. Después de hablar, te doy un número exacto. Si no está en tu presupuesto, te lo digo de frente.
              </div>
            </div>

            <div className="cd-faq-item">
              <button className="cd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Cuánto tiempo toma?
                <span className="cd-faq-icon">+</span>
              </button>
              <div className="cd-faq-answer">
                Un sitio web típico: 2-4 semanas. Proyectos más complejos: depende. Lo que no hago es prometer fechas que no puedo cumplir.
              </div>
            </div>

            <div className="cd-faq-item">
              <button className="cd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Garantizas resultados?
                <span className="cd-faq-icon">+</span>
              </button>
              <div className="cd-faq-answer">
                No garantizo "X leads en Y días" porque eso sería mentirte. Lo que garantizo es trabajo de calidad, transparencia total, y optimización basada en datos reales.
              </div>
            </div>

            <div className="cd-faq-item">
              <button className="cd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Trabajas con cualquier tipo de negocio?
                <span className="cd-faq-icon">+</span>
              </button>
              <div className="cd-faq-answer">
                No. Trabajo con negocios donde sé que puedo aportar valor. Si después de hablar creo que no soy la persona correcta para tu proyecto, te lo digo. Prefiero rechazar trabajo que hacer algo mediocre.
              </div>
            </div>

            <div className="cd-faq-item">
              <button className="cd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Por qué debería trabajar contigo y no con una agencia?
                <span className="cd-faq-icon">+</span>
              </button>
              <div className="cd-faq-answer">
                Las agencias tienen estructura de costos que pagar. Conmigo trabajas directo, sin intermediarios. Eso significa mejor comunicación, más flexibilidad, y generalmente mejor precio por el mismo (o mejor) resultado.
              </div>
            </div>
          </div>
        </section>

        <section className="cd-final-cta">
          <div className="cd-final-cta-container">
            <h2>Si llegaste hasta aquí, probablemente tenga sentido hablar.</h2>
            <p>
              No hay pitch de ventas. Solo una conversación para ver si puedo ayudarte. Si no puedo, te lo digo.
            </p>
            <div className="cd-cta-group">
              <a href="https://wa.me/50683335408?text=Hola%2C%20vi%20tu%20página%20de%20crecimiento%20digital." target="_blank" rel="noopener noreferrer" className="cd-btn cd-btn-solid">Hablemos por WhatsApp</a>
            </div>
          </div>
        </section>

        <footer className="cd-footer">
          © 2025 Anwar Sánchez
        </footer>
      </div>
    </>
  );
}
