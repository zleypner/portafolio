'use client';

import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    date: '2022 — PRESENT',
    title: 'Software Engineer',
    company: 'PwC',
    companyUrl: 'https://www.pwc.com',
    description: [
      'Contributed to enterprise-scale applications using React, Next.js (SSR/SSG), Angular, and TypeScript, supporting internal and client-facing platforms.',
      'Built and maintained user interfaces with a focus on performance, usability, and predictable async behavior.',
      'Integrated frontend applications with backend services via REST APIs developed in .NET to support core business workflows.',
      'Worked with SQL Server and PostgreSQL, writing and optimizing queries to support application data needs.',
      'Assisted in maintaining and improving backend services, delivering bug fixes and incremental enhancements.',
      'Participated in implementing automated testing (unit, integration, E2E) to improve application reliability.',
      'Supported containerized development and CI/CD pipelines using Docker and GitHub Actions.',
      'Collaborated with cross-functional teams through code reviews and shared debugging in a large enterprise codebase.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'REST APIs', 'SQL', 'Docker', 'CI/CD', 'Java OR Node.js'],
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
    techStack: ['Python', 'PowerShell', 'C# (.NET)', 'ServiceNow', 'Microsoft 365', 'Windows', 'macOS'],
  },
  {
    date: '2017 — 2020',
    title: 'Team Leader, Tier-2 Networking Support',
    company: 'ARRIS',
    companyUrl: 'https://www.commscope.com',
    description: [
      'Led a Tier-2 support team resolving complex networking issues while maintaining uptime and SLA targets.',
      'Handled escalations and guided agents through advanced technical troubleshooting.',
      'Assigned queues, prioritized tickets, and balanced workloads to keep operations efficient.',
      'Mentored and coached team members through feedback sessions, shadowing, and coaching plans.',
      'Conducted interviews and participated in hiring decisions to build a high-performing team.',
      'Organized training sessions and onboarding programs to raise overall team capability.',
      'Diagnosed networking issues involving Wi-Fi, NAT, DHCP, VLANs, PPPoE, and port forwarding.',
      'Used packet captures, CLI tools, and monitoring dashboards to support accurate root-cause analysis.',
      'Collaborated with supervisors and engineering to address recurring issues and improve processes.',
    ],
    techStack: ['Team Leadership', 'Coaching & Mentorship', 'SLA Management', 'TCP/IP', 'Wi-Fi', 'NAT', 'DHCP', 'VLANs', 'PPPoE', 'Wireshark'],
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
