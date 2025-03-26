
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Code, Rocket, Palette, Award } from 'lucide-react';
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
                  Hi there! I'm Moskur, a passionate web developer with over 3 years of experience
                  in building modern, responsive, and user-friendly websites and applications.
                </p>
                <p className="text-gray-300 mb-6">
                  I specialize in both <span className="text-purple-400 font-bold">frontend</span> and 
                  <span className="text-purple-400 font-bold"> backend</span> development, with a strong 
                  foundation in React, TypeScript, Node.js, and database management.
                </p>
                <p className="text-gray-300 mb-8">
                  My journey in web development began with a curiosity about how websites work, and it has 
                  evolved into a passion for creating digital experiences that are not only functional but 
                  also aesthetically pleasing and intuitive.
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
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-300">
                          Building responsive websites with modern technologies like React, TypeScript, and Tailwind CSS.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-neon text-dark p-3 rounded-full">
                        <Rocket size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Backend Solutions</h3>
                        <p className="text-gray-300">
                          Creating robust backend systems with Node.js, Express, MongoDB, and Firebase.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-neon text-dark p-3 rounded-full">
                        <Palette size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p className="text-gray-300">
                          Designing intuitive user interfaces with a focus on user experience.
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
                    <p className="text-gray-600 mb-1">University of Technology</p>
                    <p className="text-gray-500">2017 - 2021</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Web Development Bootcamp</h4>
                    <p className="text-gray-600 mb-1">CodeCamp Academy</p>
                    <p className="text-gray-500">2020</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-1">Senior Frontend Developer</h4>
                    <p className="text-gray-600 mb-1">TechSolutions Inc.</p>
                    <p className="text-gray-500">2022 - Present</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Web Developer</h4>
                    <p className="text-gray-600 mb-1">Creative Agency</p>
                    <p className="text-gray-500">2020 - 2022</p>
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
                  <li>Firebase</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-center">Tools</h3>
                <ul className="space-y-2 text-center">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Webpack</li>
                  <li>Jest</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-center">Other</h3>
                <ul className="space-y-2 text-center">
                  <li>Responsive Design</li>
                  <li>SEO Optimization</li>
                  <li>Performance Tuning</li>
                  <li>CI/CD</li>
                  <li>Agile/Scrum</li>
                  <li>UI/UX Principles</li>
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
