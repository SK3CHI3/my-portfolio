
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "A Power That Brings Good Things",
      category: "E-commerce",
      description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/1"
    },
    {
      id: 2,
      title: "Local To Global",
      category: "Travel",
      description: "A travel blog and booking platform for adventurers seeking unique experiences.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/2"
    },
    {
      id: 3,
      title: "Healthy Options",
      category: "Fitness",
      description: "A fitness application tracking workouts and providing nutritional guidance.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/3"
    },
    {
      id: 4,
      title: "Kim's Kitchen",
      category: "Restaurant",
      description: "A restaurant website with online ordering and reservation systems.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/4"
    },
    {
      id: 5,
      title: "Tech News Platform",
      category: "Blog",
      description: "A modern tech news platform with real-time updates and user comments.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/5"
    },
    {
      id: 6,
      title: "Portfolio Template",
      category: "Portfolio",
      description: "A customizable portfolio template for creative professionals.",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/6"
    }
  ];

  const categories = ['all', 'E-commerce', 'Travel', 'Fitness', 'Restaurant', 'Blog', 'Portfolio'];
  
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
              Explore my portfolio of projects that showcase my skills and expertise in web development. 
              Each project represents a unique challenge and demonstrates my approach to problem-solving.
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
                <Card key={project.id} className="overflow-hidden border-0 shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover"
                  />
                  <CardContent className="p-6">
                    <p className="text-gray-500 mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link 
                      to={project.link}
                      className="inline-flex items-center text-neon hover:underline"
                    >
                      View Details 
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
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
