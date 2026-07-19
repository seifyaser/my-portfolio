import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight, Code2, Target, Layout, Layers, Terminal, Zap, Maximize } from 'lucide-react';
import { PROJECTS } from '../utils/constants';

/* ─── Constants & Helpers ─────────────────────────────── */
const CARD_COLORS = [
  { bg: 'linear-gradient(135deg,#1e3a5f,#0f2340)', accent: '#38bdf8' },
  { bg: 'linear-gradient(135deg,#2d1b4e,#1a0f30)', accent: '#818cf8' },
  { bg: 'linear-gradient(135deg,#1a3a2a,#0f2318)', accent: '#34d399' },
];

const EMOJIS = ['🗺️', '🎬', '🥗', '📍', '📰'];

const SectionTitle = ({ icon: Icon, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
    <Icon size={18} color="var(--primary)" />
    <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
      {label}
    </span>
  </div>
);

/* ─── Image Gallery ─────────────────────────────────────── */
const ImageGallery = ({ images, onClose, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      galleryRef.current?.requestFullscreen().catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div ref={galleryRef} style={{ position: 'relative', height: isFullscreen ? '100vh' : '450px', width: '100%', background: '#050505', overflow: 'hidden' }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', left: 0, top: 0 }}
        />
      </AnimatePresence>
      
      <button onClick={toggleFullScreen} style={{
        position: 'absolute', top: '1.5rem', right: '5rem',
        background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '50%', width: '44px', height: '44px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: '#fff', zIndex: 10
      }}><Maximize size={20} /></button>

      <button onClick={onClose} style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '50%', width: '44px', height: '44px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: '#fff', zIndex: 10
      }}><X size={20} /></button>

      {images.length > 1 && (
        <>
          <button onClick={prev} style={{
            position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: '46px', height: '46px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', zIndex: 10,
            backdropFilter: 'blur(5px)'
          }}><ChevronLeft size={24} /></button>
          <button onClick={next} style={{
            position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: '46px', height: '46px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', zIndex: 10,
            backdropFilter: 'blur(5px)'
          }}><ChevronRight size={24} /></button>
          
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', display: 'flex', gap: '6px', zIndex: 10 }}>
            {images.map((_, i) => (
              <div key={i} style={{
                width: i === currentIndex ? '16px' : '6px', height: '6px', borderRadius: '3px',
                background: i === currentIndex ? 'var(--primary)' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s ease'
              }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ─── Fullscreen Modal ─────────────────────────────────── */
const ProjectModal = ({ project, color, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    onClick={onClose}
    style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(5,5,10,0.95)',
      overflowY: 'auto',
      display: 'flex', justifyContent: 'center',
      padding: '2rem 1rem',
      willChange: 'opacity',
    }}
  >
    <motion.div
      layoutId={`card-${project.title}`}
      initial={{ scale: 0.88, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.88, opacity: 0, y: 40 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      onClick={e => e.stopPropagation()}
      style={{
        background: '#13151a',
        borderRadius: '32px',
        border: '1px solid rgba(255,255,255,0.08)',
        maxWidth: '900px', width: '100%',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        height: 'fit-content',
        willChange: 'transform, opacity',
      }}
    >
      {project.images && project.images.length > 0 ? (
        <ImageGallery images={project.images} title={project.title} onClose={onClose} />
      ) : (
        <div style={{
          height: '260px', background: color.bg, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 70%)' }} />
          <button onClick={onClose} style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff', zIndex: 10
          }}><X size={20} /></button>
        </div>
      )}

      <div style={{ padding: '3rem' }}>
        <h2 style={{
          fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, color: '#fff',
          letterSpacing: '-1px', marginBottom: '1.5rem'
        }}>{project.title}</h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem' }}>
          {project.overview}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { icon: Target,   label: 'The Problem',  text: project.problem },
            { icon: Layout,   label: 'My Solution',  text: project.solution },
          ].filter(item => item.text).map(({ icon, label, text }) => (
            <div key={label} className="glass" style={{ padding: '1.5rem', borderRadius: '20px' }}>
              <SectionTitle icon={icon} label={label} />
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <SectionTitle icon={Zap} label="Key Features" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
            {project.features.map((f, i) => (
              <span key={i} style={{
                padding: '0.5rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 500,
                background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', color: 'var(--text-main)'
              }}>{f}</span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <SectionTitle icon={Code2} label="Tech Stack" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
            {project.technologies.map((t, i) => (
              <span key={i} style={{
                padding: '0.5rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 600,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-main)'
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.github && project.github !== "#" && (
            <motion.a 
              href={project.github} target="_blank" rel="noreferrer" 
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(120, 110, 255, 0.3)', borderColor: 'rgba(120, 110, 255, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.7rem',
                padding: '1rem 2.2rem', borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(120, 110, 255, 0.15) 0%, rgba(20, 20, 25, 0.9) 100%)',
                border: '1px solid rgba(120, 110, 255, 0.4)',
                color: '#fff', textDecoration: 'none', fontWeight: 700,
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                letterSpacing: '0.5px'
              }}
            >
              <Code2 size={20} color="#a098ff" /> 
              <span>View Source on GitHub</span>
            </motion.a>
          )}
          
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 1.8rem', borderRadius: '40px',
              background: 'var(--text-main)', color: '#000',
              textDecoration: 'none', fontWeight: 700
            }}><ExternalLink size={18} /> Live Demo</a>
          )}

          {project.playStore && (
            <a href={project.playStore} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 1.8rem', borderRadius: '40px',
              background: 'var(--primary)', color: '#000',
              textDecoration: 'none', fontWeight: 700,
              boxShadow: '0 4px 15px var(--primary-glow)'
            }}><ExternalLink size={18} /> Get it on Google Play</a>
          )}
          
          {project.linkedinPost && (
            <a href={project.linkedinPost} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 1.8rem', borderRadius: '40px',
              background: '#0A66C2', color: '#fff',
              textDecoration: 'none', fontWeight: 700,
              boxShadow: '0 4px 15px rgba(10, 102, 194, 0.4)'
            }}><ExternalLink size={18} /> View on LinkedIn</a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Flat 2D Card ─────────────────────────────────────── */
const FlatCard = ({ project, index, offset, color, onClick, total }) => {
  const abs = Math.abs(offset);
  if (abs > 1) return null; // Only show center, left, and right cards

  const isCenter = offset === 0;
  // Offset moves the card horizontally. 
  // We use exactly 105% of the card's width to create a nice gap
  const xPct = offset * 105; 
  const scale = isCenter ? 1 : 0.9;
  const opacity = isCenter ? 1 : 0.4;
  const zIndex = isCenter ? 10 : 5;

  return (
    <motion.div
      layoutId={`card-${project.title}`}
      animate={{
        x: `${xPct}%`,
        scale,
        opacity,
        zIndex,
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      onClick={() => isCenter ? onClick() : undefined}
      style={{
        position: 'absolute',
        width: 'min(400px, 80vw)',
        height: 'min(560px, 75vh)',
        cursor: isCenter ? 'pointer' : 'default',
        top: '50%',
        left: '50%',
        marginTop: 'calc(-0.5 * min(560px, 75vh))',
        marginLeft: 'calc(-0.5 * min(400px, 80vw))',
        background: color.bg,
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        boxShadow: isCenter ? '0 30px 60px rgba(0,0,0,0.6)' : '0 10px 30px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        willChange: 'transform, opacity, z-index',
      }}
    >
      <div style={{
        height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 70%)',
        overflow: 'hidden'
      }}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ fontSize: '4.5rem' }}>{EMOJIS[index]}</span>
        )}
      </div>

      <div style={{
        flex: 1, padding: '1.5rem 2rem 2rem', background: 'rgba(0,0,0,0.5)',
        display: 'flex', flexDirection: 'column'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem', letterSpacing: '-0.5px' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>
          {project.overview?.slice(0, 100)}…
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.technologies.slice(0, 4).map((t, i) => (
            <span key={i} style={{
              padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 500,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)'
            }}>{t}</span>
          ))}
        </div>
        {isCenter && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: color.accent, fontWeight: 600, fontSize: '0.9rem' }}>
            <span>View Case Study</span><ExternalLink size={14} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─────────────────────────────────────── */
const Projects = () => {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(null);
  const dragStart = useRef(null);
  const total = PROJECTS.length;

  const navigate = useCallback((dir) => {
    setActive(i => (i + dir + total) % total);
  }, [total]);

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 40) navigate(1);
      else if (e.deltaX < -40) navigate(-1);
    }
  };

  const handlePointerDown = (e) => { dragStart.current = e.clientX; };
  const handlePointerUp = (e) => {
    if (dragStart.current === null) return;
    const delta = dragStart.current - e.clientX;
    if (Math.abs(delta) > 60) navigate(delta > 0 ? 1 : -1);
    dragStart.current = null;
  };

  return (
    <section id="projects" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '3rem', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 20 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Selected Work</span>
          <h2 style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', fontWeight: 800, marginTop: '1rem', letterSpacing: '-1px' }}>Featured Projects</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.05rem' }}>Click the center card to explore the full case study.</p>
        </motion.div>
      </div>

      <div
        style={{
          position: 'relative',
          height: 'min(600px, 80vh)',
          cursor: 'grab',
          userSelect: 'none',
          touchAction: 'pan-y'
        }}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {PROJECTS.map((p, i) => {
          let offset = i - active;
          if (offset > 1) offset -= total;
          if (offset < -1) offset += total;
          return (
            <FlatCard
              key={p.title}
              project={p}
              index={i}
              offset={offset}
              color={CARD_COLORS[i % CARD_COLORS.length]}
              onClick={() => setModal(i)}
              total={total}
            />
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute', left: 'max(1rem, calc(50% - 320px))', top: '50%', transform: 'translateY(-50%)',
            zIndex: 30, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff', transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => navigate(1)}
          style={{
            position: 'absolute', right: 'max(1rem, calc(50% - 320px))', top: '50%', transform: 'translateY(-50%)',
            zIndex: 30, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff', transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem', position: 'relative', zIndex: 20 }}>
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? '24px' : '8px', height: '8px', borderRadius: '4px',
              background: i === active ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {modal !== null && (
          <ProjectModal
            project={PROJECTS[modal]}
            color={CARD_COLORS[modal % CARD_COLORS.length]}
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
