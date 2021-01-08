import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import useAuth from '../../api/usuarios';
const AuthBackend = ({ children }) => {
  const [estaAutenticado, fazerLogin, fazerLogoff, authInfo] = useAuth();
  return (
    <AuthContext.Provider
      value={{
        estaAutenticado,
        fazerLogin,
        fazerLogoff,
        authInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthBackend;
