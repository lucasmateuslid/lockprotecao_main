import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Phone, MessageCircle, ChevronUp, X } from 'lucide-react';

const FloatingCTAContent: React.FC<{
  isVisible: boolean;
  showScrollTop: boolean;
  isExpanded: boolean;
  showWhatsAppBubble: boolean;
  scrollToTop: () => void;
  openWhatsApp: () => void;
  showExpanded: () => void;
  handleMobileClick: () => void;
  setShowWhatsAppBubble: (val: boolean) => void;
}> = ({
  isVisible,
  showScrollTop,
  isExpanded,
  showWhatsAppBubble,
  scrollToTop,
  openWhatsApp,
  showExpanded,
  handleMobileClick,
  setShowWhatsAppBubble,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 no-print max-w-[calc(100vw-1rem)]">
      <div className="flex flex-col items-end space-y-2 sm:space-y-3 relative">

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

        {/* Bolha de mensagem do WhatsApp */}
        {showWhatsAppBubble && (
          <div className="absolute right-0 bottom-full mb-3 bg-white text-gray-800 px-3 sm:px-4 py-3 rounded-2xl shadow-xl border border-gray-200 animate-fade-in flex items-start gap-2 w-[220px] sm:w-[250px]">
            <p className="font-medium text-sm leading-snug">Quer mais informações?<br />Vem falar conosco!</p>
            <button
              onClick={() => setShowWhatsAppBubble(false)}
              className="text-gray-400 hover:text-gray-600 shrink-0 mt-0.5"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute right-16 sm:right-20 -bottom-1.5 w-3 h-3 bg-white rotate-45 border-b border-r border-gray-200"></div>
          </div>
        )}

        {/* Botões expandidos */}
        {isExpanded && (
          <div className="flex flex-col space-y-2 animate-fade-in mb-1">
            <Link
              to="/pwr-cotacao"
              className="bg-primary hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp */}
          <button
            onClick={openWhatsApp}
            className="relative bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 whatsapp-pulse flex items-center gap-2"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="hidden md:block font-montserrat font-semibold whitespace-nowrap">WhatsApp</span>
          </button>

          {/* CTA principal */}
          <Link
            to="/pwr-cotacao"
            onMouseEnter={showExpanded}
            onClick={handleMobileClick}
            className="btn-accent px-4 sm:px-6 py-3 flex items-center justify-center shadow-lg whitespace-nowrap"
            title="Fazer Cotação"
          >
            <span className="font-montserrat font-semibold">Cotar Agora</span>
          </Link>
        </div>

        {/* Pulsing indicator */}
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4">
          <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showWhatsAppBubble, setShowWhatsAppBubble] = useState(false);
  const holdTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileClicked = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Throttled scroll handler - usar requestIdleCallback para não bloquear main thread
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return;
    
    scrollTimeoutRef.current = setTimeout(() => {
      setShowScrollTop(window.pageYOffset > 300);
      scrollTimeoutRef.current = null;
    }, 100); // Throttle de 100ms
  }, []);

  // Mostrar o CTA após 2s e monitorar scroll
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      if (holdTimeout.current) clearTimeout(holdTimeout.current);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  // Mostrar bolha de mensagem do WhatsApp após 10 segundos
  useEffect(() => {
    if (isVisible) {
      const bubbleTimer = setTimeout(() => setShowWhatsAppBubble(true), 10000);
      return () => clearTimeout(bubbleTimer);
    }
  }, [isVisible]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openWhatsApp = useCallback(() => {
    const phone = '558440420869';
    const message =
      'Olá! Vim pelo site e gostaria de conhecer os planos de proteção veicular da Lock Proteção.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  }, []);

  const showExpanded = useCallback(() => {
    setIsExpanded(true);
    if (holdTimeout.current) clearTimeout(holdTimeout.current);
    holdTimeout.current = setTimeout(() => setIsExpanded(false), 5000);
  }, []);

  const handleMobileClick = useCallback(() => {
    if (!mobileClicked.current) {
      mobileClicked.current = true;
      showExpanded();
      setTimeout(() => {
        mobileClicked.current = false;
      }, 5000);
    }
  }, [showExpanded]);

  return (
    <FloatingCTAContent
      isVisible={isVisible}
      showScrollTop={showScrollTop}
      isExpanded={isExpanded}
      showWhatsAppBubble={showWhatsAppBubble}
      scrollToTop={scrollToTop}
      openWhatsApp={openWhatsApp}
      showExpanded={showExpanded}
      handleMobileClick={handleMobileClick}
      setShowWhatsAppBubble={setShowWhatsAppBubble}
    />
  );
};

export default React.memo(FloatingCTA);
