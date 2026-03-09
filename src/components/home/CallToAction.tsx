import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, MessageCircle, Clock, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const openWhatsApp = () => {
    const phone = '558440420869';
    const message = 'Olá! Gostaria de conhecer os planos de proteção veicular da Lock Proteção. Pode me ajudar?';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="section py-20 md:py-24 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern – mais sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-40 h-40 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 md:bottom-40 md:right-20 w-56 h-56 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline + Ícone principal com micro-animação */}
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center mb-6 animate-pulse-slow">
              <div className="bg-white/15 backdrop-blur-md p-4 md:p-5 rounded-full border border-white/20">
                <Shield className="h-10 w-10 md:h-12 md:w-12 text-white" />
              </div>
            </div>
            <h2 className="heading-xl md:heading-2xl leading-tight">
              Proteja seu veículo <span className="text-accent">agora mesmo</span>!
            </h2>
            <p className="text-lg md:text-2xl opacity-95 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed">
              Cotação 100% online em poucos minutos. Sem burocracia, sem carência e com condições exclusivas.
            </p>
          </div>

          {/* Benefícios – maior legibilidade e ícones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12 md:mb-16">
            {[
              { text: 'Cotação em 2 minutos', icon: Clock },
              { text: 'Sem carência', icon: Shield },
              { text: 'Aprovação na hora', icon: ArrowRight },
              { text: '1ª mensalidade grátis*', icon: Clock },
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/12 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <benefit.icon className="h-9 w-9 md:h-10 md:w-10 text-accent mx-auto mb-3" />
                <p className="font-medium text-base md:text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>

          {/* CTAs – hierarquia clara: primário maior e destacado */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8 mb-12 md:mb-16">
            <Link
              to="/pwr-cotacao"
              className="group relative bg-accent hover:bg-red-600 text-white font-bold text-lg md:text-xl px-10 md:px-12 py-5 md:py-6 rounded-2xl transition-all duration-400 transform hover:scale-105 hover:shadow-2xl shadow-xl inline-flex items-center justify-center space-x-3 min-w-[280px] focus:outline-none focus:ring-4 focus:ring-accent/50"
              aria-label="Fazer cotação gratuita agora"
            >
              <Shield className="h-6 w-6 md:h-7 md:w-7 group-hover:rotate-12 transition-transform" />
              <span>Fazer Cotação Gratuita</span>
            </Link>

            <button
              onClick={openWhatsApp}
              className="group bg-green-600/90 hover:bg-green-600 backdrop-blur-sm text-white font-bold text-lg md:text-xl px-10 md:px-12 py-5 md:py-6 rounded-2xl transition-all duration-400 transform hover:scale-105 hover:shadow-2xl shadow-xl inline-flex items-center justify-center space-x-3 border border-green-400/30 min-w-[280px] focus:outline-none focus:ring-4 focus:ring-green-500/50"
              aria-label="Falar diretamente no WhatsApp com atendente"
            >
              <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* Contato telefônico – mais discreto, mas acessível */}
          <div className="border-t border-white/15 pt-8 md:pt-10">
            <p className="text-lg md:text-xl opacity-90 mb-4">Prefere falar agora? Ligue grátis:</p>
            <a
              href="tel:+558440420869"
              className="text-2xl md:text-4xl font-bold hover:text-accent transition-colors duration-300 inline-flex items-center gap-4 hover:underline"
              aria-label="Ligar para (84) 4042-0869"
            >
              <Phone className="h-7 w-7 md:h-9 md:w-9 flex-shrink-0" />
              <span>(84) 4042-0869</span>
            </a>
            <p className="text-sm md:text-base opacity-70 mt-5">
              *Promoção válida para novos clientes. Consulte condições completas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;