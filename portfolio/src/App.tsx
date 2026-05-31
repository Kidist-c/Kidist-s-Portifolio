/**
 * App.tsx - Root application component.
 * Composes all sections and provides theme context.
 */

import React from 'react';
import { ThemeProvider } from './components/layout/ThemeProvider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { ExperienceSection } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { EducationSection } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <ScrollProgressBar />
        <Navbar />
        <main id="main-content" role="main">
          <Hero />
          <About />
          <Skills />
          <ExperienceSection />
          <Projects />
          <EducationSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
