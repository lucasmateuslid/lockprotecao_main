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
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 shadow-lg">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat">
            Simule sua <span className="text-red-600">Proteção Veicular</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
            Preencha seus dados e nossa equipe entrará em contato rapidamente.
          </p>
        </div>
      </section>

      {/* Formulário PowerForm */}
      <section className="-mt-16 flex justify-center px-4 sm:px-6 lg:px-8 my-24">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 sm:p-12">
          <section id="pwrcrm">
            <form id="pwrcrmform" className="space-y-6">
              <input type="hidden" value="lock protec4o 4lpv930" id="pwrCmpnHsh" name="pwrCmpnHsh" />
              <input type="hidden" value="8DOaYyOe" id="pwrFrmCode" name="pwrFrmCode" />
              <input type="hidden" value="1" id="pwrPplnClmn" name="pwrPplnClmn" />
              <input type="hidden" value="8002" id="pwrLdSrc" name="pwrLdSrc" />

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
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
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
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary transition phone_mask"
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
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              {/* Estado e Cidade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pwrStt" className="block text-gray-700 font-medium mb-2">
                    Estado
                  </label>
                  <select
                    id="pwrStt"
                    name="pwrStt"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
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
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  >
                    <option value="0">Selecione a cidade</option>
                  </select>
                </div>
              </div>

              {/* Botão enviar */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-600 transition-all"
              >
                Solicitar Cotação
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PowerForm;
