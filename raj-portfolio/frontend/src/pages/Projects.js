import React, { useEffect, useState } from 'react';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import axios from 'axios';

const fallbackProjects = [
  {
    _id: '1',
    title: 'Gesture-Based Hand Control Game',
    description: 'AI-powered game controlled entirely via hand gestures using computer vision & ML.',
    longDescription: 'Award-winning project presented at V.V.P Engineering College. Uses real-time hand tracking and gesture recognition to control game mechanics — no keyboard or mouse needed. Achieved 2nd rank in research competition.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    category: 'ai',
    featured: true,
  },
  {
    _id: '2',
    title: 'AI-Based Image Clearance',
    description: 'Deep learning system for automatic image enhancement and noise removal.',
    longDescription: 'Presented at V.V.P Engineering College research competition. Implements neural network-based image enhancement pipeline with real-time processing capability and significant quality improvements.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
    category: 'ai',
    featured: true,
  },
  {
    _id: '3',
    title: 'Responsive Web Portfolio',
    description: 'Modern responsive web experiences built during internship at Satv Script.',
    longDescription: 'Focused on cross-device compatibility, performance optimization, and smooth user experience. Collaborated with design team to enhance UI layouts and usability.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'web',
    featured: true,
  },
  {
    _id: '4',
    title: 'Brand Design System',
    description: 'Complete visual identity and design system for marketing campaigns.',
    longDescription: 'Created during graphic design internship at Satv Script. Includes banners, social media templates, and brand guidelines ensuring consistency across all platforms.',
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    category: 'design',
    featured: false,
  },
];

const categories = ['all', 'ai', 'web', 'design', 'mobile', 'other'];
const categoryColors = { ai: '#c9a84c', web: '#00d4ff', design: '#7c3aed', mobile: '#10b981', other: '#f59e0b' };

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL || 'https://raj-portfolio18.onrender.com';
    axios.get(`${API}/api/projects`)
      .then(r => { setProjects(r.data.data || fallbackProjects); setLoading(false); })
      .catch(() => { setProjects(fallbackProjects); setLoading(false); });
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const availableCategories = categories.filter(c => c === 'all' || projects.some(p => p.category === c));

  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section">
        <div className="container">
          <div className="section-label">Portfolio</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16 }}>
            My <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 520, lineHeight: 1.8, marginBottom: 48 }}>
            A collection of work spanning AI research, web development, and visual design.
          </p>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48, alignItems: 'center' }}>
            <FiFilter size={14} style={{ color: 'var(--text-muted)' }} />
            {availableCategories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '7px 18px', borderRadius: 100,
                  border: `1px solid ${filter === cat ? categoryColors[cat] || 'var(--accent-gold)' : 'var(--border)'}`,
                  background: filter === cat ? `${categoryColors[cat] || 'var(--accent-gold)'}15` : 'transparent',
                  color: filter === cat ? categoryColors[cat] || 'var(--accent-gold)' : 'var(--text-muted)',
                  cursor: 'none', transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: 80, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              Loading projects...
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
              {filtered.map((project, i) => {
                const color = categoryColors[project.category] || '#c9a84c';
                return (
                  <div key={project._id || i} className="glass-card"
                    style={{ padding: 32, transition: 'all 0.4s', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = `${color}40`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    {/* Top */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em',
                        textTransform: 'uppercase', color,
                        padding: '4px 10px', background: `${color}15`,
                        borderRadius: 100, border: `1px solid ${color}30`,
                      }}>
                        {project.category}
                      </span>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = color}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                          ><FiGithub size={16} /></a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = color}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                          ><FiExternalLink size={16} /></a>
                        )}
                      </div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: 8 }}>
                        ★ Featured
                      </div>
                    )}

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 12, lineHeight: 1.3, color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                      {project.description}
                    </p>

                    {project.longDescription && (
                      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: 20, borderLeft: `2px solid ${color}40`, paddingLeft: 12 }}>
                        {project.longDescription}
                      </p>
                    )}

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
              })}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 80, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
