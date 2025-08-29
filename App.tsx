
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { Header } from './components/Header';
import { PortfolioPage } from './components/PortfolioPage';
import { LoginPage } from './components/LoginPage';
import { EditPage } from './components/EditPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { usePortfolio } from './hooks/usePortfolio';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <PortfolioProvider>
        <HashRouter>
          <div className="bg-slate-900 text-slate-300 min-h-screen">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<MainLayout />} />
            </Routes>
          </div>
        </HashRouter>
      </PortfolioProvider>
    </AuthProvider>
  );
};

const MainLayout: React.FC = () => {
  const { portfolioData } = usePortfolio();
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/edit" element={<EditPage />} />
          </Route>
        </Routes>
      </main>
      <footer className="text-center py-8 border-t border-slate-800 text-slate-500">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default App;