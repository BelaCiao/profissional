import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Maicon Góis do Nascimento",
  title: "Arquiteto de Soluções & Gestor de Projetos de TI",
  summary: "Profissional de tecnologia com mais de 7 anos de experiência, em transição de uma sólida carreira em infraestrutura de redes para Arquitetura de Soluções em Nuvem e Desenvolvimento de SaaS. Possuo uma visão 360° que conecta a infraestrutura física (redes, servidores) à camada de aplicação (software, APIs, IA), permitindo-me projetar e construir soluções digitais completas, seguras e escaláveis. Busco oportunidades para aplicar minha capacidade de transformar desafios de negócio em produtos tecnológicos de alto impacto.",
  avatarUrl: "https://avatar.iran.liara.run/public/boy?username=maicon",
  contact: {
    phone: "(53) 9 9933-5369",
    email: "maicongn@hotmail.com",
    location: "Rio Grande-RS, Brasil",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/maicongois/",
    github: "https://github.com/maicongois",
  },
  skills: [
    {
      title: "Cloud & Arquitetura",
      skills: [
        { name: "Arquitetura de Soluções", icon: "FaProjectDiagram" },
        { name: "Cloud Computing", icon: "FaCloud" },
        { name: "Desenvolvimento SaaS", icon: "FaCogs" },
        { name: "AWS (em estudo)", icon: "FaAws" },
        { name: "Vercel", icon: "SiVercel" },
        { name: "Render", icon: "FaServer" },
        { name: "Supabase", icon: "SiSupabase" },
      ],
    },
    {
      title: "Desenvolvimento & Backend",
      skills: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "APIs RESTful", icon: "FaPlug" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "Integração de APIs", icon: "FaBolt" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "Firebase", icon: "SiFirebase" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "FaReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "Vite", icon: "SiVite" },
        { name: "HTML5 & CSS3", icon: "FaHtml5" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
      ],
    },
    {
      title: "Redes & Infraestrutura",
      skills: [
        { name: "Equipamentos Mikrotik/Huawei", icon: "FaRoute" },
        { name: "Protocolos TCP/IP", icon: "FaNetworkWired" },
        { name: "Monitoramento (Zabbix)", icon: "FaChartLine" },
        { name: "Segurança de Redes", icon: "FaShieldAlt" },
        { name: "Servidores Linux", icon: "FaLinux" },
      ],
    },
  ],
  projects: [
    {
      title: "LIA IA - SaaS de CRM com Inteligência Artificial",
      description: "Idealizei e desenvolvi um SaaS completo para otimizar a conversão de leads de clínicas, utilizando automação com IA. Fui responsável pelo design da arquitetura, desenvolvimento full stack, implementação de segurança e criação de prompts para a IA.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["SaaS", "IA", "Next.js", "Node.js", "Supabase", "Vercel", "Render", "Arquitetura"],
      repoUrl: "https://github.com/maicongois/lia-ia-saas",
    }
  ],
  education: [
     {
      course: "Graduação em Gestão da Tecnologia da Informação",
      institution: "Anhanguera",
      period: "Conclusão prevista: 12/2025",
    },
    {
      course: "Pós-Graduação em Engenharia de Redes e Telecomunicações",
      institution: "Anhanguera",
      period: "Conclusão prevista: 04/2026",
    },
  ],
  experience: [
    {
      role: "Técnico Assistente de Infraestrutura de Redes",
      company: "Brasil Tecpar - Àvato",
      period: "09/2023 - Atualmente",
      description: "Participo de instalações e manutenções em redes de backbone, sites e data centers. Atuo em projetos de instalação em torres de transmissão e em clientes corporativos de telecomunicações. Suporte na execução de GMUDs.",
    },
    {
      role: "Técnico de Infraestrutura de Redes",
      company: "OsirNet",
      period: "06/2023 - 09/2023",
      description: "Atendi demandas técnicas de clientes corporativos e mantive a infraestrutura física de redes. Realizei atividades técnicas de recuperação de sites e trechos de backbone em falha.",
    },
    {
      role: "Técnico de Redes",
      company: "VictoriaNet",
      period: "01/2021 - 06/2023",
      description: "Atuei em campo com suporte a clientes e manutenção da rede externa. Administrei e configurei filas (Queues) no Mikrotik para controle de banda. Trabalhei com atribuição e gerenciamento de endereçamento IP. Apoio ao monitoramento da rede e resolução de incidentes lógicos, atuando (N1 e N2).",
    },
  ],
};