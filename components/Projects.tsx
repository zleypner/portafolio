'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const projectsData = [
  {
    title: 'Money Momentum',
    description:
      'A full-stack web application for personal money momentum tracking built with React and Express.js. Features secure authentication, money management, data visualization, and comprehensive reporting.',
    techStack: ['React', 'Express.js', 'SQLite', 'Chart.js', 'JWT'],
    codeUrl: 'https://github.com/zleypner/Money-Momentum',
  },
  {
    title: 'Auth Dashboard App',
    description:
      'A production-ready authentication and dashboard application built with React (Vite + TypeScript) frontend and Node.js + Express + JWT backend. Features secure JWT-based auth, protected routes, and modern UI.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma'],
    codeUrl: 'https://github.com/zleypner/Auth-Dashboard-App-React-Node-Express-JWT-',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsInitialized = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const projectCards = section.querySelectorAll('.project-card');

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !cardsInitialized.current) {
            cardsInitialized.current = true;
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Set initial state for cards
    projectCards.forEach((card) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(30px)';
      (card as HTMLElement).style.transition = 'all 0.6s ease';
    });

    cardObserver.observe(section);

    return () => {
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-tags">
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <Link href={project.codeUrl} className="project-btn" target="_blank">
                Code
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p className="projects-subtitle">
        More on{' '}
        <Link href="https://github.com/zleypner" target="_blank" className="github-link">
          GitHub
        </Link>
      </p>
      <div className="section-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
