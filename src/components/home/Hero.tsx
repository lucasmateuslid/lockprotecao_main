import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const images = [
  "./src/assets/imgs/colisions/civic_01.jpeg",
  "./src/assets/imgs/colisions/civic_02.jpeg",
  "./src/assets/imgs/colisions/civic_03.jpeg",
  "./src/assets/imgs/colisions/civic_04.jpeg",
  "./src/assets/imgs/colisions/cobalt_01.jpeg",
  "./src/assets/imgs/colisions/cobalt_02.jpeg",
  "./src/assets/imgs/colisions/cobalt_03.jpeg",
  "./src/assets/imgs/colisions/kwid_01.jpeg",
  "./src/assets/imgs/colisions/kwid_02.jpeg",
  "./src/assets/imgs/colisions/kwid_03.jpeg",
  "./src/assets/imgs/colisions/kwid_04.jpeg"
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  // Pré-carregar imagens
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Troca automática de imagens
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Mostrar floating cards após 1s
  useEffect(() => {
    const timer = setTimeout(() => setShowFloating(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-800"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-md"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full blur-md"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-md"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
          {/* Content */}
          <div className="text-center lg:text-left space-y-5 my-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-montserrat font-medium">Proteção Garantida 24h</span>
            </div>

            <h1 className="heading-hero text-white leading-tight">
              Proteja seu <span className="text-accent">Veículo</span> com Total Segurança
            </h1>

            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
              A melhor proteção veicular do nordeste com cobertura nacional,
              assistência 24h e atendimento humanizado. Sua tranquilidade é nossa prioridade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Cobertura Nacional',
                'Assistência 24/7',
                'Rastreamento gratuito',
                'Aprovação Rápida'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-white font-raleway">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link
                to="/whatsapp"
                className="btn-accent text-lg px-8 py-4 inline-flex items-center justify-center space-x-3 group"
              >
                <Shield className="h-6 w-6 group-hover:animate-pulse" />
                <span>Fazer Cotação Grátis</span>
              </Link>

              <a
                href="tel:+558440420869"
                className="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="h-6 w-6" />
                <span>(84) 4042-0869</span>
              </a>
            </div>
          </div>

          {/* Visual/Image rotativa */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-lg relative">
              <img
                src={images[index]}
                alt="Carro protegido"
                className={`w-full h-96 object-cover rounded-2xl shadow-md transition-opacity duration-500 ease-in-out ${
                  fade ? 'opacity-0' : 'opacity-100'
                }`}
                loading="eager"
              />

              {/* Floating Cards */}
              {showFloating && (
                <>
                  {/* Card Nossa Proteção */}
                  <motion.div
                    initial={{ opacity: 1, scale: 0.9 }}
                    animate={{ opacity: 100, scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                    className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold text-gray-800">Nossa</p>
                        <p className="text-sm text-gray-600">Proteção</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card Antes / Depois */}
                  <motion.div
                    initial={{ opacity: 1, scale: 0.9 }}
                    animate={{ opacity: 100, scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", delay: 0.3 }}
                    className="absolute -bottom-1 -right-6 bg-accent rounded-xl p-4 shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="h-8 w-8 text-white" />
                      <div>
                        <p className="font-montserrat font-bold text-white">Antes / Depois </p>
                        <p className="text-sm text-gray-100">100% Protegidos</p>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white text-sm mt-2 font-raleway">Role para baixo</p>
      </div>
    </section>
  );
};

export default Hero;
