'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
const WHATSAPP_PHONE = '50683335408';
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
  founderPortrait: '/assets/yieldge/anwar/anwar-founder.webp',
  founderWorking: '/assets/yieldge/anwar/MFS_5817.webp',
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
    'Trabajás mucho, pero el crecimiento no refleja tu esfuerzo',
    'Tenés un excelente servicio, pero poca visibilidad',
    'Publicás contenido, pero no recibes consultas comerciales',
    'Dependés demasiado de recomendaciones para conseguir clientes',
    'Invertís en marketing sin saber qué está funcionando',
    'No tenés una estrategia clara para crecer',
  ];

  const offerItems = [
    { title: 'Estrategia y Posicionamiento', description: 'Definimos una dirección clara para fortalecer tu marca, diferenciarte y conectar con los clientes correctos.' },
    { title: 'Contenido y Marketing', description: 'Desarrollamos estrategias de comunicación y atracción para generar confianza y nuevas oportunidades.' },
    { title: 'Conversión y Crecimiento', description: 'Mejoramos los canales y procesos que conectan a tus clientes potenciales con tu negocio.' },
    { title: 'Tecnología y Automatización', description: 'Implementamos soluciones digitales que simplifican procesos, ahorran tiempo y mejoran la eficiencia.' },
  ];

  const steps = [
    { num: '01', title: 'Sembrar', subtitle: 'Estrategia', description: 'Analizamos tu negocio y definimos una estrategia clara para conectar tu valor con los clientes correctos.' },
    { num: '02', title: 'Cultivar', subtitle: 'Posicionamiento', description: 'Fortalecemos tu propuesta de valor, diferenciación y comunicación para que las personas correctas te elijan.' },
    { num: '03', title: 'Crecer', subtitle: 'Atracción', description: 'Desarrollamos estrategias de contenido, marketing y tecnología para aumentar tu visibilidad y generar confianza.' },
    { num: '04', title: 'Cosechar', subtitle: 'Conversión', description: 'Optimizamos tus canales digitales para convertir la atención en oportunidades comerciales reales.' },
  ];

  const cases = [
    {
      name: 'Gastromedical',
      image: '/assets/yieldge/presencia-digital/gastro-hero-2.webp',
      result: '+180%',
      resultLabel: 'más citas',
      tag: 'Salud',
      url: 'https://gastromedicalcr.com/',
    },
    {
      name: 'Physical Care',
      image: '/assets/yieldge/cases/image.webp',
      result: '+120%',
      resultLabel: 'más pacientes',
      tag: 'Fisioterapia',
      url: 'https://www.physicalcarefisioterapia.com/',
    },
    {
      name: 'BNG Group',
      image: '/assets/yieldge/cases/Perfil fundador 2.webp',
      result: '2x',
      resultLabel: 'leads calificados',
      tag: 'Retail',
      url: 'https://edward-barnett.com/',
      objectPosition: 'top',
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
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          border-radius: 20px;
          cursor: pointer;
          color: #1d1d1f;
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
          padding: 16px;
          overflow-y: auto;
        }

        .pd-mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .pd-mobile-menu li {
          border-bottom: 1px solid #f0f0f0;
        }

        .pd-mobile-menu a {
          display: block;
          padding: 20px 0;
          font-size: 20px;
          font-weight: 600;
          color: #1d1d1f;
          text-decoration: none;
        }

        .pd-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          height: 48px;
          margin-top: 24px;
          border-radius: 8px;
          background: #25D366;
          color: white;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
        }

        /* Hero Section */
        .pd-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 50%, #0a1f1a 100%);
          overflow: hidden;
          padding: 100px 24px 40px;
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
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .pd-hero-bg-logo {
          position: absolute;
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
          width: 400px;
          height: 400px;
          opacity: 0.06;
        }

        .pd-hero-bg-logo svg {
          width: 100%;
          height: 100%;
          fill: #ffffff;
        }

        .pd-hero-container {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        .pd-hero-content {
          text-align: left;
          padding-right: 0;
        }

        .pd-hero h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.08;
          color: #ffffff;
          margin-bottom: 28px;
        }

        .pd-hero-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 560px;
        }

        .pd-hero-subtitle strong {
          color: #ffffff;
          font-weight: 700;
        }

        .pd-hero-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
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
          align-items: flex-start;
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
          padding: 0 28px;
          height: 52px;
          border-radius: 8px;
          background: #25D366;
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          width: 100%;
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

        .pd-hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .pd-hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 3/4;
        }

        .pd-hero-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          filter: grayscale(20%);
        }

        .pd-hero-image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(13, 41, 34, 0.4) 0%, rgba(20, 61, 51, 0.2) 50%, transparent 100%);
          z-index: 1;
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        .pd-hero-image-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(to top, #0d2922 0%, rgba(13, 41, 34, 0.8) 40%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }

        .pd-hero-image-gradient-left {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100px;
          background: linear-gradient(to right, #0d2922 0%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* Logo Carousel */
        .pd-logos {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(209, 213, 219, 0.6);
        }

        .pd-logos-label {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9ca3af;
          text-align: center;
          margin-bottom: 24px;
        }

        .pd-logos-scroll {
          position: relative;
          overflow: hidden;
        }

        .pd-logos-track {
          display: flex;
          width: max-content;
          animation: pd-scroll-logos 30s linear infinite;
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
          height: 112px;
          padding: 0 40px;
        }

        .pd-logo-item img {
          max-height: 80px;
          width: auto;
          object-fit: contain;
        }

        /* Success Cases Section */
        .pd-cases {
          padding: 64px 24px;
          background: #f9fafb;
        }

        .pd-container {
          max-width: 980px;
          margin: 0 auto;
        }

        .pd-section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pd-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #6b7280;
          margin-bottom: 12px;
        }

        .pd-section-tag-dot {
          color: #1F5CFF;
        }

        .pd-section-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #111827;
          margin-bottom: 16px;
        }

        .pd-section-description {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 640px;
          margin: 0 auto;
        }

        .pd-cases-grid {
          display: grid;
          gap: 24px;
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

        /* Stats Section */
        .pd-stats {
          padding: 48px 24px;
          background: white;
        }

        .pd-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .pd-stat-card {
          text-align: center;
          padding: 24px;
          border-radius: 16px;
          background: linear-gradient(to bottom right, white, #f9fafb);
          border: 1px solid rgba(229, 231, 235, 0.6);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .pd-stat-value {
          font-size: clamp(1.5rem, 3vw, 1.875rem);
          font-weight: 600;
          background: linear-gradient(to right, #1F5CFF, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .pd-stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        /* Problem Section */
        .pd-problem {
          padding: 80px 24px;
          background: #f9fafb;
          position: relative;
        }

        .pd-problem::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(31, 92, 255, 0.3), transparent);
        }

        .pd-problem-content {
          max-width: 768px;
          margin: 0 auto;
        }

        .pd-problem h2 {
          font-size: clamp(1.875rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 24px;
          text-align: center;
        }

        .pd-problem-text {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 16px;
        }

        .pd-problem-highlight {
          font-size: 18px;
          color: #111827;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 32px;
          font-weight: 600;
          padding: 20px;
          background: rgba(31, 92, 255, 0.05);
          border-radius: 12px;
          border-left: 4px solid #1F5CFF;
        }

        .pd-problem-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pd-problem-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 12px;
          background: white;
          border: 1px solid rgba(229, 231, 235, 0.8);
        }

        .pd-problem-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fef2f2;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .pd-problem-item span {
          color: #374151;
        }

        /* Case Study Section */
        .pd-casestudy {
          padding: 80px 24px;
          background: white;
        }

        .pd-casestudy-header {
          text-align: center;
          margin-bottom: 48px;
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

        /* Offer Section */
        .pd-offer {
          padding: 80px 24px;
          background: #f9fafb;
          position: relative;
        }

        .pd-offer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(31, 92, 255, 0.3), transparent);
        }

        .pd-offer h2 {
          font-size: clamp(1.875rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #111827;
          text-align: center;
          margin-bottom: 16px;
        }

        .pd-offer-subtitle {
          font-size: 18px;
          color: #6b7280;
          text-align: center;
          max-width: 640px;
          margin: 0 auto 48px;
        }

        .pd-offer-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 40px;
        }

        .pd-offer-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          border-radius: 12px;
          background: white;
          border: 1px solid rgba(229, 231, 235, 0.8);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        .pd-offer-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: rgba(191, 219, 254, 0.8);
        }

        .pd-offer-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(31, 92, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1F5CFF;
        }

        .pd-offer-icon svg {
          width: 20px;
          height: 20px;
        }

        .pd-offer-item h3 {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 4px;
        }

        .pd-offer-item p {
          font-size: 14px;
          color: #6b7280;
        }

        /* Guarantee Block */
        .pd-guarantee {
          max-width: 640px;
          margin: 0 auto;
          padding: 24px;
          border-radius: 16px;
          background: linear-gradient(to right, rgba(37, 211, 102, 0.1), #ecfdf5);
          border: 1px solid rgba(37, 211, 102, 0.2);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pd-guarantee-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(37, 211, 102, 0.2);
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
          color: #111827;
          margin-bottom: 4px;
        }

        .pd-guarantee p {
          font-size: 14px;
          color: #6b7280;
        }

        /* How It Works Section */
        .pd-process {
          padding: 80px 24px;
          background: #f9fafb;
          position: relative;
        }

        .pd-process::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(31, 92, 255, 0.3), transparent);
        }

        .pd-process h2 {
          font-size: clamp(1.875rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #111827;
          text-align: center;
          margin-bottom: 48px;
        }

        .pd-process-grid {
          display: grid;
          gap: 24px;
          max-width: 896px;
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
          background: white;
          border: 1px solid rgba(229, 231, 235, 0.8);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }

        .pd-process-num {
          position: absolute;
          top: -16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #1F5CFF;
          color: white;
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
          background: rgba(31, 92, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1F5CFF;
          margin-bottom: 16px;
          margin-top: 16px;
        }

        .pd-process-icon svg {
          width: 28px;
          height: 28px;
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
        }

        .pd-process-subtitle {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #1F5CFF;
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
          color: #1F5CFF;
          margin-bottom: 16px;
          padding: 8px 20px;
          background: rgba(31, 92, 255, 0.1);
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

        /* Founder Section */
        .pd-founder {
          padding: 80px 24px;
          background: white;
        }

        .pd-founder-grid {
          display: grid;
          gap: 40px;
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
          background: rgba(37, 211, 102, 0.1);
          color: #25D366;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .pd-founder-tag svg {
          width: 16px;
          height: 16px;
        }

        .pd-founder h2 {
          font-size: clamp(1.875rem, 4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 24px;
        }

        .pd-founder-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .pd-founder-text p {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.6;
        }

        .pd-founder-highlight {
          font-weight: 600;
          color: #111827;
          font-style: italic;
        }

        /* Differentiation Section */
        .pd-differentiation {
          padding: 80px 24px;
          background: linear-gradient(135deg, #0d2922 0%, #143d33 100%);
          position: relative;
        }

        .pd-differentiation h2 {
          font-size: clamp(1.875rem, 4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #ffffff;
          text-align: center;
          margin-bottom: 32px;
        }

        .pd-differentiation-content {
          max-width: 768px;
          margin: 0 auto;
          text-align: center;
        }

        .pd-differentiation-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .pd-differentiation-question {
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
          margin-top: 24px;
          margin-bottom: 16px;
        }

        .pd-differentiation-answer {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
        }

        /* FAQ Section */
        .pd-faq {
          padding: 80px 24px;
          background: white;
        }

        .pd-faq h2 {
          font-size: clamp(1.875rem, 4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #111827;
          text-align: center;
          margin-bottom: 48px;
        }

        .pd-faq-list {
          max-width: 768px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pd-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(229, 231, 235, 0.8);
          background: white;
          transition: all 0.2s ease;
        }

        .pd-faq-item.active {
          border-color: rgba(31, 92, 255, 0.2);
          box-shadow: 0 2px 8px rgba(31, 92, 255, 0.08);
        }

        .pd-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
        }

        .pd-faq-question span {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
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
          background: #f3f4f6;
          color: #6b7280;
          transition: all 0.2s ease;
        }

        .pd-faq-item.active .pd-faq-toggle {
          background: #1F5CFF;
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
          padding: 0 20px 20px;
          color: #6b7280;
          line-height: 1.6;
        }

        .pd-faq-item.active .pd-faq-answer {
          display: block;
        }

        /* Final CTA Section */
        .pd-final-cta {
          padding: 80px 24px;
          background: #f9fafb;
          position: relative;
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
          gap: 40px;
          align-items: center;
          max-width: 896px;
          margin: 0 auto;
        }

        .pd-final-cta-avatar {
          position: relative;
          width: 192px;
          height: 192px;
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
          font-size: clamp(1.875rem, 4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 16px;
        }

        .pd-final-cta-content > p {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 12px;
        }

        .pd-final-cta-content > p:last-of-type {
          margin-bottom: 24px;
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
          gap: 16px;
          margin-top: 24px;
        }

        .pd-final-cta-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
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
          padding: 32px 24px;
        }

        .pd-footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: 980px;
          margin: 0 auto;
        }

        .pd-footer-copy {
          font-size: 14px;
          color: white;
        }

        .pd-footer-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .pd-footer-links a {
          font-size: 14px;
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .pd-footer-links a:hover {
          color: white;
        }

        /* Responsive */
        @media (min-width: 640px) {
          .pd-hero-cta-row {
            flex-direction: row;
          }

          .pd-cta-primary {
            width: auto;
          }

          .pd-logo-item {
            padding: 0 64px;
            height: 144px;
          }

          .pd-logo-item img {
            max-height: 96px;
          }

          .pd-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .pd-offer-grid {
            grid-template-columns: repeat(2, 1fr);
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
            padding: 0 48px;
            min-height: 100vh;
          }

          .pd-hero-container {
            grid-template-columns: 1.2fr 1fr;
            gap: 32px;
          }

          .pd-hero-content {
            padding-right: 24px;
          }

          .pd-hero h1 {
            font-size: 2.75rem;
            line-height: 1.1;
          }

          .pd-hero-subtitle {
            font-size: 18px;
          }

          .pd-hero-image {
            justify-content: flex-end;
          }

          .pd-hero-image-wrapper {
            max-width: 420px;
            aspect-ratio: 3/4;
          }

          .pd-hero-bg-logo {
            width: 500px;
            height: 500px;
            right: 5%;
            opacity: 0.07;
          }

          .pd-cases {
            padding: 80px 40px;
          }

          .pd-cases-grid {
            grid-template-columns: repeat(3, 1fr);
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
            grid-template-columns: repeat(3, 1fr);
          }

          .pd-process-grid {
            grid-template-columns: repeat(3, 1fr);
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
            grid-template-columns: 1.1fr 1fr;
            gap: 48px;
          }

          .pd-hero-content {
            padding-right: 40px;
          }

          .pd-hero h1 {
            font-size: 3.25rem;
            letter-spacing: -0.03em;
          }

          .pd-hero-subtitle {
            font-size: 19px;
            max-width: 520px;
          }

          .pd-hero-image-wrapper {
            max-width: 480px;
          }

          .pd-hero-bg-logo {
            width: 600px;
            height: 600px;
            right: 0;
            opacity: 0.08;
          }

          .pd-hero-image-gradient-left {
            width: 120px;
          }
        }

        @media (min-width: 1280px) {
          .pd-hero {
            padding: 0 80px;
          }

          .pd-hero-container {
            max-width: 1500px;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }

          .pd-hero-content {
            padding-right: 60px;
          }

          .pd-hero h1 {
            font-size: 3.75rem;
            line-height: 1.05;
            margin-bottom: 32px;
          }

          .pd-hero-subtitle {
            font-size: 21px;
            line-height: 1.65;
            max-width: 580px;
            margin-bottom: 40px;
          }

          .pd-cta-hero {
            padding: 20px 44px;
            font-size: 17px;
          }

          .pd-hero-image-wrapper {
            max-width: 520px;
          }

          .pd-hero-bg-logo {
            width: 700px;
            height: 700px;
            right: -5%;
            opacity: 0.09;
          }

          .pd-hero-image-gradient-left {
            width: 150px;
          }
        }

        @media (min-width: 1536px) {
          .pd-hero-container {
            max-width: 1600px;
          }

          .pd-hero h1 {
            font-size: 4rem;
          }

          .pd-hero-subtitle {
            font-size: 22px;
          }

          .pd-hero-image-wrapper {
            max-width: 580px;
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
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablemos
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            {/* Background Logo Watermark */}
            <div className="pd-hero-bg-logo">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="80" height="80" rx="16" opacity="0.6"/>
                <rect x="110" y="20" width="70" height="35" rx="8" opacity="0.4"/>
                <rect x="110" y="65" width="70" height="35" rx="8" opacity="0.3"/>
                <rect x="20" y="110" width="160" height="70" rx="16" opacity="0.5"/>
              </svg>
            </div>
          </div>

          <div className="pd-hero-container">
            <div className="pd-hero-content">
              <p className="pd-hero-tag">ANWAR SÁNCHEZ · PARTNER DIGITAL</p>
              <h1>
                Tu negocio tiene potencial. Hagamos que ese potencial se convierta en crecimiento.
              </h1>

              <p className="pd-hero-subtitle">
                Trabajás todos los días para ofrecer lo mejor, pero conseguir nuevos clientes no debería depender solamente de recomendaciones o publicaciones que no generan resultados. Te ayudo a construir una estrategia para atraer mejores clientes, fortalecer tu marca y convertir tu presencia digital en oportunidades reales de negocio.
              </p>

              <div className="pd-hero-cta-row">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-hero">
                  Hablemos de tu negocio
                </a>
                <a href="#metodo" onClick={(e) => handleAnchorClick(e, '#metodo')} className="pd-cta-secondary-hero">
                  Conocé el Método SEMILLA
                </a>
              </div>
              <p className="pd-hero-microcopy">Primero entendemos tu negocio. Después construimos la estrategia.</p>
            </div>

            {/* Hero Image */}
            <div className="pd-hero-image">
              <div className="pd-hero-image-wrapper">
                <Image
                  src={IMAGES.founderPortrait}
                  alt="Anwar Sánchez"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
                <div className="pd-hero-image-gradient" />
                <div className="pd-hero-image-gradient-left" />
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
              {cases.map((caseItem) => (
                <a
                  key={caseItem.name}
                  href={caseItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-case-card"
                >
                  <div className="pd-case-image">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      style={{ objectFit: 'cover', objectPosition: caseItem.objectPosition || 'center' }}
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
                </a>
              ))}
            </div>

            <div className="pd-cases-link">
              <Link href="/casos-de-exito">
                Ver todos los casos de éxito
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pd-stats">
          <div className="pd-container">
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

        {/* Emotional Connection Section */}
        <section id="problema" className="pd-problem">
          <div className="pd-problem-content">
            <h2>Hacés un excelente trabajo. Pero eso no significa que todos lo sepan.</h2>
            <p className="pd-problem-text">
              Has dedicado años a construir tu experiencia, mejorar tus servicios y ganarte la confianza de tus clientes. Pero mientras estás concentrado en hacer bien tu trabajo, otras empresas están captando la atención de las personas que podrían necesitar lo que ofrecés.
            </p>
            <p className="pd-problem-text">
              Quizás publicás contenido, tenés una página web o incluso has invertido en publicidad. Pero seguís preguntándote por qué esas acciones no se convierten en suficientes oportunidades comerciales.
            </p>
            <p className="pd-problem-highlight">
              El problema no siempre es lo que ofrecés. Muchas veces es la falta de una estrategia que conecte tu valor con los clientes correctos.
            </p>
            <div className="pd-problem-list">
              {problems.map((problem) => (
                <div key={problem} className="pd-problem-item">
                  <span className="pd-problem-icon">✕</span>
                  <span>{problem}</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                Caso de éxito destacado
              </div>
              <h2>Dr. Daniel Zúñiga — Gastromedical CR</h2>
            </div>

            <div className="pd-casestudy-grid">
              <div className="pd-casestudy-card problem">
                <div className="pd-casestudy-card-header">
                  <div className="pd-casestudy-card-num">1</div>
                  <h3>El problema</h3>
                </div>
                <p>Sitio web básico, sin SEO, casi todos los pacientes llegaban por referidos. No aparecía en Google.</p>
              </div>

              <div className="pd-casestudy-card solution">
                <div className="pd-casestudy-card-header">
                  <div className="pd-casestudy-card-num">2</div>
                  <h3>Lo que hicimos</h3>
                </div>
                <p>Rediseño completo enfocado en confianza. Páginas por tratamiento. SEO local real. Botón de WhatsApp integrado.</p>
              </div>

              <div className="pd-casestudy-card result">
                <div className="pd-casestudy-card-header">
                  <div className="pd-casestudy-card-num">3</div>
                  <h3>El resultado</h3>
                </div>
                <p className="result-value">+180% consultas</p>
                <p>En 4 meses, la mitad de pacientes nuevos llegaban desde Google. Sin publicidad pagada.</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="pd-testimonial">
              <div className="pd-testimonial-avatar">
                <Image
                  src={IMAGES.testimonialAvatar}
                  alt="Dr. Daniel Zúñiga"
                  fill
                  sizes="96px"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pd-testimonial-content">
                <svg className="pd-testimonial-quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
                <blockquote>
                  &ldquo;Antes casi todo llegaba por referidos. Hoy hay semanas en que la mitad de las consultas vienen del sitio — y por fin se ve como la clínica que somos.&rdquo;
                </blockquote>
                <p className="pd-testimonial-author">Dr. Daniel Zúñiga</p>
                <p className="pd-testimonial-role">Director Médico, Gastromedical CR</p>
              </div>
            </div>

            <div className="pd-cases-link" style={{ marginTop: '32px' }}>
              <Link href="/casos-de-exito">
                Ver todos los casos de éxito
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
                <div key={item.title} className="pd-offer-item">
                  <div className="pd-offer-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pd-guarantee">
              <div className="pd-guarantee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              {steps.map((step, index) => (
                <div key={step.title} className="pd-process-card">
                  <div className="pd-process-num">{step.num}</div>
                  <div className="pd-process-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {index === 0 && <><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 22 4-10 4 10"/></>}
                      {index === 1 && <><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12V2"/><path d="M12 22c5.5 0 10-4.5 10-10"/></>}
                      {index === 2 && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>}
                      {index === 3 && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>}
                    </svg>
                  </div>
                  <span className="pd-process-subtitle">{step.subtitle}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className="pd-method-cta">
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGE_SEMILLA)} target="_blank" rel="noopener noreferrer" className="pd-cta-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                Descubrí el Método SEMILLA
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Partner Digital
                </div>
                <h2>Soy Anwar Sánchez. Y entiendo que detrás de cada negocio hay mucho más que números.</h2>
                <div className="pd-founder-text">
                  <p>Hay años de esfuerzo, decisiones difíciles y una visión que querés convertir en realidad.</p>
                  <p>Soy ingeniero de software, empresario y Partner Digital, con más de diez años de experiencia en tecnología. Mi trayectoria me ha enseñado a resolver problemas, construir soluciones y pensar estratégicamente.</p>
                  <p>Pero emprender también me enseñó algo importante: podés tener un excelente servicio y aun así enfrentar dificultades para hacerlo crecer.</p>
                  <p>Por eso hoy combino tecnología, marketing y estrategia de negocios para ayudar a profesionales y empresas a identificar oportunidades y construir una presencia digital que contribuya a sus objetivos comerciales.</p>
                  <p className="pd-founder-highlight">No quiero ser simplemente otro proveedor. Quiero entender tu visión y trabajar contigo para hacerla avanzar.</p>
                </div>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Conocé mi historia
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="pd-final-cta-avatar">
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
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablemos de tu negocio
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <div className="pd-final-cta-benefits">
                {['Sin compromiso', 'Conversación personalizada', 'Estrategia clara'].map((benefit) => (
                  <div key={benefit} className="pd-final-cta-benefit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
