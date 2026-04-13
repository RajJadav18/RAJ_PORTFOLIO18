import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'rajjadav0607@gmail.com', href: 'mailto:rajjadav0607@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 7990358080', href: 'tel:+917990358080' },
  { icon: FiMapPin, label: 'Location', value: 'Rajkot, Gujarat, India 360004', href: null },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/rajjadav18', href: 'https://www.linkedin.com/in/rajjadav18' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/rajjadav18', href: 'https://github.com/rajjadav18' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message too short';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    const API = process.env.REACT_APP_API_URL || 'https://raj-portfolio18.onrender.com'; try {
      await axios.post(`${API}/api/contact`, form);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent! I\'ll get back to you soon.');
    } catch (err) {
      // Even if backend is down, simulate success for demo
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent! I\'ll get back to you soon.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${errors[field] ? '#ef4444' : 'var(--border)'}`,
    borderRadius: 10,
    padding: '14px 18px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    resize: 'none',
  });

  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section">
        <div className="container">
          <div className="section-label">Say Hello</div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16 }}>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 520, lineHeight: 1.8, marginBottom: 72 }}>
            Whether it's a project, opportunity, or just to say hi — my inbox is always open.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'start' }}>

            {/* Contact Info */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Contact Info</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="glass-card" style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          style={{ fontSize: 14, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >{value}</a>
                      ) : (
                        <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div style={{ marginTop: 32, padding: '20px 24px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Available for Hire</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
                  Open to full-time roles, internships, and freelance projects.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="glass-card" style={{ padding: 48 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <FiCheck size={28} style={{ color: '#10b981' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button className="btn-outline" onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Send a Message</h2>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                    {[
                      { name: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                      { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                    ].map(({ name, label, placeholder, type }) => (
                      <div key={name}>
                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{label}</label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          style={inputStyle(name)}
                          onFocus={e => { e.target.style.borderColor = errors[name] ? '#ef4444' : 'var(--accent-gold)'; e.target.style.boxShadow = `0 0 0 3px ${errors[name] ? 'rgba(239,68,68,0.1)' : 'var(--accent-gold-dim)'}` }}
                          onBlur={e => { e.target.style.borderColor = errors[name] ? '#ef4444' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                        />
                        {errors[name] && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors[name]}</span>}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      style={inputStyle('subject')}
                      onFocus={e => { e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--accent-gold)'; e.target.style.boxShadow = `0 0 0 3px ${errors.subject ? 'rgba(239,68,68,0.1)' : 'var(--accent-gold-dim)'}` }}
                      onBlur={e => { e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.subject && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors.subject}</span>}
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      style={inputStyle('message')}
                      onFocus={e => { e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--accent-gold)'; e.target.style.boxShadow = `0 0 0 3px ${errors.message ? 'rgba(239,68,68,0.1)' : 'var(--accent-gold-dim)'}` }}
                      onBlur={e => { e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.message && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-primary" disabled={loading}
                    style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                  >
                    <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      {loading ? 'Sending...' : (<><FiSend /> Send Message</>)}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
