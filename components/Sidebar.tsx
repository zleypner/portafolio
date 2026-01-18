'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Github, Instagram } from 'lucide-react';

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Milestones', href: '#milestones' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/zleypner', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anwardev/', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/anwar.zl', icon: Instagram },
  { name: 'X', href: 'https://x.com/anwar_zlcr', icon: XIcon },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <aside className="sidebar" role="complementary" aria-label="Sidebar navigation">
      <div className="sidebar-content">
        <header className="sidebar-header">
          <h1>Anwar Sánchez</h1>
          <h2>Full-Stack Software Engineer</h2>
          <p className="sidebar-tagline">
            I build products that make people&apos;s lives easier and share knowledge across LATAM.
          </p>
        </header>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar-socials" role="navigation" aria-label="Social media links">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.name}
              href={social.href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
            >
              <Icon size={20} aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
