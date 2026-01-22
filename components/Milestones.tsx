'use client';

import { useEffect, useRef, useState } from 'react';
import EventAccordionCard from './EventAccordionCard';

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
  {
    title: 'Blockchain Jungle',
    type: 'Conference',
    date: 'November 2025',
    location: 'Costa Rica',
    description:
      "I had the opportunity to speak on a panel at Blockchain Jungle — the Costa Rica's leading tech event, bringing together founders, innovators, and world-class speakers shaping the future of this industry. Attending one of LATAM's premier blockchain conferences, connecting with industry leaders and exploring cutting-edge developments in Web3 and blockchain technology.",
    achievements: [
      'Networked with blockchain innovators and industry leaders',
      'Explored latest trends in Web3 and decentralized technologies',
      'Contributed to discussions on blockchain adoption in LATAM',
    ],
    techStack: ['Blockchain', 'Web3', 'DeFi', 'NFTs'],
    image: '/IMG_2267.jpg',
    video: '/videoBJ.MP4',
    link: 'https://www.linkedin.com/posts/anwardev_last-november-i-had-the-opportunity-to-speak-activity-7419909210324238336-33pf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqiwowBuMywTok_I-3zvuR4oARA8wxa3q4',
  },
  {
    title: 'Polkadot Hackathon',
    type: 'Hackathon',
    date: '13nov - 15 nov',
    location: 'Argentina',
    description:
      'Participating in the Polkadot ecosystem hackathon, building innovative solutions on the Polkadot network and exploring parachain development.',
    achievements: [
      'Developed solutions on Polkadot network',
      'Learned about substrate framework and parachain architecture',
      'Collaborated with developers on cross-chain interoperability',
    ],
    techStack: ['Polkadot', 'Substrate', 'Rust', 'Web3'],
    image: '/argentina/Polkadot.JPG',
    link: 'https://www.linkedin.com/posts/anwardev_visualizing-whats-ahead-standing-alone-activity-7407057080186167297-6BLJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqiwowBuMywTok_I-3zvuR4oARA8wxa3q4',
  },
  {
    title: 'DevConnect',
    type: 'Conference',
    date: 'November 2025',
    location: 'Argentina',
    description:
      'Attending DevConnect to engage with the Ethereum developer community, participate in technical discussions, and explore the future of decentralized applications.',
    achievements: [
      'Engaged with Ethereum core developers and researchers',
      'Participated in technical workshops on EVM and scaling solutions',
      'Built connections within the global Ethereum community',
    ],
    techStack: ['Ethereum', 'Solidity', 'EVM', 'Layer 2'],
    image: [
      '/argentina/devconnect.JPG',
      '/argentina/devconnect1.JPG',
      '/argentina/devconnect2.JPG',
      '/argentina/devconnect3.JPG',
      '/argentina/devconnect4.JPG',
      '/argentina/devconnect5.jpg',
    ],
    link: '#',
  },
  {
    title: 'Stellar Hackathon Residency + Hackathon',
    type: 'Hackathon',
    date: 'November 2025',
    location: 'Argentina',
    description:
      'Immersive residency program followed by intensive hackathon focused on building payment and financial inclusion solutions on the Stellar network.',
    achievements: [
      'Built payment solutions on Stellar blockchain',
      'Learned about cross-border payment infrastructure',
      'Contributed to financial inclusion initiatives in LATAM',
    ],
    techStack: ['Stellar', 'Soroban', 'Smart Contracts', 'Payments'],
    image: '/argentina/stellararg.JPG',
    link: 'https://www.linkedin.com/posts/anwardev_visualizing-whats-ahead-standing-alone-activity-7407057080186167297-6BLJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqiwowBuMywTok_I-3zvuR4oARA8wxa3q4',
  },
];

export default function Milestones() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsInitialized = useRef(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  };

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
          <EventAccordionCard
            key={index}
            id={index}
            image={milestone.image}
            title={milestone.title}
            type={milestone.type}
            date={milestone.date}
            location={milestone.location}
            description={milestone.description}
            achievements={milestone.achievements}
            techStack={milestone.techStack}
            link={milestone.link}
            isActive={activeCardId === index}
            onClick={() => handleCardClick(index)}
            priority={index < 2}
            video={(milestone as any).video}
          />
        ))}
      </div>
    </section>
  );
}
