'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Plus, Minus } from 'lucide-react';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionArray = Array.isArray(description) ? description : [description];

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.article
      className={`card experience-card ${isExpanded ? 'expanded' : ''}`}
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
        <div className="experience-header">
          <h3>
            {companyUrl ? (
              <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                {title} · {company}
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ) : (
              <>{title} · {company}</>
            )}
          </h3>
          <div className="experience-actions">
            {companyUrl && (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link-btn"
                aria-label="Open company website"
              >
                <ExternalLink size={20} aria-hidden="true" />
              </a>
            )}
            <button
              className="mobile-expand-btn"
              onClick={toggleExpand}
              aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
              aria-expanded={isExpanded}
            >
              {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
            </button>
          </div>
        </div>

        <div className={`experience-details ${isExpanded ? 'expanded' : ''}`}>
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
      </div>
    </motion.article>
  );
}
