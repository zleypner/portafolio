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
      <div>
        <h1 className="typewriter">
          Hi, I&apos;m <span className="glitch" data-text="Anwar">Anwar</span>
        </h1>
        <p className="typewriter-subtitle">Full-Stack Software Engineer</p>

        <p className="hero-description">
          I´m driven by the challenge of building products that make people&apos;s lives easier.
        </p>
        <p className="hero-description">
          I love sharing my knowledge, collaborating with teams, and continuously improving as a
          developer—mentoring others and working with startup founders and builders to turn ideas
          into real impact.
        </p>

        <div className="socials">
          <Link href="https://www.linkedin.com/in/anwardev/" target="_blank">
            💼 LinkedIn
          </Link>
          <Link href="https://x.com/anwar_zlcr" target="_blank">
            𝕏 X
          </Link>
          <Link href="https://github.com/zleypner" target="_blank">
            ⚡ GitHub
          </Link>
          <Link href="https://instagram.com/anwar.zl" target="_blank">
            📷 Instagram
          </Link>
          <Link href="https://t.me/anwar_crzl" target="_blank">
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
