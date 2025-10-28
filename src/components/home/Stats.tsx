import React from 'react';
import { Users, Shield, Clock, Award, Car } from 'lucide-react';

const stats = [
  { icon: Car, number: '3k+', label: 'Veiculos Protegidos', description: 'Protegemos do seu patrimônio' },
  { icon: Shield, number: '99.8%', label: 'Taxa de Aprovação', description: 'De satisfação dos nossos clientes' },
  { icon: Clock, number: '24h', label: 'Atendimento', description: 'Suporte disponível todos os dias' },
  { icon: Award, number: '4+', label: 'Anos de Mercado', description: 'De experiência e confiabilidade' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-y-4 border-primary/20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="font-montserrat font-semibold text-gray-800 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600 max-w-xs sm:max-w-32 mx-auto">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
