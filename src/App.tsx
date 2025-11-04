import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { useGTMPageView } from "./hooks/useGTMPageView"; // ✅ Hook GTM

// 🔹 Componente auxiliar para ativar o GTM dentro do Router
function GTMTracker() {
  useGTMPageView();
  return null; // Não renderiza nada na tela
}

// Páginas essenciais
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Apps from "./pages/Apps";

// Novas páginas
import LGPD from "./pages/LGPD";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import WhatsappRedirect from "./pages/WhatsappRedirect";
import PowerForm from "./pages/PowerForm";

// Lazy load (carregamento sob demanda)
const Footer = React.lazy(() => import("./components/Footer"));
const FloatingCTA = React.lazy(() => import("./components/FloatingCTA"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 🌀 Tela de loading inicial
  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
      </div>
    );
  }

  // 🌐 App principal
  return (
    <Router>
      {/* ✅ O GTMTracker precisa estar dentro do Router */}
      <GTMTracker />

      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />

        <main>
          <Routes>
            {/* Páginas principais */}
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/cotacao" element={<Quote />} />
            <Route path="/contato" element={<Contact />} />

            {/* Novas páginas */}
            <Route path="/lgpd" element={<LGPD />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/whatsapp" element={<WhatsappRedirect />} />
            <Route path="/pwr-cotacao" element={<PowerForm />} />
            <Route path="/apps" element={<Apps />} />

            {/* Rota 404 */}
            <Route
              path="*"
              element={
                <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 shadow-lg">
                  <div className="container text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-montserrat">
                      Erro <span className="text-red-600">404</span> - Página Não Encontrada
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
                      Ops! A página que você está tentando acessar não existe ou foi removida.
                    </p>
                    <p className="mt-2 text-gray-200">
                      Selecione outra página para continuar navegando:
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <a
                        href="/"
                        className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                      >
                        Início
                      </a>
                      <a
                        href="/planos"
                        className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                      >
                        Planos
                      </a>
                      <a
                        href="/contato"
                        className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                      >
                        Contato
                      </a>
                    </div>
                  </div>
                </section>
              }
            />
          </Routes>
        </main>

        {/* Lazy components */}
        <Suspense fallback={<div className="min-h-32"></div>}>
          <Footer />
          <FloatingCTA />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
