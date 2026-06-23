import React from 'react';
import SEO from '../components/SEO';

const SectionSeparator = ({ title }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', margin: '80px 0' }}>
    <div style={{ height: '1px', flexGrow: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2))' }} />
    <h2 style={{
      fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', letterSpacing: '0.2em', 
      color: '#6366F1', textTransform: 'uppercase', margin: 0, whiteSpace: 'nowrap'
    }}>
      {title}
    </h2>
    <div style={{ height: '1px', flexGrow: 1, background: 'linear-gradient(270deg, transparent, rgba(99,102,241,0.2))' }} />
  </div>
);

const About = () => {
  return (
    <div style={{ background: '#07080C', minHeight: '100vh', paddingTop: '128px', paddingBottom: '96px' }}>
      <SEO 
        title="About Us" 
        description="A.T.S is an enterprise software studio that builds digital platforms with the precision of engineering and the intentionality of design." 
        path="/about" 
      />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        
        {/* Document Header */}
        <div style={{ marginBottom: '96px' }}>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '48px' }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.5rem', lineHeight: 1, letterSpacing: '0.02em', color: '#F0F0F0', margin: 0 }}>
                <span className="notranslate">A.T.<span style={{ color: '#6366F1' }}>S</span></span>
              </h3>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94A3B8', margin: 0 }}>
                Enterprise Software Studio
              </p>
           </div>
           
           <div style={{ height: '2px', width: '64px', background: '#6366F1', margin: '0 auto 48px auto', opacity: 0.5 }} />

           <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, letterSpacing: '-0.02em', margin: '0 0 24px 0', color: '#F0F0F0', fontWeight: 700 }}>
             ABOUT <span className="text-gradient-signature">US</span>
           </h1>
           <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', margin: 0 }}>
             Who We Are &nbsp;·&nbsp; What We Believe &nbsp;·&nbsp; Why We Do It
           </p>
        </div>

        {/* WHO WE ARE Section */}
        <SectionSeparator title="WHO WE ARE" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
           <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.75rem', fontWeight: 500, color: '#F0F0F0', margin: 0, lineHeight: 1.4 }}>
             We started A.T.S with one belief: <span className="text-gradient-signature">software should be as inspiring to use as it is reliable to run.</span>
           </p>
           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.8, color: '#94A3B8', margin: 0 }}>
             Enterprise software buyers live inside a painful paradox: they need engineering rigor (reliability, scalability, security) but they also need creative vision (products that feel alive, interfaces that delight, brands that inspire confidence). Most studios deliver one or the other. The tech shops write bulletproof code but produce soulless interfaces. The creative agencies design beautiful mockups that fall apart under load.
           </p>
           <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', color: '#10B981', margin: 0, letterSpacing: '0.05em' }}>
             // A.T.S exists at the intersection.
           </p>
           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.8, color: '#94A3B8', margin: 0 }}>
             A.T.S is an Enterprise Software Studio. We design and develop custom web applications, digital platforms, and immersive user interfaces. We work with growth-stage companies and enterprises to build software that not only functions flawlessly but also establishes a commanding market presence.
           </p>
           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.8, color: '#94A3B8', margin: 0 }}>
             Our team is a tight-knit collective of software architects, product designers, and strategists who care deeply about digital craft. Every project we partner on gets our full focus, our technical expertise, and our best thinking.
           </p>
        </div>

        {/* OUR MISSION Section */}
        <SectionSeparator title="OUR MISSION" />
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
           <div style={{ padding: '32px 0 16px 0' }}>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, color: '#F0F0F0', margin: 0, lineHeight: 1.2 }}>
                "To bridge the gap between engineering rigor and creative vision."
              </h4>
           </div>
           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.8, color: '#94A3B8', margin: 0 }}>
             We believe software should serve both function and inspiration. Our mission is to engineer systems that scale seamlessly while creating user experiences that are visually stunning and highly intuitive.
           </p>
        </div>

        {/* OUR VISION Section */}
        <SectionSeparator title="OUR VISION" />
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
           <div style={{ padding: '32px 0 16px 0' }}>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, color: '#F0F0F0', margin: 0, lineHeight: 1.2 }}>
                "To set the standard for high-craft digital products."
              </h4>
           </div>
           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.8, color: '#94A3B8', margin: 0 }}>
             We envision a digital landscape where complexity is distilled into elegant, usable software. We aim to build products that stand the test of time, helping businesses across the globe establish robust, premium engineering ecosystems.
           </p>
        </div>

        {/* WHY A.T.S Section */}
        <SectionSeparator title="WHY A.T.S" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.8, color: '#94A3B8', margin: 0 }}>
             We don't offer generic templates or cut corners. We architect every system and interface from first principles to fit your business goals precisely.
           </p>
           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.8, color: '#94A3B8', margin: 0 }}>
             We collaborate directly with your stakeholders. You work with the engineers and designers building your platform, ensuring transparent communication and rapid iteration.
           </p>

           <div className="card-ats" style={{ marginTop: '64px', padding: '64px', borderRadius: '16px', textAlign: 'center', background: '#0E1117' }}>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, margin: '0 0 16px 0', color: '#F0F0F0' }}>
                <span className="text-gradient-signature">Technology</span> Meets <span className="text-gradient-signature">Craft</span>.
              </h4>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', letterSpacing: '0.05em', color: '#94A3B8', margin: 0 }}>
                We don't just write code; we engineer resilient digital ecosystems.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;