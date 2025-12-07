'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  useEffect(() => {
    // Remove typewriter cursor after animation
    const typewriterTimeout = setTimeout(() => {
      const typewriter = document.querySelector('.typewriter') as HTMLElement;
      if (typewriter) typewriter.style.borderRight = 'none';
    }, 2500);

    // Remove subtitle cursor after animation
    const subtitleTimeout = setTimeout(() => {
      const subtitle = document.querySelector('.typewriter-subtitle') as HTMLElement;
      if (subtitle) subtitle.style.borderRight = 'none';
    }, 5000);

    return () => {
      clearTimeout(typewriterTimeout);
      clearTimeout(subtitleTimeout);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1 className="typewriter">
          Hi, I&apos;m <span className="glitch" data-text="Anwar">Anwar</span>
        </h1>
        <p className="typewriter-subtitle">Software Engineer | Full-Stack • AI/ML • Cloud • Security</p>
        
        <p className="hero-value-proposition">
          Specializing in the secure integration of AI/ML models into scalable, cloud-based full-stack applications.
        </p>

        <div className="hero-cta-buttons">
          <Link href="#projects" className="cta-primary">
            View My Projects
          </Link>
          <Link href="#contact" className="cta-secondary">
            Contact Me
          </Link>
        </div>

        <div className="socials">
          <Link href="https://www.linkedin.com/in/anwardev/" target="_blank" aria-label="LinkedIn Profile">
            💼 LinkedIn
          </Link>
          <Link href="https://x.com/anwar_zlcr" target="_blank" aria-label="X Profile">
            𝕏 X
          </Link>
          <Link href="https://github.com/zleypner" target="_blank" aria-label="GitHub Profile">
            ⚡ GitHub
          </Link>
          <Link href="https://instagram.com/anwar.zl" target="_blank" aria-label="Instagram Profile">
            📷 Instagram
          </Link>
          <Link href="https://t.me/anwar_crzl" target="_blank" aria-label="Telegram Profile">
            ✈️ Telegram
          </Link>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}
