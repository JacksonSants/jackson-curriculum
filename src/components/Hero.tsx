import React from 'react';
import resumeData from '../data/resumeData';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center" id="hero">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          opacity: 0.9
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <p className="text-blue-300 font-medium mb-2 tracking-wider">Olá, meu nome é</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {resumeData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 font-medium mb-6">
            {resumeData.title}
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-lg">
            {resumeData.about.substring(0, 150)}...
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#" 
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
        
        {/* Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={resumeData.photo} 
                alt={resumeData.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
              <p className="font-medium text-blue-900 whitespace-nowrap">
                {resumeData.location}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;