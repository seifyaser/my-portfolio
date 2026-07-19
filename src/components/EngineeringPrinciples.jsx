import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Code2, Scaling, Component, Smartphone, WifiOff, Settings2, Database } from 'lucide-react';

const PRINCIPLES = [
  { icon: ShieldCheck, title: "Clean Architecture", desc: "Decoupling business logic from UI." },
  { icon: Settings2, title: "SOLID Principles", desc: "Writing robust, object-oriented code." },
  { icon: Cpu, title: "Performance Optimization", desc: "60 FPS rendering and minimal rebuilds." },
  { icon: Scaling, title: "Scalable Code", desc: "Architecting for millions of users." },
  { icon: Component, title: "Reusable Components", desc: "Building consistent design systems." },
  { icon: Smartphone, title: "Responsive Design", desc: "Perfect layouts across all devices." },
  { icon: WifiOff, title: "Offline-first", desc: "Seamless experience without internet." },
  { icon: Code2, title: "Maintainability", desc: "Self-documenting, clean codebases." },
  { icon: Database, title: "Modern State Management", desc: "Predictable state with Bloc/Cubit." }
];

const EngineeringPrinciples = () => {
  return (
    <section className="section" style={{ position: 'relative', marginTop: '4rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <span style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Core Philosophy</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, marginTop: '1rem', letterSpacing: '-1px' }}>
            Engineering Principles
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 0', lineHeight: 1.6 }}>
            Building premium digital products requires more than just writing code. It demands a rigorous approach to architecture, performance, and scalability.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {PRINCIPLES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass"
              style={{
                padding: '2rem',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                cursor: 'default',
                transition: 'background 0.3s ease'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <item.icon size={24} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
