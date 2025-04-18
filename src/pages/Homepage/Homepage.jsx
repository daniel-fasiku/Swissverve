import React from 'react';
import HeroSection from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import RecoveryServicesSection from '../../components/RecoveryServicesSection';
import TeamSection from '../../components/TeamSection';
import TestimonialSection from '../../components/TestimonialSection';

const Homepage = () => {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <RecoveryServicesSection />
      <TeamSection />
      <TestimonialSection />
    </div>
  );
};

export default Homepage;
