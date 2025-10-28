import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

// Páginas existentes
import Home from './pages/Home';
import Plans from './pages/Plans';
import About from './pages/About';
import Quote from './pages/Quote';
import Contact from './pages/Contact';


// Novas páginas
import LGPD from './pages/LGPD';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import WhatsappRedirect from './pages/WhatsappRedirect';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <Router>
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
            <Route path="/whatsapp" element={<WhatsappRedirect />} />

            {/* Novas páginas */}
            <Route path="/lgpd" element={<LGPD />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />

            {/* Rota fallback */}
            <Route
              path="*"
              element={
                <div className="container py-16 text-center">
                  <h1 className="text-3xl font-bold font-montserrat">Página não encontrada</h1>
                  <p className="mt-4 font-montserrat">Verifique o endereço e tente novamente.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
