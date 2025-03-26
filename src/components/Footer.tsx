
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-dark text-white">
      <div className="hero-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity"
            >
              <div className="w-5 h-5 bg-neon"></div>
              <span className="uppercase tracking-tight">Portfolio.</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Crafting memorable digital experiences through clean code and thoughtful design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hello@portfolio.com" className="text-gray-400 hover:text-white transition-colors">hello@portfolio.com</a></li>
                <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {year} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
