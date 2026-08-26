'use client';

import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Milestones from '@/components/Milestones';

export default function Home() {
  return (
    <div className="portfolio-container">
      <Sidebar />
      <main className="main-content">
        <About />
        <Experience />
        <Milestones />
      </main>
      <MobileNav />
    </div>
  );
}
