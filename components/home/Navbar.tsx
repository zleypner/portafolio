'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          ANWAR SÁNCHEZ
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button
              onClick={() => scrollToSection('educacion')}
              className="navbar-link"
            >
              Educación
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('servicios')}
              className="navbar-link"
            >
              Servicios
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('anwar-select')}
              className="navbar-link"
            >
              Anwar Select
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="navbar-link"
            >
              Sobre Mí
            </button>
          </li>
          <li className="navbar-cta">
            <Link href="#contacto" className="btn btn-primary btn-arrow">
              Explora una Alianza
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
