import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const WhatsappRedirect = () => {
  const whatsappUrl =
      'https://wa.me/558440420869?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20simula%C3%A7%C3%A3o%20da%20prote%C3%A7%C3%A3o%20para%20o%20meu%20ve%C3%ADculo.'
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1000); // 1 segundo de espera

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white font-montserrat text-center px-6">
      <Loader2 className="h-12 w-12 animate-spin mb-4 text-white/90" />
      <h1 className="text-2xl font-semibold">Redirecionando para o WhatsApp...</h1>
      <p className="mt-3 text-white/80">
        Caso não seja redirecionado automaticamente,&nbsp;
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-accent hover:text-white transition-colors"
        >
          clique aqui
        </a>
        .
      </p>
    </div>
  );
};

export default WhatsappRedirect;
