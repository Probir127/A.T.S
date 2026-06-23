import React from 'react';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <div style={{ background: '#07080C', minHeight: '100vh', paddingTop: '128px', paddingBottom: '96px' }}>
      <SEO 
        title="Contact Us" 
        description="Strategic guidance is one conversation away. Let's discuss how we can transform your complex business into a compelling narrative." 
        path="/contact" 
      />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div className="overline" style={{ marginBottom: '24px' }}>Start a conversation</div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', color: '#F0F0F0', margin: '0 0 24px 0' }}>
            Contact <span className="text-gradient-signature">Us</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.7, color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Strategic guidance is one conversation away. Let's discuss how we can engineer your next digital platform.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="card-ats" style={{ padding: '40px', borderRadius: '16px', background: '#0E1117' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Direct Inquiry</div>
              <a href="mailto:Studio.A.T.S@gmail.com" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 600, color: '#6366F1', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#818CF8'} onMouseLeave={e => e.target.style.color = '#6366F1'}>
                Studio.A.T.S@gmail.com
              </a>
            </div>

            <div className="card-ats" style={{ padding: '40px', borderRadius: '16px', background: '#0E1117' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Office</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.6, color: '#94A3B8', margin: 0 }}>
                House: 02, Block: B, Road: 04,<br />
                Banasree, Rampura, Dhaka 1219
              </p>
            </div>

            <div className="card-ats" style={{ padding: '40px', borderRadius: '16px', background: '#0E1117' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Follow Us</div>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Facebook', 'LinkedIn', 'Instagram'].map(platform => (
                  <a key={platform} href="#" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color = '#6366F1'} onMouseLeave={e => e.target.style.color = '#94A3B8'}>
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="card-ats" style={{ padding: '64px 40px', borderRadius: '16px', background: '#0E1117', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '0', right: '0', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', transform: 'translate(30%, -30%)', pointerEvents: 'none' }} />
            
            <svg width="64" height="64" viewBox="0 0 24 24" fill="#6366F1" style={{ marginBottom: '32px' }}>
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.51 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.22 13.44 13.86 13.93 13.68 14.14C13.5 14.36 13.32 14.38 13.07 14.27C12.82 14.17 12.05 13.91 11.13 13.1C10.41 12.46 9.90 11.67 9.76 11.43C9.62 11.19 9.73 11.06 9.85 10.94C9.96 10.82 10.10 10.64 10.22 10.5C10.35 10.36 10.39 10.25 10.47 10.07C10.55 9.89 10.51 9.73 10.44 9.61C10.38 9.5 9.9 8.27 9.69 7.79C9.5 7.33 9.29 7.35 9.12 7.34C8.95 7.33 8.78 7.33 8.53 7.33Z"/>
            </svg>
            
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 600, color: '#F0F0F0', marginBottom: '16px', margin: 0 }}>
              Chat on WhatsApp
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.6, color: '#94A3B8', marginBottom: '40px', maxWidth: '300px' }}>
              The fastest way to reach our strategic command. Start a conversation instantly with our team.
            </p>
            <a
              href="https://wa.me/8801611510192"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              Message on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
