
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const fullText1 = 'CODING WITH';
  const fullText2 = '🔥PASSION, SECURING WITH EXPERTISE';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Animation for hero section entrance
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

  // Image and status animation
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

  // Typing animation
  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    
    // Type the first line
    const typingInterval1 = setInterval(() => {
      if (index1 <= fullText1.length) {
        setDisplayText1(fullText1.slice(0, index1));
        index1++;
      } else {
        clearInterval(typingInterval1);
        
        // Start typing the second line after the first is complete
        const typingInterval2 = setInterval(() => {
          if (index2 <= fullText2.length) {
            setDisplayText2(fullText2.slice(0, index2));
            index2++;
          } else {
            clearInterval(typingInterval2);
            setIsTypingComplete(true);
          }
        }, 50);
      }
    }, 100);
    
    return () => {
      clearInterval(typingInterval1);
    };
  }, []);

  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-dark text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-bl from-neon/20 to-transparent"></div>
      </div>
      <div className="hero-container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 py-[2px] my-0 px-0">
          <div ref={heroRef} className="lg:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
              <span className="block min-h-[4rem]">{displayText1}</span>
              <span className={`text-neon block min-h-[4rem] ${isTypingComplete ? '' : 'after:content-["_"] after:animate-pulse'}`}>{displayText2}</span>
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
            <div ref={imageRef} className="relative z-10 transition-all duration-700 ease-out opacity-0 translate-x-10">
              <div className="profile-card">
                <img 
                  src="/lovable-uploads/ec0dd91b-a938-4361-a70c-f8363e326689.png" 
                  alt="Omollo Victor" 
                  className="w-full max-w-md rounded-2xl shadow-xl z-10" 
                />
                
                {/* Status indicator */}
                <div 
                  ref={statusRef}
                  className="absolute -top-4 -right-4 bg-dark/80 backdrop-blur-md border-2 border-neon rounded-full py-2 px-4 shadow-lg z-20 opacity-0 transition-opacity duration-700"
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
      </div>
    </section>
  );
};

export default Hero;
