import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigationItems } from '../hooks/useNavigationItems';
import { NavItem } from '../types';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { navigationItems, loading } = useNavigationItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  if (loading) return null;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img src="/assets/images/logo.png" alt="Logo" className="h-20 w-20" />
            <div className="ml-2">
              <h1 className="text-lg md:text-xl font-serif font-medium text-amber-900">
                <Link to="/">Laser e Creatività</Link>
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item: NavItem) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div className="flex items-center">
                    <button
                      className="text-amber-900 hover:text-amber-600 transition-colors duration-200 font-medium flex items-center"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.children.map((child: NavItem) => (
                        <Link
                          key={child.label}
                          to={`${child.href?.replace('#', '') || child.label.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-orange-950 hover:bg-orange-50 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={`/${item.href}`}
                    className="text-amber-900 hover:text-amber-600 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-amber-900 hover:text-amber-600 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item: NavItem) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full text-left flex items-center justify-between text-amber-900 hover:text-amber-600 transition-colors duration-200 font-medium py-1"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 mt-1 space-y-2 border-l-2 border-amber-200">
                          {item.children.map((child: NavItem) => (
                            <Link
                              key={child.label}
                              to={`/product/${child.href?.replace('#', '') || child.label.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block text-sm text-amber-900 hover:text-amber-600 transition-colors duration-200 py-1"
                              onClick={toggleMenu}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-amber-900 hover:text-amber-600 transition-colors duration-200 font-medium py-1"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};