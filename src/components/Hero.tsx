
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-dark text-white">
      <div className="hero-container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div 
            ref={heroRef}
            className="lg:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-10"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
              CODING WITH <br/>
              <span className="text-neon">🔥PASSION</span>, CREATING <br/>
              WITH PURPOSE
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              A skilled and passionate web developer dedicated to transforming ideas into 
              digital realities, constantly seeking innovative ways to blend design and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Let's Talk
              </Link>
              <button className="btn-secondary">
                <ArrowDown size={18} />
                Download CV
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-full flex justify-center lg:justify-end items-center">
            <div className="relative">
              <img
                src="/lovable-uploads/a60a9c25-a909-4a80-9f80-2601c9644be6.png"
                alt="Profile"
                className="w-full max-w-md rounded-2xl bg-purple-400 shadow-xl animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
