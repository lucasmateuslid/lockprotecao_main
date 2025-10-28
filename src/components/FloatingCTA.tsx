import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const holdTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileClicked = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);

    const handleScroll = () => setShowScrollTop(window.pageYOffset > 300);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openWhatsApp = () => {
    const phone = '558440420869';
    const message = 'Olá! Vim pelo site e gostaria de conhecer os planos de proteção veicular da Lock Proteção.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Mostra os botões por 5 segundos
  const showExpanded = () => {
    setIsExpanded(true);
    if (holdTimeout.current) clearTimeout(holdTimeout.current);
    holdTimeout.current = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);
  };

  // Função para desktop hover
  const handleMouseEnter = () => showExpanded();

  // Função para mobile click
  const handleMobileClick = () => {
    if (!mobileClicked.current) {
      // Primeira vez: mostrar os botões
      mobileClicked.current = true;
      showExpanded();
      // Resetar após 5s caso não clique novamente
      setTimeout(() => {
        mobileClicked.current = false;
      }, 5000);
    } else {
      // Segunda vez: redireciona para cotação
      window.location.href = '/pwr-cotacao';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      <div className="flex flex-col items-end space-y-3">
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}

        {/* Expanded options */}
        {isExpanded && (
          <div className="flex flex-col space-y-2 animate-fade-in">
            <Link
              to="/pwr-cotacao"
              className="bg-primary hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
              title="Fazer Cotação"
            >
              <Calculator className="h-6 w-6" />
            </Link>

            <a
              href="tel:+558440420869"
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              title="Ligar Agora"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        )}

        {/* Main CTA buttons */}
        <div className="flex items-center space-x-3">
          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 whatsapp-pulse flex items-center space-x-2"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="hidden sm:block font-montserrat font-semibold">WhatsApp</span>
          </button>

          {/* Main CTA Button */}
          <button
            onMouseEnter={handleMouseEnter} // Desktop hover
            onClick={handleMobileClick}      // Mobile click
            className="btn-accent flex items-center space-x-2 shadow-lg animate-bounce-gentle"
          >
            <Calculator className="h-5 w-5" />
            <span className="font-montserrat font-semibold">Cotar Agora</span>
          </button>
        </div>

        {/* Pulsing indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4">
          <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
