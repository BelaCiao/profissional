
import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In a real app, these would come from environment variables.
const MOCK_USER = 'maicongn';
const MOCK_PASS = 'Bializgn@301192';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (user: string, pass: string): Promise<boolean> => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (user === MOCK_USER && pass === MOCK_PASS) {
          setIsAuthenticated(true);
          resolve(true);
        } else {
          setIsAuthenticated(false);
          resolve(false);
        }
      }, 500); // Simulate network delay
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
