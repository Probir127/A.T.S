import React, { useState } from 'react';

const CASES = [
  {
    metric: '14',
    suffix: ' days',
    label: 'Time to Market',
    challenge: 'A tech consultancy needed a credible digital presence for their Series A round — in two weeks.',
    resolution: 'We shipped a production-grade web platform with full design system, copywriting, and SEO architecture in 14 days.',
  },
  {
    metric: '99.9',
    suffix: '%',
    label: 'Uptime SLA Delivered',
    challenge: 'An enterprise client\'s legacy platform had recurring downtime incidents affecting 40,000 daily users.',
    resolution: 'We rebuilt the infrastructure on a resilient cloud architecture. Uptime has held at 99.9% for 18 consecutive months.',
  },
  {
    metric: '3×',
    suffix: '',
    label: 'Performance Improvement',
    challenge: 'A growth-stage startup\'s React app scored 34 on Core Web Vitals — losing users on mobile before they ever engaged.',
    resolution: 'After a full performance audit and rebuild, Lighthouse scores exceeded 95. Bounce rate dropped 42%.',
  },
  {
    metric: '68',
    suffix: '%',
    label: 'Reduction in Operational Overhead',
    challenge: 'A logistics company was managing 12 disconnected tools with 3 different teams maintaining separate data sources.',
    resolution: 'We designed and shipped a unified internal platform that consolidated operations into a single, maintainable system.',
  },
];

const Results = () => {
  const [active, setActive] = useState(0);
  const item = CASES[active];

  return (
    <section
      id="impact"
      style={{
        padding: '120px 0',
        background: '#07080C',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '72px' }}>
          <div className="overline" style={{ marginBottom: '20px' }}>Impact by the numbers</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#F0F0F0',
              marginBottom: '20px',
            }}
          >
            The work speaks.{' '}
            <span className="text-gradient-signature">The results confirm it.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: '#94A3B8',
            }}
          >
            Case studies, not promises. Here is what precise engineering delivers.
          </p>
        </div>

        {/* Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {/* Left: Case selector */}
          <div style={{ background: '#0E1117' }}>
            {CASES.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 28px',
                  background: active === idx ? '#161B26' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: active === idx ? '2px solid #6366F1' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: active === idx ? '#818CF8' : '#374151',
                    lineHeight: 1,
                    marginBottom: '6px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {c.metric}{c.suffix}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    color: active === idx ? '#94A3B8' : '#374151',
                    lineHeight: 1.4,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {c.label}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Active case detail */}
          <div
            style={{
              background: '#07080C',
              padding: '56px 48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Big number */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(4rem, 8vw, 6.5rem)',
                fontWeight: 500,
                lineHeight: 1,
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #818CF8 0%, #6EE7B7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                marginBottom: '8px',
              }}
            >
              {item.metric}{item.suffix}
            </div>
            <div className="overline" style={{ marginBottom: '40px', color: '#64748B' }}>
              {item.label}
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
                marginBottom: '40px',
              }}
            />

            {/* Challenge */}
            <div style={{ marginBottom: '28px' }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: '10px',
                }}
              >
                The Challenge
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#94A3B8',
                }}
              >
                {item.challenge}
              </p>
            </div>

            {/* Resolution */}
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#10B981',
                  marginBottom: '10px',
                }}
              >
                What We Built
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#F0F0F0',
                }}
              >
                {item.resolution}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Results;