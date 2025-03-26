
import React from 'react';
import { PlusCircle } from 'lucide-react';

const Accomplishments: React.FC = () => {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="hero-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          I TAKE <span className="text-neon">🔥PRIDE</span> IN MY<br/>ACCOMPLISHMENTS
        </h2>
        
        <div className="space-y-12">
          <div className="flex items-start gap-6">
            <div className="text-neon mt-1"><PlusCircle size={24} /></div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Recognized with the "Innovative Dev Award" for an app that helped small business vendors improve a 30% increase in sales.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="text-neon mt-1"><PlusCircle size={24} /></div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Contributed to Web Design 2023 by optimizing webpage loading speed resulting in a 40% decrease in page load times.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="text-neon mt-1"><PlusCircle size={24} /></div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Published a guest article on Medium discussing the importance of responsive design in modern web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
