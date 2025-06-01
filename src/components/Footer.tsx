import React from 'react';
import { Phone, Mail, Instagram, Facebook, Axe } from 'lucide-react';
import { useNavigationItems } from '../hooks/useNavigationItems';
import { NavItem } from '../types';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { navigationItems, loading } = useNavigationItems();

  return (
    <footer id="contact" className="bg-orange-950 text-orange-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Axe className="h-8 w-8 text-orange-300" />
              <h3 className="ml-2 text-xl font-serif font-medium text-orange-100">
                Laser e Creatività
              </h3>
            </div>
            <p className="text-orange-200 mb-6">
              Trasformiamo il legno in arte grazie al taglio laser di precisione e alla maestria artigianale dal 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-200 hover:text-orange-100 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-orange-200 hover:text-orange-100 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium text-orange-100 mb-4">
              Link Rapidi
            </h3>
            <ul className="space-y-2">
              {!loading && navigationItems.map((item: NavItem) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-orange-200 hover:text-orange-100 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-medium text-orange-100 mb-4">
              Contattaci
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-200 font-semibold mr-2">Padoan Beniamino</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-300 mr-3 flex-shrink-0" />
                <a href="tel:+393473517652" className="text-orange-200 hover:text-orange-100 transition-colors duration-200">
                  347 3517652
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-300 mr-3 flex-shrink-0" />
                <a href="mailto:p.benia@libero.it" className="text-orange-200 hover:text-orange-100 transition-colors duration-200">
                  p.benia@libero.it
                </a>
              </li>
              <li className="flex items-start mt-4">
                <span className="text-orange-200 font-semibold mr-2">Padoan Marisa</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-300 mr-3 flex-shrink-0" />
                <a href="tel:+393337210605" className="text-orange-200 hover:text-orange-100 transition-colors duration-200">
                  333 7210605
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-300 mr-3 flex-shrink-0" />
                <a href="mailto:marisapadoan55@gmail.com" className="text-orange-200 hover:text-orange-100 transition-colors duration-200">
                  marisapadoan55@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-800 pt-8 mt-8 text-center text-orange-400 text-sm">
          <p>&copy; {currentYear} Laser e Creatività. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};