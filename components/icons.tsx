import React from 'react';
import { 
  FaReact, FaDocker, FaGithub, FaLinkedin, FaExternalLinkAlt, FaLock, 
  FaNetworkWired, FaRoute, FaSatelliteDish, FaShieldAlt, FaLanguage, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaChartLine, FaProjectDiagram, 
  FaCloud, FaCogs, FaAws, FaServer, FaPlug, FaBolt, FaHtml5, FaLinux, FaWhatsapp,
  FaBroadcastTower, FaExclamationTriangle, FaBell, FaEthernet, FaCertificate,
  FaWaveSquare, FaBuilding, FaTerminal, FaFileInvoice, FaComment, FaSignal
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiVercel, SiGooglegemini, SiSupabase, 
  SiPostgresql, SiNodedotjs, SiNextdotjs, SiVite, SiJavascript, SiFirebase,
  SiGrafana, SiCisco
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
  FaWhatsapp,
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
  // New icons for NOC profile
  SiGrafana,
  FaBroadcastTower,
  FaExclamationTriangle,
  FaBell,
  FaEthernet,
  FaCertificate,
  FaWaveSquare,
  FaBuilding,
  FaTerminal,
  FaFileInvoice,
  FaComment,
  FaSignal,
  SiCisco
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