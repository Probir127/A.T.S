import React, { useState, useEffect, useRef } from 'react';

const Experts = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const experts = [
    {
      name: "Razu Paul",
      role: "Founder & CEO",
      photo: "/images/WhatsApp-Image-2026-03-16-at-12.39.53-AM.jpeg",
      desc: "Razu is the driving force behind A.T.S's mission to build complete digital ecosystems. His leadership and strategic vision have shaped the studio into a powerhouse for digital transformation."
    },
    {
      name: "Probir Saha Shohom",
      role: "Co-Founder & Head of Tech",
      photo: "/images/WhatsApp-Image-2026-03-15-at-8.31.37-PM.jpeg",
      desc: "Probir leads the technical vision behind every A.T.S project. From robust web architectures to seamless application deployment, he ensures every digital ecosystem is built for scale, performance, and premium quality."
    },
    {
      name: "Mir Sajjad",
      role: "Technical Lead",
      photo: "/images/image.png",
      desc: "Mir Sajjad builds the high-performance digital infrastructure behind every ecosystem. From custom web architectures to seamless app deployment, he ensures your tech stack delivers at scale."
    },
    {
      name: "Sudipto Saha",
      role: "Junior Developer",
      photo: "/images/WhatsApp-Image-2026-03-15-at-8.30.53-PM.jpeg",
      desc: "Sudipto is a dedicated developer executing the foundational code behind A.T.S applications. He supports the technical team by building reliable, performant features and ensuring seamless user experiences."
    },
    {
      name: "Samiya Islam Sadiya",
      role: "Frontend Designer & SEO",
      photo: "/images/WhatsApp-Image-2026-03-15-at-8.57.41-PM.jpeg",
      desc: "Samiya unites creative interface design with robust SEO strategies. She ensures every A.T.S platform not only looks visually stunning but also ranks highly and converts visitors into lasting clients."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedExperts = [...experts, ...experts.slice(0, itemsPerView)];

  const nextSlide = () => {
    if (activeSlide >= experts.length) return;
    setIsTransitioning(true);
    setActiveSlide(prev => prev + 1);
  };
  
  const prevSlide = () => {
    if (activeSlide === 0) {
      setIsTransitioning(false);
      setActiveSlide(experts.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setActiveSlide(experts.length - 1);
      }, 30);
    } else {
      setIsTransitioning(true);
      setActiveSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (activeSlide === experts.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [activeSlide, experts.length]);

  const hoverRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverRef.current) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide, experts.length]);

  return (
    <section id="experts" style={{ padding: '120px 0', background: '#0E1117', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px', marginBottom: '72px' }}>
          <div>
            <div className="overline" style={{ marginBottom: '20px' }}>Strategic Capital</div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#F0F0F0',
                margin: 0,
              }}
            >
              Meet Our <span className="text-gradient-signature">Experts</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: '#94A3B8',
                maxWidth: '480px',
                margin: 0,
              }}
            >
              The architects behind the ecosystems. Pure strategic horsepower, 
              dedicated to scaling your narrative.
            </p>
            
            {/* Slider Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                onClick={prevSlide}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.02)',
                  color: '#F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6366F1'; e.currentTarget.style.borderColor = '#6366F1'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#F0F0F0'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                {experts.map((_, idx) => {
                  const isActive = activeSlide === idx || (activeSlide === experts.length && idx === 0);
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsTransitioning(true);
                        setActiveSlide(idx);
                      }}
                      style={{
                        height: '6px', borderRadius: '3px', transition: 'all 0.3s ease', cursor: 'pointer', border: 'none',
                        width: isActive ? '24px' : '6px',
                        background: isActive ? '#6366F1' : 'rgba(255,255,255,0.2)',
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>

              <button 
                onClick={nextSlide}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.02)',
                  color: '#F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6366F1'; e.currentTarget.style.borderColor = '#6366F1'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#F0F0F0'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Universal Slider */}
        <div 
          style={{ position: 'relative' }}
          onMouseEnter={() => hoverRef.current = true}
          onMouseLeave={() => hoverRef.current = false}
        >
           <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
            <div 
              style={{ 
                display: 'flex', 
                transform: `translateX(-${activeSlide * (100 / itemsPerView)}%)`,
                transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
            >
              {extendedExperts.map((expert, idx) => (
                <div 
                  key={idx} 
                  style={{ flexShrink: 0, padding: '0 12px', width: `${100 / itemsPerView}%` }}
                >
                  <div 
                    className="card-ats"
                    style={{ 
                      position: 'relative', height: '450px', overflow: 'hidden', borderRadius: '16px',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px'
                    }}
                    onMouseEnter={e => {
                       const img = e.currentTarget.querySelector('img');
                       const p = e.currentTarget.querySelector('p.desc');
                       if (img) img.style.transform = 'scale(1.05)';
                       if (p) p.style.opacity = '1';
                    }}
                    onMouseLeave={e => {
                       const img = e.currentTarget.querySelector('img');
                       const p = e.currentTarget.querySelector('p.desc');
                       if (img) img.style.transform = 'scale(1)';
                       if (p) p.style.opacity = '0';
                    }}
                  >
                    <img 
                      src={expert.photo} 
                      alt={expert.name} 
                      style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        objectFit: 'cover', transition: 'transform 0.7s ease', zIndex: 0
                      }} 
                    />
                    <div style={{
                      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                      background: 'linear-gradient(to top, #07080C 0%, transparent 60%)', opacity: 0.9, zIndex: 1
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.75rem', fontWeight: 600, color: '#F0F0F0',
                        lineHeight: 1.1, marginBottom: '4px'
                      }}>
                        {expert.name}
                      </h3>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', fontWeight: 500, color: '#6366F1',
                        letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'
                      }}>
                        {expert.role}
                      </div>
                      <p className="desc" style={{
                        fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', lineHeight: 1.6, color: '#94A3B8',
                        opacity: 0, transition: 'opacity 0.5s ease', margin: 0
                      }}>
                        {expert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;