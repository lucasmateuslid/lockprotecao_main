// src/pages/PowerForm.tsx
import React, { useEffect } from 'react';

const PowerForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://resources.powercrm.com.br/assets/external/js/script.pwrcrm.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Faixa azul topo */}
      <section className="bg-gradient-primary text-white pt-28 sm:pt-32 pb-12 sm:pb-16 shadow-lg">
        <div className="container text-center">
          <p className="font-montserrat font-semibold text-white/90 mb-4 tracking-wide uppercase text-sm">
            Cotação gratuita e sem compromisso
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold leading-tight mb-5 max-w-3xl mx-auto">
            Proteja seu veículo com a <span className="text-accent">Lock Proteção</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-100 leading-relaxed">
            Preencha o formulário e receba atendimento rápido para encontrar o plano ideal para você.
          </p>

          <div className="mt-8">
            <a
              href="#pwrcrm"
              className="btn-accent inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Preencher Formulário Agora
            </a>
          </div>
        </div>
      </section>

      {/* Formulário PowerForm */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto w-full bg-white rounded-2xl sm:rounded-3xl shadow-custom p-4 sm:p-10 md:p-12 border border-gray-100">
            <div className="mb-8 text-center">
            <h2 className="heading-lg text-primary mb-2">Preencha para receber sua cotação</h2>
            <p className="text-gray-600">Campos com <span className="text-accent font-semibold">*</span> são obrigatórios.</p>
            </div>

            <section id="pwrcrm" className="scroll-mt-28">
              <form id="pwrcrmform" className="space-y-8">
                <input type="hidden" value="lock protec4o 4lpv930" id="pwrCmpnHsh" name="pwrCmpnHsh" />
                <input type="hidden" value="8DOaYyOe" id="pwrFrmCode" name="pwrFrmCode" />
                <input type="hidden" value="1" id="pwrPplnClmn" name="pwrPplnClmn" />
                <input type="hidden" value="8002" id="pwrLdSrc" name="pwrLdSrc" />

                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5 sm:p-6">
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-4">Dados principais</h3>

                  <div className="space-y-5">
                    {/* Nome */}
                    <div>
                      <label htmlFor="pwrClntNm" className="block text-gray-700 font-medium mb-2">
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="pwrClntNm"
                        name="pwrClntNm"
                        required
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label htmlFor="pwrCltPhn" className="block text-gray-700 font-medium mb-2">
                        Telefone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="pwrCltPhn"
                        name="pwrCltPhn"
                        required
                        placeholder="(__) _____-____"
                        maxLength={11}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition phone_mask"
                      />
                    </div>

                    {/* Placa */}
                    <div>
                      <label htmlFor="pwrVhclPlt" className="block text-gray-700 font-medium mb-2">
                        Placa
                      </label>
                      <input
                        type="text"
                        id="pwrVhclPlt"
                        name="pwrVhclPlt"
                        placeholder="XXX0000"
                        maxLength={7}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-4">Localização</h3>

                  {/* Estado e Cidade */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pwrStt" className="block text-gray-700 font-medium mb-2">
                        Estado
                      </label>
                      <select
                        id="pwrStt"
                        name="pwrStt"
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                      >
                        <option value="0">Selecione o estado</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="pwrCt" className="block text-gray-700 font-medium mb-2">
                        Cidade
                      </label>
                      <select
                        id="pwrCt"
                        name="pwrCt"
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                      >
                        <option value="0">Selecione a cidade</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary rounded-xl py-3.5 text-base"
                >
                  Solicitar Cotação
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerForm;
