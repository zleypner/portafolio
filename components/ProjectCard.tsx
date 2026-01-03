'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  techStack: string[];
  stats?: {
    stars?: number;
    users?: string;
  };
}

export default function ProjectCard({
  title,
  description,
  url,
  thumbnail,
  techStack,
  stats,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.article
      className={`card project-card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      tabIndex={0}
    >
      {thumbnail && (
        <div className="project-thumbnail">
          <Image
            src={thumbnail}
            alt={title}
            width={200}
            height={120}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      <div className="project-content">
        <div className="project-header">
          <h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </h3>
          <div className="project-actions">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link-btn"
              aria-label="Open project"
            >
              <ExternalLink size={20} aria-hidden="true" />
            </a>
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

        <div className={`project-details ${isExpanded ? 'expanded' : ''}`}>
          <p className="project-description">{description}</p>

          {stats && (
            <div className="project-stats">
              {stats.stars && (
                <span>
                  <Star size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  {stats.stars} stars
                </span>
              )}
              {stats.users && <span>{stats.users}</span>}
            </div>
          )}

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
