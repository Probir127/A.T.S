import React from 'react';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <SEO 
        title="Contact" 
        description="Get in touch with A.T.S to discuss your next project." 
        path="/contact" 
      />
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="mb-16">
          <p className="text-[0.75rem] uppercase tracking-[4px] text-[var(--color-indigo)] mb-6 font-semibold">Contact</p>
          <h1 className="font-['Space_Grotesk'] text-[clamp(2.5rem,7vw,5.5rem)] leading-none uppercase tracking-[-0.02em] mb-6">
            Let's Get In <span className="text-[var(--color-indigo)]">Touch</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-muted)] leading-[1.7] max-w-[650px]">
            Have a project in mind? Let's discuss how A.T.S can bring your vision to life.
          </p>
        </div>
        <p className="text-[1.125rem] text-[var(--text-muted)] leading-relaxed">Contact form coming soon.</p>
      </div>
    </div>
  );
};

export default Contact;