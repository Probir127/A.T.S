import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#07080C', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 0 40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.5rem', fontWeight: 600, color: '#F0F0F0', letterSpacing: '1px' }} className="notranslate">
                A.T.<span style={{ color: '#6366F1' }}>S</span>
              </span>
            </Link>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#94A3B8', lineHeight: 1.6, margin: 0, maxWidth: '280px' }}>
              Ajanta Tech and Studio. Enterprise software engineered for resilience.
            </p>
          </div>

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', color: '#F0F0F0', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Custom Web Applications', 'UI/UX Design Systems', 'Platform Architecture'].map((item, i) => (
                <Link key={i} to="/#services" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color = '#6366F1'} onMouseLeave={e => e.target.style.color = '#94A3B8'}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', color: '#F0F0F0', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Pages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About', 'Career', 'Blog', 'AI Studies', 'Contact'].map((item, i) => (
                <Link key={i} to={`/${item.toLowerCase().replace(' ', '-')}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color = '#6366F1'} onMouseLeave={e => e.target.style.color = '#94A3B8'}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Policy & Office */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', color: '#F0F0F0', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Policy
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((item, i) => (
                  <Link key={i} to={`/${item.toLowerCase().replace(/ & | /g, '-')}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color = '#6366F1'} onMouseLeave={e => e.target.style.color = '#94A3B8'}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', color: '#F0F0F0', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Office
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                House: 02, Block: B, Road: 04,<br />
                Banasree, Rampura, Dhaka 1219
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)', gap: '16px' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#64748B', margin: 0 }}>
            &copy; {currentYear} <span className="notranslate">Ajanta Tech and Studio</span>. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Facebook', 'LinkedIn', 'Instagram'].map((item, i) => (
              <a key={i} href="#" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color = '#6366F1'} onMouseLeave={e => e.target.style.color = '#64748B'}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
