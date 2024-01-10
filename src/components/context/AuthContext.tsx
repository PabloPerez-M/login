import React, { ReactNode, createContext, useContext, useState } from 'react';

interface iUser {
  username: string;
  password: string;
}

interface iAuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  users: iUser[];
  loginError: string | null;
}

const AuthContext = createContext<iAuthContextProps | undefined>(undefined);

interface iChildren {
  children: ReactNode;
}

export const AuthProvider: React.FC<iChildren> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [users, setUsers] = useState<iUser[]>(() => {

  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [];

});

  const login = (username: string, password: string) => {
    const existingUser = users.find((user) => user.username === username)

    if (existingUser) {
      if (existingUser.password === password) {
        setAuthenticated(true);
        setLoginError(null);
      } else {
        setAuthenticated(false);
        setLoginError("Contraseña incorrecta");
      }
    } else {
      setAuthenticated(false);
      setLoginError("Usuario no encontrado. Por favor registrate");
    }
  };

  const value: iAuthContextProps = {
    isAuthenticated,
    loginError,
    login,
    users
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro AuthProvider');
  }
  return context;
};
