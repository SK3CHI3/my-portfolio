
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 bg-dark text-white z-10">
      <div className="hero-container flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity"
        >
          <div className="w-5 h-5 bg-neon"></div>
          <span className="uppercase tracking-tight">Portfolio.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About me</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </nav>
        
        <Link 
          to="/contact" 
          className="bg-neon text-dark font-medium text-sm px-5 py-2 rounded-full hover:scale-105 transition-transform"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
