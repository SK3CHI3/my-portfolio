import React from 'react';
import { Github, Linkedin, Twitter, Phone } from 'lucide-react';
const SocialLinks: React.FC = () => {
  return <section className="bg-white py-0">
      <div className="hero-container">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600">Connect With Me:</h3>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/SK3CHI3" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/omollo-victor-otieno-28b942356" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
          </a>
          <a href="https://x.com/sk3chie" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <Twitter size={18} />
          </a>
          <a href="tel:+254714525667" className="social-icon" aria-label="Phone" target="_blank" rel="noopener noreferrer">
            <Phone size={18} />
          </a>
          <div className="ml-6 h-[1px] flex-1 bg-gray-200"></div>
        </div>
      </div>
    </section>;
};
export default SocialLinks;