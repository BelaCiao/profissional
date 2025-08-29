
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../hooks/usePortfolio';
import { PortfolioData } from '../types';

export const EditPage: React.FC = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PortfolioData>(portfolioData);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    setFormData(portfolioData);
  }, [portfolioData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    try {
        const parsedValue = JSON.parse(value);
        setFormData(prev => ({ ...prev, [name]: parsedValue }));
    } catch (error) {
        console.error("Invalid JSON format:", error);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');
    
    setTimeout(() => {
      updatePortfolioData(formData);
      console.log("Saving data to console (and updating live view):", formData);
      setIsSaving(false);
      setSaveMessage('Conteúdo atualizado! Redirecionando...');

      setTimeout(() => {
        setSaveMessage('');
        navigate('/');
      }, 2000);
    }, 1000);
  };
  
  const formFields = [
    { name: 'name', label: 'Nome', type: 'input' },
    { name: 'title', label: 'Título', type: 'input' },
    { name: 'avatarUrl', label: 'URL da Foto de Perfil', type: 'input' },
    { name: 'summary', label: 'Resumo Profissional', type: 'textarea' },
    { name: 'contact', label: 'Contato (JSON)', type: 'json' },
    { name: 'socials', label: 'Redes Sociais (JSON)', type: 'json' },
    { name: 'education', label: 'Formação Acadêmica (JSON)', type: 'json' },
    { name: 'experience', label: 'Experiência Profissional (JSON)', type: 'json' },
    { name: 'skills', label: 'Competências (JSON)', type: 'json' },
    { name: 'projects', label: 'Projetos (JSON)', type: 'json' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Editar Currículo</h1>
      <form onSubmit={handleSave} className="space-y-6 bg-slate-800 p-8 rounded-lg">
        {formFields.map(field => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-slate-300 mb-2">{field.label}</label>
            {field.type === 'input' && (
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={(formData[field.name as keyof PortfolioData] as string) || ''}
                onChange={handleInputChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-cyan-500 focus:border-cyan-500"
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                id={field.name}
                name={field.name}
                rows={5}
                value={(formData[field.name as keyof PortfolioData] as string) || ''}
                onChange={handleInputChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-cyan-500 focus:border-cyan-500"
              />
            )}
            {field.type === 'json' && (
              <textarea
                id={field.name}
                name={field.name}
                rows={10}
                value={JSON.stringify(formData[field.name as keyof PortfolioData], null, 2)}
                onChange={handleJsonChange}
                className="w-full bg-slate-900 border border-slate-600 rounded-md p-2 text-white font-mono text-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            )}
          </div>
        ))}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-700 disabled:bg-cyan-800 disabled:cursor-not-allowed transition-colors"
          >
            {isSaving ? 'Salvando...' : 'Salvar Alterações'}
          </button>
          {saveMessage && <p className="text-green-400">{saveMessage}</p>}
        </div>
      </form>
    </div>
  );
};