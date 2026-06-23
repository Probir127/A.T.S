import React from 'react';

const STEPS = [
  {
    id: '01',
    title: 'Discover',
    desc: 'We begin with deep listening — your business context, technical constraints, user needs, and long-term objectives. No assumptions. No templates forced onto your problem.',
    detail: 'Stakeholder interviews · Technical audit · Competitive analysis',
  },
  {
    id: '02',
    title: 'Architect',
    desc: 'We design the system before we write the first line of code. Architecture decisions documented, technology choices reasoned, roadmap set with clear milestones.',
    detail: 'System design · Wireframes · Tech stack selection',
  },
  {
    id: '03',
    title: 'Build',
    desc: 'Iterative delivery in tested, reviewed increments. You see working software early. We validate assumptions continuously rather than delivering a single big reveal.',
    detail: 'Agile sprints · Code review · Continuous integration',
  },
  {
    id: '04',
    title: 'Ship',
    desc: 'Deployment to production is not the end. We monitor, optimize, and support what we build. Knowledge transfer ensures your team owns and understands the system.',
    detail: 'Deployment · Performance monitoring · Documentation',
  },
];

const Process = () => {
  return (
    <section
      id="approach"
      style={{
        padding: '120px 0',
        background: '#0E1117',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Layout: two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="lg:grid-cols-2 grid-cols-1"
        >
          {/* Left — Sticky Header */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="overline" style={{ marginBottom: '20px' }}>
              How we work
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#F0F0F0',
                marginBottom: '24px',
              }}
            >
              Methodical by design.{' '}
              <span className="text-gradient-signature">Iterative by practice.</span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: '#64748B',
                maxWidth: '420px',
              }}
            >
              Enterprise software doesn't emerge from chaos. Our process is deliberate —
              designed to reduce ambiguity and build trust incrementally.
            </p>

            {/* Mono accent detail */}
            <div
              style={{
                marginTop: '40px',
                padding: '20px',
                background: '#07080C',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8125rem',
                color: '#64748B',
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: '#6366F1' }}>// Every project</span><br />
              <span style={{ color: '#10B981' }}>const</span> approach = <span style={{ color: '#F0F0F0' }}>&#123;</span><br />
              &nbsp;&nbsp;assumptions: <span style={{ color: '#F59E0B' }}>'challenged'</span>,<br />
              &nbsp;&nbsp;decisions: <span style={{ color: '#F59E0B' }}>'documented'</span>,<br />
              &nbsp;&nbsp;quality: <span style={{ color: '#F59E0B' }}>'non-negotiable'</span>,<br />
              <span style={{ color: '#F0F0F0' }}>&#125;</span>
            </div>
          </div>

          {/* Right — Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {STEPS.map((step, idx) => (
              <div
                key={step.id}
                style={{
                  display: 'flex',
                  gap: '24px',
                  paddingBottom: idx < STEPS.length - 1 ? '40px' : 0,
                  position: 'relative',
                }}
              >
                {/* Step Number + Line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: '#6366F1',
                      flexShrink: 0,
                    }}
                  >
                    {step.id}
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div
                      style={{
                        width: '1px',
                        flexGrow: 1,
                        marginTop: '8px',
                        background: 'linear-gradient(to bottom, rgba(99,102,241,0.3), transparent)',
                        minHeight: '40px',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingTop: '8px', paddingBottom: '8px' }}>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.375rem',
                      fontWeight: 600,
                      color: '#F0F0F0',
                      marginBottom: '12px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      lineHeight: 1.65,
                      color: '#64748B',
                      marginBottom: '12px',
                    }}
                  >
                    {step.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: '#10B981',
                      opacity: 0.8,
                    }}
                  >
                    → {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;