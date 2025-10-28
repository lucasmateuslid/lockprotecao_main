import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, MessageCircle, Clock } from 'lucide-react';

const CallToAction: React.FC = () => {
  const openWhatsApp = () => {
    const phone = '558440420869';
    const message = 'Olá! Gostaria de conhecer os planos de proteção veicular da Lock Proteção.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="section bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-lg"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="heading-xl">
                Proteja seu veículo <span className="text-accent">hoje mesmo!</span>
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Não deixe para depois! Faça sua cotação agora e garante a melhor proteção 
              veicular do mercado com condições especiais.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                'Cotação em 2 minutos',
                'Sem carência',
                'Aprovação imediata',
                'Primeira mensalidade grátis*'
              ].map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Clock className="h-8 w-8 text-accent mb-2 mx-auto" />
                  <p className="font-montserrat font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              to="/pwr-cotacao"
              className="bg-accent hover:bg-red-600 text-white font-montserrat font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-3"
            >
              <Shield className="h-6 w-6" />
              <span>Fazer Cotação Gratuita</span>
            </Link>
            
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-montserrat font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-lg mb-4 opacity-90">Ou ligue agora mesmo:</p>
            <a
              href="tel:+558440420869"
              className="text-3xl font-montserrat font-bold hover:text-accent transition-colors duration-300 inline-flex items-center space-x-3"
            >
              <Phone className="h-8 w-8" />
              <span>(84) 4042-0869</span>
            </a>
            <p className="text-sm opacity-75 mt-4">
              *Promoção válida para novos clientes. Consulte condições.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;