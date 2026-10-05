'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-logo">Anwar Sánchez</span>
          <span className="footer-tagline">Software · IA · Crecimiento</span>
          <span className="footer-copyright">© 2024</span>
        </div>

        <div className="footer-socials">
          <Link
            href="https://www.youtube.com/@anwarznchez"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            YouTube
          </Link>

          <Link
            href="https://instagram.com/anwar.zl"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
