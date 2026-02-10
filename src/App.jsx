import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
