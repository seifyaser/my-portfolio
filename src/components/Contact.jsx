import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, MessageCircle, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '4rem' }}>
            Let's build something <span style={{ background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>extraordinary.</span>
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <motion.a 
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/201156162380"
              target="_blank" rel="noreferrer"
              className="glass"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem 3rem', borderRadius: '30px', color: 'var(--text-main)', textDecoration: 'none', minWidth: '200px' }}
            >
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                <MessageCircle size={32} color="#25D366" />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>WhatsApp</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/saif-yasser-166035265/"
              target="_blank" rel="noreferrer"
              className="glass"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem 3rem', borderRadius: '30px', color: 'var(--text-main)', textDecoration: 'none', minWidth: '200px' }}
            >
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                <Briefcase size={32} color="#0A66C2" />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>LinkedIn</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/seifyaser"
              target="_blank" rel="noreferrer"
              className="glass"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem 3rem', borderRadius: '30px', color: 'var(--text-main)', textDecoration: 'none', minWidth: '200px' }}
            >
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                <Code size={32} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>GitHub</span>
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{ marginTop: '6rem' }}
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px var(--primary-glow)' }}
              whileTap={{ scale: 0.95 }}
              href="/Saif_Yasser_CV.pdf"
              download="Saif_Yasser_CV.pdf"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1.2rem 3rem', borderRadius: '50px', background: 'var(--text-main)', color: '#000', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}
            >
              <Download size={20} /> Download Full CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Saif Yasser Bayoomi. Designed & Engineered with precision.
      </div>
    </section>
  );
};

export default Contact;
