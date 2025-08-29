import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { Icon } from './icons';

export const ProjectsSection: React.FC = () => {
  const { portfolioData } = usePortfolio();

  if (!portfolioData.projects || portfolioData.projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-20 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Projetos de Destaque</h2>
        <div className="max-w-4xl mx-auto">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-lg shadow-xl overflow-hidden md:flex transform transition-transform duration-300 hover:-translate-y-2">
              <div className="md:w-1/2">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-cyan-900 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-slate-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-slate-600 transition-colors"
                  >
                    <Icon name="FaGithub" />
                    Ver no GitHub
                  </a>
                  {/* Future Case Study button */}
                  {/* <button className="flex items-center gap-2 bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors">
                    <Icon name="FaExternalLinkAlt" />
                    Case Study
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
