import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiAward, FiBriefcase, FiBook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const experience = [
  {
    role: 'Web Development Intern',
    company: 'Satv Script',
    period: 'Jan 2024 – Mar 2024',
    location: 'Rajkot, Gujarat',
    icon: FiBriefcase,
    color: '#00d4ff',
    points: [
      'Developed responsive web pages using HTML, CSS, and JavaScript',
      'Collaborated to optimize website UI and layouts, enhancing usability',
      'Tested and resolved frontend issues ensuring seamless performance',
    ],
  },
  {
    role: 'Graphic Designer Intern',
    company: 'Satv Script',
    period: 'Jun 2023 – Mar 2024',
    location: 'Rajkot, Gujarat',
    icon: FiBriefcase,
    color: '#c9a84c',
    points: [
      'Designed banners and promotional materials for marketing campaigns',
      'Created graphics for social media reinforcing brand consistency',
      'Collaborated to generate innovative visual concepts for projects',
    ],
  },
];

const education = [
  {
    degree: 'B.E. Information Technology',
    institution: 'V.V.P Engineering College',
    period: 'Expected Jan 2027',
    gpa: 'GPA: 7.51',
    color: '#c9a84c',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Atmiya University',
    period: 'May 2024',
    gpa: 'CGPA: 7.37',
    color: '#00d4ff',
  },
  {
    degree: 'S.S.C.',
    institution: 'Sarvodaya School',
    period: 'May 2021',
    gpa: '',
    color: '#7c3aed',
  },
];

const certifications = [
  {
    title: 'Internship & Job Preparation',
    issuer: 'Internshala Trainings',
    period: 'Jan–Feb 2024',
    score: '75%',
  },
  {
    title: 'Web Development',
    issuer: 'Internshala Trainings',
    period: 'Nov 2023–Feb 2024',
    score: '66%',
  },
  {
    title: 'GenAI Fundamentals',
    issuer: 'PW Skills',
    period: '2024',
    score: 'Completed',
  },
];

const achievements = [
  { icon: FiAward, title: 'Smart India Hackathon 2025 Finalist', desc: 'Selected as finalist in India\'s premier student hackathon.' },
  { icon: FiAward, title: '2nd Rank – Research Presentation', desc: 'Gesture-Based Hand Control Game at V.V.P Engineering College.' },
  { icon: FiAward, title: 'AI Image Clearance Presentation', desc: 'Presented AI-Based Image Clearance research at V.V.P Engineering College.' },
  { icon: FiAward, title: '2nd Position – Sports Competition', desc: 'Team Leader at Atmiya University sports event.' },
  { icon: FiBriefcase, title: '2 Hackathons at Atmiya University', desc: 'Active participant in university-organized innovation hackathons.' },
];

export default function About() {
  return (
    <div style={{ paddingTop: 100 }}>
      {/* Header */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>
            {/* Avatar area */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%', maxWidth: 380, aspectRatio: '1',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(124,58,237,0.1) 100%)',
                borderRadius: 24, border: '1px solid var(--border-accent)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 16, position: 'relative', overflow: 'hidden',
              }}>
                {/* Initials avatar */}
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-gold) 0%, #7c3aed 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 800, color: 'var(--bg-primary)',
                }}>RJ</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700 }}>Raj Jadav</div>
                  <div style={{ color: 'var(--accent-gold)', fontSize: 13, marginTop: 4 }}>Developer & Designer</div>
                </div>

                {/* Info chips */}
                {[
                  [FiMapPin, 'Rajkot, Gujarat'],
                  [FiPhone, '+91 7990358080'],
                  [FiMail, 'rajjadav0607@gmail.com'],
                ].map(([Icon, text], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                    <Icon size={13} style={{ color: 'var(--accent-gold)' }} /> {text}
                  </div>
                ))}

                {/* Decoration */}
                <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
                <div style={{ position: 'absolute', bottom: -40, left: -40, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="section-label">About Me</div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 24 }}>
                Crafting Digital <span className="gradient-text">Experiences</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.9, marginBottom: 16 }}>
                I'm a dynamic web developer and designer based in Rajkot, Gujarat, currently pursuing my B.E. in Information Technology at V.V.P Engineering College (Expected 2027).
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.9, marginBottom: 24 }}>
                With hands-on experience at Satv Script, I've built responsive interfaces, optimized UX, and designed visual content that drives engagement. I'm passionate about AI-powered applications and constantly exploring the intersection of design and technology.
              </p>
              <a href="https://www.linkedin.com/in/rajjadav18" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: 13 }}
              >
                <FiLinkedin /> linkedin.com/in/rajjadav18
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-label">Career</div>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>

          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {experience.map((exp, i) => (
              <div key={i} className="glass-card" style={{ padding: 36, borderLeft: `3px solid ${exp.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{exp.role}</h3>
                    <div style={{ color: exp.color, fontFamily: 'var(--font-mono)', fontSize: 13 }}>{exp.company} · {exp.location}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', padding: '6px 14px', borderRadius: 100, border: '1px solid var(--border)' }}>
                    {exp.period}
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
                      <span style={{ color: exp.color, marginTop: 3, flexShrink: 0 }}>▸</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container">
          <div className="section-label">Academic</div>
          <h2 className="section-title">Education</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 48 }}>
            {education.map((edu, i) => (
              <div key={i} className="glass-card" style={{ padding: 28, transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <FiBook size={20} style={{ color: edu.color, marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{edu.degree}</h3>
                <div style={{ color: edu.color, fontSize: 13, marginBottom: 6 }}>{edu.institution}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{edu.period}</div>
                {edu.gpa && <div style={{ marginTop: 12, fontSize: 13, color: 'var(--text-secondary)' }}>{edu.gpa}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-label">Learning</div>
          <h2 className="section-title">Certifications</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 48 }}>
            {certifications.map((cert, i) => (
              <div key={i} className="glass-card" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: 12 }}>{cert.issuer}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>{cert.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{cert.period}</span>
                  <span style={{ background: 'var(--accent-gold-dim)', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: 12, padding: '3px 10px', borderRadius: 100 }}>{cert.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <div className="container">
          <div className="section-label">Highlights</div>
          <h2 className="section-title">Achievements</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 48 }}>
            {achievements.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="glass-card" style={{ padding: '24px 32px', display: 'flex', alignItems: 'flex-start', gap: 20, transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} style={{ color: 'var(--accent-gold)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{title}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Ready to work together<span style={{ color: 'var(--accent-gold)' }}>?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32, fontSize: 16 }}>Let's create something extraordinary.</p>
          <Link to="/contact" className="btn-primary">
            <span style={{ position: 'relative', zIndex: 1 }}>Get In Touch</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
