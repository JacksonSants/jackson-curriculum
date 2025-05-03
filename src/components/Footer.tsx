import React from 'react';
import resumeData from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              {resumeData.name.split(' ')[0]}
              <span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400 mt-2">{resumeData.title}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {resumeData.socialLinks.map((link, index) => {
                // Import the icon dynamically
                const IconComponent = React.lazy(() => import('lucide-react').then(mod => ({ 
                  default: mod[link.icon as keyof typeof mod] 
                })));

                return (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <React.Suspense fallback={<div className="w-4 h-4"></div>}>
                      <IconComponent className="w-4 h-4" />
                    </React.Suspense>
                  </a>
                );
              })}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;