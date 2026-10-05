'use client';

import Link from 'next/link';

const servicios = [
  {
    num: '01',
    title: 'Software a medida',
    description: 'Desarrollo aplicaciones y sistemas personalizados que automatizan lo repetitivo y liberan tu tiempo para lo que importa.',
  },
  {
    num: '02',
    title: 'Inteligencia Artificial',
    description: 'Implemento soluciones de IA que procesan datos, generan contenido y toman decisiones inteligentes para escalar sin contratar más.',
  },
  {
    num: '03',
    title: 'Marca Personal',
    description: 'Te ayudo a construir una presencia digital que atraiga oportunidades reales, no solo likes. Posicionamiento que convierte.',
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios-header">
        <p className="pre-title">Servicios</p>
        <h2 className="section-title">Lo que hago</h2>
      </div>

      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <div className="servicio-icon">{servicio.num}</div>
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>

      <div className="servicios-cta">
        <Link href="#contacto" className="btn btn-arrow">
          Trabajemos juntos
        </Link>
      </div>
    </section>
  );
}
