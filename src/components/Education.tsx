import React from 'react';
import resumeData from '../data/resumeData';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-indigo-600 font-medium">{edu.institution}</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;