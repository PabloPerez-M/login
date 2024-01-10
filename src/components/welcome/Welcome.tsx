import React from 'react';
import { useAuth } from '../context/AuthContext';

const WelcomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Bienvenido</h2>
          <p>Iniciaste sesion!</p>
        </div>
      ) : (
        <p>Por favor inicia sesion.</p>
      )}
    </div>
  );
};

export default WelcomePage;