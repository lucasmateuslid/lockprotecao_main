import React from 'react';
import { Shield, Clock, MapPin, Phone, Car, Wrench, Users, Award, ScanEye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Completa',
      description: 'Cobertura para colisões, Furtos, Roubos e Danos a terceiros. Para sua tranquilidade em qualquer viagem',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Suporte disponível 24 horas por dia, 7 dias por semana, em qualquer lugar',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Cobertura Nacional',
      description: 'Assistência nacional, Máxima tranquilidade para as suas viagens',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'Perda Total',
      description: 'Seu carro deu PT? Não fique preocupado! Aqui na Lock Proteção, cuidamos de tudo para você.',
      color: 'bg-orange-500'
    },
    {
      icon: Car,
      title: 'Carro Reserva',
      description: 'Veículo substituto disponível em até 5 dias mediante plano selecionado',
      color: 'bg-red-500'
    },
    {
      icon: Wrench,
      title: 'Maiores beneficios',
      description: 'Rede de beneficios e oficinas credeciadas',
      color: 'bg-indigo-500'
    },
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Equipe especializada e treinada para melhor atendê-lo',
      color: 'bg-teal-500'
    },
    {
      icon: ScanEye,
      title: 'Monitoramento Inteligente',
      description: 'Rastreamento em tempo real, válido em todo território nacional',
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-xl text-primary mb-6">
            Por que escolher a <span className="text-accent">Lock Proteção</span>?
          </h2>
          <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
            Com a Lock Proteção, você tem benefícios exclusivos, cobertura completa e atendimento personalizado, 
            tudo pensado para que você nunca fique desamparado. Proteja o que é seu com quem entende do assunto.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="card card-hover group text-center"
              >
                <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="heading-md text-text mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="heading-lg mb-4">
              Pronto para proteger seu veículo?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Faça sua cotação agora mesmo e descubra como é fácil ter a melhor proteção veicular do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link to="/pwr-cotacao" className="btn-accent bg-accent hover:bg-red-600">
                Fazer Cotação Grátis
              </Link>
              <Link to="/whatsapp" className="btn-outline border-white text-white hover:bg-white hover:text-primary bg-white/30 backdrop-blur-sm">
                Falar com Especialista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;