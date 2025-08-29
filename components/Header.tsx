import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePortfolio } from '../hooks/usePortfolio';

export const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { portfolioData } = usePortfolio();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const scrollToSection = (id: string) => {
    // If we're not on the homepage, navigate there first.
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and render before scrolling.
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'experience', label: 'Experiência' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header className="bg-slate-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" onClick={() => scrollToSection('hero')} className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
          {portfolioData.name}
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
             <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={() => navigate('/edit')}
                className="px-4 py-2 text-sm font-semibold bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
              >
                Editar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-sm font-semibold bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
