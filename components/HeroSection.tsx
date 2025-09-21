import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { Icon } from './icons';

export const HeroSection: React.FC = () => {
  const { portfolioData } = usePortfolio();

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-slate-900">
      <div className="container mx-auto px-6 py-20">
        <img 
          src={portfolioData.avatarUrl} 
          alt={portfolioData.name} 
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-cyan-500 shadow-xl mb-6"
        />
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-4">
          {portfolioData.name}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-6">
          {portfolioData.title}
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto mb-8">
          {portfolioData.summary}
        </p>
        <div className="flex justify-center items-center gap-6 mb-10">
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Icon name="FaLinkedin" className="w-9 h-9" />
          </a>
          <div className="text-slate-400" title="Competências em Cisco">
             <Icon name="SiCisco" className="w-9 h-9" />
          </div>
        </div>
        <button 
          onClick={handleScrollToContact}
          className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Entre em Contato
        </button>
      </div>
    </section>
  );
};