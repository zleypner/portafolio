'use client';

import Image from 'next/image';
import Link from 'next/link';

const logos = [
  { src: '/assets/yieldge/logos/3m.png', alt: '3M' },
  { src: '/assets/yieldge/logos/drzuniga-logo.png', alt: 'Gastromedical' },
  { src: '/assets/yieldge/logos/phyclogo-removedbg.png', alt: 'PHYC' },
  { src: '/assets/yieldge/logos/construrack.png', alt: 'Construrack' },
  { src: '/assets/yieldge/logos/bnggroup.PNG', alt: 'BNG Group' },
];

export default function Home() {
  return (
    <>
      <style jsx global>{`
        .home-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          mix-blend-mode: difference;
        }

        .home-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .home-navbar-logo {
          font-family: var(--font-serif);
          font-size: 14px;
          letter-spacing: 0.3em;
          color: var(--white);
          text-transform: uppercase;
          text-decoration: none;
        }

        .home-navbar-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .home-navbar-link {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--white);
          opacity: 0.6;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .home-navbar-link:hover {
          opacity: 1;
        }

        /* Hero */
        .home-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 40px 100px;
          background: var(--black);
        }

        .home-hero-content {
          max-width: 900px;
        }

        .home-hero-pretitle {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 30px;
        }

        .home-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(48px, 9vw, 110px);
          font-weight: 400;
          line-height: 0.95;
          color: var(--white);
          margin-bottom: 40px;
        }

        .home-hero h1 em {
          font-style: italic;
        }

        .home-hero-subtitle {
          font-size: 18px;
          line-height: 1.8;
          color: var(--gray);
          max-width: 550px;
          margin-bottom: 50px;
        }

        .home-hero-subtitle strong {
          color: var(--white);
        }

        .home-hero-cta {
          display: flex;
          gap: 20px;
        }

        .home-btn {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 18px 35px;
          border: 1px solid var(--white);
          background: transparent;
          color: var(--white);
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }

        .home-btn:hover {
          background: var(--white);
          color: var(--black);
        }

        .home-btn-solid {
          background: var(--white);
          color: var(--black);
        }

        .home-btn-solid:hover {
          background: transparent;
          color: var(--white);
        }

        /* Logos */
        .home-logos {
          padding: 80px 40px;
          border-top: 1px solid #111;
          background: var(--black);
        }

        .home-logos-title {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #444;
          text-align: center;
          margin-bottom: 40px;
        }

        .home-logos-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
        }

        .home-logo-item {
          height: 40px;
          opacity: 0.4;
          filter: grayscale(1) brightness(2);
          transition: all 0.3s;
        }

        .home-logo-item:hover {
          opacity: 0.8;
        }

        /* Statement */
        .home-statement {
          background: var(--white);
          color: var(--black);
          padding: 150px 40px;
        }

        .home-statement-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .home-statement-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 30px;
        }

        .home-statement h2 {
          font-family: var(--font-serif);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 40px;
        }

        .home-statement-text {
          font-size: 17px;
          line-height: 1.9;
          color: #555;
          margin-bottom: 25px;
          max-width: 600px;
        }

        .home-statement-text strong {
          color: var(--black);
        }

        /* Services */
        .home-services {
          background: var(--black);
          padding: 120px 40px;
        }

        .home-services-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .home-services-header {
          margin-bottom: 80px;
        }

        .home-services-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 20px;
        }

        .home-services h2 {
          font-family: var(--font-serif);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          color: var(--white);
        }

        .home-services-grid {
          display: flex;
          flex-direction: column;
        }

        .home-service-item {
          display: grid;
          grid-template-columns: 80px 1fr 1.2fr;
          gap: 40px;
          padding: 50px 0;
          border-bottom: 1px solid #222;
          align-items: start;
        }

        .home-service-item:first-child {
          border-top: 1px solid #222;
        }

        .home-service-num {
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--gray);
        }

        .home-service-item h3 {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 400;
          color: var(--white);
        }

        .home-service-item p {
          font-size: 15px;
          line-height: 1.8;
          color: var(--gray);
        }

        .home-service-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
          text-decoration: none;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .home-service-link:hover {
          opacity: 1;
        }

        /* Image Section */
        .home-image-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 80vh;
        }

        .home-image-left {
          position: relative;
        }

        .home-image-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
        }

        .home-image-right {
          background: var(--white);
          color: var(--black);
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .home-image-right-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 25px;
        }

        .home-image-right h2 {
          font-family: var(--font-serif);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 30px;
        }

        .home-image-right p {
          font-size: 16px;
          line-height: 1.9;
          color: #555;
          margin-bottom: 20px;
        }

        .home-image-right p strong {
          color: var(--black);
        }

        .home-image-stats {
          display: flex;
          gap: 50px;
          margin: 40px 0;
        }

        .home-stat {
          text-align: left;
        }

        .home-stat-value {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          color: var(--black);
          margin-bottom: 5px;
        }

        .home-stat-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gray);
        }

        .home-image-right .home-btn {
          border-color: var(--black);
          color: var(--black);
          width: fit-content;
        }

        .home-image-right .home-btn:hover {
          background: var(--black);
          color: var(--white);
        }

        /* About */
        .home-about {
          background: var(--black);
          padding: 150px 40px;
        }

        .home-about-container {
          display: grid;
          grid-template-columns: 1fr 450px;
          gap: 100px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: end;
        }

        .home-about-content-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 30px;
        }

        .home-about h2 {
          font-family: var(--font-serif);
          font-size: clamp(40px, 6vw, 70px);
          font-weight: 400;
          line-height: 1;
          color: var(--white);
          margin-bottom: 50px;
        }

        .home-about p {
          font-size: 16px;
          line-height: 1.9;
          color: var(--gray);
          margin-bottom: 20px;
          max-width: 500px;
        }

        .home-about p strong {
          color: var(--white);
        }

        .home-about .home-btn {
          margin-top: 30px;
        }

        .home-about-image img {
          width: 100%;
          filter: grayscale(1);
        }

        /* CTA Section */
        .home-cta {
          background: var(--white);
          color: var(--black);
          padding: 150px 40px;
          text-align: center;
        }

        .home-cta-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .home-cta h2 {
          font-family: var(--font-serif);
          font-size: clamp(48px, 8vw, 100px);
          font-weight: 400;
          line-height: 0.95;
          margin-bottom: 40px;
        }

        .home-cta p {
          font-size: 17px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 50px;
        }

        .home-cta .home-btn {
          border-color: var(--black);
          color: var(--black);
        }

        .home-cta .home-btn:hover {
          background: var(--black);
          color: var(--white);
        }

        /* Footer */
        .home-footer {
          background: var(--black);
          padding: 60px 40px;
          border-top: 1px solid #111;
        }

        .home-footer-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          max-width: 1200px;
          margin: 0 auto;
        }

        .home-footer-logo {
          font-family: var(--font-serif);
          font-size: 14px;
          letter-spacing: 0.2em;
          color: var(--white);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .home-footer-tagline {
          font-size: 12px;
          color: var(--gray);
        }

        .home-footer-copyright {
          font-size: 11px;
          color: #333;
          margin-top: 15px;
        }

        .home-footer-links {
          display: flex;
          gap: 30px;
        }

        .home-footer-link {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray);
          text-decoration: none;
          transition: color 0.2s;
        }

        .home-footer-link:hover {
          color: var(--white);
        }

        @media (max-width: 900px) {
          .home-navbar-container {
            padding: 20px;
          }
          .home-navbar-links {
            display: none;
          }
          .home-hero {
            padding: 0 20px 80px;
            justify-content: center;
            padding-top: 120px;
          }
          .home-hero-cta {
            flex-direction: column;
          }
          .home-btn {
            text-align: center;
          }
          .home-logos {
            padding: 60px 20px;
          }
          .home-logos-grid {
            gap: 30px;
          }
          .home-statement {
            padding: 100px 20px;
          }
          .home-services {
            padding: 80px 20px;
          }
          .home-service-item {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 40px 0;
          }
          .home-service-num {
            font-size: 18px;
          }
          .home-service-item h3 {
            font-size: 22px;
          }
          .home-image-section {
            grid-template-columns: 1fr;
          }
          .home-image-left {
            height: 50vh;
          }
          .home-image-right {
            padding: 60px 20px;
          }
          .home-image-stats {
            gap: 30px;
          }
          .home-about {
            padding: 80px 20px;
          }
          .home-about-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .home-about-image {
            order: -1;
            max-width: 350px;
          }
          .home-cta {
            padding: 100px 20px;
          }
          .home-footer {
            padding: 50px 20px;
          }
          .home-footer-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }
        }
      `}</style>

      <nav className="home-navbar">
        <div className="home-navbar-container">
          <Link href="/" className="home-navbar-logo">Anwar</Link>
          <ul className="home-navbar-links">
            <li><a href="#servicios" className="home-navbar-link">Servicios</a></li>
            <li><a href="#sobre-mi" className="home-navbar-link">Sobre mí</a></li>
            <li><Link href="/crecimiento-digital" className="home-navbar-link">Crecimiento Digital</Link></li>
            <li><a href="https://wa.me/50683335408" target="_blank" rel="noopener noreferrer" className="home-navbar-link">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="home-hero">
          <div className="home-hero-content">
            <p className="home-hero-pretitle">Software · IA · Marca Personal</p>
            <h1>
              Construyo sistemas.<br />
              Construyo <em>confianza</em>.
            </h1>
            <p className="home-hero-subtitle">
              La mayoría persigue métricas de vanidad. Yo construyo cosas que realmente funcionan:
              <strong> software que escala, IA que automatiza, y marcas que convierten.</strong>
            </p>
            <div className="home-hero-cta">
              <a href="https://wa.me/50683335408" target="_blank" rel="noopener noreferrer" className="home-btn home-btn-solid">
                Hablemos →
              </a>
              <a href="#servicios" className="home-btn">
                Ver qué hago →
              </a>
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="home-logos">
          <p className="home-logos-title">Empresas que confían en mi trabajo</p>
          <div className="home-logos-grid">
            {logos.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="home-logo-item"
                style={{ width: 'auto', height: '40px' }}
              />
            ))}
          </div>
        </section>

        {/* Statement */}
        <section className="home-statement">
          <div className="home-statement-container">
            <p className="home-statement-label">Mi filosofía</p>
            <h2>La confianza se acumula. Las visitas no.</h2>
            <p className="home-statement-text">
              Todo el mundo habla de "volverse viral". Eso está fundamentalmente mal.
              <strong> Si optimizas solo para visitas, el día que cambie el algoritmo, nadie te buscará.</strong>
            </p>
            <p className="home-statement-text">
              Pero si construyes algo con credibilidad real — software que funciona,
              una marca que genera confianza — tu audiencia te encontrará.
            </p>
            <p className="home-statement-text">
              <strong>Esa es la diferencia entre atención prestada y confianza ganada.</strong>
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="home-services">
          <div className="home-services-container">
            <div className="home-services-header">
              <p className="home-services-label">Servicios</p>
              <h2>Lo que construyo</h2>
            </div>

            <div className="home-services-grid">
              <div className="home-service-item">
                <div className="home-service-num">01</div>
                <h3>Software a medida</h3>
                <div>
                  <p>Desarrollo sistemas que automatizan lo repetitivo y escalan con tu negocio. Sin código innecesario, sin complejidad artificial.</p>
                  <a href="https://wa.me/50683335408?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20desarrollo%20de%20software." target="_blank" rel="noopener noreferrer" className="home-service-link">Saber más →</a>
                </div>
              </div>
              <div className="home-service-item">
                <div className="home-service-num">02</div>
                <h3>Inteligencia Artificial</h3>
                <div>
                  <p>Implemento IA que realmente funciona: procesa datos, genera contenido, toma decisiones. No buzzwords, resultados.</p>
                  <a href="https://wa.me/50683335408?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20soluciones%20de%20IA." target="_blank" rel="noopener noreferrer" className="home-service-link">Saber más →</a>
                </div>
              </div>
              <div className="home-service-item">
                <div className="home-service-num">03</div>
                <h3>Crecimiento Digital</h3>
                <div>
                  <p>Construyo presencia digital que genera confianza y convierte. Sitios web, SEO, estrategia — todo enfocado en resultados reales.</p>
                  <Link href="/crecimiento-digital" className="home-service-link">Ver más →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image + Text */}
        <section className="home-image-section">
          <div className="home-image-left">
            <Image
              src="/assets/yieldge/anwar/MFS_5814.jpg"
              alt="Anwar trabajando"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="home-image-right">
            <p className="home-image-right-label">Resultados reales</p>
            <h2>Trabajo que habla por sí mismo.</h2>
            <p>
              No tengo cientos de clientes. Tengo pocos, pero con resultados medibles.
              <strong> Prefiero rechazar proyectos que hacer trabajo mediocre.</strong>
            </p>
            <p>
              Ejemplo: Gastromedical CR pasó de depender de referidos a recibir la mitad de sus pacientes desde Google. En 4 meses. Sin publicidad pagada.
            </p>
            <div className="home-image-stats">
              <div className="home-stat">
                <div className="home-stat-value">+180%</div>
                <div className="home-stat-label">Consultas web</div>
              </div>
              <div className="home-stat">
                <div className="home-stat-value">15+</div>
                <div className="home-stat-label">Años experiencia</div>
              </div>
            </div>
            <Link href="/presencia-digital" className="home-btn">
              Ver caso completo →
            </Link>
          </div>
        </section>

        {/* About */}
        <section id="sobre-mi" className="home-about">
          <div className="home-about-container">
            <div className="home-about-content">
              <p className="home-about-content-label">Sobre mí</p>
              <h2>Anwar Sánchez</h2>
              <p>
                Ingeniero de software con más de 15 años de experiencia. He trabajado con startups,
                corporativos y emprendedores en todo tipo de proyectos.
              </p>
              <p>
                <strong>No soy una agencia.</strong> Trabajo directamente contigo, sin intermediarios.
                Eso significa mejor comunicación, más flexibilidad, y generalmente mejor resultado.
              </p>
              <p>
                Si estás buscando a alguien que te diga lo que quieres escuchar, no soy esa persona.
                Si quieres honestidad y trabajo bien hecho, hablemos.
              </p>
              <a href="https://wa.me/50683335408" target="_blank" rel="noopener noreferrer" className="home-btn">
                Contactar →
              </a>
            </div>
            <div className="home-about-image">
              <Image
                src="/assets/yieldge/anwar/anwar-founder.jpg"
                alt="Anwar Sánchez"
                width={450}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="home-cta">
          <div className="home-cta-container">
            <h2>¿Hablamos?</h2>
            <p>
              Sin pitch de ventas. Solo una conversación para ver si puedo ayudarte.
              Si no soy la persona correcta para tu proyecto, te lo digo.
            </p>
            <a href="https://wa.me/50683335408" target="_blank" rel="noopener noreferrer" className="home-btn">
              Escribirme por WhatsApp →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-container">
          <div>
            <div className="home-footer-logo">Anwar Sánchez</div>
            <div className="home-footer-tagline">Software · IA · Crecimiento Digital</div>
            <div className="home-footer-copyright">© 2025</div>
          </div>
          <div className="home-footer-links">
            <Link href="/crecimiento-digital" className="home-footer-link">Crecimiento Digital</Link>
            <Link href="/presencia-digital" className="home-footer-link">Sitios para Clínicas</Link>
            <a href="https://wa.me/50683335408" target="_blank" rel="noopener noreferrer" className="home-footer-link">WhatsApp</a>
          </div>
        </div>
      </footer>
    </>
  );
}
