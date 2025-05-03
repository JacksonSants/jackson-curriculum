import React from 'react';
import resumeData from '../data/resumeData';
import { MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Sobre mim</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">Conheça mais sobre mim, minha trajetória e o que faço.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Personal Info */}
          <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800">{resumeData.location}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${resumeData.email}`} className="text-gray-800 hover:text-blue-500 transition-colors">
                    {resumeData.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href={`tel:${resumeData.phone}`} className="text-gray-800 hover:text-blue-500 transition-colors">
                    {resumeData.phone}
                  </a>
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Social Media</h3>
            <div className="flex space-x-3">
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
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <React.Suspense fallback={<div className="w-5 h-5"></div>}>
                      <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </React.Suspense>
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* About Text */}
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quem eu sou?</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {resumeData.about}
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm passionate about creating intuitive, accessible, and performant web applications that provide exceptional user experiences. My approach combines technical expertise with a keen eye for design and usability.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Minhas experiências
              </a>
              <a 
                href="#skills" 
                className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors duration-300"
              >
                Minhas habilidades
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;