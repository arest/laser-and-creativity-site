import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorksSection } from './components/WorksSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;