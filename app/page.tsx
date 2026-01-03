'use client';

import Sidebar from '@/components/Sidebar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="portfolio-container">
      <Sidebar />
      <main className="main-content">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
