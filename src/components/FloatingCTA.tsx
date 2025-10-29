import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calculator, Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const holdTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileClicked = useRef(false);

  // Mostrar o CTA após 2s e monitorar scroll
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    const handleScroll = () => setShowScrollTop(window.pageYOffset > 300);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      if (holdTimeout.current) clearTimeout(holdTimeout.current);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openWhatsApp = () => {
    const phone = '558440420869';
    const message =
      'Olá! Vim pelo site e gostaria de conhecer os planos de proteção veicular da Lock Proteção.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Mostra os botões expandidos por 5 segundos
  const showExpanded = () => {
    setIsExpanded(true);
    if (holdTimeout.current) clearTimeout(holdTimeout.current);
    holdTimeout.current = setTimeout(() => setIsExpanded(false), 5000);
  };

  // Hover desktop
  const handleMouseEnter = () => showExpanded();

  // Clique mobile
  const handleMobileClick = () => {
    if (!mobileClicked.current) {
      mobileClicked.current = true;
      showExpanded();
      setTimeout(() => {
        mobileClicked.current = false;
      }, 5000);
    } else {

    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      <div className="flex flex-col items-end space-y-3 relative">
        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}

        {/* Botões expandidos */}
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

        {/* Botões principais */}
        <div className="flex items-center space-x-3">
          {/* WhatsApp */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 whatsapp-pulse flex items-center space-x-2"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="hidden sm:block font-montserrat font-semibold">WhatsApp</span>
          </button>

          {/* CTA principal */}
          <button
            onMouseEnter={handleMouseEnter}
            onClick={handleMobileClick}
            className="btn-accent flex items-center space-x-2 shadow-lg animate-bounce-gentle"
          >
            <Link
              to="/pwr-cotacao"
              className="font-montserrat font-semibold"
              title="Fazer Cotação"
            >
              Cotar Agora
            </Link>
            
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
