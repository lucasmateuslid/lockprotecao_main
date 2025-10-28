import React from 'react';
import { Check, X, Star, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Plans: React.FC = () => {
  const plans = [
    {
      name: 'Básico',
      subtitle: 'Proteção essencial',
      price: 'R$ 89',
      originalPrice: 'R$ 120',
      period: '/mês',
      description: 'Ideal para veículos até R$ 30.000',
      popular: false,
      color: 'border-gray-200',
      buttonClass: 'btn-outline',
      features: [
        { name: 'Cobertura até R$ 30.000', included: true },
        { name: 'Guincho 24h (até 50km)', included: true },
        { name: 'Assistência elétrica', included: true },
        { name: 'Suporte por telefone', included: true },
        { name: 'Cobertura nacional', included: true },
        { name: 'Carro reserva', included: false },
        { name: 'Vidros e faróis', included: false },
        { name: 'App móvel', included: false },
        { name: 'Proteção internacional', included: false }
      ]
    },
    {
      name: 'Completo',
      subtitle: 'Melhor custo-benefício',
      price: 'R$ 149',
      originalPrice: 'R$ 199',
      period: '/mês',
      description: 'Ideal para veículos até R$ 80.000',
      popular: true,
      color: 'border-primary',
      buttonClass: 'btn-primary',
      features: [
        { name: 'Cobertura até R$ 80.000', included: true },
        { name: 'Guincho ilimitado 24h', included: true },
        { name: 'Assistência completa', included: true },
        { name: 'Suporte prioritário', included: true },
        { name: 'Cobertura nacional', included: true },
        { name: 'Carro reserva (7 dias)', included: true },
        { name: 'Vidros e faróis', included: true },
        { name: 'App móvel exclusivo', included: true },
        { name: 'Proteção internacional', included: false }
      ]
    },
    {
      name: 'Premium',
      subtitle: 'Proteção máxima',
      price: 'R$ 229',
      originalPrice: 'R$ 299',
      period: '/mês',
      description: 'Ideal para veículos até R$ 200.000',
      popular: false,
      color: 'border-accent',
      buttonClass: 'btn-accent',
      features: [
        { name: 'Cobertura até R$ 200.000', included: true },
        { name: 'Guincho ilimitado 24h', included: true },
        { name: 'Assistência VIP', included: true },
        { name: 'Concierge 24h', included: true },
        { name: 'Cobertura nacional', included: true },
        { name: 'Carro reserva premium (15 dias)', included: true },
        { name: 'Vidros, faróis e pneus', included: true },
        { name: 'App móvel exclusivo', included: true },
        { name: 'Proteção internacional', included: true }
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: Shield,
      title: 'Sem Carência',
      description: 'Proteção imediata após aprovação'
    },
    {
      icon: Zap,
      title: 'Aprovação em 2 Minutos',
      description: 'Processo 100% digital e rápido'
    },
    {
      icon: Star,
      title: 'Atendimento 5 Estrelas',
      description: 'Equipe especializada e humanizada'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-6">
              Escolha o <span className="text-accent">plano ideal</span> para seu veículo
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Compare nossos planos e descubra qual oferece a melhor proteção para suas necessidades. 
              Todos com cobertura nacional e atendimento 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="section bg-white">
        <div className="container">
          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl border-2 ${plan.color} p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.popular ? 'lg:scale-110 shadow-xl' : 'hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-montserrat font-semibold text-sm">Mais Escolhido</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="heading-lg text-text mb-2">{plan.name}</h3>
                  <p className="text-primary font-montserrat font-medium mb-4">{plan.subtitle}</p>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                    <div className="bg-accent text-white px-2 py-1 rounded text-sm font-semibold">
                      25% OFF
                    </div>
                  </div>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl lg:text-5xl font-montserrat font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <div className="bg-green-100 rounded-full p-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="bg-gray-100 rounded-full p-1">
                          <X className="h-4 w-4 text-gray-400" />
                        </div>
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/cotacao"
                  className={`${plan.buttonClass} w-full text-center block mb-4`}
                >
                  Contratar Agora
                </Link>

                {/* Additional Info */}
                <p className="text-center text-sm text-gray-500">
                  Sem compromisso • Cancelamento gratuito
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {additionalBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="heading-md text-text mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-xl text-center text-primary mb-12">
              Dúvidas <span className="text-accent">Frequentes</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Qual a diferença entre os planos?',
                  answer: 'Os planos diferem principalmente na cobertura máxima, tipos de serviços inclusos e valor do veículo protegido. O Básico é ideal para carros mais simples, o Completo oferece o melhor custo-benefício, e o Premium é para veículos de luxo.'
                },
                {
                  question: 'Posso mudar de plano depois de contratar?',
                  answer: 'Sim! Você pode fazer upgrade do seu plano a qualquer momento. Para downgrade, respeitamos um período mínimo de 12 meses de contrato.'
                },
                {
                  question: 'Como funciona o carro reserva?',
                  answer: 'Quando seu veículo fica na oficina por mais de 24h, disponibilizamos um carro similar para você usar. O período varia conforme o plano contratado.'
                },
                {
                  question: 'Há cobertura em todo o Brasil?',
                  answer: 'Sim! Todos os nossos planos têm cobertura nacional com rede credenciada em mais de 5.000 prestadores em todo o país.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-montserrat font-semibold text-text mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
              <h3 className="heading-lg mb-4">
                Ainda tem dúvidas sobre qual plano escolher?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Fale com nossos especialistas e receba uma consultoria gratuita para encontrar o plano ideal para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cotacao" className="btn-accent bg-accent hover:bg-red-600">
                  Fazer Cotação Personalizada
                </Link>
                <a href="tel:+5511999999999" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;