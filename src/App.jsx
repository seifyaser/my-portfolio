import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import EngineeringPrinciples from './components/EngineeringPrinciples';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      {/* Background Orbs */}
      <div className="bg-glow" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'var(--primary)' }}></div>
      <div className="bg-glow" style={{ bottom: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'var(--secondary)' }}></div>
      <div className="bg-glow" style={{ top: '40%', left: '30%', width: '30vw', height: '30vw', background: 'var(--primary)', opacity: '0.2' }}></div>
      
      <main>
        <Hero />
        <Projects />
        <EngineeringPrinciples />
        <TechStack />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
