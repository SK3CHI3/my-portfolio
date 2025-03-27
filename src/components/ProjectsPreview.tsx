
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const ProjectsPreview: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    if (titleRef.current) observer.observe(titleRef.current);
    
    projectRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      
      projectRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "SecureCloud Deployment",
      category: "Cloud Computing & Security",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/1"
    },
    {
      id: 2,
      title: "FullStack E-Commerce Platform",
      category: "Web Development",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/2"
    },
    {
      id: 3,
      title: "Kubernetes Microservices",
      category: "DevOps & Cloud",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/3"
    },
    {
      id: 4,
      title: "Penetration Testing Framework",
      category: "Cybersecurity",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/projects/4"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="hero-container">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-700 ease-out opacity-0 translate-y-10"
        >
          HERE'S A GLIMPSE OF<br/>SOME EXCITING 🏆PROJECTS<br/>I'VE DONE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`transition-all duration-700 ease-out opacity-0 translate-y-10 delay-${index * 100}`}
            >
              <Card className="overflow-hidden border-0 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                    className="inline-flex items-center text-neon hover:underline group"
                  >
                    View Details 
                    <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/projects" 
            className="btn-primary px-8 hover:shadow-lg hover:shadow-neon/20 transition-shadow"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
