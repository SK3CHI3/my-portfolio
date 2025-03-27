
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Code, Cloud, Shield, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-dark text-white">
          <div className="hero-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <p className="text-gray-300 mb-6">
                  Hi there! I'm Omollo Victor, a passionate technology enthusiast with expertise in
                  Fullstack Development, Cloud Computing, and Cybersecurity.
                </p>
                <p className="text-gray-300 mb-6">
                  I specialize in building <span className="text-purple-400 font-bold">secure</span> and 
                  <span className="text-purple-400 font-bold"> scalable</span> solutions, with a strong 
                  foundation in React, Node.js, AWS, and modern security practices.
                </p>
                <p className="text-gray-300 mb-8">
                  My journey in tech began with a curiosity about how systems work and how to make them more 
                  secure. This curiosity has evolved into a passion for creating digital solutions that are 
                  not only functional and user-friendly but also robust and secure against modern threats.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Let's Connect <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">My Expertise</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-neon text-dark p-3 rounded-full">
                        <Code size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Fullstack Development</h3>
                        <p className="text-gray-300">
                          Building responsive, modern web applications with React, TypeScript, Node.js, and database technologies.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-neon text-dark p-3 rounded-full">
                        <Cloud size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
                        <p className="text-gray-300">
                          Designing and implementing cloud infrastructure on AWS and Azure, with expertise in containerization and orchestration.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-neon text-dark p-3 rounded-full">
                        <Shield size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                        <p className="text-gray-300">
                          Implementing security best practices, penetration testing, and ensuring compliance with security standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="hero-container">
            <h2 className="text-3xl font-bold mb-10 text-center">Education & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-1">BSc in Computer Science</h4>
                    <p className="text-gray-600 mb-1">University of Nairobi</p>
                    <p className="text-gray-500">2019 - 2023</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">AWS Certified Solutions Architect</h4>
                    <p className="text-gray-600 mb-1">Amazon Web Services</p>
                    <p className="text-gray-500">2022</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-1">Fullstack Developer</h4>
                    <p className="text-gray-600 mb-1">Tech Solutions Kenya</p>
                    <p className="text-gray-500">2022 - Present</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Cloud Security Specialist</h4>
                    <p className="text-gray-600 mb-1">Cybersafe Solutions</p>
                    <p className="text-gray-500">2021 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="hero-container">
            <h2 className="text-3xl font-bold mb-10 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-center">Frontend</h3>
                <ul className="space-y-2 text-center">
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-center">Backend</h3>
                <ul className="space-y-2 text-center">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-center">Cloud & DevOps</h3>
                <ul className="space-y-2 text-center">
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Terraform</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-center">Security</h3>
                <ul className="space-y-2 text-center">
                  <li>Penetration Testing</li>
                  <li>Network Security</li>
                  <li>OWASP Top 10</li>
                  <li>Security Auditing</li>
                  <li>Threat Modeling</li>
                  <li>Incident Response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
