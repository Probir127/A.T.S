import React from 'react';

/**
 * Reusable page header component for consistency
 * Ensures all pages have the same header styling and spacing
 */
export const PageHeader = ({ 
  label = '', 
  title = '', 
  subtitle = '',
  titleHighlight = false 
}) => {
  return (
    <div className="mb-20">
      {label && (
        <p className="text-[0.75rem] uppercase tracking-[4px] text-[var(--accent-primary)] mb-6 font-semibold font-['Inter']">
          {label}
        </p>
      )}
      
      <h1 className="font-['Space_Grotesk'] text-[clamp(2.5rem,7vw,5.5rem)] leading-none uppercase tracking-[1px] mb-6">
        {titleHighlight ? (
          <>
            {title.split(' ').map((word, idx) => {
              const isLast = idx === title.split(' ').length - 1;
              return isLast ? (
                <span key={idx} className="text-[var(--accent-primary)]">{word}</span>
              ) : (
                <span key={idx}>{word} </span>
              );
            })}
          </>
        ) : (
          title
        )}
      </h1>

      {subtitle && (
        <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-muted)] leading-[1.7] max-w-[700px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * Reusable section separator with gradient lines
 */
export const SectionDivider = ({ label = '' }) => (
  <div className="flex items-center justify-center gap-6 my-20">
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[var(--accent-primary)] opacity-20" />
    {label && (
      <h2 className="font-['Space_Grotesk'] text-[0.875rem] tracking-[0.2em] text-[var(--accent-primary)] text-center uppercase whitespace-nowrap">
        {label}
      </h2>
    )}
    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[var(--accent-primary)] opacity-20" />
  </div>
);

/**
 * Reusable text content sections with consistent spacing
 */
export const ContentSection = ({ title = '', children, maxWidth = 'max-w-[850px]' }) => (
  <section className={`flex flex-col gap-6 ${maxWidth} mx-auto text-left mb-16`}>
    {title && (
      <h2 className="font-['Space_Grotesk'] text-[2rem] text-[var(--text-main)] tracking-[1px] uppercase mb-4">
        {title}
      </h2>
    )}
    <div className="text-[1.0625rem] text-[var(--text-muted)] leading-[1.8] space-y-4">
      {children}
    </div>
  </section>
);

/**
 * Consistent page container wrapper
 */
export const PageContainer = ({ children, className = '' }) => (
  <div className={`bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24 ${className}`}>
    <div className="max-w-[1200px] mx-auto px-[5%]">
      {children}
    </div>
  </div>
);
