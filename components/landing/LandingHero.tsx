'use client';

import Image from 'next/image';

export default function LandingHero() {
  return (
    <section className="landing-hero">
      <div className="landing-hero-content">
        <div className="landing-hero-image-container">
          <Image
            src="/anwar-hero.png"
            alt="Anwar Sanchez"
            width={600}
            height={800}
            className="landing-hero-image"
            priority
          />
        </div>
        <h1 className="landing-hero-name" style={{ color: '#ffffff' }}>
          <span className="name-first" style={{ color: '#ffffff' }}>ANWAR</span>
          <span className="name-last" style={{ color: '#ffffff' }}>SANCHEZ</span>
        </h1>
      </div>
    </section>
  );
}
