'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
const WHATSAPP_PHONE = '50683335408';
const WHATSAPP_MESSAGE = 'Hola Anwar, vi su página de sitios web para clínicas. Me interesa solicitar la auditoría gratuita.';

function getWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

// Logo data
const LOGOS = [
  { name: '3M', logo: '/assets/yieldge/logos/3m.png', large: false },
  { name: 'Gastromedical CR', logo: '/assets/yieldge/logos/drzuniga-logo.png', large: true },
  { name: 'PHYC', logo: '/assets/yieldge/logos/phyclogo-removedbg.png', large: false },
  { name: 'HS', logo: '/assets/yieldge/logos/hslogo.png', large: false },
  { name: 'Construrack', logo: '/assets/yieldge/logos/construrack.png', large: false },
  { name: 'Quant Energy', logo: '/assets/yieldge/logos/quant_energy.png', large: false },
];

// Images
const IMAGES = {
  heroMockup: '/assets/yieldge/presencia-digital/gastro-hero-2.webp',
  testimonialAvatar: '/assets/yieldge/presencia-digital/gastro-hero-2.webp',
  founderPortrait: '/assets/yieldge/anwar/anwar-founder.jpg',
  founderWorking: '/assets/yieldge/anwar/MFS_5817.jpg',
};

export default function PresenciaDigitalPage() {
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
      question: '¿Cuánto cuesta un sitio web?',
      answer: 'Depende de cuántas páginas y funcionalidades necesite. No tengo paquetes genéricos porque cada clínica es diferente. Después de hablar, le doy un precio exacto sin sorpresas.',
    },
    {
      question: '¿Cuánto tiempo toma?',
      answer: 'Una landing page: aproximadamente 1 semana. Sitio completo de 5+ páginas: 2-3 semanas. Siempre le doy una fecha clara antes de empezar.',
    },
    {
      question: '¿Garantizan que apareceré primero en Google?',
      answer: 'No. Nadie puede garantizar eso honestamente. Lo que sí garantizo: su sitio estará técnicamente optimizado para SEO, con contenido relevante para cada tratamiento que ofrece.',
    },
    {
      question: '¿Qué pasa si no me gusta el diseño?',
      answer: 'Lo rehacemos hasta que quede satisfecho. No publicamos nada que no apruebe. Así de simple.',
    },
    {
      question: '¿Necesito pagar mantenimiento mensual?',
      answer: 'No es obligatorio. El sitio es 100% suyo. Si quiere que me encargue del hosting y actualizaciones, ofrezco un plan opcional. Pero puede manejarlo usted mismo.',
    },
    {
      question: '¿Por qué trabajar con usted y no con una agencia?',
      answer: 'Conmigo trabaja directo. Sin vendedores, sin account managers, sin intermediarios. Eso significa mejor comunicación, entregas más rápidas y generalmente mejor precio.',
    },
  ];

  const stats = [
    { value: '+180%', label: 'Consultas en Gastromedical' },
    { value: '2-3 sem', label: 'Tiempo de entrega' },
    { value: '15+ años', label: 'Experiencia en tecnología' },
    { value: '100%', label: 'Propiedad para usted' },
  ];

  const problems = [
    'Su sitio actual no aparece cuando buscan su especialidad',
    'Los pacientes llegan por referidos, pero no desde Google',
    'El diseño se ve anticuado y no refleja la calidad de su clínica',
    'No tiene forma fácil de que le contacten por WhatsApp',
  ];

  const offerItems = [
    { title: 'Diseño premium personalizado', description: 'No plantillas. Cada sitio se diseña desde cero para reflejar el nivel de su clínica.' },
    { title: 'Página por especialidad', description: 'Cada servicio tiene su propia página optimizada para Google.' },
    { title: 'SEO local incluido', description: 'Configuración técnica para que aparezca cuando busquen su especialidad en su zona.' },
    { title: 'WhatsApp integrado', description: 'Los pacientes contactan con un clic. Sin formularios complicados.' },
    { title: 'Versión en inglés (opcional)', description: 'Ideal para turismo médico. Atraiga pacientes internacionales.' },
    { title: 'Optimizado para móvil', description: 'Más del 70% de las visitas son desde celular. Su sitio funciona perfecto.' },
    { title: '100% suyo', description: 'El código, el diseño, el dominio — todo es de su propiedad.' },
  ];

  const steps = [
    { num: '01', title: 'Llamada de 15 minutos', description: 'Hablamos de su clínica, sus pacientes y qué necesita. Sin pitch de ventas.' },
    { num: '02', title: 'Propuesta de diseño', description: 'Le muestro cómo se vería su sitio. Usted aprueba o pedimos cambios.' },
    { num: '03', title: 'Publicación en 1-3 semanas', description: 'Su sitio sale al aire optimizado para Google. Empieza a recibir consultas.' },
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
      image: '/assets/yieldge/cases/image.png',
      result: '+120%',
      resultLabel: 'más pacientes',
      tag: 'Fisioterapia',
      url: 'https://www.physicalcarefisioterapia.com/',
    },
    {
      name: 'BNG Group',
      image: '/assets/yieldge/cases/Perfil fundador 2.png',
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
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
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
          min-height: calc(100vh - 52px);
          display: flex;
          align-items: center;
          background: linear-gradient(to bottom, #eff4ff, white, white);
          overflow: hidden;
          padding: 96px 24px 32px;
        }

        .pd-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .pd-hero-bg-circle-1 {
          position: absolute;
          top: 50%;
          right: 25%;
          transform: translateY(-50%);
          width: 800px;
          height: 800px;
          background: rgba(31, 92, 255, 0.08);
          border-radius: 50%;
          filter: blur(120px);
        }

        .pd-hero-bg-circle-2 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 500px;
          height: 500px;
          background: rgba(31, 92, 255, 0.05);
          border-radius: 50%;
          filter: blur(60px);
        }

        .pd-hero-container {
          position: relative;
          z-index: 10;
          max-width: 768px;
          margin: 0 auto;
          width: 100%;
        }

        .pd-hero-content {
          text-align: center;
        }

        .pd-hero-avatar {
          position: relative;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 32px;
          box-shadow: 0 8px 40px -8px rgba(0, 0, 0, 0.15);
          border: 4px solid white;
        }

        .pd-hero-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pd-hero h1 {
          font-size: clamp(2.25rem, 4.2vw, 3.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.08;
          color: #111827;
          margin-bottom: 20px;
        }

        .pd-hero h1 span {
          color: #1F5CFF;
        }

        .pd-hero-subtitle {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
        }

        .pd-hero-cta-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
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

        .pd-hero-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 14px;
          color: #6b7280;
        }

        .pd-hero-trust span {
          font-weight: 500;
          color: #374151;
        }

        .pd-hero-trust-dot {
          width: 4px;
          height: 4px;
          background: #d1d5db;
          border-radius: 50%;
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
          margin-bottom: 32px;
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
          background: white;
          border-top: 1px solid #f3f4f6;
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
          color: #6b7280;
        }

        .pd-footer-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .pd-footer-links a {
          font-size: 14px;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .pd-footer-links a:hover {
          color: #374151;
        }

        /* Responsive */
        @media (min-width: 640px) {
          .pd-hero-cta-row {
            flex-direction: row;
            justify-content: center;
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

          .pd-hero-avatar {
            width: 220px;
            height: 220px;
          }

          .pd-hero {
            padding: 112px 40px 40px;
          }

          .pd-hero-subtitle {
            font-size: 19px;
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
            padding: 128px 48px 48px;
          }
        }
      `}</style>

      <div className="pd-page">
        {/* Navbar */}
        <nav className={`pd-navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="pd-navbar-container">
            <Link href="/" className="pd-navbar-logo">Yieldge</Link>

            <ul className="pd-navbar-links">
              {[
                { label: 'Resultados', href: '#resultados' },
                { label: 'Paquetes', href: '#paquetes' },
                { label: 'Cómo funciona', href: '#como-funciona' },
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
              Solicitar auditoría
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
                  { label: 'Resultados', href: '#resultados' },
                  { label: 'Paquetes', href: '#paquetes' },
                  { label: 'Cómo funciona', href: '#como-funciona' },
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
                Solicitar auditoría
              </a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pd-hero">
          <div className="pd-hero-bg">
            <div className="pd-hero-bg-circle-1" />
            <div className="pd-hero-bg-circle-2" />
          </div>

          <div className="pd-hero-container">
            <div className="pd-hero-content">
              {/* Hero Avatar */}
              <div className="pd-hero-avatar">
                <Image
                  src={IMAGES.founderPortrait}
                  alt="Anwar Sánchez"
                  fill
                  sizes="180px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              <h1>
                Un sitio web que le trae <span>clientes</span>, no solo visitas
              </h1>

              <p className="pd-hero-subtitle">
                Diseñamos sitios que aparecen en Google y convierten visitas en consultas, citas, reservaciones y cotizaciones por WhatsApp.
              </p>

              <div className="pd-hero-cta-row">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar diagnóstico
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#casos" className="pd-cta-secondary">
                  Ver casos de éxito
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="pd-hero-trust">
                <span>+100 proyectos</span>
                <div className="pd-hero-trust-dot" />
                <span>1-2 semanas</span>
              </div>
            </div>

            {/* Logo carousel */}
            <div className="pd-logos">
              <p className="pd-logos-label">Negocios que ya confían en nosotros</p>
              <div className="pd-logos-scroll">
                <div className="pd-logos-track">
                  {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((company, index) => (
                    <div key={`${company.name}-${index}`} className="pd-logo-item">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={company.large ? 280 : 220}
                        height={90}
                        style={{ maxHeight: company.large ? '96px' : '80px', width: 'auto', objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
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
              <h2 className="pd-section-title">Resultados reales para negocios reales</h2>
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

        {/* Problem Section */}
        <section id="problema" className="pd-problem">
          <div className="pd-problem-content">
            <h2>¿Su sitio web le está costando pacientes?</h2>
            <p className="pd-problem-text">
              Cada día, personas buscan en Google médicos y especialistas. Si no aparece — o si su sitio no genera confianza — eligen a la competencia.
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

        {/* Offer Section */}
        <section id="paquetes" className="pd-offer">
          <div className="pd-container">
            <h2>Todo lo que incluye</h2>
            <p className="pd-offer-subtitle">
              Sin paquetes confusos ni extras innecesarios. Esto es lo que construimos para cada clínica.
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
                <h3>Garantía de diseño</h3>
                <p>Si no le gusta el diseño, lo rehacemos. No publicamos nada hasta que esté satisfecho.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="pd-process">
          <div className="pd-container">
            <h2>Así de simple funciona</h2>

            <div className="pd-process-grid">
              {steps.map((step, index) => (
                <div key={step.title} className="pd-process-card">
                  <div className="pd-process-num">{String(index + 1).padStart(2, '0')}</div>
                  <div className="pd-process-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {index === 0 && <><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></>}
                      {index === 1 && <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></>}
                      {index === 2 && <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></>}
                    </svg>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
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
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>

              <div>
                <div className="pd-founder-tag">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  +180% más consultas en 4 meses
                </div>
                <h2>Hola, soy Anwar Sánchez</h2>
                <div className="pd-founder-text">
                  <p>Llevo más de 15 años desarrollando tecnología. He trabajado con startups, corporaciones y clínicas en Costa Rica, Estados Unidos y Latinoamérica.</p>
                  <p>Me especializo en crear sitios web que no solo se ven bien, sino que generan resultados medibles: más consultas, más pacientes, más crecimiento.</p>
                  <p>Cada proyecto lo manejo personalmente. Sin intermediarios, sin vendedores. Usted habla directo conmigo.</p>
                </div>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablemos de su proyecto
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
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
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="pd-final-cta-content">
              <h2>¿Listo para más pacientes?</h2>
              <p>Hablemos 15 minutos. Le cuento cómo podemos ayudarle y si tiene sentido trabajar juntos.</p>
              <p>Sin compromiso. Si no soy la persona correcta para su proyecto, se lo digo.</p>

              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="pd-cta-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar auditoría gratuita
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <div className="pd-final-cta-benefits">
                {['Sin compromiso', 'Respuesta en 24h', 'Diagnóstico gratuito'].map((benefit) => (
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
            <p className="pd-footer-copy">© {new Date().getFullYear()} Yieldge. Todos los derechos reservados.</p>
            <div className="pd-footer-links">
              <Link href="/privacy">Privacidad</Link>
              <Link href="/">Inicio</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
