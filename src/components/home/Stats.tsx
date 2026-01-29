import React, { useEffect, useRef, useState } from "react";
import { Shield, Clock, Award, Car } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Car, number: 3000, suffix: "+", label: "Veículos Protegidos", description: "Protegendo seu patrimônio" },
  { icon: Shield, number: 99.8, suffix: "%", label: "Taxa de Aprovação", description: "De satisfação dos nossos clientes" },
  { icon: Clock, number: 24, suffix: "h", label: "Atendimento", description: "Suporte disponível todos os dias" },
  { icon: Award, number: 4, suffix: "+", label: "Anos de Mercado", description: "Experiência e confiabilidade" },
];

const StatCard = ({ stat, delay }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  // IntersectionObserver → anima só quando aparece
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1200;
    const increment = stat.number / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= stat.number) {
        start = stat.number;
        clearInterval(counter);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(counter);
  }, [visible, stat.number]);

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all"
      >
        <Icon className="h-10 w-10 text-primary group-hover:text-blue-700 transition-colors" />
      </motion.div>

      {/* Number */}
      <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-1">
        {stat.number % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
        {stat.suffix}
      </h3>

      {/* Label */}
      <p className="font-semibold text-gray-800">{stat.label}</p>

      {/* Description */}
      <p className="text-sm text-gray-600 max-w-xs mx-auto">
        {stat.description}
      </p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-y border-primary/20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
