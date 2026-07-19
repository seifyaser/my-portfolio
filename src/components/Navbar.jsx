import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
      if (window.innerWidth >= 850) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = (item) => {
    setActive(item);
    setMobileMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: '2rem',
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: '0 1rem'
        }}
      >
        <div 
          className="glass"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '0.6rem 1.5rem',
            borderRadius: '50px',
            boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
            transition: 'all 0.3s ease',
            pointerEvents: 'auto',
            width: isMobile ? '100%' : 'auto',
            maxWidth: '900px'
          }}
        >
          {isMobile ? (
            // Mobile Navbar Content
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px', fontSize: '0.9rem' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
                SAIF YASSER
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a 
                  href="/Saif_Yasser_CV.pdf"
                  download="Saif_Yasser_CV.pdf"
                  style={{
                    background: 'var(--text-main)',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <Download size={16} /> Download CV
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </>
          ) : (
            // Desktop Navbar Content
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary)', fontWeight: 700, marginRight: '2rem', letterSpacing: '1px', fontSize: '0.9rem' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
                SAIF YASSER
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    style={{
                      background: active === item ? 'rgba(255,255,255,0.1)' : 'transparent',
                      border: 'none',
                      color: active === item ? 'var(--text-main)' : 'var(--text-muted)',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: active === item ? 600 : 500,
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      if (active !== item) e.target.style.color = 'var(--text-main)';
                    }}
                    onMouseLeave={(e) => {
                      if (active !== item) e.target.style.color = 'var(--text-muted)';
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div style={{ width: '1px', height: '24px', background: 'var(--glass-border)', flexShrink: 0 }}></div>

              <a 
                href="/Saif_Yasser_CV.pdf"
                download="Saif_Yasser_CV.pdf"
                style={{
                  background: 'var(--text-main)',
                  color: '#000',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  transition: 'transform 0.2s ease',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Download size={16} /> Download CV
              </a>
            </>
          )}
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass"
            style={{
              position: 'fixed',
              top: '6rem',
              left: '1rem',
              right: '1rem',
              zIndex: 49,
              borderRadius: '24px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                style={{
                  background: active === item ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  border: 'none',
                  color: active === item ? 'var(--primary)' : 'var(--text-main)',
                  padding: '1rem',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {active === item && <span style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></span>}
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
