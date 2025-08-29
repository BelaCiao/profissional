
import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { Icon } from './icons';

const Section: React.FC<{ title: string; children: React.ReactNode, id: string }> = ({ title, children, id }) => (
  <section id={id} className="py-16 sm:py-20">
    <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">{title}</h2>
    {children}
  </section>
);

const AboutSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <img src={portfolioData.avatarUrl} alt={portfolioData.name} className="w-48 h-48 sm:w-60 sm:h-60 rounded-full object-cover border-4 border-cyan-500 shadow-lg" />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            {portfolioData.name}
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-400 mt-2">{portfolioData.title}</p>
          
          <div className="mt-6 space-y-2 text-slate-400">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Icon name="FaMapMarkerAlt" className="w-5 h-5 text-cyan-400" />
              <span>{portfolioData.contact.location}</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Icon name="FaEnvelope" className="w-5 h-5 text-cyan-400" />
              <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-cyan-400">{portfolioData.contact.email}</a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Icon name="FaPhone" className="w-5 h-5 text-cyan-400" />
              <span>{portfolioData.contact.phone}</span>
            </p>
          </div>

          <p className="text-slate-400 mt-8 max-w-2xl mx-auto md:mx-0">{portfolioData.summary}</p>
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Icon name="FaGithub" className="w-8 h-8" /></a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Icon name="FaLinkedin" className="w-8 h-8" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  if (!portfolioData.education || portfolioData.education.length === 0) return null;
  
  return (
    <Section title="Formação Acadêmica" id="education">
      <div className="space-y-8 max-w-4xl mx-auto">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <p className="text-sm font-semibold text-cyan-400">{edu.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">{edu.course}</h3>
            <p className="text-slate-400 font-medium">{edu.institution}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};


const SkillsSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  return (
    <Section title="Habilidades e Competências" id="skills">
      <div className="max-w-6xl mx-auto space-y-12">
        {portfolioData.skills.map(category => (
          <div key={category.title}>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map(skill => (
                <div key={skill.name} className="bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105 hover:bg-slate-700 shadow-lg">
                  <Icon name={skill.icon} className="w-12 h-12 text-cyan-400" />
                  <p className="font-semibold text-white text-center text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ProjectsSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  return (
    <Section title="Projetos de Destaque" id="projects">
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {portfolioData.projects.map(project => (
          <div key={project.title} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col md:flex-row">
            <img src={project.image} alt={project.title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-cyan-900 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex justify-end gap-4">
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Icon name="FaGithub" className="w-6 h-6" /></a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Icon name="FaExternalLinkAlt" className="w-6 h-6" /></a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ExperienceSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  return (
    <Section title="Experiência Profissional" id="experience">
      <div className="relative border-l-2 border-slate-700 pl-8 max-w-4xl mx-auto">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="mb-12">
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2.5 mt-1.5 border-4 border-slate-900"></div>
            <p className="text-sm font-semibold text-cyan-400">{exp.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
            <p className="text-slate-400 font-medium">{exp.company}</p>
            <p className="text-slate-400 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const PortfolioPage: React.FC = () => {
  const { portfolioData } = usePortfolio();
  return (
    <div className="container mx-auto px-6">
      <AboutSection />
      {portfolioData.projects.length > 0 && <ProjectsSection />}
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
};