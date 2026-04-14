import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiAward, FiCode, FiStar, FiDownload } from 'react-icons/fi';
import axios from 'axios';

const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'] },
  { category: 'Backend & DB', items: ['Node.js', 'Express', 'MongoDB', 'SQL', 'PHP'] },
  { category: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript'] },
  { category: 'Design', items: ['Adobe Photoshop', 'Illustrator', 'Figma', 'UI/UX'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'GenAI Tools'] },
];

const stats = [
  { value: '2+', label: 'Years Experience', icon: FiCode },
  { value: '4+', label: 'Projects Built', icon: FiStar },
  { value: '2nd', label: 'Rank Research Comp.', icon: FiAward },
  { value: 'SIH', label: '2025 Finalist', icon: FiAward },
];

export default function Home() {
  const [projects, setProjects] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL || '';
    axios.get(`${API}/api/projects`).then(r => setProjects(r.data.data?.slice(0, 3) || [])).catch(() => {
      setProjects([
        { _id: '1', title: 'Gesture-Based Hand Control Game', description: 'AI-powered game via hand gestures using computer vision & ML.', tech: ['Python', 'OpenCV', 'MediaPipe'], category: 'ai', featured: true },
        { _id: '2', title: 'AI-Based Image Clearance', description: 'Deep learning image enhancement & denoise system.', tech: ['Python', 'TensorFlow', 'OpenCV'], category: 'ai', featured: true },
        { _id: '3', title: 'Responsive Web Portfolio', description: 'Modern cross-device web experiences.', tech: ['HTML5', 'CSS3', 'JavaScript'], category: 'web', featured: true },
      ]);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mx', `${x}px`);
      heroRef.current.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 100, position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.06)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%) translateX(var(--mx,0)) translateY(var(--my,0))',
          transition: 'transform 0.3s ease',
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.1)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        }} />

        {/* Floating tag */}
        <div style={{ position: 'absolute', top: 140, right: '10%', display: 'flex', flexDirection: 'column', gap: 8, animation: 'float 6s ease-in-out infinite' }}>
          <div style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid var(--border-accent)', borderRadius: 8, padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-gold)' }}>
            {'<available_for_hire />'}
          </div>
        </div>

        <div className="container">
          <div style={{ maxWidth: 800 }}>
            <div className="section-label" style={{ marginBottom: 24 }}>
              Rajkot, Gujarat, India
            </div>

            <h1 style={{ fontSize: 'clamp(44px, 7vw, 86px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 24, color: 'var(--text-primary)', overflow: 'visible', paddingBottom: 4 }}>
              Raj Jadav<span style={{ color: 'var(--accent-gold)' }}>.</span>
            </h1>

            <div style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontFamily: 'var(--font-display)', color: 'var(--text-secondary)', marginBottom: 28, minHeight: 44 }}>
              <TypeAnimation
                sequence={[
                  'Web Developer', 2000,
                  'UI/UX Designer', 2000,
                  'AI Enthusiast', 2000,
                  'Graphic Designer', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: 'var(--accent-gold-light)' }}
              />
            </div>

            <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 560, marginBottom: 44 }}>
              Dynamic web developer & designer passionate about crafting <span style={{ color: 'var(--text-primary)' }}>innovative digital solutions</span> that blend aesthetic beauty with functional excellence.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 60 }}>
              <Link to="/projects" className="btn-primary">
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                  View My Work <FiArrowRight />
                </span>
              </Link>
              <a href="/Raj_Jadav_Resume.pdf" download className="btn-outline">
                <FiDownload /> Download CV
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Find me on</span>
              {[
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rajjadav18' },
                { icon: FiGithub, href: 'https://github.com/rajjadav18' },
                { icon: FiMail, href: 'mailto:rajjadav0607@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; e.currentTarget.style.background = 'var(--accent-gold-dim)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-glass)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40 }}>
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <Icon size={20} style={{ color: 'var(--accent-gold)', marginBottom: 12 }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section">
        <div className="container">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginTop: 48 }}>
            {skills.map(({ category, items }) => (
              <div key={category} className="glass-card" style={{ padding: 28, transition: 'all 0.3s' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                  {category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {items.map(item => (
                    <span key={item} style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: 6,
                      padding: '4px 10px',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-label">Portfolio</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured <span className="gradient-text">Projects</span></h2>
            <Link to="/projects" className="btn-outline" style={{ fontSize: 13, padding: '10px 22px' }}>
              View All <FiArrowRight />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {projects.map((project, i) => (
              <ProjectCard key={project._id || i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Let's Talk</div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.03em' }}>
            Have a project in mind<span style={{ color: 'var(--accent-gold)' }}>?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 18, maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
            I'm currently open to new opportunities and exciting collaborations.
          </p>
          <Link to="/contact" className="btn-primary">
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
              Get In Touch <FiArrowRight />
            </span>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const colors = { ai: '#c9a84c', web: '#00d4ff', design: '#7c3aed', other: '#10b981' };
  const color = colors[project.category] || colors.other;

  return (
    <div className="glass-card" style={{ padding: 32, transition: 'all 0.4s', cursor: 'default', animationDelay: `${index * 0.1}s` }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em',
          textTransform: 'uppercase', color, padding: '4px 10px',
          background: `${color}15`, borderRadius: 100, border: `1px solid ${color}30`,
        }}>
          {project.category}
        </span>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = color}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <FiGithub size={18} />
          </a>
        )}
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)', lineHeight: 1.3 }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {(project.tech || []).map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)',
            padding: '3px 8px', background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)', borderRadius: 4,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}