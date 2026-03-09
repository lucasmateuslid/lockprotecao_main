import React from 'react';
import { PhoneCall, ShieldAlert, FileWarning } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
  className?: string;
  spanFull?: boolean;
}

const Card: React.FC<CardProps> = ({ icon, title, description, action, className = '', spanFull = false }) => (
  <div className={`bg-white rounded-2xl shadow-lg p-8 text-center ${spanFull ? 'md:col-span-2' : ''} ${className}`}>
    {icon}
    <h3 className="heading-md mb-2 text-primary">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    {action}
  </div>
);

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
        
        {/* Headline com CTA extra para ação rápida */}
        <div>
          <h2 className="heading-xl text-primary mb-4">
            Emergência? Fale com nossa <span className="text-accent">Central 24h</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Acionamento rápido e direcionamento imediato do suporte necessário.
          </p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Caso tenha dificuldades em uma linha, utilize a outra.
          </p>
          {/* Botão extra no headline para mobile/quick access */}
          <a
            href="tel:08005918701"
            className="btn-accent inline-block mt-6 px-6 py-3 rounded-xl font-semibold md:hidden"
            aria-label="Ligar para Assistência 24h Principal"
          >
            Ligar Agora
          </a>
        </div>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 – Emergência Geral */}
          <Card
            icon={
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                <PhoneCall className="h-8 w-8 text-red-500" aria-hidden="true" />
              </div>
            }
            title="Assistência 24h - Emergências Gerais"
            description="Para roubo, furto, colisão, pane mecânica, guincho, chaveiro, problemas elétricos e outras urgências."
            action={
              <a
                href="tel:08005918701"
                className="btn-accent w-full block text-center py-3 rounded-xl font-semibold"
                aria-label="Ligar para Assistência 24h - Emergências Gerais"
              >
                Ligar 0800 591 8701
              </a>
            }
          />

          {/* Card 2 – Assistência Específica */}
          <Card
            icon={
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <ShieldAlert className="h-8 w-8 text-yellow-500" aria-hidden="true" />
              </div>
            }
            title="Assistência 24h - Suporte Avançado"
            description="Para roubo, furto, colisão, pane, guincho, chaveiro, elétrica e assistências adicionais."
            action={
              <a
                href="tel:08008792604"
                className="btn-accent w-full block text-center py-3 rounded-xl font-semibold"
                aria-label="Ligar para Assistência 24h - Suporte Avançado"
              >
                Ligar 0800 879 2604
              </a>
            }
          />

          {/* Card 3 – Colisão já ocorrida (destacado) */}
          <Card
            spanFull
            className="border-t-4 border-primary/20" // Destaque sutil para diferenciar
            icon={
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <FileWarning className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
            }
            title="Colisão já ocorreu?"
            description="Se a colisão já aconteceu e você precisa de orientação sobre sinistro, documentação e próximos passos, fale diretamente com o setor responsável."
            action={
              <button
                onClick={openWhatsAppSinistro}
                className="btn-accent w-full block text-center py-3 rounded-xl font-semibold"
                aria-label="Abrir WhatsApp para orientação de sinistro"
              >
                Abrir WhatsApp
              </button>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default Emergency;