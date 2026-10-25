'use client';

import Image from 'next/image';
import Link from 'next/link';

const professionalServices = [
  'Marca personal y posicionamiento profesional.',
  'Sitio web personal y portafolio.',
  'Estrategia de comunicación y contenido.',
  'Posicionamiento en Google y buscadores con IA.',
  'Optimización de redes sociales.',
  'Estrategias para generar oportunidades comerciales.',
];

const businessServices = [
  'Sitios web corporativos y plataformas digitales.',
  'SEO y posicionamiento en buscadores con IA.',
  'Marketing digital y adquisición de clientes.',
  'Inteligencia artificial y automatizaciones.',
  'Desarrollo de software a la medida.',
  'Optimización de conversiones y procesos.',
];

const valueProps = [
  { bold: 'Visibilidad', text: 'para que te encuentren.' },
  { bold: 'Autoridad', text: 'para que confíen.' },
  { bold: 'Estrategia', text: 'para convertir oportunidades en clientes.' },
  { bold: 'Tecnología', text: 'para crecer de forma más eficiente.' },
];

const processSteps = [
  {
    number: '01',
    title: 'Conozcamos tu negocio',
    desc: 'Primero entiendo quién sos, qué hacés y cuáles son tus objetivos. Identificamos oportunidades para fortalecer tu presencia digital y hacer crecer tu negocio.',
  },
  {
    number: '02',
    title: 'Construyamos tu estrategia',
    desc: 'Diseñamos e implementamos las soluciones que realmente necesitás, combinando presencia digital, marketing, tecnología e inteligencia artificial.',
  },
  {
    number: '03',
    title: 'Hagamos crecer tu marca',
    desc: 'Medimos resultados, optimizamos y seguimos mejorando para que tu presencia digital genere confianza, atraiga oportunidades y acompañe tu crecimiento.',
  },
];

