import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap } from 'lucide-react';

interface Plan {
  name: string;
  description: string;
  popular: boolean;
  features: string[];
  color: string;
  buttonClass: string;
}

const plans: Plan[] = [
  {
    name: 'Prata',
    description: 'O equilíbrio perfeito entre custo e proteção essencial',
    popular: true,
    features: [
      '35 mil terceiros',
      '400km de reboque',
      '50% de para-brisa e retrovisor',
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
    description: 'Cobertura expandida com extras para maior tranquilidade',
    popular: false,
    features: [
      '55 mil terceiros',
      '600km de reboque',
      '70% para-brisa e retrovisor',
      'Carro reserva 5 dias',
      'Assistência 24h',
      'Rastreamento',
    ],
    color: 'border-yellow-400',
    buttonClass: 'btn-accent',
  },
  {
    name: 'Diamante',
    description: 'Proteção premium para veículos de elite e máxima segurança',
    popular: false,
    features: [
      '75 mil terceiros',
      '1000km de reboque',
      '90% para-brisa e retrovisor',
      'Carro reserva 10 dias',
      'Assistência 24h',
      'Rastreamento',
    ],
    color: 'border-accent',
    buttonClass: 'btn-accent',
  },
];

const PlanCard: React.FC<{ plan: Plan; orderClass: string }> = ({
  plan,
  orderClass,
}) => {
  const glowAnimation = plan.popular ? 'animate-pulse-glow' : '';

  const highlightNumbers = (text: string) => {
    const regex = /(\d+\s?mil|\d+km|\d+%|\d+\s?dias)/g;
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <strong key={i} className="text-primary font-semibold">
          {part}
        </strong>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <div
      className={`relative bg-white rounded-3xl border-2 ${plan.color} p-8
      transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2
      ${orderClass}
      ${
        plan.popular
          ? 'lg:scale-110 shadow-2xl ring-2 ring-primary/20'
          : 'hover:shadow-xl'
      }
      ${glowAnimation}
      animate-fade-in`}
    >
      {/* Badge */}
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="bg-primary text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-semibold text-sm tracking-wide">
              MAIS CONTRATADO
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8 animate-fade-in delay-100">
        <h3 className="text-2xl font-bold text-text mb-2">
          Plano {plan.name}
        </h3>
        <p className="text-gray-600 mb-5 text-sm leading-relaxed">
          {plan.description}
        </p>

        <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-md">
          <Zap className="h-4 w-4" />
          <span className="font-semibold text-sm">
            Benefícios em Destaque
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 animate-slide-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="bg-primary/10 rounded-full p-2 mt-1">
              <Check className="h-4 w-4 text-primary" />
            </div>

            <span className="text-gray-700 text-sm font-medium leading-relaxed">
              {highlightNumbers(feature)}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        to="/pwr-cotacao"
        className={`${plan.buttonClass} w-full text-center block mb-3 transition-all duration-200 hover:scale-105`}
      >
        Fazer Simulação
      </Link>

      <p className="text-center text-sm text-gray-500">
        Sem carência • Aprovação imediata
      </p>
    </div>
  );
};

const FeaturedPlans: React.FC = () => {
  return (
    <section className="section bg-gray-50 relative">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.25); }
          50% { box-shadow: 0 0 35px rgba(37, 99, 235, 0.4); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .delay-100 { animation-delay: 100ms; }
      `}</style>

      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-xl text-primary mb-4">
            Planos por Benefícios — Encontre o Ideal para{' '}
            <span className="text-accent">Seu Veículo</span>
          </h2>
          <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
            Compare os benefícios de forma simples e escolha a proteção ideal
            para o seu dia a dia.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const orderClass =
              plan.name === 'Prata'
                ? 'order-1 lg:order-2'
                : plan.name === 'Ouro'
                ? 'order-2 lg:order-1'
                : 'order-3';

            return (
              <PlanCard
                key={index}
                plan={plan}
                orderClass={orderClass}
              />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in delay-100">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="heading-md text-text">
                Indeciso? Nós Ajudamos!
              </h3>
            </div>

            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Fale com nossos especialistas e receba uma recomendação
              personalizada para o seu veículo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pwr-cotacao"
                className="btn-accent transition-transform duration-200 hover:scale-105"
              >
                Fazer Simulação
              </Link>

              <a
                href="tel:+558440420869"
                className="btn-outline2 transition-transform duration-200 hover:scale-105"
              >
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