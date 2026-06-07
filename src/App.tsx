/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Summary from './components/Summary';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'summary', 'contact'];
    
    const handleScroll = () => {
      let currentActive = 'home';
      // 150px threshold to trigger before the section fully intersects the top view
      const scrollPosition = window.scrollY + 150;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const topOffset = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          if (scrollPosition >= topOffset && scrollPosition < topOffset + sectionHeight) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop;
      window.scrollTo({
        top: topOffset - 70, // Slight offset for sticking header rail
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 antialiased overflow-x-hidden">
      {/* Header element */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Scrollable sections */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Summary />
        <Contact />
      </main>

      {/* Back To Top Action */}
      <BackToTop />
    </div>
  );
}

