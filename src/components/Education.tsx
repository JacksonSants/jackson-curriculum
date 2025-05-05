import React, { useState } from 'react';
import resumeData from '../data/resumeData';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const allItems = [
    ...resumeData.education.map((edu) => ({ ...edu, type: 'education' })),
    ...resumeData.certifications.map((cer) => ({ ...cer, type: 'certification' })),
  ];

  const itemsToShow = showAll ? allItems : allItems.slice(0, 6);

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Educação</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Minha formação acadêmica e certificações profissionais
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {itemsToShow.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.type === 'education' ? item.degree : item.title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {item.type === 'education' ? item.institution : item.platform}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {item.type === 'education'
                    ? item.period
                    : `Concluído em ${item.completionDate}`}
                </span>
              </div>

              {item.type === 'certification' && (
                <div className="text-gray-600 text-sm mt-1">
                  Carga horária: {item.workload}
                </div>
              )}
            </div>
          ))}
        </div>

        {allItems.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              {showAll ? 'Ver menos' : 'Ver mais'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
