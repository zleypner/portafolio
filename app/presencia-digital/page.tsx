'use client';

import Link from 'next/link';

export default function PresenciaDigitalPage() {
  return (
    <>
      <style jsx global>{`
        .pd-page {
          background: var(--black);
          color: var(--white);
          min-height: 100vh;
        }

        .pd-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #111;
        }

        .pd-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pd-navbar-logo {
          font-family: var(--font-serif);
          font-size: 14px;
          letter-spacing: 0.2em;
          color: var(--white);
          text-transform: uppercase;
          text-decoration: none;
        }

        .pd-navbar-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .pd-navbar-link {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray);
          text-decoration: none;
          transition: color 0.2s;
        }

        .pd-navbar-link:hover {
          color: var(--white);
        }

        .pd-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 40px 80px;
        }

        .pd-hero-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .pd-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 40px;
        }

        .pd-hero h1 em {
          font-style: italic;
        }

        .pd-hero-text {
          font-size: 17px;
          line-height: 1.9;
          color: var(--gray);
          margin-bottom: 20px;
          max-width: 600px;
        }

        .pd-hero-text strong {
          color: var(--white);
        }

        .pd-cta-group {
          display: flex;
          gap: 15px;
          margin-top: 40px;
        }

        .pd-btn {
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

        .pd-btn:hover {
          background: var(--white);
          color: var(--black);
        }

        .pd-btn-solid {
          background: var(--white);
          color: var(--black);
        }

        .pd-btn-solid:hover {
          background: transparent;
          color: var(--white);
        }

        .pd-divider {
          height: 1px;
          background: #222;
          max-width: 800px;
          margin: 0 auto;
        }

        .pd-section {
          padding: 100px 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .pd-section-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 25px;
        }

        .pd-section-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 30px;
        }

        .pd-section-text {
          font-size: 16px;
          line-height: 1.9;
          color: var(--gray);
          margin-bottom: 20px;
        }

        .pd-section-text strong {
          color: var(--white);
        }

        .pd-case {
          background: #050505;
          padding: 100px 40px;
        }

        .pd-case-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .pd-timeline {
          margin-top: 50px;
          border-left: 1px solid #333;
          padding-left: 40px;
        }

        .pd-timeline-item {
          position: relative;
          padding-bottom: 40px;
        }

        .pd-timeline-item:last-child {
          padding-bottom: 0;
        }

        .pd-timeline-item::before {
          content: '';
          position: absolute;
          left: -45px;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--white);
        }

        .pd-timeline-item h3 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
          color: var(--white);
        }

        .pd-timeline-item p {
          font-size: 15px;
          color: var(--gray);
          line-height: 1.8;
        }

        .pd-result-metric {
          display: inline-block;
          font-size: 13px;
          letter-spacing: 0.1em;
          padding: 10px 18px;
          border: 1px solid #333;
          color: var(--white);
          margin-top: 15px;
        }

        .pd-quote {
          border-left: 1px solid #444;
          padding-left: 25px;
          margin: 50px 0;
          font-style: italic;
          color: #999;
          font-size: 17px;
          line-height: 1.8;
        }

        .pd-quote-author {
          font-style: normal;
          color: var(--gray);
          font-size: 13px;
          margin-top: 15px;
        }

        .pd-offer-list {
          margin-top: 40px;
        }

        .pd-offer-item {
          display: grid;
          grid-template-columns: 30px 1fr;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #1a1a1a;
          align-items: start;
        }

        .pd-offer-item:last-child {
          border-bottom: none;
        }

        .pd-offer-check {
          font-size: 14px;
          color: var(--white);
        }

        .pd-offer-item h3 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 5px;
          color: var(--white);
        }

        .pd-offer-item p {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.7;
        }

        .pd-process {
          background: #050505;
          padding: 100px 40px;
        }

        .pd-process-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .pd-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .pd-process-card {
          text-align: center;
          padding: 40px 25px;
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
        }

        .pd-process-number {
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--gray);
          margin-bottom: 20px;
        }

        .pd-process-card h3 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 12px;
          color: var(--white);
        }

        .pd-process-card p {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.7;
        }

        .pd-faq {
          padding: 100px 40px;
        }

        .pd-faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .pd-faq-item {
          border-bottom: 1px solid #222;
        }

        .pd-faq-question {
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

        .pd-faq-question:hover {
          color: #ccc;
        }

        .pd-faq-icon {
          font-size: 20px;
          color: var(--gray);
        }

        .pd-faq-answer {
          padding-bottom: 25px;
          color: var(--gray);
          font-size: 15px;
          line-height: 1.8;
          display: none;
        }

        .pd-faq-item.active .pd-faq-answer {
          display: block;
        }

        .pd-faq-item.active .pd-faq-icon {
          transform: rotate(45deg);
        }

        .pd-final-cta {
          background: #050505;
          padding: 100px 40px;
        }

        .pd-final-cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .pd-final-cta h2 {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 25px;
        }

        .pd-final-cta p {
          font-size: 16px;
          color: var(--gray);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .pd-footer {
          text-align: center;
          padding: 40px;
          border-top: 1px solid #111;
          font-size: 12px;
          color: #444;
        }

        @media (max-width: 768px) {
          .pd-navbar-container {
            padding: 20px;
          }
          .pd-navbar-links {
            display: none;
          }
          .pd-hero {
            padding: 120px 20px 60px;
          }
          .pd-section {
            padding: 80px 20px;
          }
          .pd-case {
            padding: 80px 20px;
          }
          .pd-timeline {
            padding-left: 25px;
          }
          .pd-timeline-item::before {
            left: -29px;
          }
          .pd-process {
            padding: 80px 20px;
          }
          .pd-process-grid {
            grid-template-columns: 1fr;
          }
          .pd-faq {
            padding: 80px 20px;
          }
          .pd-final-cta {
            padding: 80px 20px;
          }
          .pd-cta-group {
            flex-direction: column;
          }
          .pd-btn {
            text-align: center;
          }
        }
      `}</style>

      <div className="pd-page">
        <nav className="pd-navbar">
          <div className="pd-navbar-container">
            <Link href="/" className="pd-navbar-logo">Anwar</Link>
            <ul className="pd-navbar-links">
              <li><a href="#caso" className="pd-navbar-link">Caso real</a></li>
              <li><a href="#incluye" className="pd-navbar-link">Qué incluye</a></li>
              <li><a href="#preguntas" className="pd-navbar-link">Preguntas</a></li>
              <li><a href="https://wa.me/50683335408?text=Hola%2C%20vi%20tu%20página%20de%20sitios%20web%20para%20clínicas." target="_blank" rel="noopener noreferrer" className="pd-navbar-link">Contactar</a></li>
            </ul>
          </div>
        </nav>

        <section className="pd-hero">
          <div className="pd-hero-container">
            <h1>Tu clínica merece un sitio web que <em>trabaje</em> para ti.</h1>
            <p className="pd-hero-text">
              No un sitio "bonito" que nadie encuentra. <strong>Un sitio que aparece en Google y convierte visitas en pacientes reales.</strong>
            </p>
            <p className="pd-hero-text">
              He visto demasiados doctores excelentes con sitios web que no reflejan su nivel. El resultado: pacientes que buscan en Google eligen a la competencia.
            </p>
            <p className="pd-hero-text">
              <strong>Eso se puede cambiar.</strong>
            </p>
            <div className="pd-cta-group">
              <a href="https://wa.me/50683335408?text=Hola%2C%20vi%20tu%20página%20de%20sitios%20web%20para%20clínicas." target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn-solid">Hablemos</a>
              <a href="#caso" className="pd-btn">Ver caso real</a>
            </div>
          </div>
        </section>

        <div className="pd-divider"></div>

        <section className="pd-section">
          <p className="pd-section-label">La realidad</p>
          <h2 className="pd-section-title">Si tu sitio web no genera pacientes, está costándote dinero.</h2>
          <p className="pd-section-text">
            Cada día, personas buscan en Google médicos y clínicas. Si no apareces — o si apareces con un sitio que no genera confianza — eligen a alguien más.
          </p>
          <p className="pd-section-text">
            No es que no te busquen. Es que <strong>no te encuentran.</strong> O te encuentran y no confían lo suficiente para contactarte.
          </p>
          <p className="pd-section-text">
            Un buen sitio web no es un gasto. Es una inversión que se paga sola con los pacientes que genera.
          </p>
        </section>

        <section className="pd-case" id="caso">
          <div className="pd-case-container">
            <p className="pd-section-label">Caso real</p>
            <h2 className="pd-section-title">Gastromedical CR: de depender de referidos a tener la mitad de pacientes desde Google.</h2>
            <p className="pd-section-text">
              No voy a prometerte números mágicos. Voy a mostrarte exactamente lo que pasó con un cliente real.
            </p>

            <div className="pd-timeline">
              <div className="pd-timeline-item">
                <h3>El problema</h3>
                <p>Clínica de gastroenterología con un sitio web básico, sin SEO, que no generaba consultas. Casi todos los pacientes llegaban por referidos.</p>
              </div>
              <div className="pd-timeline-item">
                <h3>Lo que hicimos</h3>
                <p>Rediseño completo enfocado en confianza. Páginas por cada tratamiento. SEO local real (no trucos). Botón de WhatsApp para contacto directo.</p>
              </div>
              <div className="pd-timeline-item">
                <h3>El resultado</h3>
                <p>En 4 meses, la mitad de los pacientes nuevos llegaban directamente desde Google. Sin publicidad pagada.</p>
                <span className="pd-result-metric">+180% consultas web</span>
              </div>
            </div>

            <blockquote className="pd-quote">
              <p>"Antes casi todo llegaba por referidos. Hoy hay semanas en que la mitad de las consultas vienen del sitio — y por fin se ve como la clínica que somos."</p>
              <p className="pd-quote-author">— Dr. Daniel Zúñiga, Director Médico, Gastromedical CR</p>
            </blockquote>

            <p className="pd-section-text">
              <strong>¿El secreto?</strong> No hay truco. Solo trabajo enfocado en lo que realmente mueve la aguja: aparecer cuando te buscan, y generar confianza cuando llegan.
            </p>
          </div>
        </section>

        <section className="pd-section" id="incluye">
          <p className="pd-section-label">Qué incluye</p>
          <h2 className="pd-section-title">Todo lo que necesitas. Nada que no necesites.</h2>
          <p className="pd-section-text">
            Sin paquetes confusos ni extras innecesarios. Esto es lo que construyo para cada clínica:
          </p>

          <div className="pd-offer-list">
            <div className="pd-offer-item">
              <span className="pd-offer-check">→</span>
              <div>
                <h3>Diseño personalizado</h3>
                <p>No plantillas. Cada sitio se diseña desde cero para reflejar el nivel de tu clínica.</p>
              </div>
            </div>
            <div className="pd-offer-item">
              <span className="pd-offer-check">→</span>
              <div>
                <h3>Página por tratamiento/especialidad</h3>
                <p>Cada servicio tiene su propia página optimizada para Google. Así te encuentran por lo que haces.</p>
              </div>
            </div>
            <div className="pd-offer-item">
              <span className="pd-offer-check">→</span>
              <div>
                <h3>SEO local incluido</h3>
                <p>Configuración técnica para que aparezcas cuando busquen tu especialidad en tu zona.</p>
              </div>
            </div>
            <div className="pd-offer-item">
              <span className="pd-offer-check">→</span>
              <div>
                <h3>WhatsApp integrado</h3>
                <p>Los pacientes contactan con un clic. Sin formularios complicados que nadie llena.</p>
              </div>
            </div>
            <div className="pd-offer-item">
              <span className="pd-offer-check">→</span>
              <div>
                <h3>Optimizado para móvil</h3>
                <p>Más del 70% de las visitas son desde celular. Tu sitio funciona perfecto en todos los dispositivos.</p>
              </div>
            </div>
            <div className="pd-offer-item">
              <span className="pd-offer-check">→</span>
              <div>
                <h3>100% tuyo</h3>
                <p>El código, el diseño, el dominio — todo es de tu propiedad. Sin ataduras ni pagos eternos.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-process">
          <div className="pd-process-container">
            <p className="pd-section-label">Proceso</p>
            <h2 className="pd-section-title">Así de simple</h2>
            <p className="pd-section-text">
              Sin procesos complicados. Tres pasos, comunicación directa conmigo.
            </p>

            <div className="pd-process-grid">
              <div className="pd-process-card">
                <div className="pd-process-number">01</div>
                <h3>Conversamos</h3>
                <p>Hablamos de tu clínica, tus pacientes, y qué necesitas. Sin pitch de ventas.</p>
              </div>
              <div className="pd-process-card">
                <div className="pd-process-number">02</div>
                <h3>Construyo</h3>
                <p>Diseño y desarrollo. Tú revisas. Iteramos hasta que quede bien.</p>
              </div>
              <div className="pd-process-card">
                <div className="pd-process-number">03</div>
                <h3>Lanzamos</h3>
                <p>Tu sitio sale al aire. Empiezas a recibir consultas reales.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="pd-divider"></div>

        <section className="pd-faq" id="preguntas">
          <div className="pd-faq-container">
            <p className="pd-section-label">Preguntas</p>
            <h2 className="pd-section-title">Lo que probablemente quieres saber</h2>

            <div className="pd-faq-item">
              <button className="pd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Cuánto cuesta?
                <span className="pd-faq-icon">+</span>
              </button>
              <div className="pd-faq-answer">
                Depende de cuántas páginas y qué funcionalidades necesites. No tengo paquetes genéricos porque cada clínica es diferente. Después de hablar, te doy un precio exacto.
              </div>
            </div>

            <div className="pd-faq-item">
              <button className="pd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Cuánto tiempo toma?
                <span className="pd-faq-icon">+</span>
              </button>
              <div className="pd-faq-answer">
                Una landing page: ~1 semana. Sitio completo de 5 páginas: 2-3 semanas. Siempre te doy una fecha clara antes de empezar.
              </div>
            </div>

            <div className="pd-faq-item">
              <button className="pd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Garantizas que apareceré primero en Google?
                <span className="pd-faq-icon">+</span>
              </button>
              <div className="pd-faq-answer">
                No. Nadie puede garantizar eso honestamente. Lo que sí garantizo: tu sitio estará técnicamente optimizado para SEO, con contenido relevante para cada tratamiento.
              </div>
            </div>

            <div className="pd-faq-item">
              <button className="pd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Qué pasa si no me gusta el diseño?
                <span className="pd-faq-icon">+</span>
              </button>
              <div className="pd-faq-answer">
                Lo rehacemos. No publico nada hasta que estés satisfecho. Así de simple.
              </div>
            </div>

            <div className="pd-faq-item">
              <button className="pd-faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                ¿Por qué trabajar contigo y no con una agencia?
                <span className="pd-faq-icon">+</span>
              </button>
              <div className="pd-faq-answer">
                Conmigo trabajas directo. Sin vendedores, sin account managers, sin intermediarios. Eso significa mejor comunicación y generalmente mejor precio.
              </div>
            </div>
          </div>
        </section>

        <section className="pd-final-cta">
          <div className="pd-final-cta-container">
            <h2>Si llegaste hasta aquí, tiene sentido que hablemos.</h2>
            <p>
              No voy a presionarte. Solo conversamos para ver si puedo ayudarte. Si no soy la persona correcta para tu proyecto, te lo digo.
            </p>
            <p>
              <strong>Eso tiene solución.</strong>
            </p>
            <div className="pd-cta-group">
              <a href="https://wa.me/50683335408?text=Hola%2C%20vi%20tu%20página%20de%20sitios%20web%20para%20clínicas." target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn-solid">Hablemos por WhatsApp</a>
            </div>
          </div>
        </section>

        <footer className="pd-footer">
          © 2025 Anwar Sánchez
        </footer>
      </div>
    </>
  );
}
