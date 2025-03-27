import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Let's Talk
              </Link>
              <a href="https://drive.google.com/uc?export=download&id=YOURFILEID" className="btn-secondary group" target="_blank" rel="noopener noreferrer">
                <ArrowDown size={18} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-full flex justify-center lg:justify-end items-center">
            <div ref={imageRef} className="relative transition-all duration-700 ease-out opacity-0 translate-x-10">
              <div className="absolute -inset-0.5 bg-neon rounded-2xl blur opacity-30 animate-pulse"></div>
              <img src="/lovable-uploads/a60a9c25-a909-4a80-9f80-2601c9644be6.png" alt="Omollo Victor" className="relative w-full max-w-md rounded-2xl bg-purple-400 shadow-xl z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;