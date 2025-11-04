import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap } from 'lucide-react';

const FeaturedPlans: React.FC = () => {
  const plans = [
    {
      name: 'Prata',
      description: 'Melhor custo-benefício para a maioria',
      popular: true,
      features: [
        '35 mil terceiros',
        '400km de reboque',
        '50% de parabrisa e retrovisor',
        'Guincho 24h',
        'Assistência completa',
        'Assistência 24h',
        'Rastreamento',
      ],
      color: 'border-primary',
      buttonClass: 'btn-primary',
    },
    {
      name: 'Ouro',
      description: 'Proteção ampliada com benefícios extras',
      popular: false,
      features: [
        '55 mil terceiros',
        '600km de reboque',
        '70% parabrisa e retrovisor',
        'Carro reserva 5 dias',
        'Assistência 24h',
        'Rastreamento',
      ],
      color: 'border-yellow-400',
      buttonClass: 'btn-accent',
    },
    {
      name: 'Diamante',
      description: 'Proteção máxima para veículos de alto padrão',
      popular: false,
      features: [
        '75 mil terceiros',
        '1000km de reboque',
        '90% parabrisa e retrovisor',
        'Carro reserva 10 dias',
        'Assistência 24h',
        'Rastreamento',
      ],
      color: 'border-accent',
      buttonClass: 'btn-accent',
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white relative">
      {/* 🔹 Animação de brilho pulsante inline */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-xl text-primary mb-4">
            Planos por benefícios — encontre o ideal para{' '}
            <span className="text-accent">seu veículo</span>
          </h2>
          <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
            Compare rapidamente os benefícios de cada plano e descubra como proteger seu veículo com tranquilidade.
            Fale com a gente e escolha o que realmente importa para você!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            // Define ordem no grid
            const orderClass =
              plan.name === 'Prata'
                ? 'order-1 lg:order-2'
                : plan.name === 'Ouro'
                ? 'order-2 lg:order-1'
                : 'order-3';

            // Animação apenas no plano popular (Prata)
            const glowAnimation = plan.popular
              ? 'animate-[pulse-glow_2s_ease-in-out_infinite]'
              : '';

            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl border-2 ${plan.color} p-8 transition-all duration-300 transform hover:shadow-2xl hover:scale-105 ${orderClass} ${
                  plan.popular ? 'lg:scale-110 shadow-xl' : 'hover:shadow-xl'
                } ${glowAnimation}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-montserrat font-semibold text-sm">Mais Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="heading-lg text-text mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full shadow-md">
                    <Zap className="h-4 w-4" />
                    <span className="font-semibold">Benefícios em destaque</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-2 mt-1">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link to="/pwr-cotacao" className={`${plan.buttonClass} w-full text-center block mb-3`}>
                  Fazer Simulação
                </Link>

                {/* Additional Info */}
                <p className="text-center text-sm text-gray-500">
                  Sem carência • Aprovação imediata
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-accent" />
              <h3 className="heading-md text-text">Não sabe qual escolher?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossos especialistas ajudam você a comparar benefícios e decidir o melhor plano sem se preocupar com valores agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pwr-cotacao" className="btn-accent">
                Fazer Simulação
              </Link>
              <a href="tel:+558440420869" className="btn-outline2">
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlans;
