'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="sobre-mi-container">
        <div className="sobre-mi-content">
          <p className="pre-title">Sobre mí</p>

          <h2 className="section-title">
            Construí lo que enseño
          </h2>

          <p>
            Empecé sin conexiones ni capital. Solo una obsesión por entender
            cómo funcionan los sistemas que generan resultados reales.
          </p>

          <p>
            Años construyendo software, implementando IA y creciendo marcas
            me enseñaron lo que funciona. <strong>No teoría. Práctica.</strong>
          </p>

          <p>
            Hoy ayudo a emprendedores a hacer lo mismo: sistemas inteligentes
            que trabajan por ellos.
          </p>

          <Link href="#contacto" className="btn btn-arrow">
            Conectar
          </Link>
        </div>

        <div className="sobre-mi-image">
          <Image
            src="/anwar-about.jpg"
            alt="Anwar Sánchez"
            width={500}
            height={650}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
