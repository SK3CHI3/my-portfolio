
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';
import AboutPreview from '../components/AboutPreview';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialLinks />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
