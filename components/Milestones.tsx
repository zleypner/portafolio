'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const milestonesData = [
  {
    title: 'ETH Pura Vida Hackathon',
    type: 'Hackathon',
    date: 'October 2024',
    location: 'Costa Rica',
    description:
      "Participated in Central America's premier blockchain hackathon, connecting with brilliant developers and innovators from across the region.",
    achievements: [
      'Connected with brilliant developers and innovators from across LATAM',
      'Forged strong bonds within the tech community through collaborative innovation',
      'Experienced transformative learning in blockchain technology',
    ],
    techStack: ['Blockchain', 'Web3', 'Ethereum'],
    image: '/ethpuravida.jpg',
    link: 'https://www.linkedin.com/posts/anwardev_ethpuravida-web3-blockchain-activity-7294917650604785664-LkCU',
  },
  {
    title: 'Ethereum Core Research Workshop',
    type: 'Discussion',
    date: 'November 2024',
    location: 'International',
    description:
      "Participated in technical discussions on Ethereum's roadmap including PeerDAS and Verkle Trees implementation.",
    achievements: [
      'Researched Layer 2 scaling solutions and MEV optimization strategies',
      'Delivered presentations on blockchain infrastructure to international audiences',
      "Contributed to technical discussions on Ethereum's roadmap",
    ],
    techStack: ['Ethereum', 'PeerDAS', 'Verkle Trees', 'Layer 2'],
    image: '/nov2024.jpg',
    link: 'https://www.linkedin.com/posts/anwardev_a-couple-of-months-ago-i-had-the-privilege-activity-7281353038961762306-vwMb',
  },
  {
    title: 'Self-Awareness Leadership Workshop',
    type: 'Residency',
    date: 'March 2025',
    location: 'Orlando, FL',
    description:
      'Participated in leadership development sessions focused on emotional intelligence and team optimization.',
    achievements: [
      'Facilitated cross-functional collaboration workshops',
      'Aligned individual strengths with team objectives',
      'Contributed insights on building high-performance development environments',
    ],
    techStack: ['Leadership', 'Team Building', 'Emotional Intelligence'],
    image: '/mar2025.jpg',
    link: 'https://www.linkedin.com/posts/anwardev_teamdevelopment-allhandsmeetings-orlando-activity-7309420377867243520-gtnq',
  },
  {
    title: 'Ignite Hackathon',
    type: 'Mentorship',
    date: 'May 2025',
    location: 'Central America',
    description:
      "Mentored development teams at Central America's largest blockchain hackathon, guiding Web3 and AI-powered solution development.",
    achievements: [
      'Provided technical guidance on Starknet ecosystem implementations',
      'Mentored teams on smart contract architecture',
      'Evaluated innovative projects addressing real-world problems',
    ],
    techStack: ['Starknet', 'Web3', 'AI', 'Smart Contracts'],
    image: '/may2025.jpg',
    link: 'https://www.linkedin.com/posts/anwardev_hackathon-mentorship-web3-activity-7335720422899937282-M_00',
  },
  {
    title: 'Start Up House Nosara',
    type: 'Residency',
    date: 'July 2025',
    location: 'Nosara, Costa Rica',
    description:
      '7-day immersive startup residency featuring 8 hours of daily mentorship from top experts in marketing, AI, and emerging technologies — followed by hands-on product building for a final hackathon demo.',
    achievements: [
      'Built and launched a product prototype under time constraints',
      'Received expert guidance from leaders in AI, marketing, and tech',
      'Formed lasting collaborations with entrepreneurs and developers',
      'Contributed to the local and regional startup ecosystem',
    ],
    techStack: ['Startup', 'Innovation', 'Collaboration'],
    image: '/nosarastartup.jpg',
    link: 'https://www.linkedin.com/posts/anwardev_i-had-the-privilege-of-spending-a-full-week-activity-7369182869656711169-iVeO',
  },
  {
    title: 'Blockchain After Office · Stellar Ambassador',
    type: 'Ambassadorship',
    date: 'September 2025',
    location: 'San José, Costa Rica',
    description:
      'As a Stellar Ambassador, I participate in regional events guiding and educating curious about blockchain — helping them understand its real-world applications and impact.',
    achievements: [
      'Shared insights and experiences with founders, developers, and ecosystem leaders',
      'Promoted blockchain education and community-driven innovation',
      "Represented Stellar's mission to empower LATAM through technology and inclusion",
      'Strengthened local collaborations and inspired new builders to join the ecosystem',
    ],
    techStack: ['Stellar', 'Blockchain', 'Education', 'Community'],
    image: '/Stellar.jpg',
    link: 'https://x.com/anwar_zlcr/status/1974647108054434260',
  },
];

export default function Milestones() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsInitialized = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const milestoneCards = section.querySelectorAll('.milestone-card');

    const milestoneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !cardsInitialized.current) {
            cardsInitialized.current = true;
            milestoneCards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Set initial state for milestone cards
    milestoneCards.forEach((card) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(40px)';
      (card as HTMLElement).style.transition = 'all 0.8s ease';
    });

    milestoneObserver.observe(section);

    // Add slow image loading animation
    const milestoneImages = section.querySelectorAll('.milestone-image');
    milestoneImages.forEach((img, index) => {
      setTimeout(() => {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });

        // If image is already loaded, add the loaded class immediately
        if ((img as HTMLImageElement).complete) {
          img.classList.add('loaded');
        }
      }, index * 300);
    });

    return () => {
      milestoneObserver.disconnect();
    };
  }, []);

  return (
    <section className="milestones-section" id="milestones" ref={sectionRef}>
      <h2 className="milestones-heading">📘 Milestones & Builder Journey</h2>
      <p className="milestones-subtitle">
        From Hackathons to Start up Houses — building in public across LATAM and beyond.
      </p>

      <div className="milestones-grid">
        {milestonesData.map((milestone, index) => (
          <div key={index} className="milestone-card">
            <div className="milestone-image-container">
              <Image
                src={milestone.image}
                alt={`${milestone.title} ${milestone.date}`}
                className="milestone-image"
                width={800}
                height={600}
                priority={index < 2}
              />
            </div>
            <div className="milestone-header">
              <h3 className="milestone-title">{milestone.title}</h3>
              <span className="milestone-type">{milestone.type}</span>
            </div>
            <div className="milestone-meta">
              {milestone.date} • {milestone.location}
            </div>
            <p className="milestone-description">{milestone.description}</p>
            <div className="milestone-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {milestone.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="milestone-tech">
              {milestone.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <Link href={milestone.link} className="milestone-link" target="_blank">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
