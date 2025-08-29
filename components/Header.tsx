import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
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

  // WhatsApp number from portfolio.config.ts: (53) 9 9933-5369
  // Cleaned for URL: 5553999335369
  const whatsappUrl = "https://wa.me/5553999335369";

  return (
    <header className="bg-slate-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
        >
          Maicon Góis | Portfólio Digital
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