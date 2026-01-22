'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'BrewFi (CoffeeChain)',
    description:
      'The loyalty network turning every coffee into connection. A decentralized coffee and restaurant loyalty rewards platform built on Avalanche, powered by Tether (USDT). BrewFi enables cafés and restaurants to reward customers with $BREWFI tokens, creating a transparent, community-driven Web3 loyalty ecosystem that bridges real-world dining with digital ownership. Features an invisible wallet for seamless user experience.',
    techStack: ['TypeScript', 'JavaScript', 'Solidity', 'CSS', 'Avalanche', 'Web3'],
    codeUrl: 'https://github.com/zleypner/avax_brewfi',
    demoUrl: 'https://app.brew-fi.com/',
  },
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
  return (
    <section id="projects" className="content-section">
      <div className="experience-list">
        {projectsData.map((project, index) => (
          <article key={index} className="card">
            <h3>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                {project.title}
                <ExternalLink className="external-link" size={16} aria-hidden="true" />
              </a>
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.7, marginBottom: '1rem' }}>
              {project.description}
            </p>
            <div className="tech-stack">
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            {project.demoUrl && (
              <div style={{ marginTop: '1rem' }}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--green)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  Live Demo <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
      <p style={{ marginTop: '3rem', fontSize: '1rem' }}>
        View more projects on{' '}
        <a href="https://github.com/zleypner" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </section>
  );
}
