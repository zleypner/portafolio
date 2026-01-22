'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="content-section">
      <p>
        I'm a full-stack software engineer specializing in <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong>, <strong>.NET</strong>, and <strong>SQL</strong>. I build fast, scalable platforms with clean backend services, robust API integrations, and automation across developer workflows.
      </p>
      <p>
        Currently, I'm a Software Engineer at{' '}
        <a href="https://www.bcdme.com" target="_blank" rel="noopener noreferrer">
          BCD Meetings & Events
        </a>
        , where I contribute to enterprise-scale platforms using React and Angular, supporting internal and client-facing business applications. I build and maintain user interfaces with Next.js (SSR/SSG) and Angular, focusing on performance, usability, and consistency. I integrate frontend applications with REST APIs built in .NET, and work with SQL Server and PostgreSQL databases to support enterprise data models and reporting needs.
      </p>
      <p>
        Previously, I worked at{' '}
        <a href="https://www.3m.com" target="_blank" rel="noopener noreferrer">
          3M Science
        </a>
        {' '}as an IT Systems Engineer, where I engineered Python and PowerShell automation scripts, supported enterprise environments across multiple regions, and improved incident resolution through automation and structured documentation.
      </p>

      <div className={`about-expandable ${isExpanded ? 'expanded' : ''}`}>
        <p>
          My expertise spans the <strong>full stack</strong> — from designing reusable UI components with React and TypeScript to engineering backend services with FastAPI and Node.js. I've set up automated testing pipelines, containerized applications with Docker, and streamlined CI/CD workflows with GitHub Actions to deliver reliable, production-ready code.
        </p>
        <p>
          I'm also exploring the <strong>AI/ML space</strong>, working with LangChain, RAG pipelines, vector databases (PGVector, Milvus), and semantic search to build intelligent, context-aware applications. My focus areas include <strong>Full Stack Software Engineering</strong>, <strong>AI/ML</strong>, and <strong>Cloud Infrastructure</strong>.
        </p>
      </div>

      <button
        className="read-more-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>
            Read Less <ChevronUp size={18} />
          </>
        ) : (
          <>
            Read More <ChevronDown size={18} />
          </>
        )}
      </button>
    </section>
  );
}
