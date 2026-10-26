'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Blocks, FileCheck, Globe, Shield, Workflow, Zap, Layers, Fingerprint, Route } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const experienceImages = [
  {
    src: '/assets/blockchain/arbitrum.jpg',
    alt: 'Arbitrum Arbiverse Badge',
    caption: 'Construyendo en Arbitrum con un colega eslovaco en Buenos Aires',
  },
  {
    src: '/assets/blockchain/arbitrum2.jpg',
    alt: 'Construyendo en Arbitrum en Buenos Aires',
    caption: '',
  },
  {
    src: '/assets/blockchain/bnbchain.jpg',
    alt: 'BNB Chain Binance Event Buenos Aires',
    caption: 'Participación construyendo en BNB Chain de Binance, Buenos Aires',
  },
  {
    src: '/assets/blockchain/stellar.jpg',
    alt: 'Stellar Ambassador',
    caption: 'Embajador de Stellar y construcción de varios proyectos en la blockchain',
  },
  {
    src: '/assets/blockchain/starknet.jpg',
    alt: 'StarkNet Connect Event',
    caption: 'Construcción de varios proyectos en StarkNet',
  },
];

const valueCards = [
  {
    icon: Layers,
    title: 'Toda la potencia. Cero complejidad.',
    description: 'Tus usuarios no necesitan entender wallets, redes o transacciones. Nosotros simplificamos la tecnología para que puedan concentrarse en lo que realmente importa.',
    capabilities: ['Account Abstraction', 'ENS', 'Meta Transactions', 'Session Keys', 'Smart Routing'],
  },
  {
    icon: Fingerprint,
    title: 'Empezar debería ser así de fácil.',
    description: 'Eliminamos los procesos complicados de registro y acceso. Tus usuarios pueden comenzar con experiencias familiares, como su correo electrónico, biometría o passkeys.',
    capabilities: ['Passkey Wallets', 'Biometric Login', 'Smart Login Layers', 'Email-Based Onboarding'],
  },
  {
    icon: Route,
    title: 'De nuevos usuarios a usuarios activos.',
    description: 'Diseñamos recorridos intuitivos para que crear una cuenta, agregar fondos y realizar transferencias sea una experiencia sencilla, segura y natural.',
    capabilities: ['Wallet Creation', 'Funding', 'Transfers'],
  },
];

const capabilities = [
  {
    icon: Blocks,
    title: 'Smart Contracts',
    description: 'Desarrollo de contratos inteligentes seguros y auditables para cualquier caso de uso empresarial.',
  },
  {
    icon: FileCheck,
    title: 'Tokenización de Activos',
    description: 'Convertimos activos físicos y digitales en tokens negociables con total trazabilidad.',
  },
  {
    icon: Globe,
    title: 'Aplicaciones Descentralizadas',
    description: 'DApps intuitivas que conectan tu negocio con el ecosistema Web3.',
  },
  {
    icon: Shield,
    title: 'Trazabilidad en Cadena de Suministro',
    description: 'Seguimiento inmutable de productos desde origen hasta consumidor final.',
  },
  {
    icon: Workflow,
    title: 'Integración Empresarial',
    description: 'Conectamos blockchain con tus sistemas existentes sin fricción.',
  },
  {
    icon: Zap,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento estratégico para identificar oportunidades blockchain en tu negocio.',
  },
];

const useCases = [
  'Trazabilidad de productos en cadena de suministro',
  'Certificación de origen y autenticidad',
  'Automatización de pagos con smart contracts',
  'Registro de propiedad intelectual',
  'Sistemas de votación transparentes',
  'Tokenización de activos inmobiliarios',
];

