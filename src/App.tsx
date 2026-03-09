import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { useGTMPageView } from "./hooks/useGTMPageView";

/* ===============================
   🔹 Lazy Load de TODAS as páginas
================================ */

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Quote = React.lazy(() => import("./pages/Quote"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Apps = React.lazy(() => import("./pages/Apps"));
const Thanks = React.lazy(() => import("./pages/Thanks"));
const LGPD = React.lazy(() => import("./pages/LGPD"));
const TermosDeUso = React.lazy(() => import("./pages/TermosDeUso"));
const PoliticaPrivacidade = React.lazy(() => import("./pages/PoliticaPrivacidade"));
const WhatsappRedirect = React.lazy(() => import("./pages/WhatsappRedirect"));
const PowerForm = React.lazy(() => import("./pages/PowerForm"));

/* ===============================
   🔹 Lazy Components secundários
================================ */

const Footer = React.lazy(() => import("./components/Footer"));
const FloatingCTA = React.lazy(() => import("./components/FloatingCTA"));

/* ===============================
   🔹 GTM carregando com delay
   (evita bloquear LCP e TBT)
================================ */

function GTMDelayed() {
  const [enabled, setEnabled] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnabled(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useGTMPageView(enabled);

  if (!enabled) return null;

  return null;
}

/* ===============================
   🚀 App Principal Otimizado
================================ */

function App() {
  return (
    <Router>
      <GTMDelayed />

      <div className="min-h-screen bg-white flex flex-col">
        <ScrollToTop />
        <Header />

        <main className="flex-grow">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/cotacao" element={<Quote />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/obrigado" element={<Thanks />} />
              <Route path="/lgpd" element={<LGPD />} />
              <Route path="/termos-de-uso" element={<TermosDeUso />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/whatsapp" element={<WhatsappRedirect />} />
              <Route path="/pwr-cotacao" element={<PowerForm />} />

              {/* 404 */}
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
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
          <FloatingCTA />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;