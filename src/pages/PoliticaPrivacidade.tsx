import React from 'react';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 shadow-lg">
          <div className="container text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat">
              Política de <span className="text-red-600">Privacidade</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
              Esta página descreve como coletamos, armazenamos e utilizamos os dados de nossos usuários, garantindo transparência e segurança conforme a LGPD.
            </p>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="container py-16 grid gap-12">
          {/* Introdução */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Introdução
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A Lock Proteção Veicular valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política explica como coletamos, utilizamos, armazenamos e compartilhamos informações de nossos usuários.
            </p>
          </div>

          {/* Dados que coletamos */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Dados que coletamos
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Informações fornecidas em formulários: nome, e-mail, telefone e endereço.</li>
              <li>Dados de navegação no site: IP, navegador, páginas acessadas e tempo de permanência.</li>
              <li>Informações sobre interações com nossos serviços e suporte.</li>
              <li>Dados coletados através de cookies e ferramentas de análise.</li>
            </ul>
          </div>

          {/* Finalidade do tratamento */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Finalidade do tratamento
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos seus dados para prestar serviços de proteção veicular, entrar em contato sobre solicitações e cotações, enviar informações sobre promoções e melhorar a experiência no site.
            </p>
          </div>

          {/* Compartilhamento de dados */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Compartilhamento de dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Seus dados podem ser compartilhados apenas com terceiros quando necessário para cumprir obrigações legais, executar serviços contratados ou garantir a segurança de nossos sistemas. Não vendemos ou comercializamos seus dados pessoais.
            </p>
          </div>

          {/* Segurança */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, alterações, perdas ou divulgação indevida.
            </p>
          </div>

          {/* Direitos dos usuários */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Direitos dos usuários
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Acessar seus dados pessoais.</li>
              <li>Solicitar correção ou atualização das informações.</li>
              <li>Solicitar exclusão ou anonimização dos dados.</li>
              <li>Solicitar portabilidade dos dados.</li>
              <li>Revogar consentimentos previamente fornecidos.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Cookies e tecnologias similares
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nosso site utiliza cookies para melhorar a navegação, entender o comportamento do usuário e personalizar conteúdos. Você pode desativar os cookies no seu navegador, mas algumas funcionalidades podem ser afetadas.
            </p>
          </div>

          {/* Alterações */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Alterações nesta política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que os usuários revisem esta página regularmente.
            </p>
          </div>

          {/* Contato */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Para dúvidas ou solicitações sobre esta política de privacidade, entre em contato com nossa equipe.
            </p>
            <a
              href="/contato"
              className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default PoliticaPrivacidade;
