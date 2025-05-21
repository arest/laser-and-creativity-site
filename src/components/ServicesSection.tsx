import React from 'react';
import {
  UserCircle,
  PenTool,
  Clock,
  Lightbulb,
  Package,
  Repeat
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'custom-portraits',
      title: 'Ritratti Personalizzati',
      description: 'Ritratti incisi al laser ad alta definizione dalle tue foto, perfetti per commemorare persone e momenti speciali.',
      icon: <UserCircle className="w-12 h-12 text-amber-600" />
    },
    {
      id: 'custom-designs',
      title: 'Design Personalizzati',
      description: 'Dai vita alla tua visione artistica con il nostro servizio di design personalizzato. Dal concept alla creazione, ti accompagniamo in ogni fase.',
      icon: <PenTool className="w-12 h-12 text-amber-600" />
    },
    {
      id: 'clocks',
      title: 'Orologi Artistici',
      description: 'Opere d’arte funzionali che segnano il tempo con stile. I nostri orologi in legno presentano design intricati tagliati al laser e meccanismi di qualità.',
      icon: <Clock className="w-12 h-12 text-amber-600" />
    },
    {
      id: 'lighting',
      title: 'Illuminazione Personalizzata',
      description: 'Lampade e punti luce unici con motivi tagliati al laser che proiettano ombre suggestive e creano ambienti caldi e accoglienti.',
      icon: <Lightbulb className="w-12 h-12 text-amber-600" />
    },
    {
      id: 'boxes',
      title: 'Scatole Decorative',
      description: 'Scatole in legno realizzate a mano con intarsi intricati tagliati al laser, perfette per custodire tesori o come regalo speciale.',
      icon: <Package className="w-12 h-12 text-amber-600" />
    },
    {
      id: 'restoration',
      title: 'Restauro e Riparazione',
      description: 'Ridiamo vita a oggetti in legno a cui tieni con servizi di restauro, inclusa la riparazione laser di intarsi danneggiati.',
      icon: <Repeat className="w-12 h-12 text-amber-600" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Cosa facciamo
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Il nostro studio si specializza nel combinare la lavorazione tradizionale del legno con il taglio e l'incisione laser di precisione per creare opere uniche, personalizzate e funzionali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-amber-900 mb-4">
                {service.title}
              </h3>
              <p className="text-amber-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
            Non trovi esattamente quello che stai cercando? Amiamo le sfide personalizzate! Contattaci per discutere le tue idee uniche.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-md"
          >
            Richiedi un lavoro personalizzato
          </a>
        </div>
      </div>
    </section>
  );
};