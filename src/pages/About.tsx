import React from 'react';
import { Shield, Users, Award, Target, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Garantimos a proteção total do seu patrimônio com transparência e confiabilidade em todos os processos.'
    },
    {
      icon: Heart,
      title: 'Humanização',
      description: 'Tratamos cada cliente de forma única, com atendimento personalizado e carinhoso em todos os momentos.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Processos rápidos e eficientes, desde a cotação até a resolução de qualquer necessidade do cliente.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos constantemente a melhoria contínua para oferecer o melhor serviço do mercado.'
    }
  ];

  const team = [
    {
      name: 'Carlos Mendonça',
      position: 'CEO & Fundador',
      bio: '15 anos de experiência no setor de seguros e proteção veicular',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Ana Rodriguez',
      position: 'Diretora Comercial',
      bio: 'Especialista em relacionamento com cliente e desenvolvimento de produtos',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Roberto Silva',
      position: 'CTO',
      bio: 'Responsável pela inovação tecnológica e digitalização dos processos',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marina Costa',
      position: 'Diretora de Operações',
      bio: 'Garante a excelência operacional e qualidade no atendimento',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Fundação da Lock Proteção Veicular' },
    { year: '2012', event: '10.000 veículos protegidos' },
    { year: '2015', event: 'Expansão para todo território nacional' },
    { year: '2018', event: 'Lançamento do app móvel' },
    { year: '2020', event: '50.000 clientes atendidos' },
    { year: '2023', event: 'Prêmio de Melhor Atendimento do Setor' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-6">
              Conheça a <span className="text-accent">Lock Proteção</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Há mais de 4 anos protegendo o que você tem de mais importante, 
              com inovação, tecnologia e muito carinho no atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-xl text-primary mb-8">
                Nossa <span className="text-accent">História</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  A Lock Proteção Veicular surgiu a partir de uma necessidade concreta: 
                  oferecer aos potiguares uma alternativa acessível e confiável de proteção para seus veículos. 
                  A iniciativa nasceu quando nosso presidente, ao lado de um grupo de profissionais experientes do setor, identificou que muitos motoristas no Rio Grande do Norte
                  estavam ficando desassistidos pela alta dos preços e pela burocracia das seguradoras tradicionais.
                </p>
                <p>
                 Com esse cenário em mente, o grupo decidiu transformar a experiência adquirida no mercado de seguros convencionais
                  em uma proposta mais justa, transparente e próxima da realidade local. Assim nasceu a Lock Proteção Veicular,
                  com o compromisso de democratizar o acesso à proteção sem abrir mão da qualidade e da responsabilidade.
                </p>
                <p>
                  Desde então, nossa atuação tem sido guiada por três pilares: transparência nas relações,
                   atendimento humanizado e valores que cabem no orçamento do cliente. Crescemos, expandimos e evoluímos ao longo dos anos,
                   mas mantemos intacto o propósito que nos trouxe até aqui: proteger pessoas com seriedade, respeito e credibilidade.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Equipe Lock Proteção"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-montserrat font-bold">+4 Anos</h3>
                <p className="font-medium">Protegendo o que é seu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-primary mb-6">
              Nossos <span className="text-accent">Valores</span>
            </h2>
            <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
              Os pilares que guiam cada decisão e ação da Lock Proteção Veicular
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card text-center group">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="heading-md text-text mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary p-3 rounded-full">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-lg text-primary">Nossa Missão</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Proteger o patrimônio dos nossos associados através de soluções inovadoras, 
                acessíveis e humanizadas em proteção veicular, sempre com transparência, 
                agilidade e excelência nos nossos processos, serviços e atendimento.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent p-3 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-lg text-accent">Nossa Visão</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser a principal referência em proteção veicular no Nordeste, 
                reconhecida pela inovação, qualidade dos serviços e pela transformação 
                positiva na vida dos nossos associados, tornando-se sinônimo de confiança em proteção veicular no Nordeste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/*}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-primary mb-6">
              Nossa <span className="text-accent">Trajetória</span>
            </h2>
            <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
              Principais marcos que construíram nossa história de sucesso
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative"> */}
              {/* Timeline Line */}
            
              {/*<div className="absolute left-6 top-0 bottom-0 w-1 bg-primary/20"></div>*/}

              {/* Timeline Items */}
{/*              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center space-x-8"> */}
                    {/* Timeline Dot */}
{/*                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <span className="text-white font-montserrat font-bold text-sm">
                        {milestone.year.slice(-2)}
                      </span>
                    </div>
*/}                 
                    {/* Content */}
{/*                    <div className="bg-gray-50 rounded-xl p-6 flex-1">
                      <h3 className="font-montserrat font-bold text-primary text-lg mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-700">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Team */}
      {/*
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-primary mb-6">
              Nossa <span className="text-accent">Equipe</span>
            </h2>
            <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
              Conheça as pessoas que fazem a diferença todos os dias na Lock Proteção
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="heading-md text-text mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-accent font-montserrat font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-xl mb-6">
              Números que <span className="text-accent">Impressionam</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '6.000+', label: 'Veiculso Protegidos' },
              { number: '97.8%', label: 'Taxa de Satisfação' },
              { number: '5.000+', label: 'Parceiros Credenciados' },
              { number: '24h', label: 'Atendimento Disponível' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl lg:text-5xl font-montserrat font-bold text-accent mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;