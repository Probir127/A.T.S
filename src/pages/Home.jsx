import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import Results from '../components/home/Results';
import Experts from '../components/home/Experts';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <div style={{ background: '#07080C', minHeight: '100vh' }}>
      <SEO title="A.T.S — Enterprise Software Studio" path="/" />
      <Hero />
      <Services />
      <Process />
      <Results />
      <Experts />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
