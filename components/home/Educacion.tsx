'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Educacion() {
  return (
    <section id="educacion" className="educacion">
      <div className="educacion-container">
        <Link
          href="https://www.youtube.com/@anwarznchez"
          target="_blank"
          rel="noopener noreferrer"
          className="educacion-image"
        >
          <Image
            src="/anwar-hero.jpg"
            alt="YouTube"
            width={800}
            height={1000}
            style={{ objectFit: 'cover' }}
          />
        </Link>

        <div className="educacion-content">
          <p className="pre-title">Contenido</p>
          <h2 className="section-title">
            Estrategias reales.<br />
            Sin rodeos.
          </h2>
          <p>
            Cada semana comparto lo que funciona en software, IA y crecimiento digital.
            El tipo de contenido que otros cobran miles por enseñar.
          </p>
          <p>
            <strong>Todo gratis en YouTube.</strong>
          </p>

          <div className="educacion-stats">
            <span className="educacion-stat">
              <strong>50+</strong>
              Videos
            </span>
            <span className="educacion-stat">
              <strong>10K+</strong>
              Views
            </span>
          </div>

          <Link
            href="https://www.youtube.com/@anwarznchez"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-arrow"
          >
            Ver canal
          </Link>
        </div>
      </div>
    </section>
  );
}
