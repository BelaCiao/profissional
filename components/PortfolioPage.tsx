import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { EducationSection } from './EducationSection';
import { ContactSection } from './ContactSection';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
};
