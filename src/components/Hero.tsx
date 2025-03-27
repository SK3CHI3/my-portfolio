
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, {
      threshold: 0.1
    });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      setTimeout(() => {
        imageRef.current?.classList.add('opacity-100', 'translate-x-0');
        imageRef.current?.classList.remove('opacity-0', 'translate-x-10');
      }, 500);
    }
    
    if (statusRef.current) {
      setTimeout(() => {
        statusRef.current?.classList.add('opacity-100');
        statusRef.current?.classList.remove('opacity-0');
      }, 1000);
    }
  }, []);

  return <section className="relative pt-16 pb-24 overflow-hidden bg-dark text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-bl from-neon/20 to-transparent"></div>
      </div>
      <div className="hero-container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 py-[2px] my-0 px-0">
          <div ref={heroRef} className="lg:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
              CODING WITH <br />
              <span className="text-neon">🔥PASSION</span>, SECURING WITH <br />
              EXPERTISE
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              I'm Omollo Victor, a Fullstack Developer, Cloud Computing Specialist, and Cybersecurity Expert. 
              I build secure, scalable solutions that transform ideas into impactful digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/contact" className="btn-primary group">
                <Mail size={18} className="group-hover:translate-y-[-2px] transition-transform" />
                Let's Talk
              </Link>
              <a href="https://drive.google.com/file/d/1vNEcvOGXFVcHknbL8qY2PwHtsljQyDab/view?usp=sharing" className="btn-secondary group" target="_blank" rel="noopener noreferrer">
                <ArrowDown size={18} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </div>
            <div>
              <a href="mailto:omollovictorotieno58@gmail.com" className="inline-flex items-center text-gray-300 hover:text-neon transition-colors">
                <Mail size={16} className="mr-2" />
                omollovictorotieno58@gmail.com
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-full flex justify-center lg:justify-end items-center relative">
            <div ref={imageRef} className="relative transition-all duration-700 ease-out opacity-0 translate-x-10">
              <div className="absolute -inset-0.5 bg-neon rounded-2xl blur opacity-30 animate-pulse"></div>
              <img src="/lovable-uploads/ec0dd91b-a938-4361-a70c-f8363e326689.png" alt="Omollo Victor" className="relative w-full max-w-md rounded-2xl shadow-xl z-10" />
              
              {/* Status indicator */}
              <div 
                ref={statusRef}
                className="absolute -top-4 -right-4 bg-dark border-2 border-neon rounded-full py-2 px-4 shadow-lg z-20 opacity-0 transition-opacity duration-700"
              >
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-neon rounded-full mr-2 animate-pulse"></div>
                  <span className="text-neon font-medium text-sm">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
