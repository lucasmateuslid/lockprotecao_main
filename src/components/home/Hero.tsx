import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, CheckCircle, ChevronDown } from "lucide-react";

const BASE = "/assets/imgs/colisions/optimized";

interface ImageEntry {
  src: string;
  srcSet: string;
}

const images: ImageEntry[] = [
  "civic_01",
  "civic_02",
  "civic_03",
  "civic_04",
  "cobalt_01",
  "cobalt_02",
  "cobalt_03",
].map((name) => ({
  src: `${BASE}/${name}-1200w.webp`,
  srcSet: `${BASE}/${name}-400w.webp 400w, ${BASE}/${name}-800w.webp 800w, ${BASE}/${name}-1200w.webp 1200w`,
}));

// sizes: container ocupa ~50% da tela no desktop (lg), 100% antes disso
const SIZES = "(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px";

// Preload via <link> nativo — não bloqueia o thread principal
const preloadImageNative = (entry: ImageEntry) => {
  if (document.querySelector(`link[href="${entry.src}"]`)) return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = entry.src;
  link.setAttribute("imagesrcset", entry.srcSet);
  link.setAttribute("imagesizes", SIZES);
  document.head.appendChild(link);
};

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const preloadedRef = useRef(new Set<number>([0, 1]));

  // Preload da segunda imagem (a primeira é preloaded pelo index.html)
  useEffect(() => {
    preloadImageNative(images[1]);
  }, []);

  // Rotação automática com lazy preload das próximas
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => {
          const nextIdx = (prev + 1) % images.length;
          const afterNextIdx = (nextIdx + 1) % images.length;

          if (!preloadedRef.current.has(nextIdx)) {
            preloadImageNative(images[nextIdx]);
            preloadedRef.current.add(nextIdx);
          }
          if (!preloadedRef.current.has(afterNextIdx)) {
            preloadImageNative(images[afterNextIdx]);
            preloadedRef.current.add(afterNextIdx);
          }

          return nextIdx;
        });
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 lg:pt-0 max-[390px]:pt-14">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-800" />

      <div className="container relative z-10 py-10 sm:py-14 lg:py-16 max-[390px]:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Conteúdo */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-5 max-[390px]:space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full max-[390px]:px-3 max-[390px]:py-1.5">
              <Shield className="h-5 w-5 text-white max-[390px]:h-4 max-[390px]:w-4" />
              <span className="text-white font-medium max-[390px]:text-sm">Proteção Garantida 24h</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight max-w-[18ch] mx-auto lg:mx-0 max-[390px]:text-[2.05rem] max-[390px]:leading-tight">
              Proteja seu <span className="text-accent">Veículo</span>
              <br /> com Total Segurança
            </h1>

            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-xl mx-auto lg:mx-0 max-[390px]:text-base max-[390px]:leading-relaxed">
              A melhor proteção veicular do nordeste com cobertura nacional,
              assistência 24h e atendimento humanizado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-[390px]:gap-2">
              {["Cobertura Nacional", "Assistência 24/7", "Rastreamento gratuito", "Aprovação Rápida"].map(
                (feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 justify-center lg:justify-start max-[390px]:gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 max-[390px]:h-4 max-[390px]:w-4" />
                    <span className="text-white max-[390px]:text-[1.02rem]">{feature}</span>
                  </div>
                )
              )}
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 pt-3 sm:pt-4 w-full sm:flex-row sm:justify-start justify-center max-[390px]:pt-2">
              <Link
                to="/whatsapp"
                className="btn-accent w-full sm:w-auto flex items-center justify-center gap-3 max-[390px]:py-3 max-[390px]:text-[0.95rem]"
              >
                <Shield className="h-6 w-6" />
                Fazer Cotação Grátis
              </Link>

              <a
                href="tel:+558440420869"
                className="btn-outline w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 text-white hover:bg-white hover:text-primary max-[390px]:py-3 max-[390px]:text-[0.95rem]"
              >
                <Phone className="h-6 w-6" />
                {"(84) 4042-0869"}
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative overflow-hidden md:overflow-visible max-w-md lg:max-w-none mx-auto lg:mx-0 max-[390px]:max-w-[300px]">
            <div className="bg-white/20 backdrop-blur rounded-3xl p-3 sm:p-5 lg:p-6 shadow-lg h-[240px] sm:h-[320px] lg:h-[420px] max-[390px]:h-[210px] max-[390px]:p-2.5">
              <img
                src={images[index].src}
                srcSet={images[index].srcSet}
                sizes={SIZES}
                alt="Carro protegido pela Lock Proteção Veicular"
                width={600}
                height={420}
                className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Cards sempre no DOM — sem delay, sem CLS */}
              <div className="hidden md:block absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-md animate-card-pulse">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Nossa</p>
                    <p className="text-sm text-gray-600">Proteção</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-6 -right-6 bg-red-600 rounded-xl p-4 shadow-md animate-card-pulse">
                <p className="font-bold text-white">Antes / Depois</p>
                <p className="text-sm text-white">100% Protegidos</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center text-white animate-bounce z-20 [will-change:transform]">
        <ChevronDown className="h-6 w-6" />
        <span className="text-sm mt-1">Role para ver mais</span>
      </div>
    </section>
  );
};

export default Hero;