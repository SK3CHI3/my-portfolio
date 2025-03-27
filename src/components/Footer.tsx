
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-dark text-white">
      <div className="hero-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity"
            >
              <div className="w-5 h-5 bg-neon"></div>
              <span className="uppercase tracking-tight">OMOLLO VICTOR</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Building secure, scalable solutions through innovative code and design thinking.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-neon" />
                  <a href="mailto:omollovictor@gmail.com" className="text-gray-400 hover:text-white transition-colors">omollovictor@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-neon" />
                  <a href="tel:+254714525667" className="text-gray-400 hover:text-white transition-colors">+254 714 525 667</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-neon" />
                  <span className="text-gray-400">Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {year} Omollo Victor. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/SK3CHI3" 
              className="text-gray-400 hover:text-neon transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/omollo-victor-otieno-28b942356" 
              className="text-gray-400 hover:text-neon transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/sk3chie" 
              className="text-gray-400 hover:text-neon transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
