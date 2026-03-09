import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Target, Heart, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

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

  const highlights = [
    'Atendimento humanizado do início ao fim',
    'Planos acessíveis e transparentes',
    'Equipe especializada em proteção veicular',
    'Suporte ágil para os momentos mais importantes'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="container">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <p className="font-montserrat font-semibold text-white/90 mb-4 tracking-wide uppercase text-sm">
              Sobre a Lock Proteção Veicular
            </p>

            <h1 className="heading-hero mb-6">
              Conheça a <span className="text-accent">Lock Proteção</span>
            </h1>

            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-4xl mx-auto">
              Há mais de 4 anos protegendo o que você tem de mais importante, 
              com inovação, tecnologia e muito carinho no atendimento.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/cotacao" className="btn-accent inline-flex items-center gap-2">
                Fazer Minha Cotação
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contato" className="btn-outline inline-flex items-center gap-2">
                Falar com Especialista
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto relative z-10">
            {[
              { number: '6.000+', label: 'Veículos Protegidos' },
              { number: '97,8%', label: 'Satisfação dos Associados' },
              { number: '5.000+', label: 'Parceiros Credenciados' },
              { number: '24h', label: 'Atendimento Disponível' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/20 border border-white/35 backdrop-blur rounded-2xl p-4 text-center shadow-custom hover:-translate-y-1 hover:bg-black/25 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'both' }}
              >
                <p className="text-2xl lg:text-3xl font-montserrat font-bold text-white drop-shadow-sm">{item.number}</p>
                <p className="text-sm lg:text-base text-white font-medium mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Equipe Lock Proteção"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-accent text-white p-5 sm:p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-montserrat font-bold">+4 Anos</h3>
                <p className="font-medium">Protegendo o que é seu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-primary mb-6">
              O que nos <span className="text-accent">Move</span>
            </h2>
            <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
              Valores e compromissos que orientam cada atendimento e cada decisão da Lock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-custom p-6 text-center border border-gray-100 hover:shadow-custom-lg transition-all duration-300">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="heading-md text-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-custom border border-gray-100">
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

            <div className="bg-white rounded-2xl p-8 shadow-custom border border-gray-100">
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

      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-xl mb-4">
              Pronto para proteger seu veículo com quem entende do assunto?
            </h2>
            <p className="text-lg text-white/90">
              Fale com nossa equipe e receba uma cotação rápida, transparente e personalizada para o seu perfil.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cotacao" className="btn-accent inline-flex items-center gap-2">
              Simular Cotação Agora
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/contato" className="btn-outline inline-flex items-center gap-2">
              Tirar Dúvidas com a Equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;