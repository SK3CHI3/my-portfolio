
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
            <p className="text-gray-600 mb-4">
              with <span className="text-neon font-bold">3 YEARS OF EXPERIENCE</span> in the field. I thrive on turning imaginative ideas into digital realities, constantly seeking innovative ways to blend design and technology. I possess a strong foundation in <span className="text-purple-600 font-bold">FRONT-END</span> and <span className="text-purple-600 font-bold">BACK-END</span> development, as well as a keen eye for responsive design and user-centered interfaces.
            </p>
            <Link 
              to="/about" 
              className="text-gray-900 font-medium hover:text-neon transition-colors"
            >
              Learn more about me →
            </Link>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-center">
              I SPECIALIZE IN A<br/>RANGE OF <span className="text-neon">🔥SKILLS</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-neon hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-dark text-center">Frontend Development</h3>
                <p className="text-dark text-center">React, TypeScript, Tailwind CSS, Next.js</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-center">Backend</h3>
                <p className="text-gray-600 text-center">Node.js, Express, MongoDB, Firebase</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-center">UI/UX</h3>
                <p className="text-gray-600 text-center">Figma, Adobe XD, Responsive Design</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-center">Other</h3>
                <p className="text-gray-600 text-center">Git, CI/CD, Jest, Testing Library</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
