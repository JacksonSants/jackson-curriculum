import React from 'react';
import resumeData from '../data/resumeData';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My professional journey and the valuable experiences I've gained along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {resumeData.experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative flex flex-col md:flex-row mb-16 last:mb-0"
            >
              {/* Timeline line and dot */}
              <div className="hidden md:block absolute top-0 bottom-0 left-[7.5rem] w-0.5 bg-blue-200">
                {index !== resumeData.experiences.length - 1 && (
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[5px] top-8 shadow-md"></div>
                )}
              </div>
              
              {/* Date block - visible only on md+ screens */}
              <div className="hidden md:block w-60 pr-8 flex-shrink-0 py-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-gray-600 font-medium">{exp.period}</span>
                </div>
              </div>
              
              {/* Experience content */}
              <div className="bg-white rounded-lg shadow-md p-6 md:ml-8 relative flex-grow">
                {/* Date block - visible only on mobile */}
                <div className="flex items-center mb-4 md:hidden">
                  <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-gray-600 text-sm">{exp.period}</span>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Briefcase className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-5">{exp.description}</p>
                
                <h4 className="text-gray-900 font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;