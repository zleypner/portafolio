'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Instagram, Code } from 'lucide-react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/zleypner', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anwardev/', icon: Linkedin },
  { name: 'CodePen', href: 'https://codepen.io/', icon: Code },
  { name: 'Instagram', href: 'https://instagram.com/anwar.zl', icon: Instagram },
  { name: 'Twitter', href: 'https://x.com/anwar_zlcr', icon: Twitter },
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
