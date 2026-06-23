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
    <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <SEO 
        title="About Us" 
        description="A.T.S is an enterprise software studio that builds digital platforms with the precision of engineering and the intentionality of design." 
        path="/about" 
      />
      <div className="max-w-[1000px] mx-auto px-[24px] text-center">
        
        {/* Document Header */}
        <div className="mb-24">
           <div className="flex flex-col items-center gap-2 mb-12">
              <h3 className="font-['Space_Grotesk'] text-[3.5rem] leading-none tracking-[0.02em] text-[var(--text-main)] notranslate">
                A.T.<span className="text-[var(--color-indigo)]">S</span>
              </h3>
              <p className="font-['JetBrains_Mono'] text-[0.8125rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Enterprise Software Studio
              </p>
           </div>
           
           <div className="h-[2px] w-16 bg-[var(--color-indigo)] mx-auto mb-12 opacity-50" />

           <h1 className="font-['Space_Grotesk'] text-[clamp(2.5rem,7vw,5.5rem)] leading-none uppercase tracking-[-0.02em] mb-6 text-[var(--text-main)]">
             ABOUT <span className="text-[var(--color-indigo)]">US</span>
           </h1>
           <p className="font-['JetBrains_Mono'] text-[0.875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
             Who We Are &nbsp;·&nbsp; What We Believe &nbsp;·&nbsp; Why We Do It
           </p>
        </div>

        {/* WHO WE ARE Section */}
        <SectionSeparator title="WHO WE ARE" />
        <div className="flex flex-col gap-8 max-w-[850px] mx-auto text-left">
           <p className="font-['Space_Grotesk'] text-[1.75rem] font-medium text-[var(--text-main)] leading-[1.4]">
             We started A.T.S with one belief: <span className="text-[var(--color-indigo)]">software should be as inspiring to use as it is reliable to run.</span>
           </p>
           <p className="font-['Inter'] text-[1.125rem] leading-[1.8] text-[var(--text-muted)]">
             Enterprise software buyers live inside a painful paradox: they need engineering rigor (reliability, scalability, security) but they also need creative vision (products that feel alive, interfaces that delight, brands that inspire confidence). Most studios deliver one or the other. The tech shops write bulletproof code but produce soulless interfaces. The creative agencies design beautiful mockups that fall apart under load.
           </p>
           <p className="font-['JetBrains_Mono'] text-[0.875rem] text-[var(--color-emerald)] tracking-[0.05em]">
             // A.T.S exists at the intersection.
           </p>
           <p className="font-['Inter'] text-[1.125rem] leading-[1.8] text-[var(--text-muted)]">
             A.T.S is an Enterprise Software Studio. We design and develop custom web applications, digital platforms, and immersive user interfaces. We work with growth-stage companies and enterprises to build software that not only functions flawlessly but also establishes a commanding market presence.
           </p>
           <p className="font-['Inter'] text-[1.125rem] leading-[1.8] text-[var(--text-muted)]">
             Our team is a tight-knit collective of software architects, product designers, and strategists who care deeply about digital craft. Every project we partner on gets our full focus, our technical expertise, and our best thinking.
           </p>
        </div>

        {/* OUR MISSION Section */}
        <SectionSeparator title="OUR MISSION" />
        <div className="max-w-[850px] mx-auto text-left">
           <div className="py-8 pb-4">
              <h4 className="font-['Space_Grotesk'] text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-[var(--text-main)] leading-[1.2]">
                "To bridge the gap between engineering rigor and creative vision."
              </h4>
           </div>
           <p className="font-['Inter'] text-[1.125rem] leading-[1.8] text-[var(--text-muted)]">
             We believe software should serve both function and inspiration. Our mission is to engineer systems that scale seamlessly while creating user experiences that are visually stunning and highly intuitive.
           </p>
        </div>

        {/* OUR VISION Section */}
        <SectionSeparator title="OUR VISION" />
        <div className="max-w-[850px] mx-auto text-left">
           <div className="py-8 pb-4">
              <h4 className="font-['Space_Grotesk'] text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-[var(--text-main)] leading-[1.2]">
                "To set the standard for high-craft digital products."
              </h4>
           </div>
           <p className="font-['Inter'] text-[1.125rem] leading-[1.8] text-[var(--text-muted)]">
             We envision a digital landscape where complexity is distilled into elegant, usable software. We aim to build products that stand the test of time, helping businesses across the globe establish robust, premium engineering ecosystems.
           </p>
        </div>

        {/* WHY A.T.S Section */}
        <SectionSeparator title="WHY A.T.S" />
        <div className="flex flex-col gap-8 max-w-[850px] mx-auto text-left">
           <p className="font-['Inter'] text-[1.125rem] leading-[1.8] text-[var(--text-muted)]">
             We don't offer generic templates or cut corners. We architect every system and interface from first principles to fit your business goals precisely.
           </p>
           <p className="font-['Inter'] text-[1.125rem] leading-[1.8] text-[var(--text-muted)]">
             We collaborate directly with your stakeholders. You work with the engineers and designers building your platform, ensuring transparent communication and rapid iteration.
           </p>

           <div className="mt-16 p-16 rounded-xl bg-[var(--color-slate)] text-center border border-[var(--color-border)]">
              <h4 className="font-['Space_Grotesk'] text-[clamp(2rem,5vw,3rem)] font-bold mb-4 text-[var(--text-main)]">
                <span className="text-[var(--color-indigo)]">Technology</span> Meets <span className="text-[var(--color-indigo)]">Craft</span>.
              </h4>
              <p className="font-['JetBrains_Mono'] text-[0.875rem] tracking-[0.05em] text-[var(--text-muted)]">
                We don't just write code; we engineer resilient digital ecosystems.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;