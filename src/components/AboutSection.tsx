import React from 'react';

export const AboutSection: React.FC = () => {
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
                src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg"
                alt="Artigiano al lavoro con taglio laser"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-lg -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-amber-800 mb-4">
              L'artigianato incontra la tecnologia
            </h3>
            <p className="text-amber-900 mb-6 leading-relaxed">
              Fondata nel 2018, La Magia dell'Intarsio e del Laser unisce tecniche tradizionali di lavorazione del legno con la tecnologia laser più avanzata per creare pezzi d'arte in legno unici e personalizzati, oltre a oggetti funzionali.
            </p>
            <p className="text-amber-900 mb-6 leading-relaxed">
              Il nostro piccolo team di artigiani dedicati porta decenni di esperienza nella lavorazione del legno in ogni progetto, garantendo che ogni pezzo che lascia il nostro laboratorio sia realizzato con precisione, cura e visione artistica.
            </p>
            <p className="text-amber-900 leading-relaxed">
              Siamo orgogliosi di selezionare legni duri sostenibili e di alta qualità e di utilizzare pratiche ecologiche nel nostro processo produttivo. Ogni pezzo che creiamo è pensato per essere custodito e apprezzato per generazioni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};