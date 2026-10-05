'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-pretitle">
          Software · IA · Crecimiento Digital
        </p>

        <h1 className="hero-title">
          Sistemas que escalan.<br />
          Marcas que convierten.
        </h1>

        <p className="hero-subtitle">
          Ayudo a emprendedores a construir software, automatizar con IA
          y crear marcas personales que generan confianza y ventas reales.
        </p>

        <div className="hero-buttons">
          <Link href="#contacto" className="btn btn-white btn-arrow">
            Hablemos
          </Link>
          <Link href="#servicios" className="btn btn-outline-white btn-arrow">
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
