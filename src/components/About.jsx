import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="philosophy" className="section" style={{ position: 'relative', marginTop: '5rem' }}>
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
            padding: '4rem', 
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
