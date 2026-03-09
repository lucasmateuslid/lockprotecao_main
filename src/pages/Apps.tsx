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
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const apps = [
  {
    title: "App Associado",
    description:
      "Gerencie sua conta, consulte coberturas, solicite assistência e visualize informações do seu plano.",
    icon: ShieldCheck,
    iconImage: "/assets/imgs/apps/optimized/app-associado-vermelho-256w.webp",
    iconSrcSet:
      "/assets/imgs/apps/optimized/app-associado-vermelho-128w.webp 128w, /assets/imgs/apps/optimized/app-associado-vermelho-256w.webp 256w, /assets/imgs/apps/optimized/app-associado-vermelho-512w.webp 512w",
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
    iconImage: "/assets/imgs/apps/optimized/app-rastreamento-azul-256w.webp",
    iconSrcSet:
      "/assets/imgs/apps/optimized/app-rastreamento-azul-128w.webp 128w, /assets/imgs/apps/optimized/app-rastreamento-azul-256w.webp 256w, /assets/imgs/apps/optimized/app-rastreamento-azul-512w.webp 512w",
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
      className="bg-white rounded-xl p-5 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-text">{faq.q}</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-primary"
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
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const activeApp = apps[activeAppIndex];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-primary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-6">
              Tenha a <span className="text-accent">Lock Proteção</span> na palma da mão
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed mb-10">
              Baixe os aplicativos oficiais da Lock e gerencie sua proteção
              veicular com praticidade, segurança e tecnologia.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#apps"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Smartphone className="h-5 w-5" />
                Ver Aplicativos
              </a>
              <a
                href="https://wa.me/558440420869?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20os%20aplicativos%20da%20Lock."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2"
              >
                Suporte via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APPS */}
      <section id="apps" className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-xl text-primary mb-4">
              Nossos <span className="text-accent">Aplicativos</span>
            </h2>
            <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
              Escolha o aplicativo ideal, selecione sua plataforma e faça o download em poucos cliques.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              "1. Escolha o app ideal",
              "2. Selecione sua plataforma",
              "3. Toque para baixar e acessar",
            ].map((step) => (
              <div
                key={step}
                className="rounded-xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {apps.map((app, i) => {
                const Icon = app.icon;
                const isActive = i === activeAppIndex;

                return (
                  <button
                    key={app.title}
                    onClick={() => setActiveAppIndex(i)}
                    className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary/5 shadow-custom"
                        : "border-gray-200 bg-white hover:border-primary/40 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center p-1.5 shrink-0">
                        {app.iconImage ? (
                          <img
                            src={app.iconImage}
                            srcSet={app.iconSrcSet}
                            sizes="64px"
                            alt={app.title}
                            className="w-full h-full object-contain rounded-lg"
                            loading="lazy"
                          />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-primary text-lg">
                          {app.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {app.platforms.length} plataforma{app.platforms.length > 1 ? "s" : ""} {app.platforms.length > 1 ? "disponíveis" : "disponível"}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeApp.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="card h-full"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <div className="w-20 h-20 rounded-2xl border border-gray-200 bg-white shadow-sm flex items-center justify-center p-2 shrink-0">
                      {activeApp.iconImage ? (
                        <img
                          src={activeApp.iconImage}
                          srcSet={activeApp.iconSrcSet}
                          sizes="80px"
                          alt={activeApp.title}
                          className="w-full h-full object-contain rounded-xl"
                          loading="lazy"
                        />
                      ) : (
                        <activeApp.icon className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="heading-md text-primary mb-2">{activeApp.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{activeApp.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeApp.platforms.map((p) => {
                      const PIcon = p.icon;
                      return (
                        <a
                          key={p.name}
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group rounded-xl border border-accent/20 bg-accent text-white px-4 py-3 font-semibold hover:bg-red-600 transition-all duration-300"
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="inline-flex items-center gap-2">
                              <PIcon />
                              {p.name}
                            </span>
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                          </span>
                          <span className="mt-1 block text-xs text-white/80">
                            Baixar para {p.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-xl text-primary mb-4">
              Vantagens dos <span className="text-accent">Apps Lock</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="card text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-md text-primary mb-2">{f.title}</h3>
                  <p className="text-gray-700 text-sm">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-xl text-primary mb-10">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
            <div className="space-y-4 text-left">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-xl mb-4">
              Tenha a <span className="text-accent">Lock Proteção</span> sempre com você
            </h2>
            <p className="opacity-90 mb-8 text-lg">
              Baixe os aplicativos e aproveite assistência 24h, atualizações em tempo real e suporte direto.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/developer?id=Lock+Proteção",
                  "_blank"
                )
              }
              className="btn-accent inline-flex items-center gap-2"
            >
              <ArrowRight className="h-5 w-5" />
              Ver Todos os Aplicativos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Apps;
