import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../hooks/usePortfolio';

export const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { portfolioData } = usePortfolio();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-slate-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
          {portfolioData.name}
        </a>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={() => navigate('/edit')}
                className="px-4 py-2 text-sm font-semibold bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
              >
                Editar Portfólio
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
