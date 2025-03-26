
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <div className="hero-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          <p className="text-gray-600 mb-6">
            This page is under construction. Come back soon to learn more about me!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
