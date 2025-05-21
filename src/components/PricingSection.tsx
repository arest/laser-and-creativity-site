import React from 'react';
import { pricingData } from '../data/pricing';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Listino Prezzi
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Il nostro listino prezzi riflette la qualità dei materiali, la precisione del taglio laser e la natura artigianale di ogni pezzo. Tutti i prezzi sono punti di partenza e possono variare in base alla complessità e alla personalizzazione.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-amber-100">
                  <th className="py-4 px-6 text-left text-amber-900 font-serif">Servizio</th>
                  <th className="py-4 px-6 text-left text-amber-900 font-serif">Descrizione</th>
                  <th className="py-4 px-6 text-center text-amber-900 font-serif">Prezzo di partenza</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                {pricingData.map((item) => (
                  <tr key={item.id} className="hover:bg-amber-50 transition-colors duration-200">
                    <td className="py-4 px-6 text-amber-900 font-medium">{item.service}</td>
                    <td className="py-4 px-6 text-amber-800">
                      {item.description}
                      {item.notes && (
                        <p className="text-amber-600 text-sm mt-1 italic">{item.notes}</p>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-amber-900 font-semibold">{item.basePrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-amber-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-serif font-semibold text-amber-900 mb-4">
              Preventivi per progetti personalizzati
            </h3>
            <p className="text-amber-800 mb-4">
              Per progetti personalizzati non elencati sopra, offriamo preventivi personalizzati in base alle vostre specifiche. I fattori che influenzano il prezzo includono:
            </p>
            <ul className="list-disc pl-5 text-amber-800 space-y-2 mb-6">
              <li>Dimensioni e dimensioni del pezzo</li>
              <li>Complessità del design e livello di dettaglio</li>
              <li>Tipo di legno e altri materiali</li>
              <li>Opzioni di finitura (stain, lacquers, etc.)</li>
              <li>Tempo necessario per la completa</li>
            </ul>
            <div className="text-center">
              <a
                href="#contact"
                className="inline-block px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300"
              >
                Richiedi un preventivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};