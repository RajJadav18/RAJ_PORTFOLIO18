import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';

const socials = [
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajjadav18' },
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/rajjadav18' },
  { icon: FiMail, label: 'Email', href: 'mailto:rajjadav0607@gmail.com' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '60px 0 40px', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
              Raj<span style={{ color: 'var(--accent-gold)' }}>.</span>Jadav
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Crafting digital experiences with code & creativity. Open to opportunities.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 20 }}>Navigation</div>
            {['/', '/about', '/projects', '/contact'].map((path, i) => (
              <Link key={path} to={path} style={{
                display: 'block', color: 'var(--text-secondary)', fontSize: 14, marginBottom: 10,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {['Home', 'About', 'Projects', 'Contact'][i]}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 20 }}>Connect</div>
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-secondary)', fontSize: 14, marginBottom: 12, transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                <Icon size={14} />
                {label}
                <FiArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
            © 2025 Raj Jadav. All rights reserved.
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
            Built with <span style={{ color: 'var(--accent-gold)' }}>MERN Stack</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
