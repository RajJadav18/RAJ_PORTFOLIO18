import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(6,6,13,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* LOGO */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{
              width: 42, height: 42,
              background: 'linear-gradient(135deg, #c9a84c 0%, #a07830 100%)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 15,
              color: '#06060d',
              letterSpacing: '0.02em',
              flexShrink: 0,
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}>RJ</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: '#f0ede8',
                lineHeight: 1,
              }}>
                RAJ <span style={{ color: '#c9a84c' }}>JADAV</span>
              </span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 8,
                letterSpacing: '0.22em',
                color: '#4a4760',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}>Dev &amp; Designer</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: location.pathname === link.path ? '#c9a84c' : '#8a8799',
                transition: 'color 0.2s',
                position: 'relative',
              }}>
                {link.label}
                {location.pathname === link.path && (
                  <span style={{
                    position: 'absolute', bottom: -4, left: 0, right: 0,
                    height: 1, background: '#c9a84c', borderRadius: 1,
                  }} />
                )}
              </Link>
            ))}
            <a href="mailto:rajjadav0607@gmail.com" className="btn-primary" style={{ fontSize: 13, padding: '10px 22px' }}>
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 1,
                background: '#f0ede8',
                transition: 'all 0.3s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)' :
                  menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(6,6,13,0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 40,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {navLinks.map(link => (
          <Link key={link.path} to={link.path} style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: '0.05em',
            color: location.pathname === link.path ? '#c9a84c' : '#f0ede8',
          }}>
            {link.label}
          </Link>
        ))}
        <a href="mailto:rajjadav0607@gmail.com" className="btn-primary">Hire Me</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}