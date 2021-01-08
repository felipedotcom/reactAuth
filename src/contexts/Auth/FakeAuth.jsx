import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const FakeAuth = ({ children }) => {
  const [estaAutenticado, setAutenticado] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        estaAutenticado,
        fazerLogin: () => setAutenticado(true),
        fazerLogoff: () => setAutenticado(false),
        authInfo: { accessToken: '' },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default FakeAuth;
