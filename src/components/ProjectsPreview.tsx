
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const ProjectsPreview: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "A Power That Brings Good Things",
      category: "E-commerce Website",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/1"
    },
    {
      id: 2,
      title: "Local To Global",
      category: "Travel & Lifestyle",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/2"
    },
    {
      id: 3,
      title: "Healthy Options",
      category: "Fitness Application",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/3"
    },
    {
      id: 4,
      title: "Kim's Kitchen",
      category: "Restaurant Website",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/4"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="hero-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          HERE'S A GLIMPSE OF<br/>SOME EXCITING 🏆PROJECTS<br/>I'VE DONE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-lg rounded-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-60 object-cover"
              />
              <CardContent className="p-6">
                <p className="text-gray-500 mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
        
        <div className="flex justify-center">
          <Link 
            to="/projects" 
            className="btn-primary px-8"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
