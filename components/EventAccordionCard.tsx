'use client';

import Image from 'next/image';
import Link from 'next/link';

interface EventAccordionCardProps {
  id: number;
  image: string;
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  link: string;
  isActive: boolean;
  onClick: () => void;
  priority?: boolean;
}

export default function EventAccordionCard({
  id,
  image,
  title,
  type,
  date,
  location,
  description,
  achievements,
  techStack,
  link,
  isActive,
  onClick,
  priority = false,
}: EventAccordionCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="milestone-card">
      {/* Clickable area - Title and Date */}
      <button
        className="accordion-trigger"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isActive}
        aria-controls={`accordion-content-${id}`}
        tabIndex={0}
      >
        <div className="milestone-header">
          <h3 className="milestone-title">{title}</h3>
          <div className="milestone-date">{date} • {location}</div>
        </div>
      </button>

      {/* Expandable content */}
      <div
        id={`accordion-content-${id}`}
        className={`accordion-content ${isActive ? 'active' : ''}`}
        aria-hidden={!isActive}
      >
        <div className="accordion-inner">
          {isActive && (
            <div className="milestone-image-container">
              <Image
                src={image}
                alt={`${title} ${date}`}
                className="milestone-image loaded"
                width={800}
                height={600}
                priority={priority}
              />
            </div>
          )}
          <div className="milestone-type-container">
            <span className="milestone-type">{type}</span>
          </div>
          <div className="milestone-meta">
            {date} • {location}
          </div>
          <p className="milestone-description">{description}</p>
          <div className="milestone-achievements">
            <h4>Key Achievements:</h4>
            <ul>
              {achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="milestone-tech">
            {techStack.map((tech, techIndex) => (
              <span key={techIndex} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
          <Link href={link} className="milestone-link" target="_blank">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
