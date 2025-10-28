import React, { Suspense } from 'react';
import Hero from '../components/home/Hero';

// Lazy load das seções abaixo da dobra
const Stats = React.lazy(() => import('../components/home/Stats'));
const Testimonials = React.lazy(() => import('../components/home/Testimonials'));
const Benefits = React.lazy(() => import('../components/home/Benefits'));
const FeaturedPlans = React.lazy(() => import('../components/home/FeaturedPlans'));
const CallToAction = React.lazy(() => import('../components/home/CallToAction'));

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero acima da dobra: carregamento imediato */}
      <Hero />

      {/* Seções abaixo da dobra: lazy load para reduzir JS inicial */}
      <Suspense fallback={<div className="min-h-32"></div>}>
        <Stats />
      </Suspense>

      <Suspense fallback={<div className="min-h-32"></div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="min-h-32"></div>}>
        <Benefits />
      </Suspense>

      <Suspense fallback={<div className="min-h-32"></div>}>
        <FeaturedPlans />
      </Suspense>

      <Suspense fallback={<div className="min-h-32"></div>}>
        <CallToAction />
      </Suspense>
    </div>
  );
};

export default Home;
