import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="about"
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '6rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundSize: '60px 60px',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        zIndex: 0,
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '4rem',
          flexWrap: 'wrap'
        }}>
          
          {/* LEFT SIDE: Typography and Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: '1 1 500px', maxWidth: '650px' }}
          >
            {/* Tags */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              alignItems: 'center', 
              gap: '0.8rem', 
              color: 'var(--primary)', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}>
              <span>Flutter Developer</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span>Software Engineer</span>
            </div>
            
            {/* Name Typography */}
            <h1 style={{ 
              fontSize: 'clamp(4rem, 8vw, 7.5rem)', 
              fontWeight: 800, 
              lineHeight: 1.05, 
              letterSpacing: '-2px',
              marginBottom: '2rem',
              textTransform: 'capitalize'
            }}>
              <div style={{ color: '#fff' }}>Saif</div>
              <div style={{ 
                color: 'transparent', 
                WebkitTextStroke: '2px var(--primary)',
                fontFamily: 'inherit'
              }}>Yasser</div>
            </h1>

            {/* Subtitle */}
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              color: '#fff', 
              fontWeight: 700, 
              lineHeight: 1.3,
              marginBottom: '1.5rem',
              letterSpacing: '-0.5px'
            }}>
              Architecting scalable cross-platform mobile applications.
            </h2>
            
            {/* Description */}
            <p style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-muted)', 
              marginBottom: '1rem', 
              maxWidth: '580px', 
              lineHeight: 1.7 
            }}>
              Self-driven <strong style={{ color: '#fff' }}>Flutter Developer</strong> with over 2 years of hands-on experience building cross-platform mobile applications. I specialize in architecting scalable codebases using <strong style={{ color: '#fff' }}>Clean Architecture</strong> and modern state management.
            </p>
            <p style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-muted)', 
              marginBottom: '2.5rem', 
              maxWidth: '580px', 
              lineHeight: 1.7 
            }}>
              From integrating <strong style={{ color: '#fff' }}>RESTful APIs, Firebase, Google Maps</strong>, and payment gateways to managing the full <strong style={{ color: '#fff' }}>CI/CD lifecycle</strong> and App Store publishing—I own the entire app development process from start to finish.
            </p>
            
            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '1.2rem 2.5rem', 
                  borderRadius: '40px', 
                  background: 'var(--primary)', 
                  color: '#000', 
                  fontWeight: 700, 
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px var(--primary-glow)'
                }}
              >
                Explore My Work
              </motion.button>
              
              <motion.a 
                href="/Saif_Yasser_CV.pdf"
                download="Saif_Yasser_CV.pdf"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '1.2rem 2.5rem', 
                  borderRadius: '40px', 
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-main)', 
                  fontWeight: 600, 
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Circular Profile Image with Glowing Border & Floating Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ 
              flex: '1 1 400px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* The circular wrapper */}
            <div style={{
              width: 'clamp(300px, 40vw, 480px)',
              aspectRatio: '1/1',
              borderRadius: '50%',
              border: '2px solid var(--primary)',
              padding: '8px',
              position: 'relative',
              boxShadow: '0 0 60px var(--primary-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Profile Image */}
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                backgroundImage: 'url("/profile.jpg")', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: 'rgba(255,255,255,0.2)',
                  zIndex: -1
                }}>
                  SB.
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
