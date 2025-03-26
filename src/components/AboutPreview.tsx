
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="hero-container">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <span className="text-neon text-2xl font-semibold">👋</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Hello! I'm <span className="relative inline-block">
                <span className="relative z-10">Moskur</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-neon/30 -z-10"></span>
              </span>, a creative and driven web developer
            </h2>
            <p className="text-gray-600 mb-8">
              Passionate about creating beautiful, functional websites and applications 
              that deliver exceptional user experiences. I specialize in modern frontend 
              technologies like React, TypeScript, and Tailwind CSS.
            </p>
            <Link 
              to="/about" 
              className="text-gray-900 font-medium hover:text-neon transition-colors"
            >
              Learn more about me →
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">React, TypeScript, Tailwind CSS, Next.js</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Express, MongoDB, Firebase</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
              <p className="text-gray-600">Figma, Adobe XD, Responsive Design</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Other</h3>
              <p className="text-gray-600">Git, CI/CD, Jest, Testing Library</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
