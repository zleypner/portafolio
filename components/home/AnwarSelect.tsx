'use client';

import Link from 'next/link';

export default function AnwarSelect() {
  return (
    <section id="anwar-select" className="anwar-select">
      <div className="anwar-select-container">
        <p className="pre-title">Exclusivo</p>

        <h2 className="section-title">Anwar Select</h2>

        <p className="anwar-select-tagline">
          El círculo interno para emprendedores serios
        </p>

        <p className="anwar-select-description">
          Acceso directo a mí, estrategias personalizadas y una comunidad
          de emprendedores construyendo negocios reales con software e IA.
        </p>

        <ul className="anwar-select-benefits">
          <li>Llamadas grupales</li>
          <li>Acceso directo</li>
          <li>Red de contactos</li>
          <li>Recursos exclusivos</li>
        </ul>

        <Link href="#contacto" className="btn btn-arrow">
          Aplicar
        </Link>

        <p className="anwar-select-note">
          Cupos limitados
        </p>
      </div>
    </section>
  );
}
