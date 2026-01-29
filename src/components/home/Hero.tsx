import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, CheckCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/assets/imgs/colisions/civic_01.webp",
  "/assets/imgs/colisions/civic_02.webp",
  "/assets/imgs/colisions/civic_03.webp",
  "/assets/imgs/colisions/civic_04.webp",
  "/assets/imgs/colisions/cobalt_01.webp",
  "/assets/imgs/colisions/cobalt_02.webp",
  "/assets/imgs/colisions/cobalt_03.webp",
];

// Lazy preload apenas da próxima imagem para economizar memória
const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const preloadedRef = useRef(new Set<number>([0]));

  // Preload da primeira e próxima imagem (LCP optimization)
  useEffect(() => {
    preloadImage(images[0]);
    preloadImage(images[1]);
    preloadedRef.current.add(0);
    preloadedRef.current.add(1);
  }, []);

  // Rotação automática com lazy load de próximas imagens
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => {
          const nextIdx = (prev + 1) % images.length;
          
          // Preload próxima imagem apenas quando necessário
          if (!preloadedRef.current.has(nextIdx)) {
            preloadImage(images[nextIdx]);
            preloadedRef.current.add(nextIdx);
          }
          // Preload imagem após a próxima
          const afterNextIdx = (nextIdx + 1) % images.length;
          if (!preloadedRef.current.has(afterNextIdx)) {
            preloadImage(images[afterNextIdx]);
            preloadedRef.current.add(afterNextIdx);
          }
          
          return nextIdx;
        });
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Floating cards (somente depois do layout estabilizar)
  useEffect(() => {
    const timer = setTimeout(() => setShowFloating(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-800" />

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-medium">
                Proteção Garantida 24h
              </span>
            </div>

            <h1 className="heading-hero text-white leading-tight">
              Proteja seu <span className="text-accent">Veículo</span>
              <br /> com Total Segurança
            </h1>

            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A melhor proteção veicular do nordeste com cobertura nacional,
              assistência 24h e atendimento humanizado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Cobertura Nacional",
                "Assistência 24/7",
                "Rastreamento gratuito",
                "Aprovação Rápida",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 w-full sm:flex-row sm:justify-start justify-center">
              <Link
                to="/whatsapp"
                className="
                  btn-accent w-full sm:w-auto
                  flex items-center justify-center gap-3
                  text-center
                "
              >
                <Shield className="h-6 w-6" />
                Fazer Cotação Grátis
              </Link>

              <a
                href="tel:+558440420869"
                className="
                  btn-outline w-full sm:w-auto
                  flex items-center justify-center gap-3
                  bg-white/10 text-white
                  hover:bg-white hover:text-primary
                  text-center
                "
              >
                <Phone className="h-6 w-6" />
                (84) 4042-0869
              </a>
            </div>

          </div>

          {/* Imagem (CLS ZERO) */}
          <div className="relative">
            <div
              className="
                bg-white/20 backdrop-blur rounded-3xl p-4 sm:p-6 shadow-lg
                h-[260px] sm:h-[320px] lg:h-[420px]
              "
            >
              <img
                src={images[index]}
                alt="Carro protegido pela Lock Proteção Veicular"
                className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />

              {/* Floating cards (desktop only) */}
              {showFloating && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:block absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-semibold">Nossa</p>
                        <p className="text-sm text-gray-600">Proteção</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:block absolute -bottom-6 -right-6 bg-red-600 rounded-xl p-4 shadow-md"
                  >
                    <p className="font-bold text-white">Antes / Depois</p>
                    <p className="text-sm text-white">100% Protegidos</p>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
        <div className="
          absolute bottom-4 left-1/2 -translate-x-1/2
          flex flex-col items-center
          text-white
          animate-bounce
          z-20
        ">
          <ChevronDown className="h-6 w-6" />
          <span className="text-sm mt-1">Role para ver mais</span>
        </div>

    </section>
  );
};

export default Hero;
