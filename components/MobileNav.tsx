'use client';

import { useState, useEffect } from 'react';
import { User, Briefcase, Award } from 'lucide-react';

const navigation = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Milestones', href: '#milestones', icon: Award },
];

export default function MobileNav() {
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
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.href.slice(1);
        return (
          <a
            key={item.name}
            href={item.href}
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={20} aria-hidden="true" />
            <span>{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
}
