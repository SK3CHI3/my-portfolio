
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'scale-100');
          entry.target.classList.remove('opacity-0', 'scale-95');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-dark text-white">
      <div className="hero-container">
        <div 
          ref={ctaRef}
          className="transition-all duration-700 ease-out opacity-0 scale-95"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            LET'S BUILD SECURE<br/>
            S<span className="inline-block relative">
              <span className="relative z-10">🛠️</span>
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500 rounded-full blur-lg opacity-40 -z-10"></span>
            </span>LUTIONS TOGETHER
          </h2>
          
          <div className="flex justify-center mt-8">
            <Link 
              to="/contact" 
              className="btn-primary px-8 py-4 rounded-full group overflow-hidden relative"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="flex items-center justify-center relative z-10 group-hover:text-neon transition-colors duration-300">
                Contact Me <ArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
