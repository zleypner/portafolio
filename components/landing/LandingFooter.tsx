'use client';

import Link from 'next/link';

export default function LandingFooter() {
  return (
    <footer className="landing-footer" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="landing-footer-container">
        <div className="landing-footer-left">
          <span className="landing-footer-name" style={{ color: '#ffffff' }}>ANWAR SANCHEZ</span>
        </div>

        <div className="landing-footer-center">
          <Link href="/privacy" className="landing-footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Políticas de privacidad
          </Link>
        </div>

        <div className="landing-footer-right">
          <a
            href="https://www.instagram.com/anwar.zl/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-footer-social"
            aria-label="Instagram"
            style={{ color: '#ffffff' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
