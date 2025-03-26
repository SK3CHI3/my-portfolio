
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="hero-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          LET'S WORK<br/>
          T<span className="inline-block relative">
            <span className="relative z-10">🌍</span>
            <span className="absolute top-0 left-0 w-full h-full bg-purple-500 rounded-full blur-lg opacity-40 -z-10"></span>
          </span>GETHER
        </h2>
        
        <div className="flex justify-center mt-8">
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full">
            <span className="flex items-center justify-center">
              <ArrowRight size={24} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
