import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to ship a custom platform?",
      answer: "A typical enterprise platform takes 4 to 8 weeks to architect, build, and deploy depending on the complexity of the integrations and the scale of the ecosystem."
    },
    {
      question: "Do you provide ongoing infrastructure support?",
      answer: "Yes, we offer ongoing SLA-backed support and maintenance. We don't just build ecosystems; we ensure they remain stable, secure, and highly performant under load."
    },
    {
      question: "Will the ecosystem scale as we grow?",
      answer: "Absolutely. We build exclusively on modern, scalable cloud architectures. From Day 1, your platform is engineered to handle massive concurrent traffic without degrading performance."
    },
    {
      question: "How is the intellectual property handled?",
      answer: "Upon project completion and final payment, you own 100% of the codebase, design assets, and intellectual property. We simply provide the engineering horsepower to bring it to life."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '120px 0', background: '#07080C', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 72px auto' }}>
          <div className="overline" style={{ marginBottom: '20px' }}>Clarification</div>
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
            Common <span className="text-gradient-signature">Questions</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: '#94A3B8',
            }}
          >
            Clarity on how we build, deploy, and scale your custom ecosystem. 
            Everything you need to know before we begin.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className="card-ats"
                style={{ 
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: isActive ? '#0E1117' : 'rgba(255,255,255,0.02)',
                  borderColor: isActive ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '24px 32px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                    color: isActive ? '#6366F1' : '#F0F0F0',
                  }}
                  onMouseEnter={e => { if(!isActive) e.currentTarget.style.color = '#6366F1'; }}
                  onMouseLeave={e => { if(!isActive) e.currentTarget.style.color = '#F0F0F0'; }}
                >
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 500 }}>
                    {faq.question}
                  </span>
                  <svg 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', flexShrink: 0 }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                <div 
                  style={{ 
                    maxHeight: isActive ? '300px' : '0px', 
                    opacity: isActive ? 1 : 0, 
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    padding: isActive ? '0 32px 32px 32px' : '0 32px',
                  }}
                >
                  <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.7, color: '#94A3B8', margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;