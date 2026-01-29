import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Mateus",
    location: "Natal - RN",
    rating: 5,
    text: "Estou junto com a Lock há mais de 2 anos e só tenho uma coisa a dizer: melhor proteção veicular do RN disparada!",
    plan: "Plano Premium",
  },
  {
    name: "Yanna Farias",
    location: "Natal - RN",
    rating: 5,
    text: "Atendimento impecável desde o primeiro contato. Tiraram todas as minhas dúvidas com muita atenção.",
    plan: "Plano Diamante",
  },
  {
    name: "Edson Gleyson",
    location: "Natal - RN",
    rating: 5,
    text: "Precisei de guincho logo no primeiro mês e fui atendido rapidamente. Empresa séria e eficiente.",
    plan: "Plano Prata",
  },
  {
    name: "LUA",
    location: "Natal - RN",
    rating: 5,
    text: "Informações claras, atendimento transparente e muita eficiência. Recomendo sem dúvidas.",
    plan: "Plano Premium",
  },
  {
    name: "Ivan",
    location: "Natal - RN",
    rating: 5,
    text: "Fui tratado com respeito e profissionalismo do início ao fim. Atendimento diferenciado.",
    plan: "Plano Prata",
  },
];

const stats = [
  { value: "4.8/5", label: "Avaliação Média no Google" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "300+", label: "Depoimentos Positivos" },
];

const videos = [
  "https://www.youtube.com/embed/zKJfYTR3UNQ",
  "https://www.youtube.com/embed/cdiggMTh8CA",
  "https://www.youtube.com/embed/cdiggMTh8CA",
  "https://www.youtube.com/embed/zKJfYTR3UNQ",
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Confiança construída <span className="text-accent">todos os dias</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Avaliações reais de associados que confiam e recomendam a Lock Proteção Veicular.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-3xl border border-gray-200 shadow-xl p-10 text-center bg-white">

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Text */}
            <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-8">
              “{testimonials[current].text}”
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-semibold text-lg text-primary">
                {testimonials[current].name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[current].location} • {testimonials[current].plan}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="p-3 rounded-full border hover:bg-gray-50"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() =>
                  setCurrent((prev) => (prev + 1) % testimonials.length)
                }
                className="p-3 rounded-full border hover:bg-gray-50"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto mt-16 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-primary mb-1">
                {item.value}
              </p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Videos (VERTICAL 9:16) */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-primary mb-10">
            Depoimentos em vídeo
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {videos.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg border bg-black"
                style={{ paddingTop: "177.78%" }} // 9:16 vertical
              >
                <iframe
                  src={src}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Depoimento em vídeo ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
