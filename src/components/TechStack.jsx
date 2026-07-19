import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, MapPin, Database, CreditCard, Rocket, GitBranch } from 'lucide-react';
import { SKILL_CATEGORIES } from '../utils/constants';

const getCategoryIcon = (title) => {
  switch(title) {
    case "Flutter & Dart": return <Smartphone size={22} color="var(--primary)" />;
    case "API & Backend": return <Server size={22} color="var(--primary)" />;
    case "Mapping & Location": return <MapPin size={22} color="var(--primary)" />;
    case "Local Storage & More": return <Database size={22} color="var(--primary)" />;
    case "Payment Integration": return <CreditCard size={22} color="var(--primary)" />;
    case "CI/CD & Release": return <Rocket size={22} color="var(--primary)" />;
    case "Version Control": return <GitBranch size={22} color="var(--primary)" />;
    default: return null;
  }
};

const TechStack = () => {
  return (
    <section id="skills" className="section" style={{ position: 'relative', marginTop: '5rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <span style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Expertise</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, marginTop: '1rem', letterSpacing: '-1px' }}>
            Technical Expertise
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 0', lineHeight: 1.6 }}>
            A comprehensive breakdown of the tools, frameworks, and technologies I use to build scalable mobile experiences.
          </p>
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          alignItems: 'start'
        }}>
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              className="glass"
              style={{ 
                padding: '2.5rem', 
                borderRadius: '24px', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                {getCategoryIcon(category.title)} {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: '0.6rem 1rem', 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--text-main)', 
                      borderRadius: '12px', 
                      fontSize: '0.9rem', 
                      fontWeight: 500 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
