import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/logo-bg.png"
          alt="Wood laser art background"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-white/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900 mb-6 animate-fade-in">
          Laser e <span className="text-amber-700">Creatività</span>
        </h1>
        <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed">
          Trasformiamo il legno in arte grazie al taglio laser di precisione e alla maestria artigianale
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <a
            href="#works"
            className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-md"
          >
            Scopri le nostre opere
          </a> */}
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-amber-600 text-amber-700 rounded-md hover:bg-amber-50 transition-colors duration-300"
          >
            Contattaci
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-amber-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};