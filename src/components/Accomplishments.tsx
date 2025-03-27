
import React, { useEffect, useRef } from 'react';
import { PlusCircle } from 'lucide-react';

const Accomplishments: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) observer.observe(titleRef.current);
    
    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="py-16 bg-dark text-white">
      <div className="hero-container">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ease-out opacity-0 translate-y-10"
        >
          I TAKE <span className="text-neon">🔥PRIDE</span> IN MY<br/>ACCOMPLISHMENTS
        </h2>
        
        <div className="space-y-12">
          <div 
            ref={el => itemRefs.current[0] = el}
            className="flex items-start gap-6 transition-all duration-700 ease-out opacity-0 translate-y-10 delay-100"
          >
            <div className="text-neon mt-1"><PlusCircle size={24} /></div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Led the development of a secure cloud infrastructure that reduced operational costs by 35% while improving system reliability and security posture.
              </p>
            </div>
          </div>
          
          <div 
            ref={el => itemRefs.current[1] = el}
            className="flex items-start gap-6 transition-all duration-700 ease-out opacity-0 translate-y-10 delay-200"
          >
            <div className="text-neon mt-1"><PlusCircle size={24} /></div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Developed and implemented a comprehensive cybersecurity framework that successfully prevented multiple potential data breaches and earned industry recognition.
              </p>
            </div>
          </div>
          
          <div 
            ref={el => itemRefs.current[2] = el}
            className="flex items-start gap-6 transition-all duration-700 ease-out opacity-0 translate-y-10 delay-300"
          >
            <div className="text-neon mt-1"><PlusCircle size={24} /></div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Created a fullstack application that streamlined business workflows, resulting in a 40% increase in productivity and significant improvement in user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
