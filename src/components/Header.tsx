import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Cotação', path: '/pwr-cotacao' },
  { name: 'Contato', path: '/contato' },
  { name: 'Sobre', path: '/sobre' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener otimizado
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Fecha menu mobile ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={
              isScrolled
                ? 'https://lockprotecao.com.br/wp-content/uploads/2024/03/file-1-e1729713114869.webp'
                : 'https://lockprotecao.com.br/wp-content/uploads/2024/03/lockpv-branca-1024x600.webp'
            }
            alt="Lock Proteção"
            className="h-12 w-auto"
            loading="lazy"
            width={143} 
            height={84}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-montserrat font-medium transition-colors duration-200 relative ${
                isActive(item.path)
                  ? isScrolled ? 'text-primary' : 'text-white'
                  : isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-gray-200'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Phone & CTA Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:08005918701"
            className={`flex items-center space-x-2 font-montserrat font-medium ${
              isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-gray-200'
            } transition-colors duration-200`}
          >
            <Phone className="h-4 w-4" />
            <span>0800 591 8701</span>
          </a>
          <Link to="/pwr-cotacao" className="btn-accent">
            Cotar Agora
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-montserrat font-medium py-2 px-3 rounded transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-primary bg-blue-50'
                  : 'text-text hover:text-primary hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t pt-3 mt-3">
            <a
              href="tel:08005918701"
              className="flex items-center space-x-2 font-montserrat font-medium text-text hover:text-primary transition-colors duration-200 mb-3"
            >
              <Phone className="h-4 w-4" />
              <span>0800 591 8701</span>
            </a>
            <Link
              to="/pwr-cotacao"
              className="btn-accent w-full text-center block"
            >
              Cotar Agora
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
