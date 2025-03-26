
import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="hero-container">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600">Follow Me:</h3>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="social-icon" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <div className="ml-6 h-[1px] flex-1 bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
