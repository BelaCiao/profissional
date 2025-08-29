import React, { createContext, useState, ReactNode } from 'react';
import { PortfolioData } from '../types';
import { portfolioData as initialData } from '../portfolio.config';

interface PortfolioContextType {
  portfolioData: PortfolioData;
  updatePortfolioData: (newData: PortfolioData) => void;
}

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialData);

  const updatePortfolioData = (newData: PortfolioData) => {
    setPortfolioData(newData);
  };

  const value = { portfolioData, updatePortfolioData };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
