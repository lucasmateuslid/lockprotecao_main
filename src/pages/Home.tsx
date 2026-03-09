import React, { Suspense, useEffect, useRef, useState } from 'react';
import Hero from '../components/home/Hero';

// Lazy load das seções abaixo da dobra
const Stats = React.lazy(() => import('../components/home/Stats'));
const Testimonials = React.lazy(() => import('../components/home/Testimonials'));
const Benefits = React.lazy(() => import('../components/home/Benefits'));
const FeaturedPlans = React.lazy(() => import('../components/home/FeaturedPlans'));
const Emergency = React.lazy(() => import('../components/home/Emergency'));
const CallToAction = React.lazy(() => import('../components/home/CallToAction'));

type LazySectionProps = {
  children: React.ReactNode;
  placeholderHeight?: string;
};

const LazySection: React.FC<LazySectionProps> = ({ children, placeholderHeight = 'min-h-32' }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px 0px' }
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={markerRef}>
      {shouldRender ? <Suspense fallback={<div className={placeholderHeight} />}>{children}</Suspense> : <div className={placeholderHeight} />}
    </section>
  );
};


const Home: React.FC = () => {
  return (
    <div>
      {/* Hero acima da dobra: carregamento imediato */}
      <Hero />

      {/* Seções abaixo da dobra: lazy load para reduzir JS inicial */}
      <LazySection placeholderHeight="min-h-[240px]">
        <Stats />
      </LazySection>

      <LazySection placeholderHeight="min-h-[420px]">
        <Benefits />
      </LazySection>

      <LazySection placeholderHeight="min-h-[420px]">
        <FeaturedPlans />
      </LazySection>

      <LazySection placeholderHeight="min-h-[320px]">
        <Testimonials />
      </LazySection>
      
      <LazySection placeholderHeight="min-h-[300px]">
        <Emergency />
      </LazySection>

      <LazySection placeholderHeight="min-h-[360px]">
        <CallToAction />
      </LazySection>
    </div>
  );
};

export default Home;