export default function Home() {
  const carouselImages = [
    { src: '/assets/yieldge/anwar/MFS_5808.jpg', alt: 'Anwar Sánchez' },
    { src: '/assets/yieldge/anwar/MFS_5809.jpg', alt: 'Anwar Sánchez' },
    { src: '/assets/yieldge/anwar/MFS_5810.jpg', alt: 'Anwar Sánchez' },
    { src: '/assets/yieldge/anwar/MFS_5814.jpg', alt: 'Anwar Sánchez' },
    { src: '/assets/yieldge/anwar/MFS_5817.jpg', alt: 'Anwar Sánchez' },
    { src: '/assets/yieldge/anwar/MFS_5818.jpg', alt: 'Anwar Sánchez' },
  ];

  return (
    <>
      <style jsx global>{`
        :root {
          --black: #0a0a0a;
          --white: #fafafa;
          --gray: #6b7280;
          --gray-dark: #374151;
          --gray-light: #f3f4f6;
          --gray-muted: #f9fafb;
          --brand: #25D366;
          --brand-soft: rgba(37, 211, 102, 0.05);
          --line: rgba(0, 0, 0, 0.06);
          --font-serif: 'Times New Roman', Georgia, serif;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--white);
          color: var(--black);
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(250, 250, 250, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 24px;
        }

        .navbar-logo {
          font-family: var(--font-serif);
          font-size: 14px;
          letter-spacing: 0.2em;
          color: var(--black);
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
        }

        .navbar-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-link {
          font-size: 13px;
          color: var(--gray);
          text-decoration: none;
          transition: color 0.2s;
        }

        .navbar-link:hover {
          color: var(--black);
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 80px;
          background: var(--white);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 20%;
          right: 0;
          width: 500px;
          height: 500px;
          background: var(--brand-soft);
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--black);
          margin: 0 0 24px;
        }

        .hero-subtitle {
          font-size: 18px;
          line-height: 1.7;
          color: var(--gray);
          max-width: 650px;
          margin: 0 auto 16px;
        }

        .hero-highlight {
          font-size: 15px;
          line-height: 1.7;
          color: var(--gray-dark);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--black);
          color: var(--white);
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: var(--gray-dark);
          transform: translateY(-1px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--gray);
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid var(--line);
          border-radius: 8px;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          border-color: var(--black);
          color: var(--black);
        }

        /* Photo Carousel - Infinite Scroll */
        .carousel-section {
          padding: 60px 0;
          background: var(--black);
          overflow: hidden;
        }

        .carousel-track-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          gap: 20px;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-image {
          position: relative;
          width: 350px;
          height: 250px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .carousel-image:hover {
          transform: scale(1.03);
        }

        @media (max-width: 768px) {
          .carousel-image {
            width: 280px;
            height: 200px;
          }

          .carousel-track {
            gap: 16px;
            animation-duration: 25s;
          }
        }

        @media (max-width: 480px) {
          .carousel-image {
            width: 220px;
            height: 160px;
          }
        }

        /* Section base */
        .section {
          padding: 100px 24px;
        }

        .section-gray {
          background: var(--gray-muted);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .container-narrow {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Problem section */
        .problem-section {
          padding: 100px 24px;
          background: var(--gray-muted);
        }

        .problem-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .problem-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 400;
          color: var(--black);
          margin: 0 0 32px;
          line-height: 1.3;
        }

        .problem-text {
          font-size: 17px;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 24px;
        }

        .problem-text strong {
          color: var(--black);
        }

        .problem-highlight {
          font-size: 17px;
          line-height: 1.8;
          color: var(--black);
          font-weight: 500;
          padding: 24px;
          background: var(--white);
          border-left: 3px solid var(--brand);
          margin-top: 32px;
        }

        /* Services section */
        .services-section {
          padding: 100px 24px;
        }

        .services-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .services-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 16px;
        }

        .services-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 400;
          color: var(--black);
          margin: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }

        @media (max-width: 500px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          padding: 40px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 16px;
          transition: border-color 0.2s;
        }

        .service-card:hover {
          border-color: rgba(0, 0, 0, 0.12);
        }

        .service-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brand);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .service-title {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 400;
          color: var(--black);
          margin: 0 0 16px;
        }

        .service-desc {
          font-size: 16px;
          line-height: 1.7;
          color: var(--gray);
          margin: 0 0 24px;
        }

        .service-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: var(--black);
          margin: 0 0 16px;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
        }

        .service-list li {
          font-size: 15px;
          color: var(--gray);
          padding: 8px 0;
          border-bottom: 1px solid var(--line);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .service-list li:last-child {
          border-bottom: none;
        }

        .service-list li::before {
          content: '→';
          color: var(--brand);
          font-weight: 600;
        }

        .service-goal {
          font-size: 14px;
          color: var(--gray-dark);
          font-style: italic;
          margin: 24px 0;
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }

        .service-goal strong {
          color: var(--black);
          font-style: normal;
        }

        /* Value section */
        .value-section {
          padding: 100px 24px;
          background: var(--black);
          color: var(--white);
        }

        .value-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .value-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 400;
          margin: 0 0 32px;
          line-height: 1.3;
        }

        .value-text {
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 24px;
        }

        .value-props {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 48px 0;
          text-align: left;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .value-prop {
          font-size: 18px;
          color: var(--white);
        }

        .value-prop strong {
          color: var(--brand);
        }

        .value-closing {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 40px;
          font-style: italic;
        }

        /* Process section */
        .process-section {
          padding: 100px 24px;
          background: var(--gray-muted);
        }

        .process-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .process-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 16px;
        }

        .process-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 400;
          color: var(--black);
          margin: 0;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .process-card {
          padding: 40px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 16px;
        }

        .process-number {
          font-size: 48px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.06);
          margin-bottom: 16px;
        }

        .process-card-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--black);
          margin: 0 0 12px;
        }

        .process-desc {
          font-size: 15px;
          color: var(--gray);
          line-height: 1.7;
          margin: 0;
        }

        .process-closing {
          text-align: center;
          max-width: 700px;
          margin: 60px auto 0;
        }

        .process-closing p {
          font-size: 17px;
          color: var(--gray-dark);
          line-height: 1.7;
          margin: 0 0 32px;
        }

        .process-closing p strong {
          color: var(--black);
        }

        /* Founder section */
        .founder-section {
          padding: 100px 24px;
        }

        .founder-content {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 60px;
          align-items: start;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .founder-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        .founder-photo {
          position: relative;
          width: 280px;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .founder-photo {
            margin: 0 auto;
            width: 240px;
            height: 300px;
          }
        }

        .founder-name {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          color: var(--black);
          margin: 0 0 8px;
        }

        .founder-role {
          font-size: 14px;
          color: var(--brand);
          font-weight: 600;
          margin: 0 0 24px;
        }

        .founder-bio {
          font-size: 16px;
          color: var(--gray);
          line-height: 1.8;
          margin: 0 0 16px;
        }

        .founder-bio strong {
          color: var(--black);
        }

        .founder-highlight {
          font-size: 16px;
          color: var(--black);
          font-weight: 500;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }

        /* CTA section */
        .cta-section {
          padding: 100px 24px;
          background: linear-gradient(180deg, var(--gray-muted) 0%, var(--white) 100%);
        }

        .cta-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 400;
          color: var(--black);
          margin: 0 0 24px;
          line-height: 1.3;
        }

        .cta-text {
          font-size: 17px;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 16px;
        }

        .cta-highlight {
          font-size: 17px;
          color: var(--black);
          font-weight: 500;
          margin: 32px 0;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--brand);
          color: white;
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .btn-whatsapp:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }

        /* Footer */
        .footer {
          padding: 40px 24px;
          text-align: center;
          border-top: 1px solid var(--line);
        }

        .footer p {
          font-size: 13px;
          color: var(--gray);
          margin: 0;
        }

        .footer a {
          color: var(--black);
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <Link href="/" className="navbar-logo">Anwar Sánchez</Link>
            <ul className="navbar-links">
              <li><Link href="/casos-de-exito" className="navbar-link">Casos</Link></li>
              <li><Link href="/presencia-digital" className="navbar-link">Servicios</Link></li>
              <li><a href="#contacto" className="navbar-link">Contacto</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Tu reputación abre puertas.<br />
              Tu presencia digital debería hacer lo mismo.
            </h1>
            <p className="hero-subtitle">
              Ayudo a profesionales y empresas a construir una presencia digital que genere confianza, fortalezca su autoridad y abra nuevas oportunidades de negocio.
            </p>
            <p className="hero-highlight">
              Combinamos estrategia, marketing, tecnología e inteligencia artificial para impulsar tu crecimiento.
            </p>
            <a href="#contacto" className="btn-primary">
              Potenciemos tu presencia digital →
            </a>
          </div>
        </section>

        {/* Photo Carousel - Infinite */}
        <section className="carousel-section">
          <div className="carousel-track-wrapper">
            <div className="carousel-track">
              {/* First set of images */}
              {carouselImages.map((image, index) => (
                <div key={index} className="carousel-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
              ))}
              {/* Duplicate for infinite scroll effect */}
              {carouselImages.map((image, index) => (
                <div key={`dup-${index}`} className="carousel-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="problem-section">
          <div className="problem-content">
            <h2 className="problem-title">
              Podés ser excelente en lo que hacés. Pero si nadie lo sabe, estás perdiendo oportunidades.
            </h2>
            <p className="problem-text">
              Pensá en esto.
            </p>
            <p className="problem-text">
              Antes de contratar a un profesional o elegir una empresa, ¿qué es lo primero que hacés?
            </p>
            <p className="problem-text">
              Probablemente buscás en Google, revisás su sitio web o explorás sus redes sociales.
            </p>
            <p className="problem-text">
              Tus potenciales clientes hacen exactamente lo mismo.
            </p>
            <p className="problem-text">
              Y en esos primeros segundos, tu presencia digital puede generar confianza o hacerte perder una oportunidad.
            </p>
            <div className="problem-highlight">
              No se trata de aparentar algo que no sos. Se trata de mostrar el verdadero valor de lo que ya construiste.
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section section-gray">
          <div className="container">
            <div className="services-header">
              <div className="services-eyebrow">Servicios</div>
              <h2 className="services-title">En qué puedo ayudarte</h2>
            </div>
            <div className="services-grid">
              {/* For Professionals */}
              <div className="service-card">
                <div className="service-label">Para Profesionales</div>
                <h3 className="service-title">Tu experiencia merece ser reconocida.</h3>
                <p className="service-desc">
                  Has invertido años en desarrollar tus conocimientos, construir tu carrera y ganar experiencia. Tu presencia digital debería reflejarlo.
                </p>
                <p className="service-desc">
                  Te ayudo a construir una marca profesional que transmita confianza, te diferencie y te conecte con las personas correctas.
                </p>
                <p className="service-subtitle">Qué podemos hacer juntos:</p>
                <ul className="service-list">
                  {professionalServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <p className="service-goal">
                  <strong>El objetivo:</strong> que cuando alguien investigue quién sos, encuentre razones para confiar en vos.
                </p>
                <a href="#contacto" className="btn-primary">
                  Potenciar mi marca profesional →
                </a>
              </div>

              {/* For Businesses */}
              <div className="service-card">
                <div className="service-label">Para Empresas</div>
                <h3 className="service-title">Tu empresa necesita más que una página web.</h3>
                <p className="service-desc">
                  Una buena presencia digital es el comienzo. El verdadero potencial aparece cuando conectamos marketing, procesos y tecnología.
                </p>
                <p className="service-desc">
                  Te ayudo a identificar oportunidades e implementar soluciones que fortalezcan tu negocio.
                </p>
                <p className="service-subtitle">Qué podemos hacer juntos:</p>
                <ul className="service-list">
                  {businessServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <p className="service-goal">
                  <strong>El objetivo:</strong> construir una presencia digital que atraiga clientes, genere confianza y contribuya al crecimiento de tu empresa.
                </p>
                <a href="#contacto" className="btn-primary">
                  Potenciar mi empresa →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="value-section">
          <div className="value-content">
            <h2 className="value-title">
              Tu presencia digital no debería ser un gasto. Debería ser un activo.
            </h2>
            <p className="value-text">
              Un sitio web no es solamente una colección de páginas.
            </p>
            <p className="value-text">
              Una marca personal no es solamente un perfil atractivo.
            </p>
            <p className="value-text">
              Y la inteligencia artificial no es solamente una tendencia.
            </p>
            <p className="value-text">
              Cuando existe una estrategia detrás, cada elemento tiene un propósito.
            </p>
            <div className="value-props">
              {valueProps.map((prop, index) => (
                <div key={index} className="value-prop">
                  <strong>{prop.bold}</strong> {prop.text}
                </div>
              ))}
            </div>
            <p className="value-closing">
              No se trata de implementar más herramientas. Se trata de aprovechar las correctas para alcanzar tus objetivos.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="process-section">
          <div className="container">
            <div className="process-header">
              <div className="process-eyebrow">Proceso</div>
              <h2 className="process-title">Cómo vamos a trabajar juntos</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div key={index} className="process-card">
                  <div className="process-number">{step.number}</div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="process-closing">
              <p>
                <strong>Tu negocio tiene objetivos.</strong> Mi trabajo es ayudarte a alcanzarlos con tecnología y estrategia.
              </p>
              <a href="#contacto" className="btn-primary">
                Hablemos de tu proyecto →
              </a>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="founder-section">
          <div className="founder-content">
            <div className="founder-photo">
              <Image
                src="/assets/yieldge/anwar/MFS_5810.jpg"
                alt="Anwar Sánchez"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 className="founder-name">Soy Anwar Sánchez</h2>
              <p className="founder-role">Ingeniero de Software. Emprendedor. Partner tecnológico.</p>
              <p className="founder-bio">
                Mi trabajo conecta dos mundos que muchas veces se manejan por separado: <strong>los negocios y la tecnología.</strong>
              </p>
              <p className="founder-bio">
                A lo largo de mi carrera he desarrollado soluciones digitales y trabajado con diferentes tecnologías para resolver problemas reales.
              </p>
              <p className="founder-bio">
                Hoy utilizo esa experiencia para ayudar a profesionales y empresas a construir una presencia digital más sólida, aprovechar nuevas oportunidades y desarrollar soluciones que impulsen su crecimiento.
              </p>
              <p className="founder-bio">
                No me interesa venderte una herramienta porque esté de moda. Me interesa entender qué necesitás, identificar dónde está la oportunidad y construir algo que realmente aporte valor.
              </p>
              <p className="founder-highlight">
                Porque la tecnología es el medio. El crecimiento de tu negocio es el objetivo.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">
              Tu próxima oportunidad puede comenzar con una búsqueda en Google.
            </h2>
            <p className="cta-text">
              Cuando un potencial cliente, socio comercial o empresa te investiga, ¿qué encuentra?
            </p>
            <p className="cta-text">
              ¿Una presencia digital improvisada o una marca que transmite confianza, experiencia y profesionalismo?
            </p>
            <p className="cta-text">
              No necesitás hacer más ruido. Necesitás que las personas correctas te encuentren y confíen en vos.
            </p>
            <p className="cta-highlight">
              Construyamos una presencia digital a la altura de tus objetivos.
            </p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/50670724236?text=Hola%20Anwar%2C%20quiero%20potenciar%20mi%20presencia%20digital"
                className="btn-whatsapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Conversemos sobre tu proyecto
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} <Link href="/">Anwar Sánchez</Link>.
            Construyendo presencia digital que genera resultados.
          </p>
        </footer>
      </div>
    </>
  );
}
