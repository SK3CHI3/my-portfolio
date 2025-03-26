
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';
import AboutPreview from '../components/AboutPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import Accomplishments from '../components/Accomplishments';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
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
        <ProjectsPreview />
        <Accomplishments />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
