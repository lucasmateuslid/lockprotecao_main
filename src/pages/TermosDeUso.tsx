import React from 'react';



const TermosDeUso: React.FC = () => {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 shadow-lg">
          <div className="container text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat">
              Termos de <span className="text-red-600">Uso</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
              Leia atentamente nossos termos de uso antes de utilizar nossos serviços. Ao acessar este site, você concorda com as condições aqui descritas.
            </p>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="container py-16 grid gap-12">
          {/* Uso do site */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Uso do site
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O usuário concorda em utilizar este site exclusivamente para fins legais e legítimos. É proibido praticar qualquer ato que viole direitos de terceiros ou a legislação vigente. Informações fornecidas devem ser verdadeiras e completas.
            </p>
          </div>

          {/* Responsabilidades */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Responsabilidades
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A Lock Proteção Veicular não se responsabiliza por danos diretos ou indiretos decorrentes do uso inadequado do site, informações incorretas ou falhas técnicas. É responsabilidade do usuário verificar a precisão das informações fornecidas.
            </p>
          </div>

          {/* Propriedade intelectual */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Propriedade Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Todo conteúdo disponível neste site, incluindo textos, imagens, logos e designs, é protegido por direitos autorais e propriedade intelectual da Lock Proteção Veicular ou de seus parceiros. É proibida a reprodução sem autorização expressa.
            </p>
          </div>

          {/* Alterações nos termos */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Alterações nos termos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A Lock Proteção Veicular reserva-se o direito de modificar estes termos a qualquer momento. Recomendamos que o usuário consulte esta página regularmente para se manter atualizado sobre alterações.
            </p>
          </div>

          {/* Política de segurança e privacidade */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat text-primary">
              Segurança e privacidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nossa empresa adota medidas de segurança para proteger as informações dos usuários. O uso de dados pessoais é feito de acordo com a nossa Política de Privacidade e a legislação vigente (LGPD).
            </p>
          </div>

          {/* Contato */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Para dúvidas sobre estes Termos de Uso ou sobre nossos serviços, entre em contato conosco.
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

export default TermosDeUso;
