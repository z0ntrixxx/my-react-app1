import React from 'react';
import PromoSection from '../components/sections/PromoSection';
import CaptionSection from '../components/sections/CaptionSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import CTASection from '../components/sections/CTASection';
import CardList from '../components/CardList/CardList';
import { MAX_CARDS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <PromoSection />
      <CaptionSection />
      <AboutSection />
      <CardList limit={MAX_CARDS} />
      <FeaturesSection />
      <CTASection />
    </>
  );
};

export default HomePage;