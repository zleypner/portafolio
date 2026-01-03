'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
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
  return (
    <motion.article
      className="card project-card"
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
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
            <ExternalLink className="external-link" size={16} aria-hidden="true" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </h3>

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
    </motion.article>
  );
}
