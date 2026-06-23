import React from 'react';

const SERVICES = [
  {
    id: 'web-app',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8l2 2-2 2M11 13h4"/>
      </svg>
    ),
    title: 'Custom Web Applications',
    desc: 'We design and develop production-grade web applications using React, Next.js, and Node.js — optimized for performance, accessibility, and long-term maintainability.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    id: 'design',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 5-5 9-5 9S7 12 7 7a5 5 0 0 1 5-5z"/>
        <circle cx="12" cy="7" r="2"/>
        <path d="M3 21l4-4M21 21l-4-4"/>
        <path d="M7 17l10 0"/>
      </svg>
    ),
    title: 'UI/UX Design Systems',
    desc: 'We architect comprehensive design systems — from component libraries to interaction patterns — that scale across products and teams without losing coherence.',
    tags: ['Figma', 'Design Tokens', 'Accessibility'],
  },
  {
    id: 'platform',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="9" height="9" rx="2"/>
        <rect x="13" y="2" width="9" height="9" rx="2"/>
        <rect x="2" y="13" width="9" height="9" rx="2"/>
        <rect x="13" y="13" width="9" height="9" rx="2"/>
      </svg>
    ),
    title: 'Platform Architecture',
    desc: 'We design resilient, scalable digital infrastructure — API layers, microservices, database schemas — built to handle enterprise traffic and evolve over years, not months.',
    tags: ['AWS', 'PostgreSQL', 'Microservices'],
  },
  {
    id: 'mobile',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile Applications',
    desc: 'Cross-platform mobile applications that feel native. We build with React Native for maximum velocity without sacrificing the polish enterprise users demand.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    id: 'brand',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Digital Brand Identity',
    desc: 'From logo systems to motion guidelines, we craft brand identities with the depth and precision that enterprise organizations require across every touchpoint.',
    tags: ['Identity', 'Motion', 'Guidelines'],
  },
  {
    id: 'seo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Performance & SEO',
    desc: 'We engineer for measurable results: Core Web Vitals, organic discoverability, and analytics infrastructure that gives you full visibility into what matters.',
    tags: ['Core Web Vitals', 'Analytics', 'SEO'],
  },
  {
    id: 'ai',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="9" r="2"/>
        <circle cx="18" cy="9" r="2"/>
        <circle cx="12" cy="18" r="2"/>
        <path d="M6 11v3.5"/>
        <path d="M18 11v3.5"/>
        <path d="M8 13.5h8"/>
        <path d="M6 14l4 2"/>
        <path d="M18 14l-4 2"/>
      </svg>
    ),
    title: 'AI Integration & Automation',
    desc: 'We integrate intelligent systems into your architecture — LLM-powered features, predictive analytics, workflow automation — built for enterprise scale and reliability.',
    tags: ['LLM Integration', 'Automation', 'Machine Learning'],
  },
];

const Services = () => {
  return (
    <section
      id="solutions"
      style={{
        padding: '120px 0',
        background: '#07080C',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header */}
        <div style={{ maxWidth: '600px', marginBottom: '72px' }}>
          <div className="overline" style={{ marginBottom: '20px' }}>
            What we build
          </div>
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
            Studio-grade software for{' '}
            <span className="text-gradient-signature">organizations that ship.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: '#94A3B8',
            }}
          >
            We design and develop across the full digital stack —
            from architecture decisions to pixel-level craft.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '56px',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <a href="/contact" className="btn-primary">
            Discuss a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M8 3l4 4-4 4"/>
            </svg>
          </a>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8125rem',
              color: '#64748B',
              letterSpacing: '0.02em',
            }}
          >
            // All projects begin with a scoping conversation, no commitment required.
          </p>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ svc }) => {
  return (
    <div
      style={{
        padding: '40px',
        background: '#07080C',
        transition: 'background 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#0E1117';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#07080C';
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          background: 'rgba(99,102,241,0.08)',
          border: '1px solid rgba(99,102,241,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#818CF8',
          marginBottom: '24px',
          flexShrink: 0,
        }}
      >
        {svc.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.1875rem',
          fontWeight: 600,
          lineHeight: 1.25,
          color: '#F0F0F0',
          marginBottom: '12px',
          letterSpacing: '-0.01em',
        }}
      >
        {svc.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.9375rem',
          lineHeight: 1.65,
          color: '#64748B',
          marginBottom: '24px',
        }}
      >
        {svc.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {svc.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              color: '#10B981',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.15)',
              borderRadius: '4px',
              padding: '4px 10px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Services;