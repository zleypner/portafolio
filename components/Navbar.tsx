'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="#home"></Link>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <Link href="#home" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link href="#projects" className="nav-link" onClick={closeMenu}>Projects</Link>
          <Link href="#milestones" className="nav-link" onClick={closeMenu}>Milestones</Link>
          <Link href="#contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          <a
            href="/Anwar Sanchez CV Full Stack.pdf"
            className="nav-link resume-btn"
            download="Anwar_Sanchez_CV_Full_Stack.pdf"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
        <div
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
