import React from 'react';
import { useTexts } from '../hooks/useTexts';

export const AboutSection: React.FC = () => {
  const { texts, loading } = useTexts();
  const chiSiamo = texts.find((t) => t.id === 1);
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Chi Siamo
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.ctfassets.net/ht62032y0gt7/310MWCfbuPo8slcOGnLSj9/643ef8e4b42fc57faab4b3fd20c57638/chii-siamo.jpeg"
                alt="Artigiano al lavoro con taglio laser"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-lg -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-amber-800 mb-4">
            {loading ? (
              <p className="text-amber-900 mb-6 leading-relaxed">Caricamento...</p>
            ) : (
              <h3 className="text-2xl font-serif font-semibold text-amber-800 mb-4">
                {chiSiamo?.label}
              </h3>
            )}
            </h3>
            {loading ? (
              <p className="text-amber-900 mb-6 leading-relaxed">Caricamento...</p>
            ) : chiSiamo ? (
              <div className="text-amber-900 leading-relaxed">
                {chiSiamo.paragraphs.map((paragraph: string, index: number) => (
                  <div key={index} className="text-amber-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            ) : (
              <p className="text-amber-900 mb-6 leading-relaxed">Testo non disponibile.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};