'use client';

import { motion } from 'framer-motion';

interface MilestoneCardProps {
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  link?: string;
}

export default function MilestoneCard({
  title,
  type,
  date,
  location,
  description,
  achievements,
  techStack,
  link,
}: MilestoneCardProps) {
  return (
    <motion.article
      className="milestone-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '3rem' }}
      tabIndex={0}
    >
      <div className="milestone-header">
        <h3 className="milestone-title">{title}</h3>
        <div className="milestone-meta">
          <span>{type}</span>
          <span>{date}</span>
          <span>{location}</span>
        </div>
      </div>

      <p className="milestone-description">{description}</p>

      {achievements && achievements.length > 0 && (
        <div className="milestone-achievements">
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>

      {link && link !== '#' && (
        <div style={{ marginTop: '1rem' }}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-accent)',
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}
          >
            Learn more →
          </a>
        </div>
      )}
    </motion.article>
  );
}
