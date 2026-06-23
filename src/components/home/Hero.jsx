import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP text reveal — mask animation
    if (window.gsap) {
      const gsap = window.gsap;
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to('.hero-mask-text', {
        y: '0%',
        duration: 1.1,
        stagger: 0.18,
        ease: 'power4.out',
      })
      .to('.hero-fade', {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.7');

      // Subtle parallax on scroll
      if (window.ScrollTrigger) {
        gsap.registerPlugin(window.ScrollTrigger);
        gsap.to('.hero-bg-orb', {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      return () => tl.kill();
    }
  }, []);

  return (
    <section
      className="hero-section relative min-h-screen flex items-center overflow-hidden grid-overlay"
      id="home"
      ref={heroRef}
    >
      {/* ── Background: Deep ambient glow ── */}
      <div
        className="hero-bg-orb absolute pointer-events-none"
        style={{
          top: '-20%',
          right: '-10%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, rgba(16,185,129,0.04) 45%, transparent 70%)',
          animation: 'float-orb 30s infinite alternate ease-in-out',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '0',
          left: '-15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 65%)',
        }}
      />

      {/* ── Architectural Grid Lines (decorative) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.035]" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#6366F1" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full">
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            paddingTop: '120px',
            paddingBottom: '80px',
          }}
        >
          <div style={{ maxWidth: '760px' }}>

            {/* Overline */}
            <div
              className="hero-fade overline mb-8"
              style={{ opacity: 0, transform: 'translateY(16px)', color: '#6366F1' }}
            >
              Enterprise Software Studio
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(3.25rem, 7vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                marginBottom: '32px',
                color: '#F0F0F0',
              }}
            >
              <span className="line-mask">
                <span className="hero-mask-text">Build what</span>
              </span>
              <span className="line-mask">
                <span className="hero-mask-text" style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #818CF8 0%, #6EE7B7 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                  matters.
                </span>
              </span>
              <span className="line-mask">
                <span className="hero-mask-text">Ship what lasts.</span>
              </span>
            </h1>

            {/* Body */}
            <p
              className="hero-fade"
              style={{
                opacity: 0,
                transform: 'translateY(16px)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.125rem',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#94A3B8',
                maxWidth: '540px',
                marginBottom: '48px',
              }}
            >
              A.T.S designs and develops enterprise software with the precision of
              engineering and the intentionality of design. We are the choice for
              organizations that refuse to compromise between what works and what inspires.
            </p>

            {/* CTAs */}
            <div
              className="hero-fade"
              style={{
                opacity: 0,
                transform: 'translateY(16px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              <a href="#solutions" className="btn-primary">
                See Our Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M8 3l4 4-4 4"/>
                </svg>
              </a>
              <a href="/contact" className="btn-ghost">
                Start a Conversation
                <span
                  style={{ animation: 'bounce-down 2.5s ease-in-out infinite' }}
                >↓</span>
              </a>
            </div>

          </div>

          {/* ── Monospace Data Strip (Observatory detail) ── */}
          <div
            className="hero-fade"
            style={{
              opacity: 0,
              transform: 'translateY(16px)',
              marginTop: '80px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              maxWidth: '680px',
            }}
          >
            {[
              { label: 'Founded', value: '2024' },
              { label: 'Projects', value: '12+' },
              { label: 'Uptime SLA', value: '99.9%' },
              { label: 'Stack', value: 'React / Node' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: '20px 24px',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="data-label" style={{ marginBottom: '6px' }}>{stat.label}</div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#F0F0F0',
                    letterSpacing: '0.02em',
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Signature Gradient Line at Bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #6366F1 40%, #10B981 70%, transparent 100%)',
          opacity: 0.5,
        }}
      />
    </section>
  );
};

export default Hero;