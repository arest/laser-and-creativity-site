import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import CategoryPage from './components/CategoryPage';
import { ServicesSection } from './components/ServicesSection';
import { NavigationSection } from './components/NavigationSection';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <NavigationSection />
                <ServicesSection />
              </>
            } />
            <Route path="/categoria/:id" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;