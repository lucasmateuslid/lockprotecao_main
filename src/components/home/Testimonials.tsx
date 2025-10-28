import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: 'Lucas Mateus',
    location: 'Natal - RN',
    rating: 5,
    text: 'Estou junto com a Lock há mais de 2 anos e só tenho uma coisa a dizer: melhor proteção veicular do Rio Grande do Norte disparada! Ótimos planos, nunca tive problema e continuarei mesmo se trocar de moto!',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Premium'
  },
  {
    name: 'Yanna Farias',
    location: 'Natal - RN',
    rating: 5,
    text: 'Iniciando pela consultora de vendas, Layanne me prestou um atendimento excelente, focado em tirar todas as dúvidas e sempre muito cordial e atenciosa. Um atendimento diferenciado que merece reconhecimento!',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Diamante'
  },
  {
    name: 'Edson Gleyson',
    location: 'Natal - RN',
    rating: 5,
    text: 'Só tenho coisas boas para falar sobre a Lock. No primeiro mês que contratei, meu carro deu problema e precisei de um reboque, fui atendido rapidamente. Equipe muito atenciosa!',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Prata'
  },
  {
    name: 'LUA',
    location: 'Natal - RN',
    rating: 5,
    text: 'Fiquei extremamente satisfeita com o atendimento! Todas as informações foram passadas com clareza e eficiência. É raro encontrar um atendimento tão transparente e eficaz como esse.',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Premium'
  },
  {
    name: 'Luanna Delfino',
    location: 'Natal - RN',
    rating: 5,
    text: 'Ótimo atendimento com pessoas atenciosas e educadas, empresa comprometida com o cliente. Recomendo!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Prata'
  },
  {
    name: 'Roberto Fonseca',
    location: 'Natal - RN',
    rating: 3,
    text: 'Na necessidade de um guincho, o atendimento demorou. Uma hora em ligação e mais uma hora de espera. Poderia ser mais ágil.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Básico'
  },
  {
    name: 'Ivan',
    location: 'Natal - RN',
    rating: 5,
    text: 'Gostaria de parabenizar pelo excelente atendimento que recebi. Fui tratado com muita atenção, respeito e profissionalismo. É raro encontrar tanta dedicação e cuidado.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Prata'
  },
  {
    name: 'Lary Kerolayne',
    location: 'Natal - RN',
    rating: 5,
    text: 'Fui muito bem atendida pela atendente Layanne, super atenciosa e prestativa. Tirou todas as minhas dúvidas com paciência e educação. Excelente atendimento!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Diamante'
  },
  {
    name: 'Alicia Barbosa',
    location: 'Natal - RN',
    rating: 5,
    text: 'Empresa séria, atendimento rápido e com ótima qualidade. Fui atendida pela Layanne e só tenho elogios. Muito atenciosa e sempre pronta para esclarecer dúvidas.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Premium'
  },
  {
    name: 'Eduardo Barbosa',
    location: 'Natal - RN',
    rating: 5,
    text: 'A Lock Proteção Veicular é uma empresa excepcional! Desde o primeiro contato fui atendido pela Layanne, que demonstrou muita atenção e profissionalismo. Esclareceu tudo com transparência e simpatia.',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    plan: 'Plano Diamante'
  }
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-xl text-primary mb-6">
            O que nossos <span className="text-accent">Associados dizem</span>
          </h2>
          <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos associados é nossa maior conquista.
            Veja alguns depoimentos de quem já confia na Lock Proteção.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="h-16 w-16 text-primary" />
            </div>

            {/* Current Testimonial */}
            <div className="text-center animate-fade-in">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 max-w-3xl mx-auto font-raleway italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-montserrat font-semibold text-lg text-text">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-primary font-medium text-sm">
                    {testimonials[currentTestimonial].plan}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">4.8/5</div>
              <div className="text-gray-600">Avaliação Média no Google</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">300+</div>
              <div className="text-gray-600">Depoimentos Positivos</div>
            </div>
          </div>
            

                          {/* Videos Section (melhorias: formato vertical/phone, lazy-play on click, acessibilidade) */}
                          <div className="mt-16">
                            <h3 className="text-center text-2xl font-montserrat font-semibold text-primary mb-8">
                              Veja depoimentos em vídeo
                            </h3>

                            {/* Grid responsivo */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              {[
                                { src: "https://www.youtube.com/embed/cdiggMTh8CA", orientation: "horizontal" },
                                { src: "https://www.youtube.com/embed/zKJfYTR3UNQ", orientation: "vertical" },
                                { src: "https://www.youtube.com/embed/zKJfYTR3UNQ", orientation: "vertical" },
                                { src: "https://www.youtube.com/embed/cdiggMTh8CA", orientation: "horizontal" },
                              ].map((video, index) => {
                                const isYouTube = video.src.includes("youtube");
                                const ytIdMatch = video.src.match(/\/embed\/([^?&/]+)/);
                                const ytId = ytIdMatch ? ytIdMatch[1] : "";
                                const thumb = ytId ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` : undefined;
                                // Para vídeos verticais (formato telefone) usamos aspecto 9:16 -> paddingTop ~177.78%
                                const aspectPadding = video.orientation === "vertical" ? "177.78%" : "56.25%";
                                const dataSrc = isYouTube ? `${video.src}?rel=0&showinfo=0&enablejsapi=1` : video.src;

                                return (
                                  <div
                                    key={index}
                                    className="relative w-full overflow-hidden rounded-xl shadow-md border border-gray-200 bg-black"
                                    style={{ paddingTop: aspectPadding }}
                                  >
                                    {isYouTube ? (
                                      <>
                                        {/* iframe sem src até o usuário clicar (lazy-play) */}
                                        <iframe
                                          title={`Vídeo ${index + 1}`}
                                          data-src={dataSrc}
                                          src=""
                                          loading="lazy"
                                          className="absolute top-0 left-0 w-full h-full rounded-xl"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                          referrerPolicy="strict-origin-when-cross-origin"
                                          allowFullScreen
                                          aria-hidden="false"
                                        />
                                        {/* Poster + Play button (button para acessibilidade) */}
                                        {thumb && (
                                          <>
                                            <img
                                              src={thumb}
                                              alt={`Thumbnail do vídeo ${index + 1}`}
                                              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                                              style={{ cursor: "pointer" }}
                                            />
                                            <button
                                              type="button"
                                              aria-label={`Reproduzir vídeo ${index + 1}`}
                                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 text-black rounded-full p-3 shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary"
                                              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                const btn = e.currentTarget;
                                                const container = btn.parentElement as HTMLElement | null;
                                                if (!container) return;
                                                const iframe = container.querySelector("iframe") as HTMLIFrameElement | null;
                                                const img = container.querySelector("img") as HTMLImageElement | null;
                                                if (iframe && iframe.dataset.src) {
                                                  // ativa autoplay ao carregar
                                                  iframe.src = iframe.dataset.src + (iframe.dataset.src.includes("?") ? "&" : "?") + "autoplay=1";
                                                }
                                                if (img) img.style.display = "none";
                                                btn.style.display = "none";
                                              }}
                                            >
                                              {/* ícone play simples */}
                                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                                <path d="M8 5v14l11-7z" />
                                              </svg>
                                            </button>
                                          </>
                                        )}
                                      </>
                                    ) : (
                                      // arquivos de vídeo diretos: controls, playsInline para mobile, sem autoplay
                                      <video
                                        src={video.src}
                                        controls
                                        preload="metadata"
                                        playsInline
                                        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                                      />
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
