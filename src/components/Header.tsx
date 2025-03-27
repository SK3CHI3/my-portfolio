
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-md' : 'bg-dark'
    }`}>
      <div className="hero-container flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold text-white hover:opacity-90 transition-opacity"
        >
          <div className="w-5 h-5 bg-neon"></div>
          <span className="uppercase tracking-tight">TECHTINKER</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`nav-link text-white ${location.pathname === '/' ? 'after:w-full' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link text-white ${location.pathname === '/about' ? 'after:w-full' : ''}`}>About me</Link>
          <Link to="/projects" className={`nav-link text-white ${location.pathname === '/projects' ? 'after:w-full' : ''}`}>Projects</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden md:block bg-neon text-dark font-medium text-sm px-5 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Contact Me
          </Link>
          
          <button 
            className="block md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-dark z-40 transition-transform duration-300 pt-20 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center gap-6 p-6">
          <Link to="/" className="nav-link text-white text-lg">Home</Link>
          <Link to="/about" className="nav-link text-white text-lg">About me</Link>
          <Link to="/projects" className="nav-link text-white text-lg">Projects</Link>
          <Link 
            to="/contact" 
            className="bg-neon text-dark font-medium text-sm px-5 py-2 rounded-full mt-4"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
