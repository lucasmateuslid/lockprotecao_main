import React from 'react';

const LGPD: React.FC = () => {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 shadow-lg">
          <div className="container text-center">
            <h1 className="heading-xl text-5xl md:text-6xl font-bold font-montserrat">
              Política de <span className="text-red-600">Privacidade</span> - LGPD
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
              Aqui você encontrará todas as informações sobre como coletamos, utilizamos e protegemos seus dados pessoais, em conformidade com a LGPD.
            </p>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="container py-16 grid gap-12">
          {/* Dados que coletamos */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Dados que Coletamos
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Nome, e-mail e telefone.</li>
              <li>Dados de navegação no site.</li>
              <li>Informações fornecidas em formulários de contato ou cotação.</li>
            </ul>
          </div>

          {/* Finalidade do tratamento */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Finalidade do Tratamento
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos seus dados para entrar em contato, fornecer serviços e melhorar a experiência no site.
            </p>
          </div>

          {/* Direitos do usuário */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Direitos do Usuário
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados pessoais. Para isso, entre em contato através do nosso formulário.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Precisa de mais informações sobre seus dados? Entre em contato com nossa equipe.
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

export default LGPD;
