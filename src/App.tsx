import React from 'react';
import Layout from './components/layout/Layout';
import PromoSection from './components/sections/PromoSection';
import CaptionSection from './components/sections/CaptionSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import CTASection from './components/sections/CTASection';
import Preloader from './components/ui/Preloader';
import CardList from './components/CardList/CardList';
const App: React.FC = () => {
  return (
    <>
      <Preloader />
      <Layout>
        <PromoSection />
        <CaptionSection />
        <AboutSection />
        <CardList />
        <FeaturesSection />
        <CTASection />
      </Layout>
      {/* <Modal /> */}
    </>
  );
};

export default App;