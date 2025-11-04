import React from 'react';
import { Smartphone, Download, Globe, Apple } from 'lucide-react';

const DefaultApps: React.FC = () => {
  const apps = [
    {
      title: 'App Associado',
      description: 'Gerencie sua conta, consulte coberturas e muito mais.',
      platforms: [
        {
          name: 'Android',
          icon: Smartphone,
          link: 'https://play.google.com/store/apps/details?id=br.com.hinovamobile.lockprotecao&pcampaignid=web_share',
          color: 'bg-green-500'
        },
        {
          name: 'iOS',
          icon: Apple,
          link: 'https://apps.apple.com/br/app/lock-associado/id6444193057',
          color: 'bg-gray-800'
        }
      ]
    },
    {
      title: 'App Rastreamento',
      description: 'Acompanhe seus veículos em tempo real e receba alertas.',
      platforms: [
        {
          name: 'Android',
          icon: Smartphone,
          link: 'https://play.google.com/store/apps/details?id=br.com.rs.lockprotecao&hl=pt_BR',
          color: 'bg-green-500'
        },
        {
          name: 'iOS',
          icon: Apple,
          link: 'https://apps.apple.com/br/app/lockpv-rastreamento/id6753295403',
          color: 'bg-gray-800'
        },
        {
          name: 'Web',
          icon: Globe,
          link: 'https://lockprotecao.rastrosystem.com.br',
          color: 'bg-blue-500'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-6">
              Baixe nossos <span className="text-accent">Aplicativos</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Tenha controle total na palma da sua mão. Baixe os apps da Lock Proteção e gerencie tudo de forma prática e segura.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {apps.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 text-center">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h2 className="heading-lg text-primary mb-4">
                  {app.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {app.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {app.platforms.map((platform, pIndex) => {
                    const IconComponent = platform.icon;
                    return (
                      <a
                        key={pIndex}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${platform.color} text-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8" />
                        <span className="font-montserrat font-semibold">{platform.name}</span>
                        <Download className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-8">
            <h3 className="heading-lg text-primary text-center mb-8">
              Por que baixar nossos <span className="text-accent">Apps?</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-montserrat font-semibold text-text mb-2">Acesso Rápido</h4>
                <p className="text-gray-600">Gerencie tudo de qualquer lugar, a qualquer hora.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-montserrat font-semibold text-text mb-2">Rastreamento em Tempo Real</h4>
                <p className="text-gray-600">Monitore seus veículos com precisão e receba alertas instantâneos.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-montserrat font-semibold text-text mb-2">Atualizações Constantes</h4>
                <p className="text-gray-600">Mantenha-se sempre atualizado com as últimas funcionalidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-xl text-center text-primary mb-12">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Os apps são gratuitos?',
                  answer: 'Sim, o download e o uso básico dos apps são gratuitos. Algumas funcionalidades premium podem requerer assinatura.'
                },
                {
                  question: 'Como faço para instalar o app?',
                  answer: 'Clique no botão correspondente à sua plataforma (Android ou iOS) e siga as instruções da loja de apps.'
                },
                {
                  question: 'Preciso de cadastro para usar?',
                  answer: 'Para acessar todas as funcionalidades, é necessário fazer login com sua conta Lock Proteção.'
                },
                {
                  question: 'O app funciona offline?',
                  answer: 'Algumas funcionalidades básicas funcionam offline, mas o rastreamento em tempo real requer conexão com a internet.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-montserrat font-semibold text-text mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefaultApps;
