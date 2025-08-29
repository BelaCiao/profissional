import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { Icon } from './icons';

export const ContactSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  
  // Clean phone number and create WhatsApp URL
  const cleanedPhone = portfolioData.contact.phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/55${cleanedPhone}`;

  return (
    <section id="contact" className="py-20 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Entre em Contato</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg mb-10">
          <div className="flex items-center gap-3">
            <Icon name="FaEnvelope" className="w-6 h-6 text-cyan-400" />
            <a href={`mailto:${portfolioData.contact.email}`} className="text-white hover:text-cyan-400 transition-colors">
              {portfolioData.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="FaPhone" className="w-6 h-6 text-cyan-400" />
            <span className="text-white">{portfolioData.contact.phone}</span>
          </div>
        </div>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-cyan-600 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          aria-label="Entrar em contato via WhatsApp"
        >
          <Icon name="FaWhatsapp" className="w-7 h-7" />
          Clique aqui para entrar em contato
        </a>
      </div>
    </section>
  );
};