import React from 'react';
import { PhoneCall, ShieldAlert, FileWarning } from 'lucide-react';

const Emergency: React.FC = () => {
  const openWhatsAppSinistro = () => {
    const phone = '558481161997';
    const message = 'Olá, vim pelo site e estou precisando de ajuda relacionada ao sinistro!';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-primary/5 border-y-4 border-primary/10">
      <div className="container max-w-5xl mx-auto text-center space-y-10">
        
        {/* Headline */}
        <div>
          <h2 className="heading-xl text-primary mb-4">
            Emergência? Fale com nossa <span className="text-accent">Central 24h</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Acionamento rápido e direcionamento imediato do suporte necessário.
          </p>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Caso tenha dificuldades em uma linha, utilize a outra.
          </p>
        </div>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 – Emergência */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
              <PhoneCall className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="heading-md mb-2 text-primary">Socorro / Assistência 24h</h3>
            <p className="text-gray-600 mb-6">Roubo, Furto, Colisão, Pane, guincho, chaveiro, elétrica e outras emergências</p>

            <a
              href="tel:08005918701"
              className="btn-accent w-full block text-center py-3 rounded-xl font-semibold"
            >
              Ligar 0800 591 8701
            </a>
          </div>

          {/* Card 2 – Sinistro */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <ShieldAlert className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="heading-md mb-2 text-primary">Socorro / Assistência 24H</h3>
            <p className="text-gray-600 mb-6">Roubo, Furto, Colisão, Pane, guincho, chaveiro, elétrica e outras Assistências</p>

            <a
              href="tel:08008792604"
              className="btn-accent w-full block text-center py-3 rounded-xl font-semibold"
            >
              Ligar 0800 879 2604
            </a>
          </div>

          {/* Card 3 – Colisão já ocorrida */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center md:col-span-2">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <FileWarning className="h-8 w-8 text-primary" />
            </div>
            <h3 className="heading-md mb-2 text-primary">Colisão já aconteceu?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Já houve a colisão e você precisa de orientação sobre sinistro e documentação?
              Fale diretamente com o setor responsável agora mesmo:
            </p>

            <a
              href="#"
              onClick={openWhatsAppSinistro}
              className="btn-accent w-full block text-center py-3 rounded-xl font-semibold"
            >
              Abrir WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Emergency;
