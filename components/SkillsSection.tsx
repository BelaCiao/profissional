import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { Icon } from './icons';

export const SkillsSection: React.FC = () => {
  const { portfolioData } = usePortfolio();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-16">Habilidades e Competências</h2>
        <div className="max-w-6xl mx-auto space-y-12">
          {portfolioData.skills.map(category => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-white text-center mb-8">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map(skill => (
                  <div 
                    key={skill.name} 
                    className="bg-slate-800 py-2 px-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-cyan-800 hover:scale-105 cursor-pointer shadow-md"
                  >
                    <Icon name={skill.icon} className="w-5 h-5 text-cyan-400" />
                    <span className="font-medium text-white text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
