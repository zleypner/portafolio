'use client';

export default function Proposito() {
  return (
    <section className="landing-section proposito-section" style={{ background: '#0a0a0a' }}>
      <h2 className="landing-section-title" style={{ color: '#ffffff' }}>¿CUÁL ES EL PROPÓSITO DE TODO ESTO?</h2>

      <div className="proposito-content">
        <div className="proposito-item">
          <h3 className="proposito-subtitle" style={{ color: '#ffffff' }}>Familia</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Poder ayudar a sus seres queridos y devolverles todo lo que le dieron, para que nunca tengan que vivir con la preocupación constante del dinero o la falta de tiempo.
          </p>
        </div>

        <div className="proposito-item">
          <h3 className="proposito-subtitle" style={{ color: '#ffffff' }}>Clientes</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Inspirar y crear emprendedores y empresarios fuertes, libres y con control real de sus negocios. Lejos de sistemas tradicionales que los hacen esclavos del trabajo manual y de la incertidumbre. Si Anwar pudo construirlo, todos pueden hacerlo.
          </p>
        </div>

        <blockquote className="proposito-quote" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
          &ldquo;No hay mejor forma de agradecer el conocimiento y las herramientas que uno recibe que poniéndolas al servicio de los demás.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
