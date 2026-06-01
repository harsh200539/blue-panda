import React from 'react';
import BluePandaHome from './BluePandaHome';
import Features from './Features';
import { ServicesSection } from './ServiceSection';
import { PromiseSection } from './PromiseSection';
import { SocialMediaSection } from './SocialMediaSection';
import { StatsSection } from './StatsSection';
import { SolutionsSection } from './SolutionsSection';

import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

const HomePage = () => {
  return (
    <>
      <BluePandaHome />
      <Features />
      <ServicesSection />
      <PromiseSection />
      <SocialMediaSection />
      <StatsSection />
      <SolutionsSection />

      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
