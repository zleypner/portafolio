'use client';

import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    date: '2022 — PRESENT',
    title: 'Software Engineer',
    company: 'BCD Meetings & Events',
    companyUrl: 'https://www.bcdme.com',
    description: [
      'Built and maintained React + TypeScript platforms used by thousands of users across global clients.',
      'Created fast, user-friendly interfaces with Next.js (SSR/SSG), cutting initial load times by about 40%.',
      'Connected frontends to REST and GraphQL APIs, making data flow more reliable and reducing integration issues.',
      'Designed reusable UI components and internal docs, helping new developers ramp up faster.',
      'Improved PostgreSQL queries and backend flows, lowering key API response times by roughly 25%.',
      'Set up automated testing (unit, integration, E2E), which noticeably reduced production bugs.',
      'Containerized projects with Docker and streamlined CI/CD with GitHub Actions for smoother releases.',
      'Reviewed code, mentored junior developers, and helped raise overall code quality on the team.',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    date: '2020 — 2022',
    title: 'IT Systems Engineer',
    company: '3M',
    companyUrl: 'https://www.3m.com',
    description: [
      'Engineered Python and PowerShell automation scripts to streamline system diagnostics, reduce manual interventions, and improve incident resolution times across global teams.',
      'Supported enterprise Windows & macOS environments across North America, Europe, and LATAM, ensuring system reliability and secure access.',
      'Assisted software delivery teams with deployment validation, QA testing, and application debugging, bridging infrastructure and development workflows.',
      'Administered and secured Microsoft 365, VPN infrastructure, and internal web platforms, maintaining compliance and uptime.',
      'Introduced structured technical documentation and automation playbooks inside ServiceNow and internal knowledge bases, improving L2/L3 support efficiency.',
      'Participated in root-cause analysis of recurring system failures, helping reduce repeat incidents through automation and process improvements.',
    ],
    techStack: ['Python', 'PowerShell', 'ServiceNow', 'Microsoft 365', 'Windows', 'macOS'],
  },
  {
    date: '2017 — 2020',
    title: 'Tier 2 Technical Support',
    company: 'ARRIS',
    companyUrl: 'https://www.commscope.com',
    description: [
      'Provided Tier-2 support for residential and SMB networking devices, prioritizing stability and uptime.',
      'Diagnosed complex connectivity issues involving Wi-Fi, NAT, DHCP, VLANs, port forwarding, and provisioning.',
      'Performed advanced router configuration and firmware updates to ensure secure, optimized performance.',
      'Supported frontline agents on escalated tickets and acted as a technical point of reference.',
      'Applied knowledge from Cisco Networking Academy (Cisco 1 & Cisco 2) to analyze and resolve root-cause issues.',
      'Documented recurring incidents and contributed to internal troubleshooting guides and playbooks.',
      'Collaborated with engineering teams to validate fixes and improve support workflows.',
    ],
    techStack: ['Networking', 'Cisco', 'Wi-Fi', 'VLAN', 'DHCP', 'Router Configuration'],
  },
  {
    date: '2014 — 2017',
    title: 'Structured Cabling & Networking',
    company: 'University of Costa Rica (UCR)',
    companyUrl: 'https://www.ucr.ac.cr',
    description: [
      'Installed and organized structured cabling infrastructure across academic and administrative facilities.',
      'Supported rack installations, patch-panel terminations, and standards-based cable management.',
      'Assisted with deployment and maintenance of switches, routers, and network endpoints.',
      'Diagnosed and resolved campus connectivity issues in coordination with IT networking teams.',
      'Followed safety, labeling, and structured-wiring best practices to ensure long-term reliability.',
      'Contributed to a collaborative infrastructure environment, improving response times and system uptime.',
    ],
    techStack: ['Structured Cabling', 'Network Infrastructure', 'Switches', 'Routers', 'Cable Management'],
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
