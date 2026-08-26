import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-socials">
        <Link
          href="https://linkedin.com/in/anwarcrzl"
          className="footer-social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00CC7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" ry="3"></rect>
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fontWeight="bold"
              fill="#00CC7A"
            >
              in
            </text>
          </svg>
        </Link>
        <Link
          href="https://x.com/anwar_crzl"
          className="footer-social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) Profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00CC7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </Link>
        <Link
          href="https://github.com/anwar-cr"
          className="footer-social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00CC7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Link>
        <Link
          href="https://instagram.com/anwar.zl"
          className="footer-social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00CC7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <circle cx="12" cy="12" r="4"></circle>
            <circle cx="17.5" cy="6.5" r="1.5"></circle>
          </svg>
        </Link>
      </div>

      <div className="footer-content">
        <div className="footer-quote">Every line of code is a step toward freedom.</div>
        <div className="footer-location">Born in LATAM. Building for the world.</div>
      </div>

      <div className="footer-copyright">© 2025 Anwar</div>
    </footer>
  );
}
