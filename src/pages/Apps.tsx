import React, { useState } from "react";
import {
  Smartphone,
  Download,
  ShieldCheck,
  Zap,
  Wifi,
  Globe,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const apps = [
  {
    title: "App Associado",
    description:
      "Gerencie sua conta, consulte coberturas, solicite assistência e visualize informações do seu plano.",
    icon: ShieldCheck,
    platforms: [
      {
        name: "Android",
        icon: () => (
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            alt="Android"
            className="w-5 h-5"
          />
        ),
        link: "https://play.google.com/store/apps/details?id=br.com.hinovamobile.lockprotecao",
      },
      {
        name: "iOS",
        icon: () => (
          <img
            src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
            alt="iOS"
            className="w-5 h-5"
          />
        ),
        link: "https://apps.apple.com/br/app/lock-associado/id6444193057",
      },
    ],
  },
  {
    title: "App Rastreamento",
    description:
      "Rastreamento em tempo real, alertas e histórico de eventos conectados diretamente à plataforma Lock.",
    icon: Wifi,
    platforms: [
      {
        name: "Android",
        icon: () => (
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            alt="Android"
            className="w-5 h-5"
          />
        ),
        link: "https://play.google.com/store/apps/details?id=br.com.rs.lockprotecao",
      },
      {
        name: "iOS",
        icon: () => (
          <img
            src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
            alt="iOS"
            className="w-5 h-5"
          />
        ),
        link: "https://apps.apple.com/br/app/lockpv-rastreamento/id6753295403",
      },
      {
        name: "Web",
        icon: () => <Globe className="w-5 h-5" />,
        link: "https://lockprotecao.rastrosystem.com.br",
      },
    ],
  },
];

const features = [
  {
    icon: Zap,
    title: "Controle Completo",
    text: "Solicite assistências, consulte cobertura e acompanhe ocorrências direto do app.",
  },
  {
    icon: Wifi,
    title: "Rastreamento Online",
    text: "Conexão contínua com a plataforma Lock para dados em tempo real.",
  },
  {
    icon: Download,
    title: "Gratuito",
    text: "Download e uso sem custos adicionais. Sem cobranças internas.",
  },
];

const faqs = [
  {
    q: "Para que servem os aplicativos Lock Proteção?",
    a: "Permitem gerenciar sua proteção veicular: coberturas, assistência, rastreamento e dados administrativos.",
  },
  {
    q: "Qual é o login para acessar os aplicativos?",
    a: "Use o login fornecido pela associação. Caso não possua, solicite suas credenciais com o suporte.",
  },
  {
    q: "Os aplicativos funcionam offline?",
    a: "Não. Eles precisam de internet para rastrear e sincronizar informações em tempo real.",
  },
  {
    q: "Existe algum custo para usar os aplicativos?",
    a: "Não. Os aplicativos são gratuitos para download e uso básico.",
  },
  {
    q: "Consigo pagar meu Boleto pelo aplicativo?",
    a: "Sim, você pode visualizar e pagar seus boletos diretamente pelo App Associado.",
  },
];

const FAQItem = ({ faq }: { faq: { q: string; a: string } }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white shadow-md rounded-xl p-5 cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-blue-600"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-3 text-gray-700"
          >
            {faq.a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Apps: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen font-montserrat">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 shadow-lg">
        <div className="container text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tenha a <span className="text-red-600">Lock Proteção</span> na palma da mão
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
            Baixe os aplicativos oficiais da Lock e gerencie sua proteção
            veicular com praticidade, segurança e tecnologia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#apps"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition flex items-center gap-2"
            >
              <Smartphone className="h-5 w-5" />
              Ver Aplicativos
            </a>
            <a
              href="https://wa.me/558440420869?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20os%20aplicativos%20da%20Lock."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition"
            >
              Suporte via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* APPS */}
      <section id="apps" className="container py-16 grid md:grid-cols-2 gap-10">
        {apps.map((app, i) => {
          const Icon = app.icon;
          return (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 text-primary">
                    {app.title}
                  </h2>
                  <p className="text-gray-700">{app.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {app.platforms.map((p, j) => {
                  const PIcon = p.icon;
                  return (
                    <a
                      key={j}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                    >
                      <PIcon />
                      {p.name}
                      <Download className="w-4 h-4 opacity-80" />
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* FEATURES */}
      <section className="container py-16 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-gray-700 text-sm">{f.text}</p>
            </div>
          );
        })}
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Perguntas <span className="text-red-600">Frequentes</span>
          </h2>
          <div className="space-y-4 text-left">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gray-100 py-16 text-center shadow-inner">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Tenha a <span className="text-red-600">Lock Proteção</span> sempre com você
          </h2>
          <p className="text-gray-700 mb-8">
            Baixe os aplicativos e aproveite todos os benefícios da nossa
            plataforma: assistência 24h, atualizações em tempo real e suporte direto.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/developer?id=Lock+Proteção",
                "_blank"
              )
            }
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            <ArrowRight className="h-5 w-5" />
            Ver Todos os Aplicativos
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white py-10 text-center">
        <p className="font-semibold text-lg mb-4">
          Precisa de ajuda com os aplicativos?
        </p>
        <a
          href="https://wa.me/558440420869?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20os%20aplicativos%20da%20Lock."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-100 transition"
        >
          <Smartphone className="w-5 h-5" />
          Suporte via WhatsApp
        </a>
      </footer>
    </main>
  );
};

export default Apps;
