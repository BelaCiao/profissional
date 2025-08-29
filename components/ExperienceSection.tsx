import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';

export const ExperienceSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  
  return (
    <section id="experience" className="py-20 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Experiência Profissional</h2>
        <div className="relative border-l-2 border-slate-700 max-w-3xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="mb-10 ml-8">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] mt-1.5 border-2 border-slate-900"></div>
              
              <p className="text-sm font-semibold text-cyan-400 mb-1">{exp.period}</p>
              <h3 className="text-xl font-bold text-white">
                {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
              </h3>
              <p className="text-slate-400 mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
