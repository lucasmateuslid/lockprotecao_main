import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { useGTMPageView } from '../hooks/useGTMPageView';

export default function Thanks() {
  useGTMPageView();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Track conversion event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        conversion_type: 'quote_submitted',
        page_path: '/obrigado',
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="gradient-primary pt-32 pb-16 lg:pb-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Icon with Animation */}
            <div className="mb-8 animate-fadeIn">
              <div className="relative inline-block">
                <div className="bg-green-500 w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <Shield className="h-12 w-12 lg:h-16 lg:w-16 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-2 -right-2 bg-white w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-lg animate-slideUp">
                  <CheckCircle2 className="h-6 w-6 lg:h-8 lg:h-8 text-green-500" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="heading-hero text-white mb-6 animate-fadeIn">
              Parabéns!
            </h1>

            {/* Message */}
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed mb-8 animate-slideUp font-raleway">
              Você está no primeiro passo para ter seu veículo protegido!
            </p>

            <p className="text-lg md:text-xl text-gray-100 opacity-90 mb-12 animate-slideUp font-raleway">
              Em alguns instantes nossos consultores irão enviar o melhor plano para seu veículo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeIn">
              <Link 
                to="/" 
                className="btn-accent text-lg px-8 py-4 inline-flex items-center justify-center space-x-3 w-full sm:w-auto"
              >
                <span>Voltar ao Início</span>
              </Link>
              
              <a 
                href="https://wa.me/558440420869?text=Olá,%20acabei%20de%20solicitar%20um%20orçamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-montserrat font-bold px-8 py-4 rounded-xl inline-flex items-center justify-center space-x-3 shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-lg text-text text-center mb-12">
              Próximos Passos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="card text-center group">
                <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300">1</div>
                </div>
                <h3 className="heading-md text-text mb-3">Análise do Veículo</h3>
                <p className="text-gray-600 font-raleway">
                  Nossa equipe irá analisar as informações do seu veículo para encontrar o melhor plano.
                </p>
              </div>

              {/* Step 2 */}
              <div className="card text-center group">
                <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-500 group-hover:text-white transition-colors duration-300">2</div>
                </div>
                <h3 className="heading-md text-text mb-3">Envio da Proposta</h3>
                <p className="text-gray-600 font-raleway">
                  Você receberá uma proposta personalizada com os melhores planos disponíveis.
                </p>
              </div>

              {/* Step 3 */}
              <div className="card text-center group">
                <div className="bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">3</div>
                </div>
                <h3 className="heading-md text-text mb-3">Proteção Ativada</h3>
                <p className="text-gray-600 font-raleway">
                  Após a contratação, seu veículo estará protegido contra imprevistos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-text mb-6">
              Precisa Falar Conosco?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-raleway">
              Nossa equipe está pronta para esclarecer suas dúvidas e ajudar você a proteger seu veículo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+558440420869" 
                className="btn-primary inline-flex items-center justify-center space-x-3 px-8 py-4"
              >
                <Phone className="h-5 w-5" />
                <span>(84) 4042-0869</span>
              </a>
              
              <a 
                href="https://wa.me/558440420869" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-montserrat font-bold px-8 py-4 rounded-xl inline-flex items-center justify-center space-x-3 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
