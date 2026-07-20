import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', marginTop: '5rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass"
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            padding: 'clamp(1.5rem, 5vw, 4rem)', 
            borderRadius: '40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Glow */}
          <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'var(--primary)', filter: 'blur(80px)', opacity: 0.2, zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Behind the Code</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '1rem', marginBottom: '2rem', letterSpacing: '-1px' }}>
              Obsessed with Architecture. <br/> Driven by User Experience.
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
              I focus on building high-quality Flutter applications that feel native, responsive, and incredibly smooth. My passion lies in strictly typed architectures and extreme performance optimization. Through continuous learning and adopting modern engineering principles, I bridge the gap between brilliant design and flawless execution.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1rem, 4vw, 2rem)', marginTop: '4rem', textAlign: 'left' }}>
              {/* Education */}
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'clamp(1.2rem, 4vw, 2rem)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  Education
                </h3>
                <h4 style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Bachelor of Computer Science</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.5px' }}>
                  08/2022 – 07/2026 | Obour City, Egypt
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Faculty of Computer Science and Artificial Intelligence, Benha National University.
                </p>
              </div>

              {/* Experience */}
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'clamp(1.2rem, 4vw, 2rem)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  Professional Experience
                </h3>
                <h4 style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Flutter Intern</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.5px' }}>
                  07/2025 – 08/2025 | Transport Information Technology (TransIT), Nasr City
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Developed a BRT (Bus Rapid Transit) application for booking tickets.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
