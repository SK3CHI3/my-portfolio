
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="hero-container">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div 
            ref={aboutRef}
            className="md:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-10"
          >
            <span className="text-neon text-2xl font-semibold">👋</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Hello! I'm <span className="relative inline-block">
                <span className="relative z-10">Omollo Victor</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-neon/30 -z-10"></span>
              </span>, a versatile tech professional
            </h2>
            <p className="text-gray-600 mb-4">
              with <span className="text-neon font-bold">EXPERTISE</span> in multiple domains of technology. I specialize in <span className="text-purple-600 font-bold">FULLSTACK DEVELOPMENT</span>, <span className="text-purple-600 font-bold">CLOUD COMPUTING</span>, and <span className="text-purple-600 font-bold">CYBERSECURITY</span>. My passion lies in building secure, scalable solutions that leverage cutting-edge technologies to solve real-world problems.
            </p>
            <Link 
              to="/about" 
              className="text-gray-900 font-medium hover:text-neon transition-colors"
            >
              Learn more about me →
            </Link>
          </div>
          <div 
            ref={skillsRef}
            className="md:w-1/2 transition-all duration-700 delay-300 ease-out opacity-0 translate-y-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">
              I SPECIALIZE IN A<br/>RANGE OF <span className="text-neon">🔥SKILLS</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-neon hover:shadow-md transition-shadow hover:scale-105 duration-300">
                <h3 className="text-xl font-semibold mb-2 text-dark text-center">Fullstack Development</h3>
                <p className="text-dark text-center">React, Node.js, TypeScript, MongoDB, Express</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-100 hover:shadow-md transition-shadow hover:scale-105 duration-300">
                <h3 className="text-xl font-semibold mb-2 text-center">Cloud Computing</h3>
                <p className="text-gray-600 text-center">AWS, Azure, Docker, Kubernetes, CI/CD</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-100 hover:shadow-md transition-shadow hover:scale-105 duration-300">
                <h3 className="text-xl font-semibold mb-2 text-center">Cybersecurity</h3>
                <p className="text-gray-600 text-center">Penetration Testing, Network Security, SIEM</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-100 hover:shadow-md transition-shadow hover:scale-105 duration-300">
                <h3 className="text-xl font-semibold mb-2 text-center">DevOps</h3>
                <p className="text-gray-600 text-center">Jenkins, GitHub Actions, Terraform, Ansible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
