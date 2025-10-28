import React from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import FeaturedPlans from '../components/home/FeaturedPlans';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Testimonials />
      <Benefits />
      <FeaturedPlans />
      <CallToAction />
    </div>
  );
};

export default Home;