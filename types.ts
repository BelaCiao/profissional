
export interface Skill {
  name: string;
  icon: string; // Using string to represent icon component name from react-icons
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  course: string;
  institution: string;
  period: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  avatarUrl: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  socials: {
    linkedin: string;
    github: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}