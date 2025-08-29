import React from 'react';
import { 
  FaReact, FaDocker, FaGithub, FaLinkedin, FaExternalLinkAlt, FaLock, 
  FaNetworkWired, FaRoute, FaSatelliteDish, FaShieldAlt, FaLanguage, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaChartLine, FaProjectDiagram, 
  FaCloud, FaCogs, FaAws, FaServer, FaPlug, FaBolt, FaHtml5, FaLinux
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiVercel, SiGooglegemini, SiSupabase, 
  SiPostgresql, SiNodedotjs, SiNextdotjs, SiVite, SiJavascript, SiFirebase 
} from 'react-icons/si';

const iconMap: { [key: string]: React.ElementType } = {
  FaReact,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaLock,
  FaNetworkWired,
  FaRoute,
  FaSatelliteDish,
  FaShieldAlt,
  FaLanguage,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChartLine,
  FaProjectDiagram,
  FaCloud,
  FaCogs,
  FaAws,
  FaServer,
  FaPlug,
  FaBolt,
  FaHtml5,
  FaLinux,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiGooglegemini,
  SiSupabase,
  SiPostgresql,
  SiNodedotjs,
  SiNextdotjs,
  SiVite,
  SiJavascript,
  SiFirebase,
};

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null; // Or return a default icon
  return <IconComponent className={className} />;
};