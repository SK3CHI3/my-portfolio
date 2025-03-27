
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Universal Resource Hub",
      category: "Web Development",
      description: "A comprehensive platform providing educational resources and learning materials for students and educators.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      liveLink: "https://universal-resource-hub.netlify.app",
      githubLink: "https://github.com/SK3CHI3/universal-resource-hub"
    },
    {
      id: 2,
      title: "Kenyan Recipe Generator",
      category: "Web Development",
      description: "An application that generates random Kenyan recipes with ingredients and preparation instructions.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      liveLink: "https://kenyan-recipe-generator.netlify.app",
      githubLink: "https://github.com/SK3CHI3/random-kenyan-recipe-generator"
    },
    {
      id: 3,
      title: "Cloud Security Framework",
      category: "Cybersecurity",
      description: "A comprehensive security framework for cloud-based applications, focusing on AWS security best practices.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      liveLink: "#",
      githubLink: "https://github.com/SK3CHI3"
    },
    {
      id: 4,
      title: "DevOps Automation Pipeline",
      category: "Cloud Computing",
      description: "A CI/CD pipeline implementation using GitHub Actions and AWS for automated testing and deployment.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      liveLink: "#",
      githubLink: "https://github.com/SK3CHI3"
    },
    {
      id: 5,
      title: "Network Security Monitor",
      category: "Cybersecurity",
      description: "A tool for monitoring network traffic and detecting potential security threats in real-time.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      liveLink: "#",
      githubLink: "https://github.com/SK3CHI3"
    },
    {
      id: 6,
      title: "Serverless API Framework",
      category: "Cloud Computing",
      description: "A serverless framework for building scalable APIs using AWS Lambda and API Gateway.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      liveLink: "#",
      githubLink: "https://github.com/SK3CHI3"
    }
  ];

  const categories = ['all', 'Web Development', 'Cybersecurity', 'Cloud Computing'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-dark text-white">
          <div className="hero-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h1>
            <p className="text-gray-300 max-w-3xl mb-6">
              Explore my portfolio of projects showcasing my skills in Fullstack Development, Cloud Computing, and Cybersecurity.
              Each project represents unique challenges and demonstrates my approach to building secure, scalable solutions.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category 
                      ? 'bg-neon text-dark' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="hero-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-0 shadow-lg rounded-xl hover:shadow-xl transition-shadow hover:scale-105 duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover"
                  />
                  <CardContent className="p-6">
                    <p className="text-gray-500 mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.liveLink}
                        className="inline-flex items-center text-neon hover:underline group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </a>
                      <a 
                        href={project.githubLink}
                        className="inline-flex items-center text-gray-700 hover:underline group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
