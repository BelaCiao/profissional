import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Maicon Góis do Nascimento",
  title: "Profissional de Operações de Rede (NOC)",
  summary: "Profissional de Redes e Infraestrutura com experiência em operações de campo, manutenção de POPs e data centers. Atualmente em transição para a área de Monitoramento de Redes (NOC), com conhecimento em Zabbix, Grafana e estudos para a certificação CCNA. Perfil analítico, focado e com grande capacidade de aprendizado.",
  avatarUrl: "https://placehold.co/160x160/06b6d4/FFFFFF/png?text=MG",
  contact: {
    phone: "(53) 9 9933-5369",
    email: "maicongois@gmail.com",
    location: "Brasil",
  },
  // FIX: Add missing 'github' property to the 'socials' object
  socials: {
    linkedin: "https://www.linkedin.com/in/maicongois/",
    github: "https://github.com/maicongois"
  },
  skills: [
    {
      title: "Monitoramento e Operações (NOC)",
      skills: [
        { name: "Zabbix", icon: "FaChartLine" },
        { name: "Grafana", icon: "SiGrafana" },
        { name: "Netcool", icon: "FaBroadcastTower" },
        { name: "Gestão de Incidentes (ITSM)", icon: "FaExclamationTriangle" },
        { name: "Análise de Alarmes", icon: "FaBell" },
      ],
    },
    {
      title: "Redes e Roteamento",
      skills: [
        { name: "TCP/IP", icon: "FaNetworkWired" },
        { name: "Switching (VLANs, STP)", icon: "FaEthernet" },
        { name: "Roteamento (Estático, OSPF)", icon: "FaRoute" },
        { name: "CCNA (em formação)", icon: "FaCertificate" },
      ],
    },
    {
      title: "Infraestrutura e Hardware",
      skills: [
        { name: "Roteadores Mikrotik", icon: "FaRoute" },
        { name: "Switches Huawei", icon: "FaServer" },
        { name: "DWDM", icon: "FaWaveSquare" },
        { name: "Fibra Óptica (OTDR)", icon: "FaSignal" },
        { name: "Infra de POPs", icon: "FaBuilding" },
      ],
    },
    {
      title: "Sistemas e Ferramentas",
      skills: [
        { name: "Linux", icon: "FaLinux" },
        { name: "ERP Voalle", icon: "FaFileInvoice" },
        { name: "SZ.chat", icon: "FaComment" },
        { name: "Shell Script (básico)", icon: "FaTerminal" },
      ],
    },
  ],
  projects: [],
  education: [],
  experience: [
     {
      role: "Analista de NOC / Monitoramento",
      company: "Brasil Tecpar - Àvato",
      period: "03/2024 - Atualmente",
      description: "Atualmente no time de Monitoramento (NOC), aplico minha experiência para analisar alarmes (Zabbix), gerenciar incidentes (Voalle) e garantir a alta disponibilidade da rede, com o objetivo de evoluir para Nível 2.",
    },
    {
      role: "Técnico de Infraestrutura de Campo",
      company: "Brasil Tecpar - Àvato",
      period: "09/2023 - 03/2024",
      description: "Ganhei experiência com infraestrutura de grande porte: manutenção de POPs, configuração de DWDM, switches Huawei L3, fusões ópticas e ativação de clientes corporativos.",
    },
    {
      role: "Técnico de Infraestrutura de Redes",
      company: "OsirNet",
      period: "06/2023 - 09/2023",
      description: "Foquei na infraestrutura de redes, realizando atendimento a clientes corporativos e manutenção de equipamentos, com foco na recuperação de sites e na estabilidade do backbone.",
    },
    {
      role: "Técnico de Redes",
      company: "VictoriaNet",
      period: "01/2021 - 06/2023",
      description: "Minha primeira experiência prática em um provedor, atuando em campo e no suporte interno. Aprendi a configurar roteadores Mikrotik e dei os primeiros passos no monitoramento de redes (N1/N2).",
    },
  ],
};