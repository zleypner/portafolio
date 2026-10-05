'use client';

import Image from 'next/image';

const empresas = [
  { name: 'Yieldge Software', logo: '/logos/yieldge.svg' },
  { name: 'A4 Ascend', logo: '/logos/a4ascend.svg' },
  { name: 'North 8 Partners', logo: '/logos/north8.svg' },
];

export default function Empresas() {
  return (
    <section className="empresas">
      <div className="empresas-container">
        <p className="pre-title">HAN CONFIADO EN MÍ</p>

        <div className="empresas-logos">
          {empresas.map((empresa, index) => (
            <div key={index} className="empresa-logo">
              <Image
                src={empresa.logo}
                alt={empresa.name}
                width={150}
                height={45}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
