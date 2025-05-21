import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Axe } from 'lucide-react';
import { navigationItems } from '../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-amber-900 text-amber-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Axe className="h-8 w-8 text-amber-300" />
              <h3 className="ml-2 text-xl font-serif font-medium text-amber-100">
                Laser e Creatività
              </h3>
            </div>
            <p className="text-amber-200 mb-6">
              Trasformiamo il legno in arte grazie al taglio laser di precisione e alla maestria artigianale dal 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-amber-100 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-100 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium text-amber-100 mb-4">
              Link Rapidi
            </h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-amber-200 hover:text-amber-100 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-medium text-amber-100 mb-4">
              Contattaci
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-amber-200">
                  Via dei Falegnami 123<br />
                  Villaggio Artigiano, CA 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-300 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-amber-200 hover:text-amber-100 transition-colors duration-200">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-300 mr-3 flex-shrink-0" />
                <a href="mailto:info@inlayandlaser.com" className="text-amber-200 hover:text-amber-100 transition-colors duration-200">
                  info@inlayandlaser.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif font-medium text-amber-100 mb-4">
              Orari dello Studio
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-amber-300">Lunedì - Venerdì</span>
                <span className="text-amber-200">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-amber-300">Sabato</span>
                <span className="text-amber-200">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-amber-300">Domenica</span>
                <span className="text-amber-200">Chiuso</span>
              </li>
            </ul>
            <p className="mt-4 text-amber-200 text-sm">
              Visite solo su appuntamento
            </p>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 mt-8 text-center text-amber-400 text-sm">
          <p>&copy; {currentYear} Laser e Creatività. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};