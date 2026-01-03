'use client';

import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    date: '2024 — PRESENT',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    companyUrl: 'https://www.klaviyo.com',
    description: [
      "Build and maintain critical components used to construct Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
    ],
    techStack: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js'],
  },
  {
    date: 'JULY — DEC 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    companyUrl: 'https://www.apple.com',
    description: [
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    ],
    techStack: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
  },
  {
    date: '2016 — 2017',
    title: 'Developer',
    company: 'Scout Studio',
    companyUrl: 'https://scoutstudio.com',
    description: [
      'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.',
    ],
    techStack: ['Jekyll', 'SCSS', 'JavaScript', 'WordPress'],
  },
  {
    date: 'JULY — DEC 2016',
    title: 'Software Engineer Co-op',
    company: 'Starry',
    companyUrl: 'https://starry.com',
    description: [
      "Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.",
    ],
    techStack: ['Cordova', 'Backbone', 'JavaScript', 'CSS'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="content-section">
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            companyUrl={exp.companyUrl}
            description={exp.description}
            techStack={exp.techStack}
          />
        ))}
      </div>
    </section>
  );
}