export default function BlockchainPage() {
  return (
    <>
      <style jsx global>{`
        :root {
          --brand: #1F5CFF;
          --brand-hover: #1a4edb;
          --brand-soft: #eff4ff;
          --ink: #1d1d1f;
          --ink-muted: #424245;
          --ink-subtle: #6e6e73;
          --surface: #ffffff;
          --surface-muted: #f5f5f7;
          --surface-alt: #f5f5f7;
          --line: rgba(0, 0, 0, 0.08);
        }

        .blockchain-page {
          background: var(--surface);
          color: var(--ink);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Navbar */
        .bc-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
        }

        .bc-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 980px;
          margin: 0 auto;
          padding: 16px 24px;
        }

        .bc-navbar-logo {
          font-size: 14px;
          letter-spacing: 0.2em;
          color: var(--ink);
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 600;
        }

        .bc-navbar-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .bc-navbar-link {
          font-size: 14px;
          color: var(--ink-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .bc-navbar-link:hover {
          color: var(--ink);
        }

        @media (max-width: 768px) {
          .bc-navbar-links {
            display: none;
          }
        }

        /* Hero */
        .bc-hero {
          position: relative;
          padding: 140px 24px 80px;
          overflow: hidden;
        }

        .bc-hero::before {
          content: '';
          position: absolute;
          top: 20%;
          right: 0;
          width: 500px;
          height: 500px;
          background: rgba(31, 92, 255, 0.03);
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .bc-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 25%;
          width: 400px;
          height: 400px;
          background: rgba(31, 92, 255, 0.02);
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .bc-hero-container {
          max-width: 980px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .bc-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .bc-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .bc-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-subtle);
          margin-bottom: 16px;
        }

        .bc-hero h1 {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--ink);
          margin: 0 0 24px;
        }

        .bc-hero-text {
          font-size: clamp(16px, 1.1vw, 18px);
          line-height: 1.6;
          color: var(--ink-muted);
          margin: 0 0 32px;
          max-width: 500px;
        }

        .bc-btn-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .bc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }

        .bc-btn-primary {
          background: var(--brand);
          color: white;
          border: none;
        }

        .bc-btn-primary:hover {
          background: var(--brand-hover);
        }

        .bc-btn-link {
          background: transparent;
          color: var(--brand);
          border: none;
          padding: 14px 0;
        }

        .bc-btn-link:hover {
          color: var(--brand-hover);
        }

        .bc-hero-image {
          position: relative;
          aspect-ratio: 1;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 900px) {
          .bc-hero-image {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        /* Value Cards */
        .bc-value-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 80px;
        }

        @media (max-width: 900px) {
          .bc-value-cards {
            grid-template-columns: 1fr;
          }
        }

        .bc-value-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s;
        }

        .bc-value-card:hover {
          border-color: rgba(31, 92, 255, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .bc-value-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--brand-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .bc-value-icon svg {
          width: 24px;
          height: 24px;
          color: var(--brand);
        }

        .bc-value-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 12px;
        }

        .bc-value-card > p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-muted);
          margin: 0 0 20px;
        }

        .bc-value-caps {
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }

        .bc-value-caps-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--ink-subtle);
          margin-bottom: 8px;
        }

        .bc-value-caps-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .bc-value-caps-list span {
          font-size: 12px;
          color: var(--ink-muted);
          background: var(--surface-muted);
          padding: 4px 8px;
          border-radius: 4px;
        }

        /* Section */
        .bc-section {
          padding: 100px 24px;
        }

        .bc-section-gray {
          background: var(--surface-muted);
        }

        .bc-container {
          max-width: 980px;
          margin: 0 auto;
        }

        .bc-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .bc-section-title {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin: 0 0 16px;
        }

        .bc-section-subtitle {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.55;
          color: var(--ink-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Capabilities Grid */
        .bc-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .bc-capabilities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .bc-capabilities-grid {
            grid-template-columns: 1fr;
          }
        }

        .bc-capability-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 32px;
          transition: border-color 0.2s;
        }

        .bc-capability-card:hover {
          border-color: rgba(0, 0, 0, 0.12);
        }

        .bc-capability-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--brand-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .bc-capability-icon svg {
          width: 24px;
          height: 24px;
          color: var(--brand);
        }

        .bc-capability-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 12px;
        }

        .bc-capability-card p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink-muted);
          margin: 0;
        }

        /* Use Cases */
        .bc-use-cases {
          max-width: 700px;
          margin: 0 auto;
        }

        .bc-use-case {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: var(--surface-muted);
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .bc-use-case-number {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--brand-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          color: var(--brand);
        }

        .bc-use-case p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink-muted);
          margin: 0;
          padding-top: 4px;
        }

        /* Experience Gallery */
        .bc-gallery {
          max-width: 1100px;
          margin: 0 auto;
        }

        .bc-gallery-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .bc-gallery-row {
            grid-template-columns: 1fr;
          }
        }

        .bc-gallery-item {
          position: relative;
          aspect-ratio: 3/2;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .bc-gallery-item:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          transform: scale(1.02);
        }

        .bc-gallery-single {
          max-width: 672px;
          margin: 0 auto;
        }

        .bc-gallery-caption {
          text-align: center;
          font-size: 16px;
          color: var(--ink-muted);
          margin-top: 20px;
        }

        /* Approach */
        .bc-approach {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .bc-approach-title {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin: 0 0 24px;
        }

        .bc-approach-text {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.55;
          color: var(--ink-muted);
          margin: 0 0 16px;
        }

        .bc-approach-note {
          font-size: 16px;
          color: var(--ink-subtle);
        }

        /* CTA */
        .bc-cta {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .bc-cta-title {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin: 0 0 24px;
        }

        .bc-cta-text {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.55;
          color: var(--ink-muted);
          margin: 0 0 32px;
        }

        .bc-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Footer */
        .bc-footer {
          padding: 40px 24px;
          text-align: center;
          border-top: 1px solid var(--line);
        }

        .bc-footer p {
          font-size: 14px;
          color: var(--ink-subtle);
          margin: 0;
        }

        .bc-footer a {
          color: var(--ink);
          text-decoration: none;
        }

        .bc-footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="blockchain-page">
        {/* Navbar */}
        <nav className="bc-navbar">
          <div className="bc-navbar-container">
            <Link href="/" className="bc-navbar-logo">Anwar Sánchez</Link>
            <ul className="bc-navbar-links">
              <li><Link href="/" className="bc-navbar-link">Inicio</Link></li>
              <li><Link href="/casos-de-exito" className="bc-navbar-link">Casos</Link></li>
              <li><Link href="/presencia-digital" className="bc-navbar-link">Servicios</Link></li>
              <li><a href="#contacto" className="bc-navbar-link">Contacto</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero */}
        <section className="bc-hero">
          <div className="bc-hero-container">
            <div className="bc-hero-grid">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={fadeInUp} className="bc-eyebrow">
                  WEB3 SIN BARRERAS
                </motion.span>
                <motion.h1 variants={fadeInUp}>
                  La tecnología más avanzada debería ser la más fácil de usar.
                </motion.h1>
                <motion.p variants={fadeInUp} className="bc-hero-text">
                  Diseñamos experiencias Web3 que eliminan barreras técnicas, simplifican el acceso y permiten que cualquier persona utilice aplicaciones blockchain sin necesidad de entender su complejidad.
                </motion.p>
                <motion.div variants={fadeInUp} className="bc-btn-group">
                  <a href="#contacto" className="bc-btn bc-btn-primary">
                    Hablemos de tu proyecto
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <Link href="/presencia-digital" className="bc-btn bc-btn-link">
                    Explorá nuestras soluciones
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bc-hero-image"
              >
                <Image
                  src="/assets/blockchain/senior-smartphone.png"
                  alt="Adulta mayor usando felizmente un smartphone - Web3 accesible para todos"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
            </div>

            {/* Value Cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bc-value-cards"
            >
              {valueCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div key={index} variants={fadeInUp} className="bc-value-card">
                    <div className="bc-value-icon">
                      <Icon />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="bc-value-caps">
                      <p className="bc-value-caps-label">Capacidades técnicas</p>
                      <div className="bc-value-caps-list">
                        {card.capabilities.map((cap, capIndex) => (
                          <span key={capIndex}>{cap}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bc-section bc-section-gray">
          <div className="bc-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bc-section-header"
            >
              <span className="bc-eyebrow">Capacidades</span>
              <h2 className="bc-section-title">Qué desarrollamos</h2>
              <p className="bc-section-subtitle">
                Soluciones blockchain diseñadas para resolver problemas reales de negocio.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bc-capabilities-grid"
            >
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div key={index} variants={fadeInUp} className="bc-capability-card">
                    <div className="bc-capability-icon">
                      <Icon />
                    </div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bc-section">
          <div className="bc-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bc-section-header"
            >
              <span className="bc-eyebrow">Casos de uso</span>
              <h2 className="bc-section-title">Aplicaciones empresariales</h2>
              <p className="bc-section-subtitle">
                Blockchain resuelve problemas específicos donde la transparencia y la inmutabilidad son críticas.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bc-use-cases"
            >
              {useCases.map((useCase, index) => (
                <motion.div key={index} variants={fadeInUp} className="bc-use-case">
                  <span className="bc-use-case-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p>{useCase}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Gallery */}
        <section className="bc-section bc-section-gray">
          <div className="bc-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bc-section-header"
            >
              <span className="bc-eyebrow">Ecosistema</span>
              <h2 className="bc-section-title">Presencia en el ecosistema Web3</h2>
              <p className="bc-section-subtitle">
                Participación activa en las principales comunidades y eventos blockchain.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bc-gallery"
            >
              {/* Arbitrum Row */}
              <div className="bc-gallery-row">
                <motion.div variants={fadeInUp} className="bc-gallery-item">
                  <Image
                    src={experienceImages[0].src}
                    alt={experienceImages[0].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="bc-gallery-item">
                  <Image
                    src={experienceImages[1].src}
                    alt={experienceImages[1].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
              <motion.p variants={fadeInUp} className="bc-gallery-caption">
                {experienceImages[0].caption}
              </motion.p>

              {/* BNB & Stellar Row */}
              <div className="bc-gallery-row" style={{ marginTop: '48px' }}>
                <div>
                  <motion.div variants={fadeInUp} className="bc-gallery-item">
                    <Image
                      src={experienceImages[2].src}
                      alt={experienceImages[2].alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </motion.div>
                  <motion.p variants={fadeInUp} className="bc-gallery-caption">
                    {experienceImages[2].caption}
                  </motion.p>
                </div>
                <div>
                  <motion.div variants={fadeInUp} className="bc-gallery-item">
                    <Image
                      src={experienceImages[3].src}
                      alt={experienceImages[3].alt}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </motion.div>
                  <motion.p variants={fadeInUp} className="bc-gallery-caption">
                    {experienceImages[3].caption}
                  </motion.p>
                </div>
              </div>

              {/* StarkNet Single */}
              <div className="bc-gallery-single" style={{ marginTop: '48px' }}>
                <motion.div variants={fadeInUp} className="bc-gallery-item">
                  <Image
                    src={experienceImages[4].src}
                    alt={experienceImages[4].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                <motion.p variants={fadeInUp} className="bc-gallery-caption">
                  {experienceImages[4].caption}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach */}
        <section className="bc-section">
          <div className="bc-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bc-approach"
            >
              <span className="bc-eyebrow">Filosofía</span>
              <h2 className="bc-approach-title">Blockchain con criterio de negocio</h2>
              <p className="bc-approach-text">
                No implementamos blockchain porque esté de moda. Lo hacemos cuando resuelve un problema real que otras tecnologías no pueden resolver de manera tan eficiente.
              </p>
              <p className="bc-approach-note">
                Transparencia, inmutabilidad y descentralización tienen sentido en contextos específicos. Te ayudamos a identificar si tu caso es uno de ellos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className="bc-section bc-section-gray">
          <div className="bc-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bc-cta"
            >
              <span className="bc-eyebrow">Siguiente paso</span>
              <h2 className="bc-cta-title">¿Tenés un proyecto en mente?</h2>
              <p className="bc-cta-text">
                Conversemos sobre cómo blockchain puede aportar valor a tu negocio. Sin compromiso, sin jerga técnica innecesaria.
              </p>
              <div className="bc-cta-buttons">
                <a
                  href="https://wa.me/50670724236?text=Hola%2C%20me%20interesa%20una%20consulta%20sobre%20blockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bc-btn bc-btn-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Agendar consulta gratuita
                </a>
                <Link href="/" className="bc-btn bc-btn-link">
                  Volver al inicio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bc-footer">
          <p>
            © {new Date().getFullYear()} <Link href="/">Anwar Sánchez</Link>.
            Blockchain & Web3 para negocios reales.
          </p>
        </footer>
      </div>
    </>
  );
}
