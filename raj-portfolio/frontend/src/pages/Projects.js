import React, { useEffect, useState } from 'react';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import axios from 'axios';

const fallbackProjects = [
  {
    _id: '1',
    title: 'VetFlow',
    description: 'MERN Stack web application for veterinary clinic management with appointment booking and real-time data analytics.',
    longDescription: 'Engineered a full-stack web application for veterinary clinic management including record keeping, inventory management, appointment booking systems, and real-time data analytics dashboard.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    category: 'web',
    featured: true,
    liveUrl: 'https://vetflow.vercel.app',
    order: 1,
  },
  {
    _id: '2',
    title: 'RideRaksha',
    description: 'Vehicle management platform connecting users with mechanics during breakdown emergencies with real-time assistance.',
    longDescription: 'Developed a vehicle management platform to connect users with nearby mechanics during breakdown emergencies. Focused on building a highly responsive UI to provide real-time assistance and user convenience.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'web',
    featured: true,
    order: 2,
  },
  {
    _id: '3',
    title: 'Gesture-Based Hand Control Game',
    description: 'AI-powered game controlled entirely via hand gestures using computer vision. Won 2nd rank at research competition.',
    longDescription: 'Award-winning project presented at V.V.P Engineering College. Uses real-time hand tracking and gesture recognition to control game mechanics — no keyboard or mouse needed.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    category: 'ai',
    featured: true,
    order: 3,
  },
  {
    _id: '4',
    title: 'AI-Based Image Clearance',
    description: 'Deep learning system for automatic image enhancement and noise removal presented at V.V.P Engineering College.',
    longDescription: 'Implements neural network-based image enhancement pipeline with real-time processing capability and significant quality improvements.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
    category: 'ai',
    featured: false,
    order: 4,
  },
  {
    _id: '5',
    title: 'Brand Design System',
    description: 'Complete visual identity and design system for marketing campaigns at Satv Script.',
    longDescription: 'Created during graphic design internship at Satv Script. Includes banners, social media templates, and brand guidelines ensuring consistency across all platforms.',
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    category: 'design',
    featured: false,
    order: 5,
  },
];

const categories = ['all', 'web', 'ai', 'design'];
const categoryColors = { ai: '#c9a84c', web: '#00d4ff', design: '#7c3aed', other: '#10b981' };

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/projects')
      .then(r => { setProjects(r.data.data || fallbackProjects); setLoading(false); })
      .catch(() => { setProjects(fallbackProjects); setLoading(false); });
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section">
        <div className="container">
          <div className="section-label">Portfolio</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16 }}>
            My <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: '#8a8799', fontSize: 17, maxWidth: 520, lineHeight: 1.8, marginBottom: 48 }}>
            A collection of work spanning AI research, web development, and visual design.
          </p>

          {/* Filter */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48, alignItems: 'center' }}>
            <FiFilter size={14} style={{ color: '#4a4760' }} />
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                textTransform: 'uppercase', padding: '7px 18px', borderRadius: 100,
                border: `1px solid ${filter === cat ? categoryColors[cat] || '#c9a84c' : 'rgba(255,255,255,0.06)'}`,
                background: filter === cat ? `${categoryColors[cat] || '#c9a84c'}15` : 'transparent',
                color: filter === cat ? categoryColors[cat] || '#c9a84c' : '#4a4760',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{cat}</button>
            ))}
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: 80, color: '#4a4760', fontFamily: 'var(--font-mono)', fontSize: 13 }}>Loading projects...</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
              {filtered.map((project, i) => {
                const color = categoryColors[project.category] || '#c9a84c';
                return (
                  <div key={project._id || i} className="glass-card"
                    style={{ padding: 32, transition: 'all 0.4s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = `${color}40`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color, padding: '4px 10px', background: `${color}15`, borderRadius: 100, border: `1px solid ${color}30` }}>
                        {project.category}
                      </span>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#4a4760', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = color}
                            onMouseLeave={e => e.currentTarget.style.color = '#4a4760'}
                          ><FiGithub size={16} /></a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-mono)', fontSize: 11, color, border: `1px solid ${color}40`, borderRadius: 6, padding: '4px 10px', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = `${color}15`; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                          ><FiExternalLink size={11} /> Live</a>
                        )}
                      </div>
                    </div>

                    {project.featured && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 6 }}>★ Featured</div>
                    )}

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#f0ede8', lineHeight: 1.3 }}>{project.title}</h3>
                    <p style={{ color: '#8a8799', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{project.description}</p>

                    {project.longDescription && (
                      <p style={{ color: '#4a4760', fontSize: 13, lineHeight: 1.7, marginBottom: 20, borderLeft: `2px solid ${color}40`, paddingLeft: 12 }}>
                        {project.longDescription}
                      </p>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {(project.tech || []).map(t => (
                        <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4a4760', padding: '3px 8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
