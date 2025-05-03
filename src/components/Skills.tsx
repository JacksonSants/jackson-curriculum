import React from 'react';
import resumeData from '../data/resumeData';

// Group skills by category
const groupedSkills = resumeData.skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof resumeData.skills>);

// Category display names and colors
const categories = {
  frontend: { name: 'Frontend', color: 'bg-blue-500', textColor: 'text-blue-700' },
  backend: { name: 'Backend', color: 'bg-green-500', textColor: 'text-green-700' },
  devops: { name: 'DevOps', color: 'bg-purple-500', textColor: 'text-purple-700' },
  other: { name: 'Other', color: 'bg-amber-500', textColor: 'text-amber-700' }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My professional toolkit and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <span className={`w-3 h-3 rounded-full ${categories[category as keyof typeof categories].color} mr-2`}></span>
                <h3 className={`text-xl font-bold ${categories[category as keyof typeof categories].textColor}`}>
                  {categories[category as keyof typeof categories].name}
                </h3>
              </div>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm">
                        {['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][skill.level - 1]}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${categories[category as keyof typeof categories].color}`}
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill badges */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">All Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {resumeData.skills.map((skill, index) => {
              const category = skill.category as keyof typeof categories;
              return (
                <div 
                  key={index}
                  className={`
                    px-4 py-2 rounded-full border-2 transition-all duration-300
                    ${skill.level >= 4 ? `${categories[category].textColor} border-current` : 'text-gray-600 border-gray-200'}
                    hover:border-current hover:scale-105
                  `}
                >
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;