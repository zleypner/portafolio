'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingDown, Ghost, Smartphone, Target, Megaphone, DollarSign, Zap } from 'lucide-react';

// Constants
const WHATSAPP_PHONE = '50670724236';
const WHATSAPP_MESSAGE = 'Hola Anwar, estuve revisando tu sitio web y me gustaría conversar sobre cómo hacer crecer mi negocio.';
const WHATSAPP_MESSAGE_SEMILLA = 'Hola Anwar, me gustaría conocer cómo podríamos aplicar el Método SEMILLA en mi negocio.';

function getWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

// Logo data - WebP format for better performance
const LOGOS = [
  { name: '3M', logo: '/assets/yieldge/logos/3m.webp', large: false },
  { name: 'Gastromedical CR', logo: '/assets/yieldge/logos/drzuniga-logo.webp', large: true },
  { name: 'PHYC', logo: '/assets/yieldge/logos/phyclogo-removedbg.webp', large: false },
  { name: 'HS', logo: '/assets/yieldge/logos/hslogo.webp', large: false },
  { name: 'Construrack', logo: '/assets/yieldge/logos/construrack.webp', large: false },
  { name: 'Quant Energy', logo: '/assets/yieldge/logos/quant_energy.webp', large: false },
];

// Images - WebP format for better performance
const IMAGES = {
  heroMockup: '/assets/yieldge/presencia-digital/gastro-hero-2.webp',
  testimonialAvatar: '/assets/yieldge/cases/gastro-hero-2.webp',
  founderPortrait: '/assets/headshots/no-bg/Bearded Man in White Shirt Cutout.png',
  founderWorking: '/assets/headshots/no-bg/Smiling Bearded Man Pointing Forward.png',
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.getElementById(href.slice(1));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  const faqItems = [
    {
      question: '¿Qué es un Partner Digital?',
      answer: 'Un Partner Digital es más que un proveedor de servicios. Es un socio estratégico que entiende tu negocio, identifica oportunidades de crecimiento y conecta estrategia, marketing y tecnología para que cada acción tenga un propósito claro.',
    },
    {
      question: '¿Qué es el Método SEMILLA?',
      answer: 'Es una metodología de cuatro etapas que desarrollé para ayudar a profesionales y empresas a construir las bases de un crecimiento sostenible: Estrategia, Posicionamiento, Atracción y Conversión.',
    },
    {
      question: '¿Para qué tipo de negocios trabaja?',
      answer: 'Trabajo con profesionales independientes, clínicas, empresas de servicios y negocios que quieren atraer mejores clientes, fortalecer su posicionamiento y convertir su presencia digital en oportunidades reales de negocio.',
    },
    {
      question: '¿Cómo es el proceso de trabajo?',
      answer: 'Comenzamos con una conversación para entender tu negocio, tus objetivos y tus desafíos. A partir de ahí, definimos una estrategia personalizada y trabajamos juntos en su implementación.',
    },
    {
      question: '¿Garantiza resultados específicos?',
      answer: 'No prometo resultados garantizados porque cada negocio es diferente. Lo que sí garantizo es un trabajo estratégico, profesional y orientado a generar valor real para tu negocio.',
    },
    {
      question: '¿Por qué trabajar con vos y no con una agencia?',
      answer: 'Conmigo trabajás directo. Sin vendedores, sin intermediarios. Eso significa mejor comunicación, mayor compromiso con tu proyecto y una visión integrada de estrategia, marketing y tecnología.',
    },
  ];

  const stats = [
    { value: '+10', label: 'Años de experiencia' },
    { value: '+180%', label: 'Crecimiento en consultas' },
    { value: '100%', label: 'Estrategia personalizada' },
    { value: '4', label: 'Etapas del Método SEMILLA' },
  ];

  const problems = [
    { icon: Ghost, text: 'Poca visibilidad: tus clientes no te encuentran' },
    { icon: TrendingDown, text: 'Ventas inconsistentes: dependés de referidos' },
    { icon: Smartphone, text: 'Oportunidades perdidas: consultas que no cierran' },
    { icon: Target, text: 'Sin dirección: invertís sin estrategia clara' },
  ];

  const offerItems = [
    { icon: Target, title: 'Estrategia', description: 'Dirección clara para crecer' },
    { icon: Megaphone, title: 'Marketing', description: 'Atracción de clientes ideales' },
    { icon: DollarSign, title: 'Conversión', description: 'Visitantes a clientes' },
    { icon: Zap, title: 'Automatización', description: 'Procesos que escalan' },
  ];

  const steps = [
    { num: '01', title: 'Sembrar', subtitle: 'Estrategia', description: 'Analizamos tu negocio y definimos una estrategia clara para conectar tu valor con los clientes correctos.', image: '/assets/seed/seed1.webp' },
    { num: '02', title: 'Cultivar', subtitle: 'Posicionamiento', description: 'Fortalecemos tu propuesta de valor, diferenciación y comunicación para que las personas correctas te elijan.', image: '/assets/seed/seed2.webp' },
    { num: '03', title: 'Crecer', subtitle: 'Atracción', description: 'Desarrollamos estrategias de contenido, marketing y tecnología para aumentar tu visibilidad y generar confianza.', image: '/assets/seed/seed3.webp' },
    { num: '04', title: 'Cosechar', subtitle: 'Conversión', description: 'Optimizamos tus canales digitales para convertir la atención en oportunidades comerciales reales.', image: '/assets/seed/seed4.webp' },
  ];

  const cases = [
    {
      name: 'Gastromedical CR',
      image: '/assets/yieldge/presencia-digital/gastro-hero-2.webp',
      result: '77%',
      resultLabel: 'captacion organica',
      tag: 'Salud',
      url: '/casos-de-exito/gastromedical',
      isInternal: true,
    },
    {
      name: 'Physical Care',
      image: '/assets/yieldge/cases/image.webp',
      result: '91%',
      resultLabel: 'usuarios nuevos',
      tag: 'Fisioterapia',
      url: '/casos-de-exito/physical-care',
      isInternal: true,
    },
  ];

  return (
    <>
      <style jsx global>{`
        /* Presencia Digital Page Styles */
        .pd-page {
          background: #ffffff;
          color: #1d1d1f;
          min-height: 100vh;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Navbar */
        .pd-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: box-shadow 0.3s ease;
        }

        .pd-navbar.scrolled {
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        }

        .pd-navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          height: 64px;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
        }

        .pd-navbar-logo {
          font-family: var(--font-playfair), serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1d1d1f;
          text-decoration: none;
        }

        .pd-navbar-links {
          display: none;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .pd-navbar-link {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          color: #424245;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .pd-navbar-link:hover {
          color: #1d1d1f;
          background: #f5f5f7;
        }

        .pd-navbar-cta {
          display: none;
          align-items: center;
          gap: 8px;
          height: 40px;
          padding: 0 20px;
          border-radius: 20px;
          background: #25D366;
          color: white;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .pd-navbar-cta:hover {
          background: #20bd5a;
        }

        .pd-navbar-cta svg {
          width: 16px;
          height: 16px;
        }

        .pd-mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: none;
          background: transparent;
          border-radius: 22px;
          cursor: pointer;
          color: #1d1d1f;
          position: relative;
          z-index: 101;
          -webkit-tap-highlight-color: transparent;
        }

        .pd-mobile-toggle:hover {
          background: #f5f5f7;
        }

        .pd-mobile-menu {
          display: block;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          border-top: 1px solid #f0f0f0;
          padding: 20px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          z-index: 999;
        }

        .pd-mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .pd-mobile-menu li {
          border-bottom: 1px solid #f0f0f0;
        }

        .pd-mobile-menu li:last-child {
          border-bottom: none;
        }

        .pd-mobile-menu a {
          display: flex;
          align-items: center;
          padding: 18px 0;
          font-size: 17px;
          font-weight: 600;
          color: #1d1d1f;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
        }

        .pd-mobile-menu a:active {
          color: #6b7280;
        }

        .pd-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          height: 52px;
          margin-top: 28px;
          border-radius: 12px;
          background: #25D366;
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
        }

        .pd-mobile-cta:active {
          transform: scale(0.98);
        }

        /* Hero Section - Mobile First */
        .pd-hero {
          position: relative;
          min-height: auto;
          display: flex;
          align-items: flex-start;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 50%, #0a1f1a 100%);
          overflow: hidden;
          padding: 72px 20px 40px;
          z-index: 1;
        }

        .pd-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
        }

        .pd-hero-bg {
          display: none;
        }

        .pd-hero-bg-logo {
          display: none;
        }

        .pd-hero-container {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .pd-hero-image {
          position: relative;
          width: 100%;
          max-width: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
          border-radius: 20px;
          padding: 16px 16px 0;
          overflow: hidden;
        }

        .pd-hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
        }

        .pd-hero-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
        }

        .pd-hero-content {
          text-align: center;
          width: 100%;
          max-width: 400px;
        }

        .pd-hero h1 {
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .pd-hero-subtitle {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .pd-hero-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-align: left;
        }

        .pd-hero-benefits li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .pd-hero-benefits li::before {
          content: '✓';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background: rgba(37, 211, 102, 0.2);
          color: #25D366;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .pd-hero-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 12px;
        }

        .pd-cta-secondary-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .pd-cta-secondary-hero:hover {
          color: #ffffff;
          border-bottom-color: #ffffff;
        }

        .pd-hero-microcopy {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 24px;
          font-style: italic;
        }

        .pd-hero-cta-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 0;
        }

        .pd-cta-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 36px;
          border-radius: 6px;
          background: #f5f0e6;
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pd-cta-hero:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
        }

        .pd-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 24px;
          height: 48px;
          border-radius: 10px;
          background: #25D366;
          color: white;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          width: 100%;
          -webkit-tap-highlight-color: transparent;
        }

        .pd-cta-primary:hover {
          background: #20bd5a;
          transform: translateY(-2px);
        }

        .pd-cta-primary svg {
          width: 20px;
          height: 20px;
        }

        .pd-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1F5CFF;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
        }

        .pd-cta-secondary:hover {
          text-decoration: underline;
        }

        .pd-cta-secondary svg {
          width: 16px;
          height: 16px;
        }

        /* Logo Carousel */
        .pd-logos {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid rgba(209, 213, 219, 0.4);
        }

        .pd-logos-label {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9ca3af;
          text-align: center;
          margin-bottom: 16px;
        }

        .pd-logos-scroll {
          position: relative;
          overflow: hidden;
        }

        .pd-logos-track {
          display: flex;
          width: max-content;
          animation: pd-scroll-logos 25s linear infinite;
        }

        @keyframes pd-scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .pd-logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          padding: 0 28px;
        }

        .pd-logo-item img {
          max-height: 56px;
          width: auto;
          object-fit: contain;
        }

        /* Success Cases Section */
        .pd-cases {
          min-height: 100vh;
          padding: 48px 20px;
          background: #f9fafb;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-container {
          max-width: 980px;
          margin: 0 auto;
        }

        .pd-section-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .pd-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #6b7280;
          margin-bottom: 10px;
        }

        .pd-section-tag-dot {
          color: #1F5CFF;
        }

        .pd-section-title {
          font-size: clamp(1.375rem, 5vw, 2.25rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .pd-section-description {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 640px;
          margin: 0 auto;
        }

        .pd-cases-grid {
          display: grid;
          gap: 16px;
        }

        .pd-case-card {
          display: block;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .pd-case-card:hover {
          border-color: rgba(31, 92, 255, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .pd-case-image {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .pd-case-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .pd-case-card:hover .pd-case-image img {
          transform: scale(1.05);
        }

        .pd-case-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          font-size: 12px;
          font-weight: 500;
          color: #374151;
        }

        .pd-case-body {
          padding: 20px;
        }

        .pd-case-name {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }

        .pd-case-result {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pd-case-result-value {
          font-size: 24px;
          font-weight: 700;
          color: #25D366;
        }

        .pd-case-result-label {
          font-size: 14px;
          color: #6b7280;
        }

        .pd-cases-link {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .pd-cases-link a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1F5CFF;
          font-weight: 500;
          text-decoration: none;
        }

        .pd-cases-link a:hover {
          text-decoration: underline;
        }

        /* Stats Grid (inside cases section) */
        .pd-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 24px;
        }

        @media (min-width: 768px) {
          .pd-stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-top: 32px;
          }
        }

        .pd-stat-card {
          text-align: center;
          padding: 24px 16px;
          border-radius: 16px;
          background: white;
          border: 1px solid rgba(229, 231, 235, 0.8);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .pd-stat-value {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 700;
          background: linear-gradient(to right, #1F5CFF, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .pd-stat-label {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.3;
        }

        /* Problem Section - Dark */
        .pd-problem {
          min-height: 100vh;
          padding: 56px 20px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-problem::before {
          display: none;
        }

        .pd-problem-content {
          max-width: 768px;
          margin: 0 auto;
        }

        .pd-problem h2 {
          font-size: clamp(1.5rem, 5vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #ffffff;
          margin-bottom: 20px;
          text-align: center;
        }

        .pd-problem-text {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          text-align: center;
          margin-bottom: 14px;
        }

        .pd-problem-highlight {
          font-size: 15px;
          color: #ffffff;
          line-height: 1.5;
          text-align: center;
          margin-bottom: 28px;
          font-weight: 600;
          padding: 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          border-left: 4px solid rgba(255, 255, 255, 0.5);
        }

        .pd-problem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        .pd-problem-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          padding: 20px 16px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pd-problem-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(239, 68, 68, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f87171;
        }

        .pd-problem-card span:last-child {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
        }

        /* Case Study Section */
        .pd-casestudy {
          min-height: 100vh;
          padding: 56px 20px;
          background: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .pd-casestudy-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .pd-casestudy-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(37, 211, 102, 0.1);
          color: #25D366;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .pd-casestudy-tag svg {
          width: 16px;
          height: 16px;
        }

        .pd-casestudy h2 {
          font-size: clamp(1.875rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #111827;
        }

        .pd-casestudy-grid {
          display: grid;
          gap: 24px;
          margin-bottom: 40px;
        }

        .pd-casestudy-card {
          padding: 24px;
          border-radius: 16px;
        }

        .pd-casestudy-card.problem {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
        }

        .pd-casestudy-card.solution {
          background: rgba(31, 92, 255, 0.05);
          border: 1px solid rgba(31, 92, 255, 0.2);
        }

        .pd-casestudy-card.result {
          background: rgba(37, 211, 102, 0.05);
          border: 1px solid rgba(37, 211, 102, 0.2);
        }

        .pd-casestudy-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .pd-casestudy-card-num {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .pd-casestudy-card.problem .pd-casestudy-card-num {
          background: #fee2e2;
          color: #ef4444;
        }

        .pd-casestudy-card.solution .pd-casestudy-card-num {
          background: rgba(31, 92, 255, 0.1);
          color: #1F5CFF;
        }

        .pd-casestudy-card.result .pd-casestudy-card-num {
          background: rgba(37, 211, 102, 0.1);
          color: #25D366;
        }

        .pd-casestudy-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        }

        .pd-casestudy-card p {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
        }

        .pd-casestudy-card .result-value {
          font-size: 24px;
          font-weight: 700;
          color: #25D366;
          margin-bottom: 8px;
        }

        /* Testimonial */
        .pd-testimonial {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 32px;
          border-radius: 16px;
          background: linear-gradient(to bottom right, #111827, #1f2937);
          color: white;
          box-shadow: 0 8px 30px -8px rgba(0, 0, 0, 0.4);
        }

        .pd-testimonial-avatar {
          position: relative;
          width: 80px;
          height: 80px;
          min-width: 80px;
          min-height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
        }

        .pd-testimonial-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pd-testimonial-content {
          text-align: center;
        }

        .pd-testimonial-quote-icon {
          width: 32px;
          height: 32px;
          color: rgba(96, 165, 250, 0.6);
          margin-bottom: 12px;
        }

        .pd-testimonial blockquote {
          font-size: 16px;
          line-height: 1.6;
          color: #e5e7eb;
          margin-bottom: 16px;
          font-style: italic;
        }

        .pd-testimonial-author {
          font-weight: 600;
          color: white;
        }

        .pd-testimonial-role {
          font-size: 14px;
          color: #9ca3af;
        }

        /* Offer Section - Dark Green */
        .pd-offer {
          min-height: 100vh;
          padding: 56px 20px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-offer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
        }

        .pd-offer h2 {
          font-size: clamp(1.5rem, 5vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #ffffff;
          text-align: center;
          margin-bottom: 12px;
        }

        .pd-offer-subtitle {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          max-width: 640px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .pd-offer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .pd-offer-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .pd-offer-card:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .pd-offer-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(37, 211, 102, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #25D366;
          margin-bottom: 12px;
        }

        .pd-offer-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .pd-offer-card p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
        }

        /* Guarantee Block */
        .pd-guarantee {
          max-width: 640px;
          margin: 0 auto;
          padding: 24px;
          border-radius: 16px;
          background: rgba(37, 211, 102, 0.15);
          border: 1px solid rgba(37, 211, 102, 0.3);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pd-guarantee-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(37, 211, 102, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #25D366;
        }

        .pd-guarantee-icon svg {
          width: 28px;
          height: 28px;
        }

        .pd-guarantee h3 {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .pd-guarantee p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        /* How It Works Section - White */
        .pd-process {
          min-height: 100vh;
          padding: 56px 20px;
          background: #ffffff;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-process::before {
          display: none;
        }

        .pd-process h2 {
          font-size: clamp(1.5rem, 5vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #111827;
          text-align: center;
          margin-bottom: 36px;
        }

        .pd-process-grid {
          display: grid;
          gap: 20px;
          max-width: 1024px;
          margin: 0 auto;
        }

        .pd-process-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px;
          border-radius: 16px;
          background: #f9fafb;
          border: 1px solid rgba(229, 231, 235, 0.8);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          height: 100%;
        }

        .pd-process-num {
          position: absolute;
          top: -16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #0d2922;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
        }

        .pd-process-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(13, 41, 34, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d2922;
          margin-bottom: 16px;
          margin-top: 16px;
        }

        .pd-process-icon svg {
          width: 28px;
          height: 28px;
        }

        .pd-process-image {
          width: 100%;
          max-width: 200px;
          height: 150px;
          margin-bottom: 16px;
          margin-top: 8px;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pd-process-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .pd-process-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }

        .pd-process-card p {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          flex-grow: 1;
        }

        .pd-process-subtitle {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .pd-method-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pd-method-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0d2922;
          margin-bottom: 16px;
          padding: 8px 20px;
          background: rgba(13, 41, 34, 0.1);
          border-radius: 4px;
        }

        .pd-method-header h2 {
          font-size: clamp(1.875rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 24px;
        }

        .pd-method-intro {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 768px;
          margin: 0 auto;
        }

        .pd-method-cta {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }

        .pd-process-grid-4 {
          grid-template-columns: repeat(1, 1fr);
        }

        @media (min-width: 640px) {
          .pd-process-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pd-process-grid-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Founder Section - Dark */
        .pd-founder {
          min-height: 100vh;
          padding: 56px 20px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-founder-grid {
          display: grid;
          gap: 32px;
          align-items: center;
        }

        .pd-founder-image {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 30px -12px rgba(0, 0, 0, 0.2);
        }

        .pd-founder-image img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .pd-founder-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .pd-founder-tag svg {
          width: 16px;
          height: 16px;
        }

        .pd-founder h2 {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .pd-founder-text {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }

        .pd-founder-text p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        .pd-founder-highlight {
          font-weight: 600;
          color: #ffffff;
          font-style: italic;
        }

        /* Differentiation Section - White */
        .pd-differentiation {
          min-height: 100vh;
          padding: 56px 20px;
          background: #ffffff;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-differentiation h2 {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #111827;
          text-align: center;
          margin-bottom: 24px;
        }

        .pd-differentiation-content {
          max-width: 768px;
          margin: 0 auto;
          text-align: center;
        }

        .pd-differentiation-content p {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .pd-differentiation-question {
          font-size: 17px;
          color: #111827;
          font-weight: 600;
          margin-top: 20px;
          margin-bottom: 12px;
        }

        .pd-differentiation-answer {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.7;
        }

        /* FAQ Section - Dark Green */
        .pd-faq {
          min-height: 100vh;
          padding: 56px 20px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-faq h2 {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-align: center;
          margin-bottom: 32px;
        }

        .pd-faq-list {
          max-width: 768px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pd-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease;
        }

        .pd-faq-item.active {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          background: rgba(255, 255, 255, 0.08);
        }

        .pd-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        .pd-faq-question span {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.4;
        }

        .pd-faq-toggle {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.2s ease;
        }

        .pd-faq-item.active .pd-faq-toggle {
          background: #25D366;
          color: white;
        }

        .pd-faq-toggle svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .pd-faq-item.active .pd-faq-toggle svg {
          transform: rotate(180deg);
        }

        .pd-faq-answer {
          display: none;
          padding: 0 16px 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 14px;
        }

        .pd-faq-item.active .pd-faq-answer {
          display: block;
        }

        /* Final CTA Section */
        .pd-final-cta {
          min-height: 100vh;
          padding: 56px 20px;
          background: #f9fafb;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pd-final-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(31, 92, 255, 0.3), transparent);
        }

        .pd-final-cta-grid {
          display: grid;
          gap: 32px;
          align-items: center;
          max-width: 896px;
          margin: 0 auto;
        }

        .pd-final-cta-avatar {
          position: relative;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          box-shadow: 0 8px 30px -8px rgba(0, 0, 0, 0.2);
          border: 4px solid white;
        }

        .pd-final-cta-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pd-final-cta-content {
          text-align: center;
        }

        .pd-final-cta h2 {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #111827;
          margin-bottom: 12px;
        }

        .pd-final-cta-content > p {
          font-size: 15px;
          color: #6b7280;
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .pd-final-cta-content > p:last-of-type {
          margin-bottom: 20px;
        }

        .pd-final-cta-highlight {
          font-weight: 600;
          color: #111827;
        }

        .pd-final-cta-tagline {
          font-style: italic;
          color: #1F5CFF;
          font-weight: 500;
        }

        .pd-final-cta-benefits {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }

        .pd-final-cta-benefit {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .pd-final-cta-benefit svg {
          width: 16px;
          height: 16px;
          color: #25D366;
        }

        /* Footer */
        .pd-footer {
          background: #111827;
          border-top: 1px solid #1f2937;
          padding: 28px 20px;
        }

        .pd-footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          max-width: 980px;
          margin: 0 auto;
        }

        .pd-footer-copy {
          font-size: 13px;
          color: white;
          text-align: center;
        }

        .pd-footer-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pd-footer-links a {
          font-size: 13px;
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .pd-footer-links a:hover {
          color: white;
        }

        /* Responsive */
        @media (min-width: 640px) {
          .pd-hero-cta-row {
            flex-direction: row;
            align-items: flex-start;
          }

          .pd-cta-primary {
            width: auto;
          }

          .pd-logo-item {
            padding: 0 48px;
            height: 120px;
          }

          .pd-logo-item img {
            max-height: 80px;
          }

        }

        @media (min-width: 768px) {
          .pd-navbar-container {
            padding: 0 40px;
            height: 72px;
          }

          .pd-mobile-toggle {
            display: none;
          }

          .pd-mobile-menu {
            display: none !important;
          }

          .pd-navbar-links {
            display: flex;
          }

          .pd-navbar-cta {
            display: inline-flex;
          }

          .pd-hero {
            min-height: 100vh;
            padding: 0 48px;
          }

          .pd-hero-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-top: 0;
            height: 100%;
          }

          .pd-hero-content {
            text-align: left;
            padding-right: 0;
            max-width: 600px;
          }

          .pd-hero h1 {
            font-size: 3.25rem;
            line-height: 1.08;
            letter-spacing: -0.03em;
          }

          .pd-hero-subtitle {
            font-size: 1.25rem;
            max-width: 500px;
          }

          .pd-hero-benefits li {
            font-size: 18px;
          }

          .pd-hero-image {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 8%;
            width: 45%;
            max-width: none;
            height: auto;
            opacity: 1;
            z-index: 5;
            align-items: flex-start;
            justify-content: flex-end;
            background: none;
            border-radius: 0;
            padding: 0;
            pointer-events: none;
          }

          .pd-hero-image-wrapper {
            max-width: 500px;
            height: 115%;
            margin-top: -5%;
          }

          .pd-hero-bg-logo {
            width: 500px;
            height: 500px;
            right: 5%;
            opacity: 0.07;
          }

          .pd-cases {
            padding: 60px 48px;
          }

          .pd-cases-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .pd-section-title {
            font-size: 2.5rem;
          }

          .pd-problem-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .pd-problem-card {
            padding: 28px 20px;
          }

          .pd-problem-icon {
            width: 56px;
            height: 56px;
          }

          .pd-casestudy-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .pd-testimonial {
            flex-direction: row;
            text-align: left;
          }

          .pd-testimonial-avatar {
            width: 96px;
            height: 96px;
          }

          .pd-testimonial-content {
            text-align: left;
          }

          .pd-testimonial-quote-icon {
            margin-left: 0;
            margin-right: auto;
          }

          .pd-offer-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .pd-offer-card {
            padding: 32px 20px;
          }

          .pd-offer-icon {
            width: 64px;
            height: 64px;
          }

          .pd-offer-card h3 {
            font-size: 18px;
          }

          .pd-process-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .pd-founder-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pd-final-cta-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pd-final-cta-avatar {
            width: 256px;
            height: 256px;
          }

          .pd-final-cta-content {
            text-align: left;
          }

          .pd-final-cta-benefits {
            justify-content: flex-start;
          }

          .pd-footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        @media (min-width: 1024px) {
          .pd-hero {
            padding: 0 64px;
          }

          .pd-hero-container {
            max-width: 1400px;
            grid-template-columns: 1fr;
            gap: 48px;
            padding-top: 120px;
          }

          .pd-hero-content {
            max-width: 650px;
          }

          .pd-hero h1 {
            font-size: 3.75rem;
            letter-spacing: -0.03em;
          }

          .pd-hero-benefits li {
            font-size: 20px;
            gap: 16px;
          }

          .pd-hero-benefits li::before {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }

          .pd-hero-image {
            width: 50%;
          }

          .pd-hero-image-wrapper {
            max-width: 600px;
            height: 120%;
          }

          .pd-hero-bg-logo {
            width: 600px;
            height: 600px;
            right: 0;
            opacity: 0.08;
          }

          .pd-cta-hero {
            padding: 18px 40px;
            font-size: 16px;
          }

          .pd-section-title {
            font-size: 2.75rem;
          }

          .pd-problem h2 {
            font-size: 2.5rem;
          }

          .pd-offer h2 {
            font-size: 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .pd-hero {
            padding: 0 80px;
          }

          .pd-hero-container {
            max-width: 1500px;
            padding-top: 100px;
          }

          .pd-hero-content {
            max-width: 700px;
          }

          .pd-hero h1 {
            font-size: 4.25rem;
            line-height: 1.05;
            margin-bottom: 32px;
          }

          .pd-hero-benefits {
            gap: 16px;
            margin-bottom: 40px;
          }

          .pd-hero-benefits li {
            font-size: 21px;
          }

          .pd-cta-hero {
            padding: 20px 48px;
            font-size: 17px;
          }

          .pd-hero-image-wrapper {
            max-width: 700px;
          }

          .pd-hero-bg-logo {
            width: 700px;
            height: 700px;
            right: -5%;
            opacity: 0.09;
          }

          .pd-section-title {
            font-size: 3rem;
          }
        }

        @media (min-width: 1536px) {
          .pd-hero-container {
            max-width: 1700px;
          }

          .pd-hero-content {
            max-width: 800px;
          }

          .pd-hero h1 {
            font-size: 4.75rem;
          }

          .pd-hero-benefits li {
            font-size: 22px;
          }

          .pd-hero-image-wrapper {
            max-width: 800px;
          }

          .pd-section-title {
            font-size: 3.25rem;
          }

          .pd-cases-grid {
            gap: 32px;
          }

          .pd-stat-card {
            padding: 32px 24px;
          }

          .pd-stat-value {
            font-size: 2.5rem;
          }
        }

        /* Featured Case Study Section - Gastromedical */
        .pd-featured-case {
          padding: 60px 20px;
          background: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .pd-featured-case-container {
          max-width: 980px;
          margin: 0 auto;
        }

        .pd-featured-case-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .pd-featured-case-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #1F5CFF;
          margin-bottom: 16px;
        }

        .pd-featured-case-title {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .pd-featured-case-subtitle {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 640px;
          margin: 0 auto;
        }

        .pd-featured-metrics {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        @media (min-width: 640px) {
          .pd-featured-metrics {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pd-featured-metric {
          padding: 28px 20px;
          background: #f9fafb;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .pd-featured-metric:hover {
          border-color: rgba(31, 92, 255, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .pd-featured-metric-value {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #1F5CFF 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 8px;
        }

        .pd-featured-metric-label {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.4;
        }

        .pd-featured-note {
          text-align: center;
          font-size: 13px;
          color: #9ca3af;
          margin-bottom: 32px;
          font-style: italic;
        }

        .pd-featured-cta {
          display: flex;
          justify-content: center;
        }

        .pd-featured-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #111827;
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .pd-featured-cta-link:hover {
          background: #1f2937;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .pd-featured-cta-link svg {
          width: 16px;
          height: 16px;
        }

        .pd-featured-case-header-link {
          display: block;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s ease;
        }

        .pd-featured-case-header-link:hover {
          opacity: 0.85;
        }

        .pd-featured-case-header-link:hover .pd-featured-case-title {
          color: #1F5CFF;
        }

        .pd-featured-metrics-link {
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .pd-featured-metrics-link:hover .pd-featured-metric {
          border-color: rgba(31, 92, 255, 0.3);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .pd-featured-case {
            padding: 80px 48px;
          }

          .pd-featured-metric {
            padding: 36px 24px;
          }
        }

        @media (min-width: 1024px) {
          .pd-featured-case {
            padding: 100px 64px;
          }
        }
      `}</style>

      <div className="pd-page">
        {/* Navbar */}
        <nav className={`pd-navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="pd-navbar-container">
            <Link href="/" className="pd-navbar-logo">Anwar Sánchez</Link>

            <ul className="pd-navbar-links">
              {[
                { label: 'Método SEMILLA', href: '#metodo' },
                { label: 'Resultados', href: '#resultados' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Preguntas', href: '#preguntas' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="pd-navbar-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-navbar-cta"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablemos
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <button
              className="pd-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="pd-mobile-menu">
              <ul>
                {[
                  { label: 'Método SEMILLA', href: '#metodo' },
                  { label: 'Resultados', href: '#resultados' },
                  { label: 'Servicios', href: '#servicios' },
                  { label: 'Preguntas', href: '#preguntas' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-mobile-cta"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablemos de tu negocio
              </a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pd-hero">
          <div className="pd-hero-bg">
            {/* Background Logo Watermark - hidden on mobile */}
            <div className="pd-hero-bg-logo">
              <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="80" height="80" rx="16" opacity="0.6"/>
                <rect x="110" y="20" width="70" height="35" rx="8" opacity="0.4"/>
                <rect x="110" y="65" width="70" height="35" rx="8" opacity="0.3"/>
                <rect x="20" y="110" width="160" height="70" rx="16" opacity="0.5"/>
              </svg>
            </div>
          </div>

          <div className="pd-hero-container">
            {/* Hero Image - First on mobile */}
            <div className="pd-hero-image">
              <div className="pd-hero-image-wrapper">
                <Image
                  src={IMAGES.founderPortrait}
                  alt="Anwar Sánchez"
                  fill
                  sizes="(max-width: 768px) 280px, 50vw"
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  priority
                />
              </div>
            </div>

            {/* Hero Content - Below image on mobile */}
            <div className="pd-hero-content">
              <p className="pd-hero-tag">PARTNER DIGITAL</p>
              <h1>
                Tu negocio tiene potencial. Hagamos que más personas lo descubran.
              </h1>
              <p className="pd-hero-subtitle">
                No necesitás hacer más de todo. Necesitás una estrategia que conecte tu negocio con los clientes correctos.
              </p>

              <ul className="pd-hero-benefits">
                <li>Estrategia clara para atraer clientes</li>
                <li>Posicionamiento que genera confianza</li>
                <li>Presencia digital que convierte</li>
              </ul>

              <div className="pd-hero-cta-row">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-hero">
                  Hablemos de tu negocio
                </a>
                <a href="#metodo" onClick={(e) => handleAnchorClick(e, '#metodo')} className="pd-cta-secondary-hero">
                  Conocé el Método Semilla
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section id="casos" className="pd-cases">
          <div className="pd-container">
            <div className="pd-section-header">
              <div className="pd-section-tag">
                <span className="pd-section-tag-dot">·</span>
                Casos de éxito
                <span className="pd-section-tag-dot">·</span>
              </div>
              <h2 className="pd-section-title">Los resultados no se prometen. Se construyen.</h2>
              <p className="pd-section-description">Cada negocio tiene desafíos diferentes, pero todos necesitan lo mismo: entender qué está frenando su crecimiento y tomar decisiones que generen valor.</p>
            </div>

            <div className="pd-cases-grid">
              {cases.map((caseItem) => {
                const CardContent = (
                  <>
                    <div className="pd-case-image" style={{ position: 'relative', aspectRatio: '4/3', minHeight: '180px' }}>
                      <Image
                        src={caseItem.image}
                        alt={caseItem.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                      <span className="pd-case-tag">{caseItem.tag}</span>
                    </div>
                    <div className="pd-case-body">
                      <h3 className="pd-case-name">{caseItem.name}</h3>
                      <div className="pd-case-result">
                        <span className="pd-case-result-value">{caseItem.result}</span>
                        <span className="pd-case-result-label">{caseItem.resultLabel}</span>
                      </div>
                    </div>
                  </>
                );

                return caseItem.isInternal ? (
                  <Link key={caseItem.name} href={caseItem.url} className="pd-case-card">
                    {CardContent}
                  </Link>
                ) : (
                  <a
                    key={caseItem.name}
                    href={caseItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd-case-card"
                  >
                    {CardContent}
                  </a>
                );
              })}
            </div>

            <div className="pd-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="pd-stat-card">
                  <p className="pd-stat-value">{stat.value}</p>
                  <p className="pd-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study - Gastromedical CR */}
        <section className="pd-featured-case">
          <div className="pd-featured-case-container">
            <Link href="/casos-de-exito/gastromedical" className="pd-featured-case-header-link">
              <div className="pd-featured-case-header">
                <span className="pd-featured-case-tag">Caso de Exito · Gastromedical CR</span>
                <h2 className="pd-featured-case-title">Resultados que demuestran el valor de una estrategia digital</h2>
                <p className="pd-featured-case-subtitle">
                  Como ayudamos a una clinica especializada a convertir busquedas en Google y ChatGPT en oportunidades reales de negocio, sin depender de anuncios pagados.
                </p>
              </div>
            </Link>

            <Link href="/casos-de-exito/gastromedical" className="pd-featured-metrics-link">
              <div className="pd-featured-metrics">
                <div className="pd-featured-metric">
                  <div className="pd-featured-metric-value">77%</div>
                  <p className="pd-featured-metric-label">Captacion organica desde Google</p>
                </div>
                <div className="pd-featured-metric">
                  <div className="pd-featured-metric-value">62,5%</div>
                  <p className="pd-featured-metric-label">Conversion a WhatsApp desde ChatGPT</p>
                </div>
                <div className="pd-featured-metric">
                  <div className="pd-featured-metric-value">~4,8x</div>
                  <p className="pd-featured-metric-label">Mayor intencion de contacto desde IA</p>
                </div>
              </div>
            </Link>

            <p className="pd-featured-note">Periodo: 90 dias · Fuente: Google Analytics 4 · Sin publicidad pagada</p>

            <div className="pd-featured-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/casos-de-exito/gastromedical" className="pd-featured-cta-link">
                Ver caso de exito
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a
                href={getWhatsAppUrl('Hola Anwar, vi el caso de éxito de Gastromedical y me gustaría saber cómo podemos mejorar la visibilidad y la captación de clientes de mi negocio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-featured-cta-link"
                style={{ background: '#25D366' }}
              >
                Quiero mejorar mi negocio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Problem Identification Section */}
        <section id="problema" className="pd-problem">
          <div className="pd-problem-content">
            <h2>Tu negocio es bueno en lo que hace. ¿Pero suficientes personas lo saben?</h2>
            <p className="pd-problem-text">
              Has dedicado años a construir tu experiencia y ganarte la confianza de tus clientes. Pero mientras estás concentrado en hacer bien tu trabajo, otras empresas están captando la atención de las personas que podrían necesitar lo que ofrecés.
            </p>
            <p className="pd-problem-text">
              Quizás publicás contenido, tenés una página web o incluso has invertido en publicidad. Pero seguís preguntándote por qué esas acciones no se convierten en suficientes oportunidades comerciales.
            </p>
            <p className="pd-problem-highlight">
              No se trata de estar en todas partes. Se trata de estar donde tus clientes te buscan, comunicar tu valor y facilitar que te elijan.
            </p>
            <div className="pd-problem-grid">
              {problems.map((problem) => (
                <div key={problem.text} className="pd-problem-card">
                  <div className="pd-problem-icon">
                    <problem.icon size={24} strokeWidth={2} />
                  </div>
                  <span>{problem.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section id="resultados" className="pd-casestudy">
          <div className="pd-container">
            <div className="pd-casestudy-header">
              <div className="pd-casestudy-tag">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                Caso de exito verificado
              </div>
              <h2>Gastromedical CR — Clinica de Gastroenterologia</h2>
            </div>

            <div className="pd-casestudy-grid">
              <div className="pd-casestudy-card problem">
                <div className="pd-casestudy-card-header">
                  <div className="pd-casestudy-card-num">1</div>
                  <h3>El desafio</h3>
                </div>
                <p>Necesitaban fortalecer su presencia digital y facilitar que mas personas descubrieran sus servicios de gastroenterologia.</p>
              </div>

              <div className="pd-casestudy-card solution">
                <div className="pd-casestudy-card-header">
                  <div className="pd-casestudy-card-num">2</div>
                  <h3>La estrategia</h3>
                </div>
                <p>Posicionamiento en Google y ChatGPT. Contenido que genera confianza. Conversion optimizada hacia WhatsApp.</p>
              </div>

              <div className="pd-casestudy-card result">
                <div className="pd-casestudy-card-header">
                  <div className="pd-casestudy-card-num">3</div>
                  <h3>Los resultados</h3>
                </div>
                <p className="result-value">77% organico</p>
                <p>De los contactos medidos provino de Google. Sin inversion publicitaria.</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="pd-testimonial">
              <div className="pd-testimonial-avatar">
                <Image
                  src={IMAGES.testimonialAvatar}
                  alt="Dr. Daniel Zuniga"
                  fill
                  sizes="96px"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pd-testimonial-content">
                <svg width="32" height="32" className="pd-testimonial-quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
                <blockquote>
                  &ldquo;Ahora tengo pacientes que me dicen que me encontraron buscando gastroenterologo en su zona. Eso antes casi no pasaba.&rdquo;
                </blockquote>
                <p className="pd-testimonial-author">Dr. Daniel Zuniga</p>
                <p className="pd-testimonial-role">Director Medico, Gastromedical CR</p>
              </div>
            </div>

            <div className="pd-cases-link" style={{ marginTop: '32px' }}>
              <Link href="/casos-de-exito/gastromedical">
                Ver caso completo
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="pd-offer">
          <div className="pd-container">
            <h2>Tu negocio no necesita todas las herramientas. Necesita las correctas.</h2>
            <p className="pd-offer-subtitle">
              Cada empresa tiene objetivos y desafíos diferentes. Por eso no comienzo ofreciéndote un paquete de servicios. Primero entendemos tu negocio y después definimos qué soluciones pueden generar mayor impacto.
            </p>

            <div className="pd-offer-grid">
              {offerItems.map((item) => (
                <div key={item.title} className="pd-offer-card">
                  <div className="pd-offer-icon">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="pd-guarantee">
              <div className="pd-guarantee-icon">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                </svg>
              </div>
              <div>
                <h3>Estrategia personalizada</h3>
                <p>No aplicamos fórmulas genéricas. Cada proyecto comienza con un diagnóstico de tu negocio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Método SEMILLA Section */}
        <section id="metodo" className="pd-process">
          <div className="pd-container">
            <div className="pd-method-header">
              <span className="pd-method-tag">MÉTODO SEMILLA</span>
              <h2>Todo gran crecimiento comienza con una buena semilla.</h2>
              <p className="pd-method-intro">Un negocio no crece solamente por tener presencia digital. Necesita bases sólidas, una estrategia clara y acciones que trabajen juntas. Por eso estructuré el Método SEMILLA: una metodología de cuatro etapas que conecta estrategia, posicionamiento, marketing y tecnología para construir las condiciones que favorecen el crecimiento.</p>
            </div>

            <div className="pd-process-grid pd-process-grid-4">
              {steps.map((step) => (
                <div key={step.title} className="pd-process-card">
                  <div className="pd-process-image">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={280}
                      height={200}
                      style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="pd-process-num">{step.num}</div>
                  <span className="pd-process-subtitle">{step.subtitle}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className="pd-method-cta">
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGE_SEMILLA)} target="_blank" rel="noopener noreferrer" className="pd-cta-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                Aplicá el Método SEMILLA
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="pd-founder">
          <div className="pd-container">
            <div className="pd-founder-grid">
              <div className="pd-founder-image">
                <Image
                  src={IMAGES.founderWorking}
                  alt="Anwar Sánchez trabajando"
                  width={600}
                  height={500}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>

              <div>
                <div className="pd-founder-tag">
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Partner Digital
                </div>
                <h2>Hola, soy Anwar Sánchez.</h2>
                <div className="pd-founder-text">
                  <p>Soy ingeniero de software, emprendedor y apasionado por encontrar formas más inteligentes de hacer crecer negocios.</p>
                  <p>Mi experiencia en tecnología me enseñó algo importante: tener las mejores herramientas no sirve de mucho si no existe una estrategia detrás.</p>
                  <p>Por eso combino tecnología, marketing e inteligencia artificial para ayudar a negocios y profesionales a crecer, atraer clientes y generar nuevas oportunidades.</p>
                  <p>Mi trabajo comienza entendiendo tu negocio, identificando oportunidades y diseñando soluciones que tengan sentido para tus objetivos.</p>
                  <p className="pd-founder-highlight">No quiero ser simplemente otro proveedor. Quiero entender tu visión y trabajar contigo para hacerla avanzar.</p>
                </div>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablemos de tu negocio
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiation Section */}
        <section className="pd-differentiation">
          <div className="pd-container">
            <h2>No necesitás otro proveedor. Necesitás un socio que entienda tu negocio.</h2>
            <div className="pd-differentiation-content">
              <p>Una agencia puede encargarse de tus publicaciones.</p>
              <p>Un desarrollador puede construir tu página web.</p>
              <p>Un especialista puede configurar tus campañas.</p>
              <p className="pd-differentiation-question">Pero, ¿quién se asegura de que todo trabaje en la misma dirección?</p>
              <p className="pd-differentiation-answer">Como Partner Digital, mi trabajo es conectar estrategia, marketing y tecnología con tus objetivos comerciales. Para que cada acción tenga un propósito. Y cada inversión responda a una necesidad real.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="preguntas" className="pd-faq">
          <div className="pd-container">
            <h2>Preguntas frecuentes</h2>

            <div className="pd-faq-list">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`pd-faq-item ${openFaqIndex === index ? 'active' : ''}`}
                >
                  <button
                    className="pd-faq-question"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    <div className="pd-faq-toggle">
                      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </button>
                  <div className="pd-faq-answer">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pd-final-cta">
          <div className="pd-final-cta-grid">
            <div className="pd-final-cta-avatar" style={{ position: 'relative', width: '180px', height: '180px', minWidth: '180px', minHeight: '180px' }}>
              <Image
                src={IMAGES.founderPortrait}
                alt="Anwar Sánchez"
                fill
                sizes="256px"
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="pd-final-cta-content">
              <h2>Has trabajado demasiado para que tu negocio pase desapercibido.</h2>
              <p>Has dedicado tiempo, esfuerzo y recursos a construir algo en lo que creés. Ahora imaginá lo que podrías conseguir si más personas entendieran el valor de lo que ofrecés.</p>
              <p>Si tu presencia digital transmitiera la confianza que tus clientes actuales ya tienen en vos. Y si cada acción que ejecutás tuviera una dirección clara.</p>
              <p className="pd-final-cta-highlight">No necesitás hacerlo todo solo. Hablemos de tu negocio y descubramos qué oportunidades podemos desarrollar juntos.</p>
              <p className="pd-final-cta-tagline">Porque todo gran crecimiento comienza con una buena semilla.</p>

              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Empecemos a hacer crecer tu negocio
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <div className="pd-final-cta-benefits">
                {['Sin compromiso', 'Conversación personalizada', 'Estrategia clara'].map((benefit) => (
                  <div key={benefit} className="pd-final-cta-benefit">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pd-footer">
          <div className="pd-footer-content">
            <p className="pd-footer-copy">© {new Date().getFullYear()} Anwar Sánchez. Todos los derechos reservados.</p>
            <div className="pd-footer-links">
              <Link href="/privacy">Privacidad</Link>
              <Link href="/casos-de-exito">Casos</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
