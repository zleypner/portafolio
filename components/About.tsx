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
        <a href="https://www.pwc.com" target="_blank" rel="noopener noreferrer">
          PwC
        </a>
        , contributing to enterprise-scale web platforms by building and maintaining frontend applications, integrating them with backend services, and supporting business-critical workflows across internal and client-facing environments.
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
          My expertise spans the <strong>full stack</strong> — from designing reusable, performant UI components with React and TypeScript to building and maintaining backend services and APIs with Node.js and FastAPI. I've implemented automated testing, containerized applications with Docker, and CI/CD pipelines using GitHub Actions to consistently deliver reliable, production-ready systems.
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
