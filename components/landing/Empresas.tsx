'use client';

export default function Empresas() {
  return (
    <section id="empresas" className="landing-section empresas-section" style={{ background: '#0a0a0a' }}>
      <h2 className="landing-section-title" style={{ color: '#ffffff' }}>EMPRESAS</h2>

      <div className="empresas-logos">
        <div className="empresa-logo">
          <img
            src="/logos/yieldge.svg"
            alt="Yieldge Software"
            style={{ height: '50px', width: 'auto' }}
          />
        </div>
        <div className="empresa-logo">
          <img
            src="/logos/a4ascend.svg"
            alt="A4 Ascend"
            style={{ height: '50px', width: 'auto' }}
          />
        </div>
        <div className="empresa-logo">
          <img
            src="/logos/north8.svg"
            alt="North 8 Partners"
            style={{ height: '50px', width: 'auto' }}
          />
        </div>
      </div>

      <div className="empresas-divider"></div>
    </section>
  );
}
