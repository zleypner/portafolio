'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string | string[];
  techStack: string[];
}

export default function ExperienceCard({
  date,
  title,
  company,
  companyUrl,
  description,
  techStack,
}: ExperienceCardProps) {
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <motion.article
      className="card experience-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      tabIndex={0}
    >
      <div className="experience-date">
        <time>{date}</time>
      </div>

      <div className="experience-content">
        <h3>
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer">
              {title} · {company}
              <ExternalLink className="external-link" size={16} aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          ) : (
            <>
              {title} · {company}
            </>
          )}
        </h3>

        <div className="experience-description">
          <ul>
            {descriptionArray.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
        </div>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
